import { Container } from "inversify";
import * as Types from "Interfaces/DI/Types";
import { HttpServer } from "Interfaces/Web/HttpServer";
import { IMiddleware } from "Interfaces/Web/Middlewares/IMiddleware";
import { RouterMiddleware } from "Interfaces/Web/Middlewares/RouterMiddleware";
import { HealthCheckRoute } from "Interfaces/Web/Routes/HealthCheck/HealthCheckRoute";
import { SignUpCommandHandler } from "Application/Commands/SignUp/SignUpCommandHandler";
import { SignUpRoute } from "Interfaces/Web/Routes/SignUp/SignUpRoute";
import { Mediator } from "Interfaces/Web/Contracts/Mediator";
import { IMediator } from "Interfaces/Web/Contracts/IMediator";
import { IHandler } from "Interfaces/Web/Contracts/IHandler";

export class ServiceProvider {
  public static createContainer(): Container {
    const container = new Container();
    container.bind<HealthCheckRoute>(Types.HealthCheckRoute).to(HealthCheckRoute);
    container.bind<SignUpRoute>(Types.SignUpRoute).to(SignUpRoute);
    container.bind<IHandler>(Types.SignUpCommandHandler).to(SignUpCommandHandler);
    container.bind<IMiddleware>(Types.RouterMiddleware).to(RouterMiddleware);
    container.bind<HttpServer>(Types.HttpServer).to(HttpServer);
    container.bind<IMediator>(Types.Mediator).to(Mediator);
    container.bind<Container>(Types.Container).toConstantValue(container);

    return container;
  }
}
