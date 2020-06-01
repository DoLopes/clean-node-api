import { injectable } from "inversify";
import { Request, Router } from "express";
import { BaseRoute } from "Interfaces/Web/Routes/BaseRoute";
import { SignUpCommand } from "Application/Commands/SignUp/SignUpCommand";
import { SignUpRequest } from "Interfaces/Web/Routes/SignUp/SignUpResquet";

@injectable()
export class SignUpRoute extends BaseRoute {
  public async buildInput(request: Request): Promise<SignUpCommand> {
    const signUpRequest = new SignUpRequest(request);

    return new SignUpCommand(
      signUpRequest.body.name,
      signUpRequest.body.email,
      signUpRequest.body.password,
      signUpRequest.body.passwordConfirmation,
    );
  }

  public configure(router: Router): void {
    router.post("/signup", this.handle.bind(this));
  }
}