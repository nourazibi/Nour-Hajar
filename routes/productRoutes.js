import express from 'express';
import { createProduct } from '../controllers/productController.js';
import { getAllProducts, getProductById } from '../controllers/productController.js';

const router = express.Router();

router.post('/api/products', createProduct);
router.get('/api/products', getAllProducts);
router.get('/api/products/:id', getProductById);
router.put('/api/products/:id', updateProduct);
router.delete('/api/products/:id', deleteProduct);


export default router;

