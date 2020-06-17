import { Option as MonaptOption } from "monapt";
import { None } from "Shared/Lib/StrictMonapt/None";
import { Some } from "Shared/Lib/StrictMonapt/Some";

export abstract class Option<A> {
  protected option: MonaptOption<A>;

  public constructor(option: MonaptOption<A>) {
    this.option = option;
  }

  public isDefined(this: Option<A>): this is Some<A> {
    return this.option.isDefined;
  }

  public isEmpty(this: Option<A>): this is None<A> {
    return this.option.isEmpty;
  }

  public getOrElse<B>(defaultValue: () => B): B {
    return this.option.getOrElse(defaultValue);
  }

  public unwrap(): A | undefined {
    return this.option.getOrElse((): A | undefined => undefined);
  }
}
