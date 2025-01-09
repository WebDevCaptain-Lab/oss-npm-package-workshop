import { describe, it, expect } from "vitest";

describe("Test add function", () => {
  it("should add two positive numbers", () => {
    // Arrange
    const a = 1;
    const b = 2;
    const expected = 3;

    // Act
    const result = a + b;

    // Assert
    expect(result).toBe(expected);
  });
});
