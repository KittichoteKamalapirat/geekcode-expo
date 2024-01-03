import { getTextBetweenBTags } from "../getTextBetweenBTags";

describe("getTextBetweenBTags", () => {
  it("should extract text between <b> tags", () => {
    const input = "My name is <b>Shane</b>";
    const expected = "Shane";
    const result = getTextBetweenBTags(input);
    expect(result).toEqual(expected);
  });

  it("should return null if no <b> tags are present", () => {
    const input = "My name is Shane";
    const result = getTextBetweenBTags(input);
    expect(result).toBeNull();
  });

  it("should handle multiple <b> tags and return the text from the first one", () => {
    const input = "My name is <b>Shane</b>, and I like <b>programming</b>.";
    const expected = "Shane";
    const result = getTextBetweenBTags(input);
    expect(result).toEqual(expected);
  });
});
