import { ApplicationEvents } from "Core/Result/ApplicationEvents";

export class ApplicationResult<T = object> {
  public readonly event: ApplicationEvents;

  public readonly message?: T;

  public constructor(event: ApplicationEvents, message?: T) {
    this.event = event;
    this.message = message;
  }
}