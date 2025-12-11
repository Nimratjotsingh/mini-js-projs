-- Select all columns from the products table
SELECT * FROM products

-- Select only the name and price columns from the products table
SELECT name, price FROM products

-- Selecting a particular product by its id
SELECT * FROM products
WHERE id = 1

-- Selecting product where the name is 'Fountain'
SELECT * FROM products
WHERE name='Fountain'