DROP DATABASE IF EXISTS bike_world_db;
CREATE DATABASE bike_world_db;
USE bike_world_db;

-- Tabla Bicicleta
CREATE TABLE bikes (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    id_brand INT NOT NULL,
    id_size INT NOT NULL,
    id_color INT NOT NULL,
    image INT NOT NULL,
    PRIMARY KEY (id)
); 

-- Tabla Marca
CREATE TABLE brands (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
); 

-- Tabla Tamaño
CREATE TABLE sizes (
    id INT NOT NULL AUTO_INCREMENT,
    size VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

-- Tabla Color
CREATE TABLE colors (
    id INT NOT NULL AUTO_INCREMENT,
    color VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE categories (
    id INT NOT NULL AUTO_INCREMENT,
    category VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

-- Tabla Usuario
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL, 
    last_name VARCHAR(255) NOT NULL, 
    email VARCHAR(255) NOT NULL, 
    birthday VARCHAR(255) NOT NULL, 
    phone VARCHAR(255) NOT NULL, 
    password VARCHAR(255) NOT NULL, 
    avatar varchar(200) DEFAULT NULL, 
    address varchar(200) DEFAULT NULL,
    PRIMARY KEY (id)
);

-- Tabla Carrito
CREATE TABLE cart (
    id INT NOT NULL AUTO_INCREMENT,
    id_bike INT NOT NULL,
    id_user INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_bike) REFERENCES bikes (id),
    FOREIGN KEY (id_user) REFERENCES users (id)
); 

