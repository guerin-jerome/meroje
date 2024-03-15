# Base de données de Meroje

## Schéma de la base de données

## Table "account"

| colonne     | type         | contrainte(s)             |
| ----------- | ------------ | ------------------------- |
| id          | serial       | PK                        |
| username    | varchar(32)  | unique, not null          |
| email       | varchar(320) | unique, not null          |
| firstname   | varchar(32)  | not null                  |
| name        | varchar(32)  | not null                  |
| pass        | varchar(200) | not null                  |
| birthdate   | date         | not null                  |
| created_at  | timestamp    | not null, default = now() |
| is_admin    | boolean      | not null, default = false |
| phone       | varchar(20)  |                           |
| country     | varchar(150) |                           |
| token       | varchar(200) |                           |
| modified_at | timestamp    |                           |

## Table "budget"

| colonne       | type        | contrainte(s)   |
| ------------- | ----------- | --------------- |
| id            | integer     | PK              |
| account_id    | integer     | FK              |
| name          | varchar(32) | not null        |
| value         | float       | not null        |
| created_at    | timestamp   | not null        |
| is_saving     | boolean     | default = false |
| is_account    | boolean     | default = false |
| is_investment | boolean     | default = false |
| is_fixed      | boolean     | default = false |
| current       | float       |                 |
| modified_at   | timestamp   |                 |

## Table "transaction"

| colonne     | type         | contrainte(s) |
| ----------- | ------------ | ------------- |
| id          | integer      | PK            |
| budget_id   | integer      | FK            |
| account_id  | integer      | FK            |
| amount      | float        | not null      |
| date        | date         | not null      |
| description | varchar(200) |               |
| modified_at | timestamp    |               |
