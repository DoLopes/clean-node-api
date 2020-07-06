import { ValidationError } from "class-validator";

export interface IApplicationValidationResult {
  errors: ValidationError[];
  isValid: boolean
}
