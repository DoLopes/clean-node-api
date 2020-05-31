import { injectable } from "inversify";
import { Request, Router, Response } from "express";
import { BaseRoute } from "Interfaces/Web/Routes/BaseRoute";
import { HttpStatusCode } from "Interfaces/Web/Enums/HttpStatusCode";

@injectable()
export class HealthCheckRoute extends BaseRoute {
  public async handle(_request: Request, response: Response): Promise<void> {
    response.status(HttpStatusCode.NO_CONTENT).send();
  }

  public configure(router: Router): void {
    router.get("/", this.handle.bind(this));
  }
}
