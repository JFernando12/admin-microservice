import { Request, Response, Router } from 'express';
import { body } from 'express-validator';
import { requireAuth } from '../middlewares/require-auth';
import { Image } from '../models/image';
import { Multer } from '../services/multer';
import { s3 } from '../services/s3';

const router = Router();

router.post(
  '/images',
  Multer.upload.single('image'),
  [
    body('image', 'image is required').notEmpty(),
    body('description', 'description is required').notEmpty(),
  ],
  async (req: Request, res: Response) => {
    const file = req.file;
    const { description } = req.body;

    console.log('file', file);
    console.log('description', description);

    const url = await s3.upload(file!);

    const image = Image.build({
      userId: 'req.currentUser.id',
      url,
      filename: file!.filename,
      description,
      createdAt: new Date(),
    });
    await image.save();

    res.send(image);
  }
);

export { router as newRouter };
