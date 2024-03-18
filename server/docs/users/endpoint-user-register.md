# /api/v1/user/register

## Description générale

Le but de cet endpoint est de permettre à l'utilisateur de se créer un compte et de s'authentifier pour accéder à l'application.

### Diagramme de séquence

<img src="/server/docs/ressources/endpoint-user-register-diagram.png" />

## Entrée

| Nom       | Type   | Requis |
| --------- | ------ | ------ |
| username  | string | x      |
| email     | string | x      |
| firstname | string | x      |
| name      | string | x      |
| pass      | string | x      |
| birthdate | date   | x      |
| phone     | string |        |
| country   | string |        |

## Sortie

| Nom          | Type          | Requis |
| ------------ | ------------- | ------ |
| isSuccessful | boolean       | x      |
| reasons      | array(Reason) |        |

**Reason :**

| Nom     | Type   | Requis |
| ------- | ------ | ------ |
| code    | string | x      |
| message | string | x      |

### Exemple de réponse

```json
{
  "isSuccessful": false,
  "reasons": [
    {
      "code": "VD01username",
      "message": "Username already exists, please log in."
    },
    {
      "code": "VD01bithdate",
      "message": "You're not an adult, you can't register."
    }
  ]
}
```

## Ressources BDD

Lien vers le fichier de description de la base de données :

- <a href="/server/docs/database/database.md">Base de données</a>

Les ressources sur lesquelles cet endpoint agit sont celles de la table `users` et `sessions`.

## Règles et mapping

### Règle `check-data-01`

Vérification sur la structure des données.

Une erreur 400 est renvoyée et le message d'erreur <a href="/server/docs/error-messages.md">E01</a> est loggé si :

- les données ne sont pas conformes à la structure d'entrée (champs requis)
- la longueur des chaînes d'`username`, `firstname` et `name` font plus de 32 caractères
- la longueur de chaîne de l'`email` fait plus de 320 caractères
- la longueur de chaîne de `pass` fait plus de 200 caractères
- la longueur de chaîne de `phone` fait plus de 20 caractères
- la longueur de chaîne de `country` fait plus de 150 caractères
- l'attribut `birthdate` n'est pas convertible en date

Sinon le traitement continue.

### Récupération d'informations `parallel-call-01`

Lancement de deux requêtes parallèle pour vérifier en base l'unicité de l'email et du nom d'utilisateur saisie en entrée de l'endpoint.

### Règle `valid-data-01`

Si la requête sur l'email remonte une réponse alors :

- L'attribut `isSuccessful` sera valorisé à `false`
- L'attribut `reasons` ajoutera un `Reason(code="VD01email", message="Email already exists, please log in.")`

Le message d'avertissement <a href="/server/docs/error-messages.md">W01</a> est loggé.

Si la requête sur le nom d'utilisateur remonte une réponse alors :

- L'attribut `isSuccessful` sera valorisé à `false`
- L'attribut `reasons` ajoutera un `Reason(code="VD01username", message="Username already exists, please log in.")`

Le message d'avertissement <a href="/server/docs/error-messages.md">W02</a> est loggé.

Si la date de naissance équivaut à une personne mineure, alors :

- L'attribut `isSuccessful` sera valorisé à `false`
- L'attribut `reasons` ajoutera un `Reason(code="VD01bithdate", message="You're not an adult, you can't register.")`

Le message d'avertissement <a href="/server/docs/error-messages.md">W03</a> est loggé.

À ce stade, si `isSuccessful` est valorisé à `false` alors le traitement s'arrête et renvoie la réponse tel quel, sinon le traitement continue.

### Cryptage du mot de passe `password-encryption-01`

Cryptage du mot de passe avec les trois paramètres suivant :

- saltRound: `10`
- salt: `username` en entrée + `-{secretSalt}` contenu dans les secrets envs
- plainTextPassword

Si l'opération échoue alors une erreur 500 est renvoyée et le message d'erreur <a href="/server/docs/error-messages.md">E02</a> est loggé.

Sinon le traitement continue.

### Construction du compte `build-entity-01`

Tableau de construction du compte utilisateur :

| Attribut de l'entité | Valeur    | Source                                      |
| -------------------- | --------- | ------------------------------------------- |
| username             | username  | En entrée de l'endpoint (1.)                |
| email                | email     | 1.                                          |
| firstname            | firstname | 1.                                          |
| name                 | name      | 1.                                          |
| birthdate            | birthdate | 1.                                          |
| phone                | phone     | 1.                                          |
| country              | country   | 1.                                          |
| pass                 | hash      | Valeur de cryptage `password-encryption-01` |

### Création du compte `create-entity-01`

Création du compte en base de données en retournant l'id unique du compte.

Si l'opération échoue alors une erreur 500 est renvoyée et le message d'erreur <a href="/server/docs/error-messages.md">E03</a> est loggé.

Sinon le traitement continue.

### Construction d'une session `build-entity-02`

Tableau de construction d'une session :

| Attribut de l'entité | Valeur | Source                     |
| -------------------- | ------ | -------------------------- |
| user_id              | email  | `id` de `create-entity-01` |

### Création de la session `create-entity-02`

Création d'une session en base de données.

Si l'opération échoue alors une erreur 500 est renvoyée et le message d'erreur <a href="/server/docs/error-messages.md">E04</a> est loggé.

Sinon le traitement continue.

### Retour de l'endpoint avec succès `success-response-01`

Mettre le token créé lors de `build-entity-02` en cookie de réponse et renvoyer le JSON suivant :

```json
{
  "isSuccessful": true
}
```

## Codes HTTP

| Code | Explication                    |
| ---- | ------------------------------ |
| 200  | Réponse avec succès            |
| 400  | Entrée utilisateur invalide    |
| 500  | Soucis externe à l'application |
