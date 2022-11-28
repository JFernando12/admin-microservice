import { CustomError } from './custom-error';
import { ValidationError } from 'express-validator';

export class RequestValidatorError extends CustomError {
  statusCode = 400;

  constructor(private errors: ValidationError[]) {
    super('Request validator error');

    Object.setPrototypeOf(this, RequestValidatorError.prototype);
  }

  serializeErrors(): { message: string; field?: string | undefined }[] {
    return this.errors.map((err) => {
      return {
        message: err.msg,
        field: err.param,
      };
    });
  }
}
