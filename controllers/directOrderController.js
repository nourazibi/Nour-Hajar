import Order from '../models/Order.js';
import Product from '../models/Product.js';
import Customer from '../models/Customer.js';

export const createDirectOrder = async (req, res) => {
    try {
        const { customerId } = req.params;
        const { products } = req.body;

        const customer = await Customer.findById(customerId);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        const foundProducts = await Product.find({ '_id': { $in: products } });
        if (foundProducts.length !== products.length) {
            return res.status(404).json({ message: 'Some products not found' });
        }

        const order = new Order({
            customer: customerId,
            products: products,
        });

        await order.save();

        res.status(201).json({
            message: 'Order created successfully',
            order: order,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
