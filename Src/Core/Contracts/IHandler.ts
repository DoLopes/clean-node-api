import { ApplicationResult } from "Core/Result/ApplicationResult";

export interface IHandler<R = ApplicationResult> {
  handle(query: object): Promise<R>;
}
