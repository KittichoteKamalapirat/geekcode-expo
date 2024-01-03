export const removeBTags = (input: string): string => {
  // Use a regular expression to match and replace <b> and <b/>
  const cleanedString = input.replace(/<b[^>]*>|<\/b>/g, "");
  return cleanedString;
};
