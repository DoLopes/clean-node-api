import { HttpStatusCode } from "Shared/Interfaces/Web/Enums/HttpStatusCode";
import { ApplicationEvents } from "Shared/Application/Enums/ApplicationEvents";

export const MappingEvents = {
  [ApplicationEvents.SUCCESS]: HttpStatusCode.SUCCESS,
  [ApplicationEvents.SUCCESS_CREATED]: HttpStatusCode.CREATED,
  [ApplicationEvents.INVALID_EXECUTION]: HttpStatusCode.BAD_REQUEST_ERROR,
  [ApplicationEvents.NOT_FOUND]: HttpStatusCode.NOT_FOUND_ERROR,
  [ApplicationEvents.RETRY_WORKFLOW]: HttpStatusCode.INTERNAL_SERVER_ERROR,
  [ApplicationEvents.ERROR]: HttpStatusCode.INTERNAL_SERVER_ERROR,
  [ApplicationEvents.CONFLICT]: HttpStatusCode.CONFLICT,
  [ApplicationEvents.NOT_ALLOWED]: HttpStatusCode.FORBIDDEN,
  [ApplicationEvents.DEFAULT_OUTPUT]: HttpStatusCode.SUCCESS,
};
