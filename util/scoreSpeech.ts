import { GradeSpeech, Kishimoto } from "../types";

interface Args {
  kishimoto: Kishimoto;
  gradeSpeech: GradeSpeech;
  isSentence: boolean;
}
export const scoreSpeech = ({
  kishimoto,
  gradeSpeech,
  isSentence,
}: Args): number => {
  // if sentence, check whether the transcript contains the word

  if (isSentence) {
    if (
      gradeSpeech.transcript.includes(kishimoto.kana) ||
      gradeSpeech.transcript.includes(kishimoto.word)
    ) {
      return gradeSpeech.confidence;
    }
    return 0;
  }

  // if word, check 4 ways
  const score =
    [kishimoto.kana, kishimoto.word].includes(gradeSpeech.transcript) ||
    [kishimoto.kana, kishimoto.word].includes(gradeSpeech?.transcriptKana || "")
      ? gradeSpeech.confidence
      : 0;

  return score;
};
