CREATE TABLE sessions (
	id SERIAL PRIMARY KEY,
  token uuid DEFAULT gen_random_uuid(),
  user_id INTEGER REFERENCES users(id)
);
