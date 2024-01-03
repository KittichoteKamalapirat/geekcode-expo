// Import the removeBTags function from your TypeScript file

import { removeBTags } from "../removeBTags";

describe("removeBTags function", () => {
  it("removes <b> and <b/> tags from the input string", () => {
    const inputString = "My name is <b>shane<b/> and I like programming.";
    const expectedOutput = "My name is shane and I like programming.";

    const result = removeBTags(inputString);

    expect(result).toBe(expectedOutput);
  });

  it("handles multiple occurrences of <b> and <b/> tags", () => {
    const inputString =
      "This is a <b>test<b/> sentence with <b>multiple<b/> tags.";
    const expectedOutput = "This is a test sentence with multiple tags.";

    const result = removeBTags(inputString);

    expect(result).toBe(expectedOutput);
  });

  it("handles empty input string", () => {
    const inputString = "";
    const expectedOutput = "";

    const result = removeBTags(inputString);

    expect(result).toBe(expectedOutput);
  });

  it("handles input without <b> and <b/> tags", () => {
    const inputString = "This is a plain sentence with no tags.";
    const expectedOutput = "This is a plain sentence with no tags.";

    const result = removeBTags(inputString);

    expect(result).toBe(expectedOutput);
  });
});
