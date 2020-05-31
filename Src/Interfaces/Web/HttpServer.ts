import bodyParser from "body-parser";
import cors from "cors";
import express, { Express } from "express";
import helmet from "helmet";
import { inject, injectable } from "inversify";
import * as Types from "Interfaces/DI/Types";
import { IMiddleware } from "Interfaces/Web/Middlewares/IMiddleware";

@injectable()
export class HttpServer {
  @inject(Types.RouterMiddleware)
  private readonly routerMiddleware!: IMiddleware;

  public create(): Express {
    const server = express();

    server.use(bodyParser.text());
    server.use(bodyParser.json());
    server.use(cors());
    server.use(helmet());

    this.routerMiddleware.configure(server);

    return server;
  }
}
