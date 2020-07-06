import { ApplicationMessageCodes } from "Shared/Application/Enums/ApplicationMessageCodes";
import { IApplicationMessage } from "Shared/Application/Contracts/IApplicationMessage";

export const INVALID_REQUEST_SCHEMA: IApplicationMessage = {
  code: ApplicationMessageCodes.INVALID_REQUEST_SCHEMA,
  message: "Invalid request schema",
};
