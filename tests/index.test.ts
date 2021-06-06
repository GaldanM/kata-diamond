import diamond from "../src/diamond";

describe("diamond", () => {
  it("a should work", () => {
    const input = "A";

    const result = diamond(input);

    expect(result).toStrictEqual("A");
  });
  it("b should work", () => {
    const input = "B";

    const result = diamond(input);

    const expectedResult = [" A", "B B", " A"].join("\n");
    expect(result).toStrictEqual(expectedResult);
  });
  it("c should work", () => {
    const input = "C";

    const result = diamond(input);

    const expectedResult = ["  A", " B B", "C   C", " B B", "  A"].join("\n");
    expect(result).toStrictEqual(expectedResult);
  });
  it("d should work", () => {
    const input = "D";

    const result = diamond(input);

    const expectedResult = ["   A", "  B B", " C   C", "D     D", " C   C", "  B B", "   A"].join("\n");
    expect(result).toStrictEqual(expectedResult);
  });
});
