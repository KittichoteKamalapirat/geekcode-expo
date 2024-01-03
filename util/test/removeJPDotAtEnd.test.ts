import { removeJPDotAtEnd } from "../removeJPDotAtEnd";

describe("removeJPDotAtEnd", () => {
  it("removes a dot at the end of a sentence", () => {
    const sentenceWithDot = "This is a sentence with a dot。";
    const result = removeJPDotAtEnd(sentenceWithDot);
    expect(result).toBe("This is a sentence with a dot");
  });

  it("does not remove a dot if it is not at the end of a sentence", () => {
    const sentenceWithoutDot = "This is a sentence without a dot";
    const result = removeJPDotAtEnd(sentenceWithoutDot);
    expect(result).toBe("This is a sentence without a dot");
  });

  it("handles empty string input", () => {
    const emptyString = "";
    const result = removeJPDotAtEnd(emptyString);
    expect(result).toBe("");
  });

  it("handles sentences with multiple dots at the end", () => {
    const sentenceWithMultipleDots = "Sentence with multiple dots。。。。";
    const result = removeJPDotAtEnd(sentenceWithMultipleDots);
    expect(result).toBe("Sentence with multiple dots。。。");
  });
});
