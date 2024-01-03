import { isJapaneseCharacter } from "../isJapaneseCharacter";

describe("isJapaneseCharacter", () => {
  it("should return true for Japanese characters (Hiragana)", () => {
    const japaneseCharacters = `あいうえお
    かきくけこ
    さしすせそ
    たちつてと
    なにぬねの
    はひふへほ
    まみむめも
    やゆよ
    らりるれろ
    わをん
    がぎぐげご
    ざじずぜぞ
    だぢづでど
    ばびぶべぼ
    ぱぴぷぺぽ
    ぁぃぅぇぉ
    ゃゅょ
    っ
    ゐゑ
    `;

    // replace tab, newline, return, whitespace because I added it just to it's easy to read
    for (const char of japaneseCharacters.replace(/[\t\n\r\s]+/g, "")) {
      expect(isJapaneseCharacter(char)).toBe(true);
    }
  });

  it("should return true for Japanese characters (Katakana)", () => {
    const japaneseCharacters = `
    アイウエオ
    カキクケコ
    サシスセソ
    タチツテト
    ナニヌネノ
    ハヒフヘホ
    マミムメモ
    ヤユヨ
    ラリルレロ
    ワヲン
    ガギグゲゴ
    ザジズゼゾ
    ダヂヅデド
    バビブベボ
    パピプペポ
    ァィゥェォ
    ャュョ
    ヴ
    ヵ
    ヶ
    ヮ
    `;
    for (const char of japaneseCharacters.replace(/[\t\n\r\s]+/g, "")) {
      expect(isJapaneseCharacter(char)).toBe(true);
    }
  });

  it.only("should return true for Japanese characters (Others)", () => {
    const japaneseCharacters = `
    。、！？ ー ・ 「 」 『 』
    １２３４５６７８９０一二十
    `;
    for (const char of japaneseCharacters.replace(/[\t\n\r\s]+/g, "")) {
      expect(isJapaneseCharacter(char)).toBe(true);
    }
  });
  it("should return true for Japanese characters (Kanji)", () => {
    const japaneseCharacters = `
    日本語龠`;
    for (const char of japaneseCharacters.replace(/[\t\n\r\s]+/g, "")) {
      expect(isJapaneseCharacter(char)).toBe(true);
    }
  });

  it("should return true for Japanese characters", () => {
    const japaneseCharacters = "私の名前はたかしです。";
    for (const char of japaneseCharacters.replace(/[\t\n\r\s]+/g, "")) {
      expect(isJapaneseCharacter(char)).toBe(true);
    }
  });

  it("should return false for non-Japanese characters", () => {
    const nonJapaneseCharacters = "My name is Takashi.";
    for (const char of nonJapaneseCharacters) {
      expect(isJapaneseCharacter(char)).toBe(false);
    }
  });
});
