import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    customer: 
    { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    products: 
    [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }],
    status: 
    { type: String, default: 'Pending' },
}, 
{ timestamps: true });

const Order = mongoose.model('Order', orderSchema);
export default Order;
