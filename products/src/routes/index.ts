import { Request, Response, Router } from 'express';
import { requireAuth } from '../middlewares/require-auth';
import { Product } from '../models/product';

const router = Router();

router.get('/products', requireAuth, async (req: Request, res: Response) => {
  const products = await Product.find();

  res.send(products);
});

export { router as indexRouter };
