-- Bootstrap SQL script to create initial tables.
-- Create category table.
CREATE TABLE IF NOT EXISTS category (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

-- Insert initial categories.
INSERT INTO category (name, description) 
VALUES ('Reposteria salada', 'Productos como croissants y empanadas');

INSERT INTO category (name, description) 
VALUES ('Reposteria dulce', 'Productos como crocantes, pie y tres leches');

INSERT INTO category (name, description) 
VALUES ('Sandwich', 'Productos como sandwiches y beagels');

INSERT INTO category (name, description) 
VALUES ('Bebidas calientes', 'Productos como cafe, te y chocolate');

INSERT INTO category (name, description) 
VALUES ('Bebidas frias', 'Productos como jugos, frappes y cafes frios');