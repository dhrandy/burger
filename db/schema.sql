### Schema
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

-- initital burgers
INSERT INTO burgers (burger_name) VALUES ('Big Mac');
INSERT INTO burgers (burger_name) VALUES ('Double Beef');
INSERT INTO burgers (burger_name) VALUES ('Plain Cheese Burger');

