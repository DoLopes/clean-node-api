import { Container as ContainerInstance, inject, injectable } from "inversify";
import { IMediator } from "Interfaces/Web/Contracts/IMediator";
import { Container } from "Interfaces/DI/Types";
import { IRequest } from "Interfaces/Web/Contracts/IRequest";
import { ICommandHandler } from "Interfaces/Web/Contracts/ICommandHandler";

@injectable()
export class Mediator implements IMediator {
  @inject(Container)
  private readonly container!: ContainerInstance;

  public async send<R>(query: IRequest): Promise<R> {
    const handlerName = Symbol.for(`${query.constructor.name}Handler`);

    const handler = this.container.get<ICommandHandler<R>>(handlerName);

    return handler.handle(query);
  }
}
