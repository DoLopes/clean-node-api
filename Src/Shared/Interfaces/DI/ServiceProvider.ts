import { Container } from "inversify";
import * as Types from "Shared/Interfaces/DI/Types";
import { HttpServer } from "Shared/Interfaces/Web/HttpServer";
import { IMiddleware } from "Shared/Interfaces/Web/Middlewares/IMiddleware";
import { RouterMiddleware } from "Shared/Interfaces/Web/Middlewares/RouterMiddleware";
import { HealthCheckRoute } from "Shared/Interfaces/Web/Routes/HealthCheck/HealthCheckRoute";
import { Mediator } from "Shared/Application/Contracts/Mediator";
import { IMediator } from "Shared/Application/Contracts/IMediator";
import { AccountServiceProvider } from "Account/Interfaces/DI/AccountProvider";

export class ServiceProvider {
  public static createContainer(): Container {
    const container = new Container();

    AccountServiceProvider.register(container);

    container.bind<HealthCheckRoute>(Types.HealthCheckRoute).to(HealthCheckRoute);
    container.bind<IMiddleware>(Types.RouterMiddleware).to(RouterMiddleware);
    container.bind<HttpServer>(Types.HttpServer).to(HttpServer);
    container.bind<IMediator>(Types.Mediator).to(Mediator);
    container.bind<Container>(Types.Container).toConstantValue(container);

    return container;
  }
}
