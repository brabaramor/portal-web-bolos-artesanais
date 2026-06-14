import { Router } from 'express';
import {
  createOrder,
  listOrders,
  getOrder,
  updateOrderStatus,
} from '../controllers/orders.controller';
import { requireAuth } from '../middlewares/auth';
import { validate } from '../middlewares/validate';
import { createOrderSchema, updateOrderStatusSchema } from '../schemas';

const router = Router();

// Rota pública (cliente faz encomenda)
router.post('/', validate(createOrderSchema), createOrder);

// Rotas protegidas (admin)
router.get('/', requireAuth, listOrders);
router.get('/:id', requireAuth, getOrder);
router.patch('/:id/status', requireAuth, validate(updateOrderStatusSchema), updateOrderStatus);

export default router;
