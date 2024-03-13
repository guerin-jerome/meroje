# 🖥️ Le micro-service/partie server de Meroje

## 🔎 Liste des endpoints exposés par ce MS

| Endpoint documentation                                                                                                   | Verbe  | Description                                    |
| ------------------------------------------------------------------------------------------------------------------------ | ------ | ---------------------------------------------- |
| <a href="/server/documentation/budgets/endpoint-budgets-read.md">/api/v1/budgets/{userId}</a>                            | GET    | Récupération des budgets d'un utilisateur      |
| <a href="/server/documentation/budgets/endpoint-budgets-create.md">/api/v1/budgets</a>                                   | POST   | Création d'un budget                           |
| <a href="/server/documentation/budgets/endpoint-budgets-remove.md">/api/v1/budgets/{budgetId}</a>                        | DELETE | Suppression d'un budget                        |
| <a href="/server/documentation/budgets/endpoint-budgets-edit.md">/api/v1/budgets/{budgetId}</a>                          | PATCH  | Mise à jour de la valeur courante d'un budget  |
| <a href="/server/documentation/budgets/endpoint-budgets-reset.md">/api/v1/budgets/{budgetId}/reset</a>                   | PATCH  | Remise à zéro d'un budget                      |
| <a href="/server/documentation/transactions/endpoint-transactions-user-history.md">/api/v1/transactions/{userId}</a>     | GET    | Récupération des transactions d'un utilisateur |
| <a href="/server/documentation/transactions/endpoint-transactions-budget-history.md">/api/v1/transactions/{budgetId}</a> | GET    | Récupération des transactions d'un budget      |
| <a href="/server/documentation/users/endpoint-users-register.md">/api/v1/users/register</a>                              | POST   | Inscription d'un utilisateur                   |
| <a href="/server/documentation/users/endpoint-users-login.md">/api/v1/users/login</a>                                    | POST   | Connexion d'un utilisateur                     |
| <a href="/server/documentation/users/endpoint-users-logout.md">/api/v1/users/{userId}</a>                                | DELETE | Déconnexion d'un utilisateur                   |
| <a href="/server/documentation/users/endpoint-users-edit.md">/api/v1/users/{userId}</a>                                  | PATCH  | Mise à jour des données utilisateur            |
| <a href="/server/documentation/users/endpoint-users-change-password.md">/api/v1/users/{userId}/change-password</a>       | PATCH  | Changer le mot de passe de l'utilisateur       |
| <a href="/server/documentation/endpoint-health.md">/api/v1/health</a>                                                    | GET    | Récupérer l'état du serveur                    |
| <a href="/server/documentation/endpoint-version.md">/api/v1/version</a>                                                  | GET    | Récupérer la version du serveur                |

## ✏️ Conventions

Document de base :

- https://www.pythoniste.fr/python/fastapi/les-bonnes-pratiques-pour-construire-un-api-rest/

## 🛢️ Base de données

Lien vers la description de la base de données et de ces tables inhérantes :

- <a href="/server/documentation/database.md">Fichier de description</a>

## 👨🏻‍💻 Développement