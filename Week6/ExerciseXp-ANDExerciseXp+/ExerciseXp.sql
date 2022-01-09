-- Exercie 1
-- 1.Table item creation+ adding values

--  CREATE TABLE items (
--  item_id SERIAL PRIMARY KEY,
--    quantity SMALLINT NOT NULL,
--    kind VARCHAR(20) NOT NULL,
--     price DECIMAL NOT NULL
--  );
-- INSERT INTO items (quantity,kind,price)
-- VALUES(1,'small desk',100),
-- 	   (1,'Large desk',300),
-- 	   (1,'fan',80);


-- 2.Adding + creating costomeres table

-- CREATE TABLE customers(
-- customer_id SERIAL PRIMARY KEY,
-- first_name VARCHAR (20) NOT NULL,
-- last_name VARCHAR (20) NOT NULL);

-- INSERT INTO customers (first_name,last_name)
-- VALUES('Greg','Jones'),
-- 	   ('Sandra','Jonse'),
-- 	   ('Scott','Scott'),
-- 	   ('Trevor','Green'),
-- 	   ('Melanie','Johnson');

-- 3. Fetch things 
-- 1. items 
--SELECT * FROM items;

-- 2. price above 80
-- SELECT kind, price FROM items WHERE price >80;

-- 3. price below 300
-- SELECT kind,price FROM items WHERE price >= 300;

-- 4. last name smith 
-- SELECT * FROM customers WHERE last_name = 'Smith';

-- 5. last name jones
-- SELECT * FROM customers WHERE last_name = 'Jones';

-- 6. first name not scott
-- SELECT * FROM customers WHERE first_name != 'Scott'

	   
	   

