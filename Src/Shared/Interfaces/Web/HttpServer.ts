import bodyParser from "body-parser";
import cors from "cors";
import express, { Express } from "express";
import helmet from "helmet";
import { inject, injectable } from "inversify";
import * as AccountTypes from "Account/Interfaces/DI/Types";
import { IMiddleware } from "Shared/Interfaces/Web/Contracts/IMiddleware";

@injectable()
export class HttpServer {
  public constructor(
    @inject(AccountTypes.AccountRouterMiddleware) private readonly accountRouterMiddleware: IMiddleware
  ) {}

  public create(): Express {
    const server = express();

    server.use(bodyParser.text());
    server.use(bodyParser.json());
    server.use(cors());
    server.use(helmet());

    this.accountRouterMiddleware.configure(server);

    return server;
  }
}
