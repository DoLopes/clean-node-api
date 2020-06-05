import { Request, Response, Router } from "express";
import { inject, injectable } from "inversify";
import * as Types from "Shared/Interfaces/DI/Types";
import { IMediator } from "Shared/Interfaces/Web/Contracts/IMediator";
import { getStatusCodeForApplicationEvent } from "Shared/Interfaces/Web/Helpers/GetStatusCodeForApplicationEvent";
import { ApplicationResult } from "Shared/Application/Entities/ApplicationResult";
import { HttpStatusCode } from "Shared/Interfaces/Web/Enums/HttpStatusCode";
import { IRoute } from "Shared/Interfaces/Web/Contracts/IRoute";

@injectable()
export abstract class BaseRoute implements IRoute {
  public constructor(@inject(Types.Mediator) protected readonly mediator: IMediator) {}

  public async buildInput(request: Request): Promise<object> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return {
      ...request.query,
      ...request.body,
      ...request.params,
    };
  }

  public buildResult(applicationResult: ApplicationResult): object | undefined {
    return applicationResult.message;
  }

  public async handle(request: Request, response: Response): Promise<void> {
    try {
      const input = await this.buildInput(request);

      const applicationResult = await this.mediator.send<ApplicationResult>(input);

      const result = this.buildResult(applicationResult);

      response.status(getStatusCodeForApplicationEvent(applicationResult));

      response.send(result);
    } catch (error) {
      response.sendStatus(HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  public abstract configure(router: Router): void;
}
