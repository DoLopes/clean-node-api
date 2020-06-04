import { Container } from "inversify";
import * as Types from "Types";
import { HttpServer } from "Server/HttpServer";
import { Mediator } from "Core/Contracts/Mediator";
import { IMediator } from "Core/Contracts/IMediator";
import { AccountServiceProvider } from "Account/Interfaces/DI/AccountServiceProvider";

export class ServiceProvider {
  public static createContainer(): Container {
    const container = new Container();

    AccountServiceProvider.register(container);

    container.bind<HttpServer>(Types.HttpServer).to(HttpServer);
    container.bind<IMediator>(Types.Mediator).to(Mediator);
    container.bind<Container>(Types.Container).toConstantValue(container);

    return container;
  }
}
