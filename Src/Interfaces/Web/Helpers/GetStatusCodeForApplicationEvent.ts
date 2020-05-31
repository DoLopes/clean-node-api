import { ApplicationResult } from "Application/Entities/ApplicationResult";
import { ApplicationEvents } from "Application/Enums/ApplicationEvents";
import { HttpStatusCode } from "Interfaces/Web/Enums/HttpStatusCode";

const mapping = {
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

export const getStatusCodeForApplicationEvent = (applicationResult: ApplicationResult): HttpStatusCode => {
  if (applicationResult.event === ApplicationEvents.SUCCESS && applicationResult.message === undefined) {
    return HttpStatusCode.NO_CONTENT;
  }

  return mapping[applicationResult.event];
};
