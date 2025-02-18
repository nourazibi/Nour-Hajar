// controllers/orderController.js

import Order from '../models/Order.js';
import Customer from '../models/Customer.js';
import Product from '../models/Product.js';

export const createOrder = async (req, res) => {
    const { customerId } = req.params;  // Get customerId from URL parameter
    const { products } = req.body;  // Get products from the body of the request

    // Find the customer by customerId
    const customer = await Customer.findById(customerId);
    if (!customer) {
        return res.status(404).json({ message: 'Customer not found' });
    }

    // Check if all products are valid
    const validProducts = await Product.find({ '_id': { $in: products } });
    if (validProducts.length !== products.length) {
        return res.status(400).json({ message: 'One or more products are invalid' });
    }

    // Create a new order
    const newOrder = new Order({
        customer: customerId,
        products,
    });

    try {
        const order = await newOrder.save();  // Save the order to the database
        res.status(201).json({ message: 'Order created successfully', order });  // Respond with success
    } catch (err) {
        res.status(500).json({ message: 'Error creating order', error: err });  // Handle server error
    }
};


export const deleteOrder = async (req, res) => {
    const { id } = req.params;  // Get order ID from URL

    try {
        const order = await Order.findByIdAndDelete(id);  // Find and delete the order by ID

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting order', error: err });
    }
};