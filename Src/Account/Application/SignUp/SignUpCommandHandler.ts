import { injectable } from "inversify";
import { ApplicationResult } from "Shared/Application/Entities/ApplicationResult";
import { ApplicationEvents } from "Shared/Application/Enums/ApplicationEvents";
import { SignUpCommand } from "Account/Application/SignUp/SignUpCommand";

@injectable()
export class SignUpCommandHandler {
  public async handle(command: SignUpCommand): Promise<ApplicationResult> {
    // eslint-disable-next-line no-console
    console.log(command);

    return new ApplicationResult(ApplicationEvents.SUCCESS);
  }
}
