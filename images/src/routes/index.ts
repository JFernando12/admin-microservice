import { Request, Response, Router } from 'express';
import { PermissionTypes } from '../events/types/permission-types';
import { requireAuth } from '../middlewares/require-auth';
import { Image } from '../models/image';

const router = Router();

router.get('/images', requireAuth, async (req: Request, res: Response) => {
  let images;
  const permission = req.currentUser.permission;

  if (permission === PermissionTypes.client) {
    images = await Image.find({
      userId: req.currentUser.id,
    });
  }
  if (permission === PermissionTypes.admin) {
    images = await Image.find();
  }

  res.send(images);
});

export { router as indexRouter };
