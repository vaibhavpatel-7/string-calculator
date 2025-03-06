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
