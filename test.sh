


curl -X POST --json '{"name":"Laptop","description":"High-end gaming laptop","price":1500,"stock":20}' http://localhost:5000/api/products


curl -X POST --json '{"name":"John Doe","email":"john@example.com","address":"123 Main St"}' http://localhost:5000/api/customers


curl -X POST --json '{"products":["product_id"]}' http://localhost:5000/api/orders/direct/customer_id
