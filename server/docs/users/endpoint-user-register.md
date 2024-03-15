# /api/v1/user/register

## Description générale

Le but de cet endpoint est de permettre à l'utilisateur de se créer un compte et de s'authentifier pour accéder à l'application.

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
| token        | string        |        |
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
  "reason": [
    "Username already exists.",
    "You're not an adult, you can't register."
  ]
}
```

## Ressources BDD

Lien vers le fichier de description de la base de données :

- <a href="/server/documentation/database.md">Base de données</a>

La ressource sur laquelle cet endpoint agit est celle de la table `user`.

## Règles et mapping

### Règle `check-data-01`

Vérification sur la structure des données.

Si les données ne sont pas conformes à la structure d'entrée (cf. <a href="#Entrée">Entrée</a>) alors une erreur 400 est renvoyée et le message d'erreur <a href="/server/documentation/error-messages.md">E01</a> est loggé.

### Récupération d'informations `parallel-call-01`

Lancement de deux requêtes parallèle pour vérifier en base l'unicité de l'email et du nom d'utilisateur saisie en entrée de l'endpoint.

### Règle `valid-data-01`

Si la requête sur l'email remonte une réponse alors :

- L'attribut `isSuccessful` sera valorisé à `false`
- L'attribut `reasons` ajoutera un `Reason(code="VD01email", message="Email already exists, please log in.")`

Le message d'avertissement <a href="/server/documentation/error-messages.md">W01</a> est loggé.

Si la requête sur le nom d'utilisateur remonte une réponse alors :

- L'attribut `isSuccessful` sera valorisé à `false`
- L'attribut `reasons` ajoutera un `Reason(code="VD01username", message="Username already exists, please log in.")`

Le message d'avertissement <a href="/server/documentation/error-messages.md">W02</a> est loggé.

Si la date de naissance équivaut à une personne mineure, alors :

- L'attribut `isSuccessful` sera valorisé à `false`
- L'attribut `reasons` ajoutera un `Reason(code="VD01bithdate", message="You're not an adult, you can't register.")`

Le message d'avertissement <a href="/server/documentation/error-messages.md">W03</a> est loggé.

À ce stade, si `isSuccessful` est valorisé à `false` alors le traitement s'arrête et renvoie la réponse tel quel, sinon le traitement continue.

### Cryptage du mot de passe `password-encryption-01`

Cryptage du mot de passe avec les trois paramètres suivant :

- saltRound: `10`
- salt: `username` en entrée + `-{secretSalt}` contenu dans les secrets envs
- plainTextPassword

Si l'opération échoue alors une erreur 500 est renvoyée et le message d'erreur <a href="/server/documentation/error-messages.md">E02</a> est loggé.

Sinon le traitement continue.

### Création du token `create-token-01`

Création d'un token et requête pour vérifier l'unicité, répéter jusqu'à l'unicité.

### Construction de l'entité `build-entity-01`

Tableau de construction de l'entité :

| Attribut de l'entité | Valeur       | Source                                      |
| -------------------- | ------------ | ------------------------------------------- |
| username             | username     | En entrée de l'endpoint (1.)                |
| email                | email        | 1.                                          |
| firstname            | firstname    | 1.                                          |
| name                 | name         | 1.                                          |
| birthdate            | birthdate    | 1.                                          |
| phone                | phone        | 1.                                          |
| country              | country      | 1.                                          |
| pass                 | hash         | Valeur de cryptage `password-encryption-01` |
| token                | token        | Valeur de création `create-token-01`        |
| created_at           | date du jour |                                             |
| is_admin             | false        |                                             |

### Création de l'entité `create-entity-01`

Création de l'entité en base de données.

Si l'opération échoue alors une erreur 500 est renvoyée et le message d'erreur <a href="/server/documentation/error-messages.md">E03</a> est loggé.

Sinon le traitement continue.

### Retour de l'endpoint avec succès `success-response-01`

Renvoyer la réponse suivante :

```json
{
  "isSuccessful": true,
  "token": "7WK5T79u5mIzjIXXi2oI9Fglmgivv7RAJ7izyj9tUyQ" // Token créé auparavant
}
```

## Codes HTTP

| Code | Explication                    |
| ---- | ------------------------------ |
| 200  | Réponse avec succès            |
| 400  | Entrée utilisateur invalide    |
| 500  | Soucis externe à l'application |
