import { Request, Response, Router } from 'express';
import { body } from 'express-validator';
import Jwt from 'jsonwebtoken';
import { BadRequestError } from '../errors/bad-request-error';
import { NotAuthorizedError } from '../errors/not-authorized-error';
import { validateRequest } from '../middlewares/validate-request';
import { Auth } from '../models/auth';
import { User } from '../models/user';
import { Password } from '../services/password';

const router = Router();

router.post(
  '/users/signin',
  [
    body('username', 'username or email is required')
      .if(body('email').not().isEmail())
      .notEmpty(),
    body('password').notEmpty().withMessage('password is required'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, username, password } = req.body;

    let user;
    if (!email) {
      user = await User.findOne({ username });
    } else {
      user = await User.findOne({ email });
    }

    if (!user) {
      throw new BadRequestError('User not found');
    }

    const auth = await Auth.findOne({ user });
    const passwordMatch = await Password.compare(auth!.password, password);

    if (!passwordMatch) {
      throw new NotAuthorizedError();
    }

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

    res.send(user);
  }
);

export { router as signinRouter };
