import Customer from '../models/Customer.js';

export const createCustomer = async (req, res) => {
    const { name, email, address } = req.body;

    const newCustomer = new Customer({ name, email, address });

    try {
        const customer = await newCustomer.save();
        res.status(201).json({ message: 'Customer created successfully', customer });
    } catch (err) {
        res.status(500).json({ message: 'Error creating customer', error: err });
    }
};
