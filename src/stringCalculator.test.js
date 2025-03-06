const add = require("./stringCalculator");

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("returns the number itself for single input", () => {
  expect(add("1")).toBe(1);
  expect(add("2")).toBe(2);
});

test("returns sum of two numbers", () => {
  expect(add("1,2")).toBe(3);
  expect(add("4,5")).toBe(9);
});

test("handles new lines as delimiter along with commas", () => {
  expect(add("1\n2,3")).toBe(6);
  expect(add("4\n5\n,6")).toBe(15);
});

test("supports different delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
  expect(add("//:\n4:5:6")).toBe(15);
});

test("throws error for negative numbers", () => {
  expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed -2");
});

test("shows all negative numbers in error message", () => {
  expect(() => add("1,-1,-2,-3")).toThrow("negative numbers not allowed -1,-2,-3");
});