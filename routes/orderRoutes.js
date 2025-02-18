// routes/orderRoutes.js

import express from 'express';
import { 
  createOrder, 
  getOrderById, 
  updateOrder, 
  deleteOrder 
} from '../controllers/orderController.js';

const router = express.Router();

// Direct Order Route for existing customers
router.post('/direct/:customerId', createOrder);  // Ensure the route is for creating an order for a customer

// Other routes for general orders
router.get('/:id', getOrderById);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);

export default router;
