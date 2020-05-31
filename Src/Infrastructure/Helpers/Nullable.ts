export class Nullable {
  public static getValueOrThrow<T>(nullableValue?: T | null, errorMessage?: string): T {
    if (!Nullable.hasValue(nullableValue)) {
      throw new Error(errorMessage ?? "Value is undefined or null");
    }

    return nullableValue;
  }

  public static getValueOrDefault<T>(defaultValue: T, nullableValue?: T | null): T {
    if (!Nullable.hasValue(nullableValue)) {
      return defaultValue;
    }

    return nullableValue;
  }

  public static hasValue<T>(nullableValue?: T | null): nullableValue is T {
    return nullableValue !== undefined && nullableValue !== null;
  }

  public static notHasValue<T>(nullableValue?: T | null): nullableValue is null | undefined {
    return !Nullable.hasValue(nullableValue);
  }
}
