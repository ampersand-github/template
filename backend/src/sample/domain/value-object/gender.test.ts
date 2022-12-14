import { Gender, GenderType } from "src/sample/domain/value-object/gender";

describe("Gender", (): void => {
  test("オブジェクトを生成できる", () => {
    const actual = new Gender({ value: GenderType.male });
    expect(actual.value).toStrictEqual(GenderType.male);
  });
});
