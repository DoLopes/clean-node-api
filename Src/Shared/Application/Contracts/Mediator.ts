import { Container as ContainerInstance, inject, injectable } from "inversify";
import { IMediator } from "Shared/Application/Contracts/IMediator";
import { Container } from "Shared/Interfaces/DI/Types";
import { IHandler } from "Shared/Application/Contracts/IHandler";

@injectable()
export class Mediator implements IMediator {
  public constructor(@inject(Container) private readonly container: ContainerInstance) {}

  public async send<R>(query: object): Promise<R> {
    const handlerName = Symbol.for(`${query.constructor.name}Handler`);

    const handler = this.container.get<IHandler<R>>(handlerName);

    return handler.handle(query);
  }
}
