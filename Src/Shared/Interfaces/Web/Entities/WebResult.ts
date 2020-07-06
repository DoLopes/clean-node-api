import { HttpStatusCode } from "Shared/Interfaces/Web/Enums/HttpStatusCode";
import { ApplicationResult } from "Shared/Application/Entities/ApplicationResult";
import { ApplicationEvents } from "Shared/Application/Enums/ApplicationEvents";
import { MappingEvents } from "Shared/Interfaces/Web/Enums/MappingEvents";
import { IApplicationMessage } from "Shared/Application/Contracts/IApplicationMessage";
import { INVALID_REQUEST_SCHEMA } from "Shared/Application/Enums/ApplicationMessages";

export class WebResult {
  public constructor(public applicationResult: ApplicationResult) {}

  public static invalidRequest(errors: unknown[]): IApplicationMessage {
    return {
      code: INVALID_REQUEST_SCHEMA.code,
      message: INVALID_REQUEST_SCHEMA.message,
      items: errors,
    };
  }

  public getStatusCode(): HttpStatusCode {
    if (this.isEventSuccess() && this.notHasMessage()) {
      return HttpStatusCode.NO_CONTENT;
    }

    return MappingEvents[this.applicationResult.event];
  }

  public getBody(): IApplicationMessage | undefined {
    return this.applicationResult.message;
  }

  private isEventSuccess() {
    return this.applicationResult.event === ApplicationEvents.SUCCESS;
  }

  private notHasMessage():boolean {
    return this.applicationResult.message === undefined;
  }
}
