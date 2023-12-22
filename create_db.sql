CREATE DATABASE finalProject;
USE finalProject;
DROP USER if exists 'appuser'@'localhost';
CREATE USER 'appuser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'qwerty';
GRANT ALL PRIVILEGES ON finalProject.* TO 'appuser'@'localhost';
CREATE TABLE userdetails (username VARCHAR(50), first_name VARCHAR(50) NOT NULL, last_name VARCHAR(50) NOT NULL, email VARCHAR(100) NOT NULL, hashedPassword VARCHAR(255) NOT NULL, PRIMARY KEY (username));
SELECT * FROM userdetails;