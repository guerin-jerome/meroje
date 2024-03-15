CREATE TABLE sessions (
	id SERIAL PRIMARY KEY,
  token uuid DEFAULT gen_random_uuid(),
  account_id INTEGER REFERENCES accounts(id)
);
