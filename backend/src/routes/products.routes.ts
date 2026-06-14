import { Router } from 'express';
import {
  listProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/products.controller';
import { requireAuth } from '../middlewares/auth';
import { validate } from '../middlewares/validate';
import { createProductSchema, updateProductSchema } from '../schemas';

const router = Router();

// Rotas públicas
router.get('/', listProducts);
router.get('/:id', getProduct);

// Rotas protegidas (admin)
router.post('/', requireAuth, validate(createProductSchema), createProduct);
router.put('/:id', requireAuth, validate(updateProductSchema), updateProduct);
router.delete('/:id', requireAuth, deleteProduct);

export default router;
