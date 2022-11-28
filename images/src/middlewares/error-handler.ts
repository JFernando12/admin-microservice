import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { CustomError } from '../errors/custom-error';

export const errorHandler = (
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.send({ errors: err.serializeErrors() });
  }

  console.log(err);

  res.send({ errors: [{ message: 'Something went wrong' }] });
};
