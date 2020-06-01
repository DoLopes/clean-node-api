import { Request } from "express";
import { plainToClass } from "class-transformer";
import { IsDefined, ValidateNested } from "class-validator";
import { SignUpBody } from "Account/Interfaces/Web/Routes/SignUp/SignUpBody";

export class SignUpRequest {
  @IsDefined()
  @ValidateNested()
  public body!: SignUpBody;

  public constructor(data: Request) {
    this.body = plainToClass(SignUpBody, data.body);
  }
}
