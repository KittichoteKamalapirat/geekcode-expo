import { green, grey500, grey900, red, yellow } from "../theme/style";

interface PronunciationFeedback {
  text: string;
  textColor: string;
}

export const getFeedbackColorClassName = (score?: number) => {
  if (!score && score !== 0) return grey900;
  if (score > 80) return green;
  if (score > 60) return yellow;
  if (score > 40) return red;

  return red;
};
export const getFeedbackColorClassNameTW = (score?: number) => {
  if (!score && score !== 0) return grey900;
  if (score > 80) return "text-green";
  if (score > 60) return "text-yellow";
  if (score > 40) return "text-red";

  return red;
};

export const getFeedbackAsWord = (score: number): PronunciationFeedback => {
  const textColor = getFeedbackColorClassName(score);
  if (score > 90) return { text: "Excellent", textColor };
  if (score > 80) return { text: "Good", textColor };
  if (score > 60) return { text: "Okay", textColor };
  return { text: "Poor", textColor };
};
