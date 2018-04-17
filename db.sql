## Creating datatabase
DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

## Creating the products table
DROP TABLE IF EXISTS products;
CREATE TABLE products (
    item_id INT KEY NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    department_id INT(10) NOT NULL,
    price DECIMAL(10 , 2 ) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    product_sales DECIMAL(10 , 2 ) DEFAULT 0
);

-- Populte products table
INSERT INTO bamazon.products (product_name, department_id, price, stock_quantity) 
VALUES 
	('Headphones', 1, 20, 10),
	('Copy paper', 2, 5, 40),
	('Picture frame', 3, 15, 50),
	('Dictionary', 4, 20, 50),
	('Stapler', 2, 8, 20),
	('Mouse', 1, 15, 8),
	('Ruler', 2, 3, 50),
	('CookBook', 4, 12, 5),
	('Pillow', 5, 10, 20),
	('Pens', 2, 5, 25);

-- Create department table
DROP TABLE IF EXISTS departments;
CREATE TABLE departments (
    department_id INT KEY NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(50) NOT NULL,
    overhead_costs DECIMAL(10 , 2 ) NOT NULL DEFAULT 0
);

-- Populate departments table
INSERT INTO bamazon.departments(department_name)
VALUES
	('Electronics'),
	('Office Supplies'),
	('Decorations'),
	('Books'),
	('Bedroom');

-- Display table joined by department_id
SELECT products.item_id AS ID, 
products.product_name AS Item,
departments.department_name AS Department, 
products.price AS Price, 
products.stock_quantity AS Quantity, 
products.product_sales AS Sales
FROM products
INNER JOIN departments ON products.department_id = departments.department_id;

SELECT item_id, product_name, price FROM products;