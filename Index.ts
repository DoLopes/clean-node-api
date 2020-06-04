import "reflect-metadata";

import * as Types from "Types";
import { DIContainer } from "DIContainer";
import { HttpServer } from "Server/HttpServer";

const port = process.env.PORT ?? "3000";

const container = DIContainer.create();

const server = container.get<HttpServer>(Types.HttpServer).create();

server.listen(port, (): void => {
  // eslint-disable-next-line no-console
  console.log(`Application listening on port ${port}`);
});
