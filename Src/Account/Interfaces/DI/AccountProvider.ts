import { Container } from "inversify";
import * as Types from "Account/Interfaces/DI/Types";
import { SignUpCommandHandler } from "Account/Application/Commands/SignUp/SignUpCommandHandler";
import { SignUpRoute } from "Account/Interfaces/Web/Routes/SignUp/SignUpRoute";
import { IHandler } from "Shared/Application/Contracts/IHandler";
import { AccountRouterMiddleware } from "Account/Interfaces/Web/Middlewares/AccountRouterMiddleware";
import { IMiddleware } from "Shared/Interfaces/Web/Middlewares/IMiddleware";

export class AccountServiceProvider {
  public static register(container: Container): Container {
    container.bind<SignUpRoute>(Types.SignUpRoute).to(SignUpRoute);
    container.bind<IHandler>(Types.SignUpCommandHandler).to(SignUpCommandHandler);
    container.bind<IMiddleware>(Types.AccountRouterMiddleware).to(AccountRouterMiddleware);

    return container;
  }
}
