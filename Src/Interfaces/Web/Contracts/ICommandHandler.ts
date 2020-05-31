import { IRequest } from "Interfaces/Web/Contracts/IRequest";

export interface ICommandHandler<R> {
  handle(command: IRequest): Promise<R>;
}
