import { Request, Response, Router } from "express";
import { inject, injectable } from "inversify";
import * as Types from "Types";
import { IMediator } from "Core/Contracts/IMediator";
import { getStatusCodeForApplicationEvent } from "Core/Helpers/GetStatusCodeForApplicationEvent";
import { ApplicationResult } from "Core/Result/ApplicationResult";
import { HttpStatusCode } from "Core/Enums/HttpStatusCode";
import { IRoute } from "Core/Contracts/IRoute";

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
