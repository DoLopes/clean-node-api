import { Container } from "inversify";
import * as Types from "Shared/Interfaces/DI/Types";
import { HttpServer } from "Shared/Interfaces/Web/HttpServer";
import { Mediator } from "Shared/Application/Contracts/Mediator";
import { IMediator } from "Shared/Application/Contracts/IMediator";
import { AccountContainer } from "Account/Interfaces/DI/AccountContainer";

export class DIContainer {
  public static create(): Container {
    const container = new Container();

    AccountContainer.register(container);

    container.bind<HttpServer>(Types.HttpServer).to(HttpServer);
    container.bind<IMediator>(Types.Mediator).to(Mediator);
    container.bind<Container>(Types.Container).toConstantValue(container);

    return container;
  }
}
