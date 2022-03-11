DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER NOT NULL
);

INSERT INTO users(name, age) VALUES ('Isaias', 26);
INSERT INTO users(name, age) VALUES ('Michelle', 41);
INSERT INTO users(name, age) VALUES ('Lok', 29);
