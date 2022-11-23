import { Request, Response, Router } from 'express';
import { body } from 'express-validator';
import { BadRequestError } from '../errors/bad-request-error';
import { PermissionTypes } from '../events/types/permission-types';
import { validateRequest } from '../middlewares/validate-request';
import { Auth } from '../models/auth';
import { User } from '../models/user';
import { Password } from '../services/password';
import Jwt from 'jsonwebtoken';

const router = Router();

router.post(
  '/users/signup',
  [
    body('email').isEmail().withMessage('Email is required'),
    body('username').notEmpty().withMessage('Username is required'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    const existUsername = await User.find({
      $or: [{ username }, { email }],
    });

    if (existUsername.length > 0) {
      throw new BadRequestError('Username or email already exist');
    }

    await Password.toHash(password);
    const user = User.build({
      username,
      email,
      permission: PermissionTypes.client,
    });
    await user.save();

    const auth = Auth.build({
      password,
      user,
    });
    await auth.save();

    const userJwt = Jwt.sign(
      {
        id: user.id,
        email: user.email,
        username: user.username,
        permission: user.permission,
      },
      'asdf'
    );

    req.session = { jwt: userJwt };

    res.send({ created: 'success' });
  }
);

export { router as signupRouter };
