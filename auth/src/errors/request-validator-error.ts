import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';

export class RequestValidatorError extends CustomError {
  statusCode = 400;

  constructor(private errors: ValidationError[]) {
    super('Error al validar los datos');

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
