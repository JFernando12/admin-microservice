import { Request, Response, Router } from 'express';

const router = Router();

router.post('/users/signout', (req: Request, res: Response) => {
  req.session = null;

  res.send({ response: 'success' });
});

export { router as signoutRouter };
