import { ApplicationMessageCodes } from "Shared/Application/Enums/ApplicationMessageCodes";

export interface IApplicationMessage {
  code: ApplicationMessageCodes;
  items?: unknown[];
  message: string;
}
