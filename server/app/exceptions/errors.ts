export const errors = {
  E01: "E01 - /api/v1/user/register, erreur données d'entrées invalides lors de l'inscription.",
  E02: "E02 - /api/v1/user/register, l'encryptage du mot de passe a échoué pour l'utilisateur: %s avec l'email.",
  E03: "E03 - /api/v1/user/register, la création du compte en base de données à échoué pour l'utilisateur: %s avec l'email: %s.",
  E04: "E04 - /api/v1/user/register, la création de la session en base de données à échoué pour l'utilisateur: %s avec l'email: %s.",
}

export const warnings = {
  W01: "W01 - /api/v1/user/register, l'email: %s existe déjà.",
  W02: "W02 - /api/v1/user/register, le nom d'utilisateur: %s existe déjà.",
  W03: "W03 - /api/v1/user/register, la personne n'est pas majeur.",
}
