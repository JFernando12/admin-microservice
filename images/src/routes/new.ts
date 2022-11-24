import { Request, Response, Router } from 'express';
import { body } from 'express-validator';
import { requireAuth } from '../middlewares/require-auth';
import { Multer } from '../services/multer';

const router = Router();

router.post(
  '/images',
  Multer.upload.single('image'),
  [
    body('image', 'image is required').notEmpty(),
    body('description', 'description is required').notEmpty(),
  ],
  (req: Request, res: Response) => {
    const file = req.file;
    const { description } = req.body;

    console.log('file', file);
    console.log('description', description);

    res.send();
  }
);

export { router as newRouter };
