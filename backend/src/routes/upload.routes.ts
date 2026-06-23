import { Router } from 'express';
import { uploadImage } from '../controllers/upload.controller';
import { requireAuth } from '../middlewares/auth';
import { upload } from '../middlewares/upload';

const router = Router();

router.post('/', requireAuth, upload.single('image'), uploadImage);

export default router;
