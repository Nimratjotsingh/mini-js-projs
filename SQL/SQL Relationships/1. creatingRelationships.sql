SELECT orders.order_number,customers.first_name,customers.last_name, customers.address
FROM orders
INNER JOIN customers on orders.customer_id = customers.id


SELECT orders.order_number,products.name, products.price, products.stocks
FROM orders
INNER JOIN products on orders.product_id = products.id