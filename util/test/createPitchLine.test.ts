import { Kishimoto } from "../../types";
import { createPitchLine } from "../createPitchLine";

describe("cretePitchLine", () => {
  test("returns correct heiban", () => {
    const heibanExample: Kishimoto = {
      id: 32799,
      word: "お早う",
      kana: "おはよう",
      romaji: "ohayou",
      accent: 0,
      morae: 4,
    };

    const returnedValue = createPitchLine(heibanExample, true);
    const expectedResult = [
      {
        high: false,
        part: "お",
      },
      {
        high: true,
        part: "は",
      },
      {
        high: true,
        part: "よ",
      },
      {
        high: true,
        part: "う",
      },
      {
        high: true,
        part: "は",
      },
    ];

    expect(returnedValue).toEqual(expectedResult);
  });
  test("returns correct atamaData", () => {
    const atamaDakaExample: Kishimoto = {
      id: 6712,
      word: "雨",
      kana: "あめ",
      romaji: "ame",
      accent: 1,
      morae: 2,
    };

    const returnedValue = createPitchLine(atamaDakaExample, true);
    const expectedResult = [
      {
        high: true,
        part: "あ",
      },
      {
        high: false,
        part: "め",
      },
      {
        high: false,
        part: "は",
      },
    ];

    expect(returnedValue).toEqual(expectedResult);
  });
  test("returns correct atamaData with small yu", () => {
    const atamaDakaExample: Kishimoto = {
      id: 6712,
      word: "主婦",
      kana: "しゅふ",
      romaji: "shufu",
      accent: 1,
      morae: 2,
    };

    const returnedValue = createPitchLine(atamaDakaExample, true);
    const expectedResult = [
      {
        high: true,
        part: "し",
      },
      {
        high: true,
        part: "ゅ",
      },
      {
        high: false,
        part: "ふ",
      },
      {
        high: false,
        part: "は",
      },
    ];

    expect(returnedValue).toEqual(expectedResult);
  });
  test("returns correct oDaka", () => {
    const oDakaExample: Kishimoto = {
      id: 9708,
      word: "家",
      kana: "いえ",
      romaji: "ie",
      accent: 2,
      morae: 2,
    };

    const returnedValue = createPitchLine(oDakaExample, true);
    const expectedResult = [
      {
        high: false,
        part: "い",
      },
      {
        high: true,
        part: "え",
      },
      {
        high: false,
        part: "は",
      },
    ];

    expect(returnedValue).toEqual(expectedResult);
  });
  test("returns correct nakaDaka", () => {
    const nakaDakaExample: Kishimoto = {
      id: 29813,
      word: "お菓子",
      kana: "おかし",
      romaji: "okashi",
      accent: 2,
      morae: 3,
    };

    const returnedValue = createPitchLine(nakaDakaExample, true);
    const expectedResult = [
      {
        high: false,
        part: "お",
      },
      {
        high: true,
        part: "か",
      },
      {
        high: false,
        part: "し",
      },
      {
        high: false,
        part: "は",
      },
    ];

    expect(returnedValue).toEqual(expectedResult);
  });

  test("returns correct nakaDaka with uncountedSyllables", () => {
    const nakaDakaExample: Kishimoto = {
      id: 29813,
      word: "小学生",
      kana: "しょうがくせい",
      eng: "elementary school student",
      romaji: "shougakusei",
      accent: 3,
      morae: 6,
    };

    const returnedValue = createPitchLine(nakaDakaExample, true);
    const expectedResult = [
      {
        high: false,
        part: "し",
      },
      {
        high: false,
        part: "ょ",
      },
      {
        high: true,
        part: "う",
      },
      {
        high: true,
        part: "が",
      },
      {
        high: false,
        part: "く",
      },
      {
        high: false,
        part: "せ",
      },
      {
        high: false,
        part: "い",
      },
      {
        high: false,
        part: "は",
      },
    ];

    expect(returnedValue).toEqual(expectedResult);
  });
});
