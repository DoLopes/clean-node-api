import { IsString, IsEmail } from "class-validator";

export class SignUpBody {
  @IsString()
  public name!: string;

  @IsEmail()
  public email!: string;

  @IsString()
  public password!: string;

  @IsString()
  public passwordConfirmation!: string;
}
