## Creating datatabase
DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

## Creating the products table
DROP TABLE IF EXISTS products;
CREATE TABLE products (
    item_id INT KEY NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    department_id INT(10),
    price DECIMAL(10 , 2 ) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    product_sales DECIMAL(10 , 2 ) DEFAULT 0
);

## Populating the products table
INSERT INTO bamazon.products (product_name, department_id, price, stock_quantity) 
VALUES 
	('Headphones', 1, 20, 10),
	('Copy paper', 2, 5, 40),
	('Picture frame', 3, 15, 50),
	('Dictionary', 4, 20, 30),
	('Stapler', 5, 8, 20),
	('Mouse', 1, 15, 4),
	('Ruler', 5, 3, 50),
	('CookBook', 5, 12, 5),
	('Pillow', 6, 10, 20),
	('Pens', 5, 5, 25);

## Creating the department table
DROP TABLE IF EXISTS departments;
CREATE TABLE departments (
    department_id INT KEY NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(50) NOT NULL,
    overhead_costs DECIMAL(10 , 2 ) NOT NULL DEFAULT 0
);

## Populating the departments table
INSERT INTO bamazon.departments(department_name)
VALUES 
	('Electronics'), 
	('Office Supplies'), 
	('Decorations'), 
	('Books'), 
	('Office Suplies'), 
	('Bedroom') ;
    
## Display table relating the department_id with the departmens table
SELECT products.item_id, products.product_name, departments.department_name, products.price, products.stock_quantity, products.product_sales
FROM products
INNER JOIN departments ON products.department_id = departments.department_id;