import { IRequest } from "Interfaces/Web/Contracts/IRequest";

export interface IMediator {
  send<R>(query: IRequest): Promise<R>;
}
