export const getTextBetweenBTags = (input: string): string | null => {
  const regex = /<b>(.*?)<\/b>/; // Regular expression to match text between <b> tags
  const match = regex.exec(input); // Execute the regex on the input string

  if (match && match.length >= 2) {
    return match[1]; // The first capturing group contains the text between <b> and </b>
  } else {
    return null; // Return null if no match is found
  }
};
