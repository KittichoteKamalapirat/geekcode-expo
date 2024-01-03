const regex =
  /[一-龠]+|[ぁ-ゔ]+|[ァ-ヴー]+|[々〆〤ヶヵ]|[。、！？ー・「」『』]|[０-９]/u;

export const isJapaneseCharacter = (char: string) => regex.test(char);
