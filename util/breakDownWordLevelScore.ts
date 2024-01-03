import { WordLevelScore } from "../types";

export const breakDownWordLevelScore = (
  wordLevelScores: WordLevelScore[]
): WordLevelScore[] => {
  const result: WordLevelScore[] = [];
  wordLevelScores.forEach((item) => {
    if (item.word.length === 1) {
      result.push(item);
    } else {
      item.word.split("").forEach((char) => {
        const newChar = { word: char, confidence: item.confidence };
        result.push(newChar);
      });
    }
  });

  return result;
};
