import { Request, Response, Router } from 'express';
import { requireAuth } from '../middlewares/require-auth';

const router = Router();

router.get('/products', requireAuth, (req: Request, res: Response) => {
  res.send();
});

export { router as indexRouter };
