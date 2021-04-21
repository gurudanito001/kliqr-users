CREATE DATABASE kliqr_users;

--\c into kliqr_users

CREATE TABLE users(
    id INTEGER PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    avatar VARCHAR,
    created_at VARCHAR
);

COPY users(id, first_name, last_name, avatar, created_at)
FROM 'C:\Users\danielnwokocha\Desktop\Projects\kliqr_users.csv'
DELIMITER ','
CSV HEADER;