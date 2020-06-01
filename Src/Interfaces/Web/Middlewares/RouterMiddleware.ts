import { Express, Router } from "express";
import { inject, injectable } from "inversify";
import * as Types from "Interfaces/DI/Types";
import { IMiddleware } from "Interfaces/Web/Middlewares/IMiddleware";
import { IRoute } from "Interfaces/Web/Routes/IRoute";

@injectable()
export class RouterMiddleware implements IMiddleware {
  public constructor(
    @inject(Types.HealthCheckRoute) private readonly healthCheckeRoute: IRoute,
    @inject(Types.SignUpRoute) private readonly signUpRoute: IRoute,
  ) {}

  public configure(server: Express): void {
    const router = Router();

    this.healthCheckeRoute.configure(router);
    this.signUpRoute.configure(router);

    server.use(router);
  }
}
