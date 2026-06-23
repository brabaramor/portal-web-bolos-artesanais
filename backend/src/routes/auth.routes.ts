import { Router } from 'express';
import { login, logout } from '../controllers/auth.controller';
import { requireAuth } from '../middlewares/auth';
import { validate } from '../middlewares/validate';
import { loginSchema } from '../schemas';

const router = Router();

router.post('/login', validate(loginSchema), login);
router.post('/logout', requireAuth, logout);

export default router;
