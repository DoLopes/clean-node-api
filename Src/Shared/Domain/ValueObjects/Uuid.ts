import assert from "assert";

import { v4 } from "uuid";

export class Uuid {
  private static readonly pattern = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

  public constructor(private readonly identifier: string) {
    assert(Uuid.pattern.test(identifier), "Tried to assign an invalid UUID");
  }

  public static new(): Uuid {
    return new Uuid(v4());
  }

  public equals(uuid: Uuid): boolean {
    return this.toString() === uuid.toString();
  }

  public toString(): string {
    return this.identifier;
  }
}
