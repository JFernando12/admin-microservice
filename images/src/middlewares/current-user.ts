import Jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

interface UserPayload {
  id: string;
  email: string;
  username: string;
  permission: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next();
  }

  try {
    const payload = Jwt.verify(req.session.jwt, 'asdf') as UserPayload;
    req.currentUser = payload;
  } catch (error) {}

  next();
};
