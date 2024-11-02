import { expect, test } from "vitest";
import { capitalise, reverseString, caesarCipher } from "./strings";

test("capitalises 'a quick brown fox' to 'A quick brown fox' ", () => {
  expect(capitalise("a quick brown fox")).toBe("A quick brown fox");
});

test("reverses 'A quick brown fox' to 'xof nworb kciuq A'", () => {
  expect(reverseString("A quick brown fox")).toBe("xof nworb kciuq A");
});

test("Shifts each letter by a certain number, but not punctuation", () => {
  expect(caesarCipher("A quick brown fox!", 3)).toBe("D txlfn eurzq ira!");
});
