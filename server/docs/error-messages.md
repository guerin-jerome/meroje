# Les logs applicatifs

## Messages d'erreurs

| Code message | Message                                                                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| E01          | E01 - /api/v1/authentication/register, erreur données d'entrées invalides lors de l'inscription.                                      |
| E02          | E02 - /api/v1/authentication/register, l'encryptage du mot de passe a échoué pour l'utilisateur: {} avec l'email.                     |
| E03          | E03 - /api/v1/authentication/register, la création du compte en base de données à échoué pour l'utilisateur: {} avec l'email: {}.     |
| E04          | E04 - /api/v1/authentication/register, la création de la session en base de données à échoué pour l'utilisateur: {} avec l'email: {}. |

## Messages d'avertissements

| Code message | Message                                                                      |
| ------------ | ---------------------------------------------------------------------------- |
| W01          | W01 - /api/v1/authentication/register, l'email: {} existe déjà.              |
| W02          | W02 - /api/v1/authentication/register, le nom d'utilisateur: {} existe déjà. |
| W03          | W03 - /api/v1/authentication/register, la personne n'est pas majeur.         |
