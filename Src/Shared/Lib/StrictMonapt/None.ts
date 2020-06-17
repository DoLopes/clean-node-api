import { Option as MonaptOption } from "monapt";
import { Option } from "Shared/Lib/StrictMonapt/Option";

export class None<A> extends Option<A> {
  public throw(): never {
    throw new MonaptOption.NoSuchElementError();
  }
}
