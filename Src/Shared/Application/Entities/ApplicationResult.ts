import { ApplicationEvents } from "Shared/Application/Enums/ApplicationEvents";
import { IApplicationMessage } from "Shared/Application/Contracts/IApplicationMessage";

export class ApplicationResult {
  public constructor(
    public readonly event: ApplicationEvents,
    public readonly message?: IApplicationMessage,
  ) {}
}
