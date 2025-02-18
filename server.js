import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoutes.js';
import customerRoutes from './routes/customerRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

const app = express();

app.use(express.json());


app.use(productRoutes);
app.use(customerRoutes);
app.use(orderRoutes);


mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(5000, () => {
            console.log('Server running on http://localhost:5000');
        });
    })
    .catch(err => console.error(err));
