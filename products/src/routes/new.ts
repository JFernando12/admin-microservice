import { Request, Response, Router } from 'express';
import { body } from 'express-validator';
import { Product } from '../models/product';

const router = Router();

router.post(
  '/products',
  [
    body('name', 'name is required').notEmpty(),
    body('description', 'description is required'),
    body('price', 'price must be greater than 0').isFloat({ gt: 0 }),
    body('stock', 'stock must be positive').isFloat({ gt: -1 }),
    body('weight', 'weight must be greater than 0').isFloat({ gt: 0 }),
    body('height', 'height must be greater than 0').isFloat({ gt: 0 }),
    body('length', 'length must be greater than 0').isFloat({ gt: 0 }),
    body('width', 'width must be greater than 0').isFloat({ gt: 0 }),
  ],
  async (req: Request, res: Response) => {
    const {
      name,
      description,
      price,
      images,
      stock,
      weight,
      height,
      length,
      width,
    } = req.body;

    const product = Product.build({
      name,
      description,
      price,
      images,
      stock,
      weight,
      height,
      length,
      width,
    });
    await product.save();

    res.send(product);
  }
);

export { router as newRouter };
