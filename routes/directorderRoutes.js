import express from 'express';
import { createDirectOrder } from '../controllers/directOrderController.js';

const router = express.Router();

router.post('/direct/:customerId', createDirectOrder);

export default router;
