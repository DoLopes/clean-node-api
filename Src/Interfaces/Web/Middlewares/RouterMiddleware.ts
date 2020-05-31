import { Express, Router } from "express";
import { inject, injectable } from "inversify";
import * as Types from "Interfaces/DI/Types";
import { IMiddleware } from "Interfaces/Web/Middlewares/IMiddleware";
import { IRoute } from "Interfaces/Web/Routes/IRoute";

@injectable()
export class RouterMiddleware implements IMiddleware {
  @inject(Types.HealthCheckRoute)
  private readonly healthCheckeRoute!: IRoute;

  public configure(server: Express): void {
    const router = Router();

    // eslint-disable-next-line no-console
    console.log("passei >>>");

    this.healthCheckeRoute.configure(router);

    server.use(router);
  }
}
