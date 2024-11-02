import { expect, test } from "vitest";
import { analyseArray } from "./analyse_array";

test("should return the average, min, max, and length of [1, 8, 3, 4, 2, 6]", () => {
  expect(analyseArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
