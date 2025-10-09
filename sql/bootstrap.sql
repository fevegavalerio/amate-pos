-- Bootstrap SQL script to create initial tables.
-- Create category table.
CREATE TABLE IF NOT EXISTS category (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

-- Insert initial categories.
INSERT INTO category (name, description) VALUES 
('Reposteria salada', 'Productos como croissants y empanadas'),
('Reposteria dulce', 'Productos como crocantes, pie y tres leches'),
('Sandwich', 'Productos como sandwiches hechos con pan de masa madre'),
('Bagel', 'Productos como bagels rellenos'),
('Bebidas calientes', 'Productos como cafe, te y chocolate'),
('Bebidas frias', 'Productos como jugos, frappes y cafes frios');

-- Create products table.
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price NUMERIC(10,2) NOT NULL,
    stock INT NOT NULL,
    category_id INT REFERENCES category(id)
);

-- Insert initial products.
INSERT INTO products (name, description, price, stock, category_id) VALUES
('Torta Chilena', 'Postre en capas con dulce de leche', 3000, 10, 2),
('Cheesecake', 'Torta de queso', 3000, 10, 2),
('Crocante Aleman', 'Postre aleman dulce', 3000, 10, 2),
('New York Cookies', 'Galletas estilo New York', 1500, 10, 2),
('Cafe', 'Cafe de especialidad', 2500, 10, 5),
('Matcha', 'Matcha artesanal', 3000, 10, 6),
('Sandwich mano de piedra', 'Sandwich con mano de piedra', 4000, 10, 3),
('Pan de especias', 'Pan de especias caliente', 1500, 10, 1),
('Bagel Bacon Jam', 'Bagel con jalea de tocino', 4000, 10, 4);

-- Create sales table.
CREATE TABLE IF NOT EXISTS sales (
    id SERIAL PRIMARY KEY,
    total_amount NUMERIC(10,2) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create sale_items table.
CREATE TABLE IF NOT EXISTS sale_items (
    id SERIAL PRIMARY KEY,
    sale_id INT REFERENCES sales(id),
    product_id INT REFERENCES products(id),
    quantity INT NOT NULL,
    price NUMERIC(10,2) NOT NULL,
    subtotal NUMERIC(10,2) NOT NULL
);

-- Create payments table.
CREATE TABLE IF NOT EXISTS payments (
    id SERIAL PRIMARY KEY,
    sale_id INT REFERENCES sales(id),
    amount NUMERIC(10,2) NOT NULL,
    method VARCHAR(50) NOT NULL,
    paid_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create inventory_movements table.
CREATE TABLE IF NOT EXISTS inventory_movements (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES products(id),
    quantity INT NOT NULL,
    movement_type VARCHAR(20) NOT NULL,
    reason VARCHAR(100),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);