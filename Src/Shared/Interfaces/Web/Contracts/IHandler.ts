import { IRequest } from "Shared/Interfaces/Web/Contracts/IRequest";
import { ApplicationResult } from "Shared/Application/Entities/ApplicationResult";

export interface IHandler<R = ApplicationResult> {
  handle(query: IRequest): Promise<R>;
}
