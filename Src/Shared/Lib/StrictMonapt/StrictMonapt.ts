import { Option as MonaptOption } from "monapt";
import { None as None_ } from "Shared/Lib/StrictMonapt/None";
import { Some } from "Shared/Lib/StrictMonapt/Some";

type OptionType<A> = Some<A> | None_<A>;

const None = <A>(): None_<A> => new None_(MonaptOption<A>(undefined));

const Option = <A>(value?: A | null): OptionType<A> => {
  if (value === undefined || value === null) {
    return None();
  }

  return new Some(MonaptOption(value));
};

export { None, Option };
