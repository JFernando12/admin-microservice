import { Request, Response, Router } from 'express';

const router = Router();

router.get('/products', (req: Request, res: Response) => {
  res.send();
});

export { router as indexRouter };
