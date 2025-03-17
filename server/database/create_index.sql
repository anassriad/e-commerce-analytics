-- ------------------------------------------------- create index -----------------------------------------------------------------------------------------
-- --------------------------------------------------------------------------------------------------------------------------------------------------------

-- index the email column for quick lookups
create index idx_customers_email on customers(email);

-- indexing customer_id will speed up queries that filter orders by customer
create index idx_customers_customer_id on customers(customer_id);

-- Order Status
create index idx_orders_order_status on orders(order_status);

-- ---------------------------------------------------------- Order items ----------------------------------------------------------------------------------------
-- ----------------------------------------------------------------------------------------------------------------------------------------------------

-- order_id
create index idx_order_items_order_id on order_items(order_id);

-- product_id
create index idx_order_items_product_id on order_items(product_id);

-- ------------------------------------------------ payments table -------------------------------------------------------------------------------------
-- ----------------------------------------------------------------------------------------------------------------------------------------------------

-- order_id
create index idx_payments_order_id on payments(order_id);


SHOW INDEXES FROM order_items;

