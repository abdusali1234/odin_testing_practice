import { expect, test, describe, beforeEach } from "vitest";
import { Calculator } from "./calculator";

describe("Calculator", () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });

  test("Calculator.add(7,4) returns 7 + 4= 11", () => {
    expect(calculator.add(7, 4)).toBe(11);
  });

  test("Calculator.subtract(7,4) returns 7 - 4= 3", () => {
    expect(calculator.subtract(7, 4)).toBe(3);
  });

  test("Calculator.multiply(7,4) returns 7 * 4= 28", () => {
    expect(calculator.multiply(7, 4)).toBe(28);
  });

  test("Calculator.divide(7,4) returns 7 / 4=1.75", () => {
    expect(calculator.divide(7, 4)).toBe(1.75);
  });

  test("division by 0 should return infinity", () => {
    expect(calculator.divide(7, 0)).toBe(Infinity);
  });
});
