import { Request, Response, Router } from "express";
import { inject, injectable } from "inversify";
import { plainToClass } from "class-transformer";
import * as Types from "Shared/Interfaces/DI/Types";
import { IMediator } from "Shared/Application/Contracts/IMediator";
import { ApplicationResult } from "Shared/Application/Entities/ApplicationResult";
import { HttpStatusCode } from "Shared/Interfaces/Web/Enums/HttpStatusCode";
import { IRoute } from "Shared/Interfaces/Web/Resources/IRoute";
import { InvalidRequestError } from "Shared/Interfaces/Web/Contracts/InvalidRequestError";
import { WebResult } from "Shared/Interfaces/Web/Entities/WebResult";
import { BaseRequest } from "Shared/Interfaces/Web/Entities/BaseRequest";

@injectable()
export abstract class BaseRoute implements IRoute {
  public constructor(@inject(Types.Mediator) protected readonly mediator: IMediator) {}

  public async buildInput(request: Request): Promise<object> {
    return plainToClass(BaseRequest, {
      ...request.query,
      ...request.body,
      ...request.params,
    });
  }

  public buildResult(applicationResult: ApplicationResult): WebResult {
    return new WebResult(applicationResult);
  }

  public async handle(request: Request, response: Response): Promise<void> {
    try {
      const input = await this.buildInput(request);

      const applicationResult = await this.mediator.send<ApplicationResult>(input);

      const result = this.buildResult(applicationResult);

      response.status(result.getStatusCode());
      response.send(result.getBody());
    } catch (error) {
      if (error instanceof InvalidRequestError) {
        return this.sendInvalidRequestError(response, error);
      }

      response.sendStatus(HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  private sendInvalidRequestError(response: Response, error: InvalidRequestError): void {
    const result = WebResult.invalidRequest(error.errors);

    response.status(HttpStatusCode.BAD_REQUEST_ERROR);
    response.send(result);
  }

  public abstract configure(router: Router): void;
}
