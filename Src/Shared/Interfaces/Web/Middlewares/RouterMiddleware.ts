import { Express, Router } from "express";
import { inject, injectable } from "inversify";
import * as Types from "Shared/Interfaces/DI/Types";
import { IMiddleware } from "Shared/Interfaces/Web/Middlewares/IMiddleware";
import { IRoute } from "Shared/Interfaces/Web/Routes/IRoute";

@injectable()
export class RouterMiddleware implements IMiddleware {
  public constructor(
    @inject(Types.HealthCheckRoute) private readonly healthCheckeRoute: IRoute,
  ) {}

  public configure(server: Express): void {
    const router = Router();

    this.healthCheckeRoute.configure(router);

    server.use(router);
  }
}
