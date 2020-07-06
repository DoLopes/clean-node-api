import { ValidationError } from "class-validator";

export class InvalidRequestError extends Error {
  public readonly errors: ValidationError[] | string[];

  public constructor(errors: ValidationError[] | string[]) {
    super("Invalid request error");

    this.errors = errors;

    Error.captureStackTrace(this, InvalidRequestError);
  }
}
