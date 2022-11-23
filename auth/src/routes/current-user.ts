import { Request, Response, Router } from 'express';

const router = Router();

router.get('/users/currentuser', (req: Request, res: Response) => {
  res.send({ currentUser: req.currentUser });
});

export { router as currentUserRouter };
