import { describe, it, expect } from "vitest";
import { add } from "../src/add";

describe("Test add function", () => {
  it("should add two positive numbers", () => {
    // Arrange
    const a = 1;
    const b = 2;
    const expected = 3;

    // Act
    const result = add(a, b);

    // Assert
    expect(result).toBe(expected);
  });

  it("should add two negative numbers", () => {
    const x = -5;
    const y = -6;
    const expected = -11;

    const res = add(x, y);

    expect(res).toBe(expected);
  });

  it("should add a positive and a negative number", () => {
    const firstNum = -7;
    const secondNum = 10;
    const expected = 3;

    const res = add(firstNum, secondNum);

    expect(res).toBe(expected);
  });

  it("should add two numbers with decimals", () => {
    const firstNum = 3.5;
    const secondNum = 2.5;
    const expected = 6;

    const res = add(firstNum, secondNum);

    expect(res).toBe(expected);
  });
});
