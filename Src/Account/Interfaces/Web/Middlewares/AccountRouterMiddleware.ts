import { Express, Router } from "express";
import { inject, injectable } from "inversify";
import * as Types from "Account/Interfaces/DI/Types";
import { IMiddleware } from "Core/Contracts/IMiddleware";
import { IRoute } from "Core/Contracts/IRoute";

@injectable()
export class AccountRouterMiddleware implements IMiddleware {
  public constructor(
    @inject(Types.SignUpRoute) private readonly signUpRoute: IRoute,
  ) {}

  public configure(server: Express): void {
    const router = Router();

    this.signUpRoute.configure(router);

    server.use(router);
  }
}
