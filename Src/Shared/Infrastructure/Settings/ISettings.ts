export interface ISettings {
  getDbDebug(): boolean;

  getDbHost(): string;

  getDbName(): string;

  getDbPassword(): string;

  getDbPort(): number;

  getDbUser(): string;
}
