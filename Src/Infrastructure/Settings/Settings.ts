import { ISettings } from "Infrastructure/Settings/ISettings";
import { Nullable } from "Infrastructure/Helpers/Nullable";

export class Settings implements ISettings {
  public getDbDebug(): boolean {
    return this.isPropertyTrue("DATABASE_DEBUG");
  }

  public getDbHost(): string {
    return this.assertAndReturnSetting("DATABASE_HOST");
  }

  public getDbName(): string {
    return this.assertAndReturnSetting("DATABASE_NAME");
  }

  public getDbPassword(): string {
    return this.assertAndReturnSetting("DATABASE_PASSWORD");
  }

  public getDbPort(): number {
    return this.assertAndReturnNumberSetting("DATABASE_PORT");
  }

  public getDbUser(): string {
    return this.assertAndReturnSetting("DATABASE_USER");
  }

  private assertAndReturnNumberSetting(settingName: string): number {
    const setting = this.assertAndReturnSetting(settingName);

    return Number(setting);
  }

  private assertAndReturnSetting(settingName: string): string {
    return Nullable.getValueOrThrow(
      process.env[settingName], `You need to configure the environment variable ${settingName}`
    );
  }

  private isPropertyTrue(property: string): boolean {
    return this.assertAndReturnSetting(property) === "true";
  }
}
