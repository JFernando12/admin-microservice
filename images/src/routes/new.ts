import { Request, Response, Router } from 'express';
import 'express-async-errors';
import { body, ValidationError } from 'express-validator';
import { BadRequestError } from '../errors/bad-request-error';
import { RequestValidatorError } from '../errors/request-validator-error';
import { requireAuth } from '../middlewares/require-auth';
import { validateRequest } from '../middlewares/validate-request';
import { Image } from '../models/image';
import { Multer } from '../services/multer';
import { s3 } from '../services/s3';

const router = Router();

router.post(
  '/images',
  requireAuth,
  Multer.upload.single('image'),
  [body('description', 'description is required').notEmpty()],
  validateRequest,
  async (req: Request, res: Response) => {
    const file = req.file;
    const { description } = req.body;

    if (!file) {
      throw new BadRequestError('image is required');
    }

    const url = await s3.upload(file);

    const image = Image.build({
      userId: req.currentUser.id,
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
