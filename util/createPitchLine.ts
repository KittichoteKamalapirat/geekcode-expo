import { Kishimoto, Pitch } from "../types";

const uncountSyllables = "ぁぃぅぇぉゃゅょァィゥェォャュョ";

export const createPitchLine = (
  obj: Kishimoto,
  showParticle = false
): Pitch[] => {
  // convert to num just in case
  if (obj.accent === 0) return createHeibanPitchLine(obj, showParticle);
  if (obj.accent === 1) return createAtamaDakaPitchLine(obj, showParticle);
  if (obj.accent === obj.morae) return createOdakaPitchLine(obj, showParticle);
  return createNakadakaPitchLine(obj, showParticle);
};

const createHeibanPitchLine = (
  obj: Kishimoto,
  showParticle = false
): Pitch[] => {
  const word = obj.kana.split("").map((char, index) => {
    if (index === 0) {
      return lowPitch(char);
    }
    if (index === 1 && uncountSyllables.includes(char)) {
      return lowPitch(char);
    }
    return highPitch(char);
  });

  const particlePitch = highPitch("は");
  showParticle && word.push(particlePitch);
  return word;
};

const createAtamaDakaPitchLine = (
  obj: Kishimoto,
  showParticle = false
): Pitch[] => {
  const word = obj.kana.split("").map((char, index) => {
    if (index === 0) {
      const pitch: Pitch = highPitch(char);
      return pitch;
    }
    // ex. 主婦（しゅふ）
    if (index === 1 && uncountSyllables.includes(char)) {
      const pitch: Pitch = highPitch(char);
      return pitch;
    }
    const pitch: Pitch = lowPitch(char);
    return pitch;
  });

  const particlePitch = lowPitch("は");
  showParticle && word.push(particlePitch);
  return word;
};

const createOdakaPitchLine = (
  obj: Kishimoto,
  showParticle = false
): Pitch[] => {
  const word = obj.kana.split("").map((char, index) => {
    if (index === 0) {
      const pitch: Pitch = lowPitch(char);
      return pitch;
    }
    if (index === 1 && uncountSyllables.includes(char)) {
      const pitch: Pitch = lowPitch(char);
      return pitch;
    }
    const pitch: Pitch = highPitch(char);
    return pitch;
  });

  const particlePitch = lowPitch("は");
  showParticle && word.push(particlePitch);
  return word;
};

const createNakadakaPitchLine = (
  obj: Kishimoto,
  showParticle = false
): Pitch[] => {
  let uncountSyllablesNum = 0;
  const word = obj.kana.split("").map((char, index) => {
    if (uncountSyllables.includes(char)) {
      uncountSyllablesNum++;
    }
    // しょうがくせい
    if (uncountSyllables.includes(char) && index === 1) {
      return lowPitch(char);
    }

    if (index === 0) {
      const pitch: Pitch = lowPitch(char);
      return pitch;
    }
    if (index < obj.accent + uncountSyllablesNum) {
      // high until accent because accent indicates where pitch will fall (next one)
      const pitch: Pitch = highPitch(char);
      return pitch;
    }
    const pitch: Pitch = lowPitch(char);
    return pitch;
  });

  const particlePitch = lowPitch("は");
  showParticle && word.push(particlePitch);
  return word;
};

const lowPitch = (part: string) => ({ high: false, part });
const highPitch = (part: string) => ({ high: true, part });

// for border left
// type = 0 (heiban) => pitch changes at index = 1
// type = 1 (atamaDaka) => pitch changes at index = 1
// type = oDaka => pitch changes at index = 1 and  n (partical)
// type = nakaDaka => pitch changes at index = 1 and type
export const getPitchChangesIndex = (obj: Kishimoto) => {
  const { accent, kana } = obj;
  if (accent === 0 || accent == 1) return [1];
  if (accent === kana.length) return [1, kana.length];
  return [1, accent];
};
