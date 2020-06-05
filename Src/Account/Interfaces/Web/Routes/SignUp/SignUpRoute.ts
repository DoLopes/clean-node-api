import { injectable } from "inversify";
import { Request, Router } from "express";
import { BaseRoute } from "Shared/Interfaces/Web/Contracts/BaseRoute";
import { SignUpCommand } from "Account/Application/SignUp/SignUpCommand";
import { SignUpRequest } from "Account/Interfaces/Web/Routes/SignUp/SignUpResquet";

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
