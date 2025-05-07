import { describe, expect, it } from "vitest";
import { calculateTotal } from "./calculateTotal";

describe("calculateTotal", () => {
  it("should work with newlines", () => {
    expect(calculateTotal("100\n200")).toBe(300);
    expect(calculateTotal("100\n200\n300")).toBe(600);
  });

  it("handles whitespace", () => {
    expect(calculateTotal("100, 200, 300")).toBe(600);
  });

  it("handles empty string", () => {
    expect(calculateTotal("")).toBe(0);
  });

  it("handles invalid inputs", () => {
    expect(calculateTotal("abc,100,def")).toBe(100);
  });

  it("handles trailing comma", () => {
    expect(calculateTotal("100,200,")).toBe(300);
  });
});
