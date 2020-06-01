import { injectable } from "inversify";
import { ApplicationResult } from "Application/Entities/ApplicationResult";
import { ApplicationEvents } from "Application/Enums/ApplicationEvents";
import { SignUpCommand } from "Application/Commands/SignUp/SignUpCommand";

@injectable()
export class SignUpCommandHandler {
  public async handle(command: SignUpCommand): Promise<ApplicationResult> {
    // eslint-disable-next-line no-console
    console.log(command);

    return new ApplicationResult(ApplicationEvents.SUCCESS);
  }
}
