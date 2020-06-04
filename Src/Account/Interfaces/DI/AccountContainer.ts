import { Container } from "inversify";
import * as Types from "Account/Interfaces/DI/Types";
import { SignUpCommandHandler } from "Account/Application/SignUp/SignUpCommandHandler";
import { SignUpRoute } from "Account/Interfaces/Web/Routes/SignUp/SignUpRoute";
import { IHandler } from "Core/Contracts/IHandler";
import { AccountRouterMiddleware } from "Account/Interfaces/Web/Middlewares/AccountRouterMiddleware";
import { IMiddleware } from "Core/Contracts/IMiddleware";

export class AccountContainer {
  public static register(container: Container): Container {
    container.bind<SignUpRoute>(Types.SignUpRoute).to(SignUpRoute);
    container.bind<IHandler>(Types.SignUpCommandHandler).to(SignUpCommandHandler);
    container.bind<IMiddleware>(Types.AccountRouterMiddleware).to(AccountRouterMiddleware);

    return container;
  }
}
