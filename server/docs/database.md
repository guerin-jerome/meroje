# Base de données de Meroje

## Schéma de la base de données

## Table "user"

| colonne     | type    | contrainte(s)    |
| ----------- | ------- | ---------------- |
| id          | integer | unique, PK       |
| username    | string  | unique, required |
| email       | string  | unique, required |
| firstname   | string  | required         |
| name        | string  | required         |
| pass        | string  | required         |
| birthdate   | date    | required         |
| created_at  | date    | required         |
| is_admin    | boolean | default = false  |
| phone       | string  |                  |
| country     | string  |                  |
| token       | string  |                  |
| modified_at | date    |                  |

## Table "budget"

| colonne       | type    | contrainte(s)   |
| ------------- | ------- | --------------- |
| id            | integer | unique, PK      |
| user_id       | integer | FK              |
| name          | string  | required        |
| value         | number  | required        |
| created_at    | date    | required        |
| is_saving     | boolean | default = false |
| is_account    | boolean | default = false |
| is_investment | boolean | default = false |
| is_fixed      | boolean | default = false |
| current       | number  |                 |
| modified_at   | date    |                 |

## Table "transaction"

| colonne     | type    | contrainte(s) |
| ----------- | ------- | ------------- |
| id          | integer | unique, PK    |
| budget_id   | integer | FK            |
| user_id     | integer | FK            |
| amount      | number  | required      |
| date        | date    | required      |
| description | string  |               |
| modified_at | date    |               |
