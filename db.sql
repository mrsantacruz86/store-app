drop database if exists bamazon;
create database bamazon;
use bamazon;

drop table if exists products;
create table products(
	item_id int key not null auto_increment,
	product_name varchar(50) not null,
	department_name varchar(50),
	price decimal(10,2) not null,
	stock_quantity int(10) not null,
	product_sales decimal(10,2) default 0,
);

INSERT INTO `bamazon`.`products` (`product_name`, `department_name`, `price`, `stock_quantity`) 
VALUES 
	('Headphones', 'Electronics', '20', '10'),
	('Copy paper', 'Office Supplies', '5', '40'),
	('Picture frame', 'Decorations', '15', '50'),
	('Dictionary', 'Books', '20', '30'),
	('Stapler', 'Office Suplies', '8', '20'),
	('Mouse', 'Electronics', '15', '4'),
	('Ruler', 'Office Suplies', '3', '50'),
	('CookBook', 'Books', '12', '5'),
	('Pillow', 'Bedroom', '10', '20'),
	('Pens', 'Office Supplies', '5', '25');


drop table if exists departments
create table departments(
	department_id int key not null auto_increment,
	department_name varchar(50) not null,
	overhead_costs decimal(10,2) not null,
);