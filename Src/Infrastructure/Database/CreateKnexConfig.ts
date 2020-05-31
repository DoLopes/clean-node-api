import Knex from "knex";
import { Settings } from "Infrastructure/Settings/Settings";

const settings = new Settings();

export const createKnexConfig = (): Knex.Config => ({
  client: "pg",
  connection: {
    database: settings.getDbName(),
    host: settings.getDbHost(),
    password: settings.getDbPassword(),
    port: settings.getDbPort(),
    user: settings.getDbUser(),
  },
  debug: settings.getDbDebug(),
});
