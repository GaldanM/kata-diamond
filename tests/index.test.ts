import diamond from "../src/diamond";

describe("diamond", () => {
  it("a should work", () => {
    const input = "A";

    const result = diamond(input);

    expect(result).toStrictEqual("A");
  });
});
