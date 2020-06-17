import { Option } from "Shared/Lib/StrictMonapt/Option";

export class Some<A> extends Option<A> {
  public get(): A {
    return this.option.get();
  }
}
