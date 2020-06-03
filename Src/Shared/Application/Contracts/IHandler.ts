import { ApplicationResult } from "Shared/Application/Entities/ApplicationResult";

export interface IHandler<R = ApplicationResult> {
  handle(query: object): Promise<R>;
}
