-- DROP DATABASE IF EXISTS travel_blog;
-- CREATE DATABASE travel_blog;

-- \c travel_blog

DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS destinations;


CREATE TABLE destinations (
  id SERIAL PRIMARY KEY,
  city TEXT,
  country TEXT,
  continent TEXT
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  article TEXT,
  image VARCHAR(255),
  destinations_id INTEGER REFERENCES destinations(id)
);

