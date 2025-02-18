import express from 'express';
import { createCustomer } from '../controllers/customerController.js';

const router = express.Router();

router.post('/api/customers', createCustomer);




export default router;

