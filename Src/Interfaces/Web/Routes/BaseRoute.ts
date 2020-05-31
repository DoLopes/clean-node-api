import { Request, Response, Router } from "express";
import { inject, injectable } from "inversify";
import * as Types from "Interfaces/DI/Types";
import { IMediator } from "Interfaces/Web/Contracts/IMediator";
import { IRequest } from "Interfaces/Web/Contracts/IRequest";
import { getStatusCodeForApplicationEvent } from "Interfaces/Web/Helpers/GetStatusCodeForApplicationEvent";
import { ApplicationResult } from "Application/Entities/ApplicationResult";
import { HttpStatusCode } from "Interfaces/Web/Enums/HttpStatusCode";
import { IRoute } from "Interfaces/Web/Routes/IRoute";

@injectable()
export abstract class BaseRoute implements IRoute {
  @inject(Types.Mediator)
  protected readonly mediator!: IMediator;

  public async buildInput(request: Request): Promise<IRequest> {
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

      if (result !== undefined) {
        response.json(result);
      }

      response.end();
    } catch (error) {
      response.sendStatus(HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  public abstract configure(router: Router): void;
}
