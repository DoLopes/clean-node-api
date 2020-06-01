import { IRequest } from "Interfaces/Web/Contracts/IRequest";
import { ApplicationResult } from "Application/Entities/ApplicationResult";

export interface IHandler<R = ApplicationResult> {
  handle(query: IRequest): Promise<R>;
}
