# 🖥️ Le micro-service/partie server de Meroje

## 🔎 Liste des endpoints exposés par ce MS

| Endpoint documentation                                                                                                | Verbe  | Description                                    |
| --------------------------------------------------------------------------------------------------------------------- | ------ | ---------------------------------------------- |
| <a href="/server/docs/budgets/endpoint-budgets-read.md">/api/v1/budgets/{accountId}</a>                               | GET    | Récupération des budgets d'un utilisateur      |
| <a href="/server/docs/budgets/endpoint-budgets-create.md">/api/v1/budgets</a>                                         | POST   | Création d'un budget                           |
| <a href="/server/docs/budgets/endpoint-budgets-remove.md">/api/v1/budgets/{budgetId}</a>                              | DELETE | Suppression d'un budget                        |
| <a href="/server/docs/budgets/endpoint-budgets-edit.md">/api/v1/budgets/{budgetId}</a>                                | PATCH  | Mise à jour de la valeur courante d'un budget  |
| <a href="/server/docs/budgets/endpoint-budgets-reset.md">/api/v1/budgets/{budgetId}/reset</a>                         | PATCH  | Remise à zéro d'un budget                      |
| <a href="/server/docs/transactions/endpoint-transactions-account-history.md">/api/v1/transactions/{accountId}</a>     | GET    | Récupération des transactions d'un utilisateur |
| <a href="/server/docs/transactions/endpoint-transactions-budget-history.md">/api/v1/transactions/{budgetId}</a>       | GET    | Récupération des transactions d'un budget      |
| <a href="/server/docs/accounts/endpoint-account-register.md">/api/v1/account/register</a>                             | POST   | Inscription d'un utilisateur                   |
| <a href="/server/docs/accounts/endpoint-account-login.md">/api/v1/account/login</a>                                   | POST   | Connexion d'un utilisateur                     |
| <a href="/server/docs/accounts/endpoint-accounts-logout.md">/api/v1/accounts/{accountId}</a>                          | DELETE | Déconnexion d'un utilisateur                   |
| <a href="/server/docs/accounts/endpoint-accounts-edit.md">/api/v1/accounts/{accountId}</a>                            | PATCH  | Mise à jour des données utilisateur            |
| <a href="/server/docs/accounts/endpoint-accounts-change-password.md">/api/v1/accounts/{accountId}/change-password</a> | PATCH  | Changer le mot de passe de l'utilisateur       |
| <a href="/server/docs/endpoint-health.md">/api/v1/health</a>                                                          | GET    | Récupérer l'état du serveur                    |
| <a href="/server/docs/endpoint-version.md">/api/v1/version</a>                                                        | GET    | Récupérer la version du serveur                |

## ✏️ Conventions

Document de base :

- https://www.pythoniste.fr/python/fastapi/les-bonnes-pratiques-pour-construire-un-api-rest/

## 🛢️ Base de données

Lien vers la description de la base de données et de ces tables inhérantes :

- <a href="/server/docs/database/database.md">Fichier de description</a>

## 👨🏻‍💻 Développement
