-- ----------------------------------------------------------simple data----------------------------------------------------------------------------------------------------
-- -------------------------------------------------------------------------------------------------------------------------------------------------------


-- customers table 

insert into customers ( first_name, last_name, email, phone, address)
values
('Jhon' , 'Do' , 'Jondo78@gmail.com', '1234567890', '123 chicago'),
('dexter','morgan','dexterniceblood@gmail.com','7896321478', '785 miami'),
('arthur','bevol','arthurthebest@gmail.com','7799665544', 'la 7789');

-- products 

insert into products (name, category, price, stock_quantity)
values 
('laptop', 'electronics', 1200.00, 50),
('headphones', 'electronics', 150.00, 100),
('coffee mug', 'kitchenware', 12.99, 200);


describe products;

SHOW COLUMNS FROM products;

ALTER TABLE products MODIFY COLUMN price DECIMAL(10,2);


-- orders

INSERT INTO orders (customer_id, total_price, order_status) 
values 
(1 , 1350.00 , 'pending'),
(2 , 199.22 ,'shipped'),
(3 , 12.99 , 'delivered');


ALTER TABLE orders MODIFY COLUMN total_price DECIMAL(10,2);

-- order_items 

INSERT INTO order_items (order_id , product_id, quantity, price)
values
(1, 1, 1, 1200.00),
(1, 2, 1, 150.00),
(2, 3, 2, 12.99);

ALTER TABLE order_items MODIFY COLUMN price DECIMAL(10,2);

-- payments

INSERT INTO payments (order_id, payment_method, amount, status) 
VALUES 
(1, 'credit-card', 1350.00, 'complete'),
(2, 'paypal', 162.99, 'pending'),
(3, 'cash', 12.99, 'complete');


ALTER TABLE payments MODIFY COLUMN amount DECIMAL(10,2);


-- testing

SELECT * FROM customers WHERE email = 'Jondo78@gmail.com';




