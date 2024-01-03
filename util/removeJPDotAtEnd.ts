export const removeJPDotAtEnd = (sentence: string): string => {
  // Check if the sentence ends with a dot
  if (sentence.endsWith("。")) {
    // Remove the dot at the end and return the modified sentence
    return sentence.slice(0, -1);
  } else {
    // If there is no dot at the end, return the original sentence
    return sentence;
  }
};
