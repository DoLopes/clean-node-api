import "reflect-metadata";

import * as Types from "Shared/Interfaces/DI/Types";
import { ServiceProvider } from "Shared/Interfaces/DI/ServiceProvider";
import { HttpServer } from "Shared/Interfaces/Web/HttpServer";

const port = process.env.PORT ?? "3000";

const container = ServiceProvider.createContainer();

const server = container.get<HttpServer>(Types.HttpServer).create();

server.listen(port, (): void => {
  // eslint-disable-next-line no-console
  console.log(`Application listening on port ${port}`);
});
