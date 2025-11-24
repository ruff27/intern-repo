const sum = require('../sum');

describe("sum()", () => {
  test("adds two numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("handles negative values", () => {
    expect(sum(-5, 2)).toBe(-3);
  });

  test("returns NaN for invalid inputs", () => {
    expect(sum("a", 3)).toBeNaN();
  });
});
