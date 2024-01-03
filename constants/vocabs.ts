interface VocabByTheme {
  kana: string;
  word: string;
  meaning: string;
  isSentence?: boolean;
}

export interface VocabDeck {
  theme: string;
  emoji: string;
  vocabs: VocabByTheme[];
  isProFeature: boolean;
  day: number;
}

const aboutYear: VocabByTheme[] = [
  {
    word: "一昨年",
    kana: "おととし",
    meaning: "two years ago",
  },
  { word: "去年", kana: "きょねん", meaning: "last year" },
  { word: "今年", kana: "ことし", meaning: "this year" },
  { word: "来年", kana: "らいねん", meaning: "next year" },
  {
    word: "再来年",
    kana: "さらいねん",
    meaning: "two years later",
  },
  { word: "新年", kana: "しんねん", meaning: "new year" },
  {
    word: "毎年",
    kana: "まいとし",
    meaning: "every year",
  },
  {
    word: "半年",
    kana: "はんとし",
    meaning: "half a year",
  },
  {
    word: "近年",
    kana: "きんねん",
    meaning: "recent years",
  },
  {
    word: "年末",
    kana: "ねんまつ",
    meaning: "end of the year",
  },
];

const aboutSeason: VocabByTheme[] = [
  { word: "季節", kana: "きせつ", meaning: "season" },
  { word: "春", kana: "はる", meaning: "spring" },
  { word: "夏", kana: "なつ", meaning: "summer" },
  { word: "秋", kana: "あき", meaning: "fall; autumn" },
  { word: "冬", kana: "ふゆ", meaning: "winter" },
  // {
  //   word: "第二期",
  //   kana: "だいにき",
  //   meaning: "2nd season (of anime, drama)",
  // },
  {
    word: "春休み",
    kana: "はるやすみ",
    meaning: "spring vacation",
  },
  {
    word: "夏休み",
    kana: "なつやすみ",
    meaning: "summer vacation",
  },
  {
    word: "秋休み",
    kana: "あきやすみ",
    meaning: "fall vacation; autumn vacation",
  },
  {
    word: "冬休み",
    kana: "ふゆやすみ",
    meaning: "winter vacation",
  },
];

const aboutMonth: VocabByTheme[] = [
  {
    word: "先々月",
    kana: "せんせんげつ",
    meaning: "two months ago",
  },
  {
    word: "先月",
    kana: "せんげつ",
    meaning: "last month",
  },
  {
    word: "今月",
    kana: "こんげつ",
    meaning: "this month",
  },
  {
    word: "来月",
    kana: "らいげつ",
    meaning: "next month",
  },
  {
    word: "再来月",
    kana: "さらいげつ",
    meaning: "two months later",
  },
  {
    word: "毎月",
    kana: "まいつき",
    meaning: "every month",
  },
  {
    word: "何月",
    kana: "なんがつ",
    meaning: "what month",
  },
  // {
  //   word: "何ヶ月",
  //   kana: "なんかげつ",
  //   meaning: "how many months",
  // }, does not exist in db
  // {
  //   word: "三ヶ月前",
  //   kana: "さんかげつまえ",
  //   meaning: "three months ago",
  // },
  // {
  //   word: "三ヶ月後",
  //   kana: "さんかげつご",
  //   meaning: "three months later",
  // },
];

const month: VocabByTheme[] = [
  {
    word: "一月",
    kana: "いちがつ",
    meaning: "January",
  },
  {
    word: "二月",
    kana: "にがつ",
    meaning: "February",
  },
  {
    word: "三月",
    kana: "さんがつ",
    meaning: "March",
  },
  {
    word: "四月",
    kana: "しがつ",
    meaning: "April",
  },
  {
    word: "五月",
    kana: "ごがつ",
    meaning: "May",
  },
  {
    word: "六月",
    kana: "ろくがつ",
    meaning: "June",
  },

  {
    word: "七月",
    kana: "しちがつ",
    meaning: "July",
  },
  {
    word: "八月",
    kana: "はちがつ",
    meaning: "August",
  },
  {
    word: "九月",
    kana: "くがつ",
    meaning: "September",
  },
  {
    word: "十月",
    kana: "じゅうがつ",
    meaning: "October",
  },
  {
    word: "十一月",
    kana: "じゅういちがつ",
    meaning: "November",
  },
  {
    word: "十二月",
    kana: "じゅうにがつ",
    meaning: "December",
  },
];

const aboutWeek: VocabByTheme[] = [
  {
    word: "先々週",
    kana: "せんせんしゅう",
    meaning: "two weeks ago",
  },
  { word: "先週", kana: "せんしゅう", meaning: "last week" },
  { word: "今週", kana: "こんしゅう", meaning: "this week" },
  { word: "週末", kana: "しゅうまつ", meaning: "weekend" },
  // {
  //   word: "今週末",
  //   kana: "こんしゅうまつ",
  //   meaning: "this weekend",
  // },
  { word: "来週", kana: "らいしゅう", meaning: "next week" },
  {
    word: "再来週",
    kana: "さらいしゅう",
    meaning: "two weeks later",
  },
  { word: "平日", kana: "へいじつ", meaning: "weekdays" },
  { word: "毎週", kana: "まいしゅう", meaning: "every week" },
  // {
  //   word: "三週間前",
  //   kana: "さんしゅうかんまえ",
  //   meaning: "three weeks ago",
  // },
  // {
  //   word: "三週間後",
  //   kana: "さんしゅうかんご",
  //   meaning: "three weeks later",
  // },
];

const weekDay: VocabByTheme[] = [
  {
    word: "何曜日",
    kana: "なんようび",
    meaning: "what day of week",
  },
  { word: "月曜日", kana: "げつようび", meaning: "Monday" },
  { word: "火曜日", kana: "かようび", meaning: "Tuesday" },
  { word: "水曜日", kana: "すいようび", meaning: "Wednesday" },
  { word: "木曜日", kana: "もくようび", meaning: "Thursday" },
  { word: "金曜日", kana: "きんようび", meaning: "Friday" },
  { word: "土曜日", kana: "どようび", meaning: "Saturday" },
  { word: "日曜日", kana: "にちようび", meaning: "Sunday" },
];

const aboutDay: VocabByTheme[] = [
  { word: "一昨日", kana: "おととい", meaning: "two days ago" },
  { word: "昨日", kana: "きのう", meaning: "yesterday" },
  { word: "今日", kana: "きょう", meaning: "today (common)" },
  { word: "本日", kana: "ほんじつ", meaning: "today (formal)" },
  { word: "明日", kana: "あした", meaning: "tomorrow" },
  { word: "明後日", kana: "あさって", meaning: "two days later" },
  { word: "毎日", kana: "まいにち", meaning: "every day" },
  { word: "初日", kana: "しょにち", meaning: "first day" },
  { word: "最終日", kana: "さいしゅうび", meaning: "last day" },
  { word: "祝日", kana: "しゅくじつ", meaning: "holiday" },
  { word: "翌日", kana: "よくじつ", meaning: "next day" },
];
const dayTimePeriod: VocabByTheme[] = [
  {
    word: "毎朝",
    kana: "まいあさ",
    meaning: "every morning",
  },
  {
    word: "毎晩",
    kana: "まいばん",
    meaning: "every night",
  },
  {
    word: "朝",
    kana: "あさ",
    meaning: "morning",
  },
  {
    word: "今朝",
    kana: "けさ",
    meaning: "this morning",
  },
  {
    word: "昼",
    kana: "ひる",
    meaning: "daytime",
  },
  {
    word: "午前",
    kana: "ごぜん",
    meaning: "a.m",
  },
  {
    word: "午後",
    kana: "ごご",
    meaning: "p.m; afternoon",
  },
  {
    word: "夕方",
    kana: "ゆうがた",
    meaning: "evening",
  },
  { word: "夜", kana: "よる", meaning: "night" },
  {
    word: "今晩",
    kana: "こんばん",
    meaning: "this evening",
  },
  {
    word: "昨夜",
    kana: "さくや",
    meaning: "last night",
  },
];

const direction: VocabByTheme[] = [
  { word: "方向", kana: "ほうこう", meaning: "direction" },
  { word: "東", kana: "ひがし", meaning: "east" },
  { word: "西", kana: "にし", meaning: "west" },
  { word: "南", kana: "みなみ", meaning: "south" },
  { word: "北", kana: "きた", meaning: "north" },
  { word: "左", kana: "ひだり", meaning: "left" },
  { word: "右", kana: "みぎ", meaning: "right" },
  { word: "上", kana: "うえ", meaning: "up" },
  { word: "下", kana: "した", meaning: "down" },
  // {
  //   word: "左上",
  //   kana: "ひだりうえ",
  //   meaning: "upper left",
  // },
  // {
  //   word: "左下",
  //   kana: "ひだりした",
  //   meaning: "lower left",
  // },
  // {
  //   word: "右上",
  //   kana: "みぎうえ",
  //   meaning: "upper right",
  // },
  {
    word: "右下",
    kana: "みぎした",
    meaning: "lower right",
  },
];

const position: VocabByTheme[] = [
  { word: "位置", kana: "いち", meaning: "position" },
  { word: "正面", kana: "しょうめん", meaning: "front" },
  {
    word: "裏側",
    kana: "うらがわ",
    meaning: "the other side",
  },
  { word: "中心", kana: "ちゅうしん", meaning: "center" },
  { word: "真ん中", kana: "まんなか", meaning: "middle" },
  { word: "前", kana: "まえ", meaning: "in front of" },
  { word: "後ろ", kana: "うしろ", meaning: "behind" },
  { word: "中", kana: "なか", meaning: "inside" },
  { word: "外", kana: "そと", meaning: "outside" },
  { word: "向こう", kana: "むこう", meaning: "across from" },
  { word: "近く", kana: "ちかく", meaning: "nearby" },
  { word: "隣", kana: "となり", meaning: "next to" },
];

const unit: VocabByTheme[] = [
  { word: "単位", kana: "たんい", meaning: "unit" },
  { word: "メートル", kana: "メートル", meaning: "meter" },
  { word: "センチ", kana: "センチ", meaning: "centimeter" },
  {
    word: "ミリメートル",
    kana: "ミリメートル",
    meaning: "millimeter",
  },
  {
    word: "キロメートル",
    kana: "キロメートル",
    meaning: "kilometer",
  },
  {
    word: "平方メートル",
    kana: "へいほうメートル",
    meaning: "square meter",
  },
  // {
  //   word: "平方キロメートル",
  //   kana: "へいほうキロメートル",
  //   meaning: "square kilometer",
  // },
  { word: "グラム", kana: "グラム", meaning: "gram" },
  {
    word: "キログラム",
    kana: "キログラム",
    meaning: "kilogram",
  },
  { word: "トン", kana: "トン", meaning: "ton" },
  { word: "リットル", kana: "リットル", meaning: "liter" },
  {
    word: "ミリリットル",
    kana: "ミリリットル",
    meaning: "milliliter",
  },
];

const aboutCountry: VocabByTheme[] = [
  {
    word: "国",
    kana: "くに",
    meaning: "country (common)",
  },
  {
    word: "国家",
    kana: "こっか",
    meaning: "country (formal)",
  },
  { word: "母国", kana: "ぼこく", meaning: "homeland" },
  {
    word: "外国",
    kana: "がいこく",
    meaning: "foreign country",
  },
  {
    word: "国際",
    kana: "こくさい",
    meaning: "international",
  },
  {
    word: "国民",
    kana: "こくみん",
    meaning: "citizen",
  },
  {
    word: "全国",
    kana: "ぜんこく",
    meaning: "nationwide",
  },
  {
    word: "国内",
    kana: "こくない",
    meaning: "domestic",
  },
  {
    word: "海外",
    kana: "かいがい",
    meaning: "overseas",
  },
  {
    word: "国境",
    kana: "こっきょう",
    meaning: "border",
  },
  {
    word: "国籍",
    kana: "こくせき",
    meaning: "nationality",
  },
  {
    word: "国旗",
    kana: "こっき",
    meaning: "national flag",
  },
  {
    word: "隣国",
    kana: "りんこく",
    meaning: "neighboring country",
  },
  {
    word: "国歌",
    kana: "こっか",
    meaning: "national anthem",
  },
];

const aboutSchool: VocabByTheme[] = [
  { word: "学校", kana: "がっこう", meaning: "school" },
  {
    word: "小学校",
    kana: "しょうがっこう",
    meaning: "primary school",
  },
  {
    word: "中学校",
    kana: "ちゅうがっこう",
    meaning: "junior high school",
  },
  {
    word: "高校",
    kana: "こうこう",
    meaning: "high school",
  },
  {
    word: "大学",
    kana: "だいがく",
    meaning: "university",
  },
  {
    word: "大学院",
    kana: "だいがくいん",
    meaning: "graduate school",
  },
  { word: "学生", kana: "がくせい", meaning: "student" },
  { word: "先生", kana: "せんせい", meaning: "teacher" },
  {
    word: "教室",
    kana: "きょうしつ",
    meaning: "classroom",
  },
  { word: "クラス", kana: "クラス", meaning: "class" },
  {
    word: "クラスメート",
    kana: "クラスメート",
    meaning: "classmate",
  },
];

const aboutStudent: VocabByTheme[] = [
  {
    word: "学生",
    kana: "がくせい",
    meaning: "student",
  },
  {
    word: "小学生",
    kana: "しょうがくせい",
    meaning: "elementary school student",
  },
  {
    word: "中学生",
    kana: "ちゅうがくせい",
    meaning: "junior high school student",
  },
  {
    word: "高校生",
    kana: "こうこうせい",
    meaning: "high school student",
  },
  {
    word: "大学生",
    kana: "だいがくせい",
    meaning: "university student",
  },
  {
    word: "大学院",
    kana: "だいがくいん",
    meaning: "graduate school",
  },
  {
    word: "留学生",
    kana: "りゅうがくせい",
    meaning: "international student",
  },
  {
    word: "劣等生",
    kana: "れっとうせい",
    meaning: "bad student",
  },
  {
    word: "優等生",
    kana: "ゆうとうせい",
    meaning: "good student",
  },
];

const subjectsInCollege: VocabByTheme[] = [
  {
    word: "専門",
    kana: "せんもん",
    meaning: "major",
  },
  {
    word: "数学",
    kana: "すうがく",
    meaning: "math",
  },
  {
    word: "経済学",
    kana: "けいざいがく",
    meaning: "economics",
  },
  {
    word: "経営学",
    kana: "けいえいがく",
    meaning: "management",
  },
  {
    word: "文学",
    kana: "ぶんがく",
    meaning: "literature",
  },
  {
    word: "物理学",
    kana: "ぶつりがく",
    meaning: "physics",
  },
  {
    word: "化学",
    kana: "かがく",
    meaning: "chemistry",
  },
  {
    word: "生物学",
    kana: "せいぶつがく",
    meaning: "biology",
  },
  {
    word: "地理学",
    kana: "ちりがく",
    meaning: "geography",
  },
  {
    word: "哲学",
    kana: "てつがく",
    meaning: "philosophy",
  },
  {
    word: "心理学",
    kana: "しんりがく",
    meaning: "psychology",
  },
];

const occupation1: VocabByTheme[] = [
  {
    word: "職業",
    kana: "しょくぎょう",
    meaning: "occupation",
  },
  { word: "仕事", kana: "しごと", meaning: "work" },
  { word: "先生", kana: "せんせい", meaning: "teacher" },
  { word: "医者", kana: "いしゃ", meaning: "doctor" },
  {
    word: "会社員",
    kana: "かいしゃいん",
    meaning: "company employee",
  },
  { word: "記者", kana: "きしゃ", meaning: "reporter" },
  { word: "主婦", kana: "しゅふ", meaning: "housewife" },
  { word: "弁護士", kana: "べんごし", meaning: "lawyer" },
  {
    word: "運転手",
    kana: "うんてんしゅ",
    meaning: "driver",
  },
  { word: "作家", kana: "さっか", meaning: "writer" },
];

const occupation2: VocabByTheme[] = [
  { word: "看護師", kana: "かんごし", meaning: "nurse" },
  {
    word: "歯医者",
    kana: "はいしゃ",
    meaning: "dentist",
  },
  {
    word: "科学者",
    kana: "かがくしゃ",
    meaning: "scientist",
  },
  {
    word: "美容師",
    kana: "びようし",
    meaning: "beautician",
  },
  { word: "歌手", kana: "かしゅ", meaning: "singer" },
  // {
  //   word: "野球選手",
  //   kana: "やきゅうせんしゅ",
  //   meaning: "baseball player",
  // },
  // {
  //   word: "サッカー選手",
  //   kana: "サッカーせんしゅ",
  //   meaning: "soccer player",
  // },
  { word: "画家", kana: "がか", meaning: "painter" },
  {
    word: "芸術家",
    kana: "げいじゅつか",
    meaning: "artist",
  },
  {
    word: "カメラマン",
    kana: "カメラマン",
    meaning: "photographer",
  },
];

const occupation3: VocabByTheme[] = [
  {
    word: "音楽家",
    kana: "おんがくか",
    meaning: "musician",
  },
  {
    word: "建築家",
    kana: "けんちくか",
    meaning: "architect",
  },
  {
    word: "政治家",
    kana: "せいじか",
    meaning: "politician",
  },
  {
    word: "警察官",
    kana: "けいさつかん",
    meaning: "police officer",
  },
  {
    word: "料理人",
    kana: "りょうりにん",
    meaning: "cook",
  },
  {
    word: "裁判官",
    kana: "さいばんかん",
    meaning: "judge",
  },
  {
    word: "会計士",
    kana: "かいけいし",
    meaning: "accountant",
  },
  {
    word: "消防士",
    kana: "しょうぼうし",
    meaning: "firefighter",
  },
  { word: "兵士", kana: "へいし", meaning: "soldier" },
  {
    word: "銀行員",
    kana: "ぎんこういん",
    meaning: "banker",
  },
];

const occupation4: VocabByTheme[] = [
  {
    word: "公務員",
    kana: "こうむいん",
    meaning: "civil servant",
  },
  {
    word: "駅員",
    kana: "えきいん",
    meaning: "station staff",
  },
  { word: "店員", kana: "てんいん", meaning: "clerk" },
  {
    word: "警備員",
    kana: "けいびいん",
    meaning: "security guard",
  },
  {
    word: "研究員",
    kana: "けんきゅういん",
    meaning: "researcher",
  },
  // {
  //   word: "派遣社員",
  //   kana: "はけんしゃいん",
  //   meaning: "temporary employee",
  // },
  { word: "秘書", kana: "ひしょ", meaning: "secretary" },
  {
    word: "フリーランス",
    kana: "フリーランス",
    meaning: "freelance",
  },
  {
    word: "サラリーマン",
    kana: "サラリーマン",
    meaning: "salaried worker",
  },
  {
    word: "探偵",
    kana: "たんてい",
    meaning: "detective",
  },
];

const occupation5: VocabByTheme[] = [
  // {
  //   word: "営業マン",
  //   kana: "えいぎょうマン",
  //   meaning: "salesman",
  // },
  {
    word: "俳優",
    kana: "はいゆう",
    meaning: "actor/actress",
  },
  { word: "男優", kana: "だんゆう", meaning: "actor" },
  { word: "女優", kana: "じょゆう", meaning: "actress" },
  {
    word: "監督",
    kana: "かんとく",
    meaning: "director",
  },
  {
    word: "占い師",
    kana: "うらないし",
    meaning: "fortune teller",
  },
  { word: "牧師", kana: "ぼくし", meaning: "pastor" },
  {
    word: "漁師",
    kana: "りょうし",
    meaning: "fisherman",
  },
  { word: "講師", kana: "こうし", meaning: "lecturer" },
  {
    word: "技師",
    kana: "ぎし",
    meaning: "technologist",
  },
];

// export const aboutStudent: VocabByTheme[] =
// export const aboutStudent: VocabByTheme[] =
// export const aboutStudent: VocabByTheme[] =
// export const aboutStudent: VocabByTheme[] =
// export const aboutStudent: VocabByTheme[] =

// vocabs by scenario
const ramenScenePractice: VocabByTheme[] = [
  {
    word: "いらっしゃいませ",
    kana: "いらっしゃいませ",
    meaning: "",
  },
  {
    word: "注文",
    kana: "ちゅうもん",
    meaning: "",
  },
  {
    word: "注文",
    kana: "ちゅうもん",
    meaning: "",
    isSentence: true,
  },
  {
    word: "水",
    kana: "みず",
    meaning: "",
  },
  {
    word: "水",
    kana: "みず",
    meaning: "",
    isSentence: true,
  },
  {
    word: "緑茶",
    kana: "りょくちゃ",
    meaning: "",
  },
  {
    word: "生ビール",
    kana: "なまビール",
    meaning: "",
  },
  {
    word: "餃子",
    kana: "ギョウザ",
    meaning: "",
  },
  {
    word: "ラーメン",
    kana: "ラーメン",
    meaning: "",
  },
  {
    word: "ラーメン",
    kana: "ラーメン",
    meaning: "",
    isSentence: true,
  },
  {
    word: "豚骨",
    kana: "とんこつ",
    meaning: "",
  },
  {
    word: "飲み物",
    kana: "のみもの",
    meaning: "",
  },
  {
    word: "飲み物",
    kana: "のみもの",
    meaning: "",
    isSentence: true,
  },
];

const fridayNightScenePractice: VocabByTheme[] = [
  { word: "もしもし", kana: "もしもし", meaning: "" },
  { word: "久しぶり", kana: "ひさしぶり", meaning: "" },
  { word: "久しぶり", kana: "ひさしぶり", meaning: "", isSentence: true },
  { word: "楽しみ", kana: "たのしみ", meaning: "" },
  { word: "暇", kana: "ひま", meaning: "" },
  { word: "暇", kana: "ひま", meaning: "", isSentence: true },
  { word: "お疲れ様", kana: "おつかれさま", meaning: "" },
  { word: "焼き肉", kana: "やきにく", meaning: "" },
  { word: "オッケー", kana: "オッケー", meaning: "" },
  { word: "ピザ", kana: "ピザ", meaning: "" },
  { word: "遊ぶ", kana: "あそぶ", meaning: "" },
  { word: "遊ぶ", kana: "あそぶ", meaning: "", isSentence: true },
  { word: "お店", kana: "おみせ", meaning: "" },
  { word: "食べる", kana: "たべる", meaning: "" },
  { word: "食べる", kana: "たべる", meaning: "", isSentence: true },
  { word: "予約", kana: "よやく", meaning: "" },
  { word: "予約", kana: "よやく", meaning: "", isSentence: true },
];

const hachikoScenePractice: VocabByTheme[] = [
  // { word: "ハチ公像", kana: "", meaning: "" },
  { word: "行く", kana: "いく", meaning: "" },
  { word: "行く", kana: "いく", meaning: "", isSentence: true },
  { word: "お手伝い", kana: "おてつだい", meaning: "" },
  { word: "改札口", kana: "かいさつぐち", meaning: "" },
  { word: "改札口", kana: "かいさつぐち", meaning: "", isSentence: true },
  { word: "出口", kana: "でぐち", meaning: "" },
  { word: "出口", kana: "でぐち", meaning: "", isSentence: true },
  { word: "曲がる", kana: "まがる", meaning: "" },
  { word: "曲がる", kana: "まがる", meaning: "", isSentence: true },
  { word: "まっすぐ", kana: "まっすぐ", meaning: "" },
  { word: "角", kana: "かど", meaning: "" },
  { word: "角", kana: "かど", meaning: "", isSentence: true },
  { word: "歩く", kana: "あるく", meaning: "" },
  { word: "歩く", kana: "あるく", meaning: "", isSentence: true },
  { word: "看板", kana: "かんばん", meaning: "" },
];

const nitoriScenePractice: VocabByTheme[] = [
  { word: "探す", kana: "さがす", meaning: "" },
  { word: "探す", kana: "さがす", meaning: "", isSentence: true },
  { word: "布団", kana: "ふとん", meaning: "" },
  { word: "布団", kana: "ふとん", meaning: "", isSentence: true },
  // { word: "敷布団", kana: "", meaning: "" },
  // { word: "高反発", kana: "", meaning: "" },
  // { word: "低反発", kana: "", meaning: "" },
  // { word: "好み", kana: "", meaning: "" },
  { word: "配送", kana: "はいそう", meaning: "" },
  // { word: "郵送", kana: "", meaning: "" },
  { word: "料金", kana: "りょうきん", meaning: "" },
  { word: "東京", kana: "とうきょう", meaning: "" },
  { word: "希望", kana: "きぼう", meaning: "" },
  { word: "御勧め", kana: "おすすめ", meaning: "" },
  { word: "体重", kana: "たいじゅう", meaning: "" },
  { word: "了解", kana: "りょうかい", meaning: "" },
  { word: "マットレス", kana: "マットレス", meaning: "" },
  { word: "住所", kana: "じゅうしょ", meaning: "" },
  { word: "住所", kana: "じゅうしょ", meaning: "", isSentence: true },
  { word: "買う", kana: "かう", meaning: "" },
  { word: "買う", kana: "かう", meaning: "", isSentence: true },
  { word: "違う", kana: "ちがう", meaning: "" },
  { word: "違う", kana: "ちがう", meaning: "", isSentence: true },
  { word: "質問", kana: "しつもん", meaning: "" },
  { word: "質問", kana: "しつもん", meaning: "", isSentence: true },
];

const nyukanScenePractice: VocabByTheme[] = [
  { word: "初めて", kana: "はじめて", meaning: "" },
  { word: "初めて", kana: "はじめて", meaning: "", isSentence: true },
  { word: "入管", kana: "にゅうかん", meaning: "" },
  { word: "ようこそ", kana: "ようこそ", meaning: "" },
  { word: "ようこそ", kana: "ようこそ", meaning: "", isSentence: true },
  { word: "入国", kana: "にゅうこく", meaning: "" },
  { word: "目的", kana: "もくてき", meaning: "" },
  { word: "目的", kana: "もくてき", meaning: "", isSentence: true },
  { word: "旅行", kana: "りょこう", meaning: "" },
  { word: "旅行", kana: "りょこう", meaning: "", isSentence: true },
  { word: "仕事", kana: "しごと", meaning: "" },
  { word: "仕事", kana: "しごと", meaning: "", isSentence: true },
  { word: "期間", kana: "きかん", meaning: "" }, // 滞在予定
  { word: "期間", kana: "きかん", meaning: "", isSentence: true }, // 滞在予定
  // { word: "週間", kana: "", meaning: "" },
  { word: "ホテル", kana: "ホテル", meaning: "" },
  { word: "ホテル", kana: "ホテル", meaning: "", isSentence: true },
  { word: "場所", kana: "ばしょ", meaning: "" },
  { word: "場所", kana: "ばしょ", meaning: "", isSentence: true },
  { word: "お帰りなさい", kana: "おかえりなさい", meaning: "" },
  { word: "友達", kana: "ともだち", meaning: "" },
  { word: "友達", kana: "ともだち", meaning: "", isSentence: true },
  // { word: "楽しい", kana: "", meaning: "" },
];

//  抹茶 チョコレート 甘甘さ 支払い レジ クレジットカード 現金 進み 支払い方法 かしこまりました 以上
const omiyageScenePractice: VocabByTheme[] = [
  { word: "お土産", kana: "おみやげ", meaning: "" },
  { word: "お土産", kana: "おみやげ", meaning: "", isSentence: true },
  { word: "チョコレート", kana: "チョコレート", meaning: "" },
  { word: "チョコレート", kana: "チョコレート", meaning: "", isSentence: true },
  { word: "甘い", kana: "あまい", meaning: "" },
  { word: "甘い", kana: "あまい", meaning: "", isSentence: true },
  { word: "払う", kana: "はらう", meaning: "" },
  { word: "払う", kana: "はらう", meaning: "", isSentence: true },
  { word: "レジ", kana: "レジ", meaning: "" },
  { word: "現金", kana: "げんきん", meaning: "" },
];

// イベント  参加 同じ 出身 有名 観光地 公園 話し 会社員 動物園 楽し
const partyScenePractice: VocabByTheme[] = [
  { word: "イベント", kana: "イベント", meaning: "" },
  { word: "参加", kana: "さんか", meaning: "" },
  { word: "参加", kana: "さんか", meaning: "", isSentence: true },
  { word: "出身", kana: "しゅっしん", meaning: "" },
  { word: "有名", kana: "ゆうめい", meaning: "" },
  { word: "有名", kana: "ゆうめい", meaning: "", isSentence: true },
  { word: "観光地", kana: "かんこうち", meaning: "" },
  { word: "公園", kana: "こうえん", meaning: "" },
  { word: "公園", kana: "こうえん", meaning: "", isSentence: true },
  { word: "動物園", kana: "どうぶつえん", meaning: "" },
  { word: "動物園", kana: "どうぶつえん", meaning: "", isSentence: true },
];

// お菓子  送り 重さ サイズ 確認 通常 配送 料金 届き かかり 用紙 必要事項 記入
const postalScenePractice: VocabByTheme[] = [
  { word: "お菓子", kana: "おかし", meaning: "" },
  { word: "お菓子", kana: "おかし", meaning: "", isSentence: true },
  { word: "送る", kana: "おくる", meaning: "" },
  { word: "送る", kana: "おくる", meaning: "", isSentence: true },
  { word: "重さ", kana: "おもさ", meaning: "" },
  { word: "重さ", kana: "おもさ", meaning: "", isSentence: true },
  { word: "必要", kana: "ひつよう", meaning: "" },
  { word: "必要", kana: "ひつよう", meaning: "", isSentence: true },
  { word: "届く", kana: "とどく", meaning: "" },
  { word: "届く", kana: "とどく", meaning: "", isSentence: true },
];

// 旅館  ようこそ 予約 部屋 チェックイン 願い 確認 名前 教えて お待たせ 号室 エレベーター 利用 階 進み 鍵 開け 不明 ござい 温泉 何時 当館 チェックアウト 時間 追加料金
const ryokanScenePractice: VocabByTheme[] = [
  { word: "旅館", kana: "りょかん", meaning: "" },
  { word: "旅館", kana: "りょかん", meaning: "", isSentence: true },
  { word: "ようこそ", kana: "ようこそ", meaning: "" },
  { word: "ようこそ", kana: "ようこそ", meaning: "", isSentence: true },
  { word: "予約", kana: "よやく", meaning: "" },
  { word: "予約", kana: "よやく", meaning: "", isSentence: true },
  { word: "部屋", kana: "へや", meaning: "" },
  { word: "部屋", kana: "へや", meaning: "", isSentence: true },
  { word: "確認", kana: "かくにん", meaning: "" },
  { word: "確認", kana: "かくにん", meaning: "", isSentence: true },
  { word: "時間", kana: "じかん", meaning: "" },
  { word: "時間", kana: "じかん", meaning: "", isSentence: true },
];

// お客様  ご注文 お決まり おすすめ 抹茶 クロワサン 大丈夫  チーズケーキ トイレ ご利用 会計 合計 お持ち帰り 店内
const starbucksScenePractice: VocabByTheme[] = [
  { word: "御勧め", kana: "おすすめ", meaning: "" },
  { word: "お願い", kana: "おねがい", meaning: "" },
  { word: "お願い", kana: "おねがい", meaning: "", isSentence: true },
  { word: "大丈夫", kana: "だいじょうぶ", meaning: "" },
  { word: "大丈夫", kana: "だいじょうぶ", meaning: "", isSentence: true },
  { word: "チーズケーキ", kana: "チーズケーキ", meaning: "" },
  { word: "トイレ", kana: "トイレ", meaning: "" },
  { word: "トイレ", kana: "トイレ", meaning: "", isSentence: true },
  { word: "店内", kana: "てんない", meaning: "" },
  { word: "持ち帰り", kana: "もちかえり", meaning: "" },
];

// 隣  引っ越し 申します 一応 自己紹介 遅く こちら 用意 本当に こちらこそ 困った ぜひ 教え
const tonariScenePractice: VocabByTheme[] = [
  { word: "隣", kana: "となり", meaning: "" },
  { word: "隣", kana: "となり", meaning: "", isSentence: true },
  { word: "引っ越し", kana: "ひっこし", meaning: "" },
  { word: "引っ越し", kana: "ひっこし", meaning: "", isSentence: true },
  { word: "自己紹介", kana: "じこしょうかい", meaning: "" },
  { word: "出身", kana: "しゅっしん", meaning: "" },
  { word: "お土産", kana: "おみやげ", meaning: "" },
  { word: "お土産", kana: "おみやげ", meaning: "", isSentence: true },
  { word: "地元", kana: "じもと", meaning: "" },
  { word: "よろしく", kana: "よろしく", meaning: "" },
  { word: "よろしく", kana: "よろしく", meaning: "", isSentence: true },
];

// 渋谷  行き  料金 お客様  切符 電車 何時 来ま 番線 プラットフォーム 出発 旅行
const trainStationScenePractice: VocabByTheme[] = [
  { word: "行く", kana: "いく", meaning: "" },
  { word: "行く", kana: "いく", meaning: "", isSentence: true },
  { word: "来る", kana: "くる", meaning: "" },
  { word: "来る", kana: "くる", meaning: "", isSentence: true },
  {
    word: "ありがとうございます。 ",
    kana: "ありがとうございます。",
    meaning: "",
  },
  { word: "切符", kana: "きっぷ", meaning: "" },
  { word: "切符", kana: "きっぷ", meaning: "", isSentence: true },
  { word: "電車", kana: "でんしゃ", meaning: "" },
  { word: "電車", kana: "でんしゃ", meaning: "", isSentence: true },
  { word: "出発", kana: "しゅっぱつ", meaning: "" },
  { word: "出発", kana: "しゅっぱつ", meaning: "", isSentence: true },
];

export const decks: VocabDeck[] = [
  // practice based on scenarios
  {
    theme: "Words during an immigration interview",
    vocabs: nyukanScenePractice,
    emoji: "🗣️",
    isProFeature: false,
    day: 1, // has to match scenes db
  },
  {
    theme: "Words when riding a train",
    vocabs: trainStationScenePractice,
    emoji: "🗣️",
    isProFeature: false,
    day: 2,
  },
  {
    theme: "Words when asking for a direction",
    vocabs: hachikoScenePractice,
    emoji: "🗣️",
    isProFeature: false,
    day: 3,
  },
  {
    theme: "Words when greeting a neighbor",
    vocabs: tonariScenePractice,
    emoji: "🗣️",
    isProFeature: false,
    day: 4,
  },

  {
    theme: "Words when buying a furniture",
    vocabs: nitoriScenePractice,
    emoji: "🗣️",
    isProFeature: false,
    day: 5,
  },
  {
    theme: "Words when checking in a hotel",
    vocabs: ryokanScenePractice,
    emoji: "🗣️",
    isProFeature: false,
    day: 6,
  },
  {
    theme: "Words when buying a souvenir",
    vocabs: omiyageScenePractice,
    emoji: "🗣️",
    isProFeature: false,
    day: 7,
  },
  {
    theme: "Words when sending a parcel",
    vocabs: postalScenePractice,
    emoji: "🗣️",
    isProFeature: false,
    day: 8,
  },
  {
    theme: "Words at Ramen Place",
    vocabs: ramenScenePractice,
    emoji: "🗣️",
    isProFeature: false,
    day: 9,
  },
  {
    theme: "Words when buying a coffee",
    vocabs: starbucksScenePractice,
    emoji: "🗣️",
    isProFeature: false,
    day: 10,
  },
  {
    theme: "Words when making an appointment",
    vocabs: fridayNightScenePractice,
    emoji: "🗣️",
    isProFeature: false,
    day: 11,
  },

  {
    theme: "Words at a party",
    vocabs: partyScenePractice,
    emoji: "🗣️",
    isProFeature: false,
    day: 12,
  },

  // free
  {
    theme: "About Student",
    vocabs: aboutStudent,
    emoji: "👨‍🎓",
    isProFeature: false,
    day: 10000,
  },
  {
    theme: "Occupation 1",
    vocabs: occupation1,
    emoji: "👨‍🏫",
    isProFeature: false,
    day: 10000,
  },
  {
    theme: "Day of a Week",
    vocabs: weekDay,
    emoji: "📅",
    isProFeature: false,
    day: 10000,
  },
  // time
  {
    theme: "About Year",
    vocabs: aboutYear,
    emoji: "📅",
    isProFeature: true,
    day: 10000,
  },
  {
    theme: "About Season",
    vocabs: aboutSeason,
    emoji: "❄️",
    isProFeature: true,
    day: 10000,
  },
  {
    theme: "About Month",
    vocabs: aboutMonth,
    emoji: "📆",
    isProFeature: true,
    day: 10000,
  },
  { theme: "Month", vocabs: month, emoji: "🈷️", isProFeature: true, day: 100 },
  {
    theme: "About Week",
    vocabs: aboutWeek,
    emoji: "📅",
    isProFeature: true,
    day: 10000,
  },
  {
    theme: "Time Period in Day",
    vocabs: dayTimePeriod,
    emoji: "⏱️",
    isProFeature: true,
    day: 10000,
  },

  {
    theme: "About Day",
    vocabs: aboutDay,
    emoji: "☀️",
    isProFeature: true,
    day: 10000,
  },

  // education

  {
    theme: "About School",
    vocabs: aboutSchool,
    emoji: "🏫",
    isProFeature: true,
    day: 10000,
  },
  {
    theme: "Subjects in College",
    vocabs: subjectsInCollege,
    emoji: "📚",
    isProFeature: true,
    day: 10000,
  },

  //country
  {
    theme: "About Country",
    vocabs: aboutCountry,
    emoji: "🗾",
    isProFeature: true,
    day: 10000,
  },
  // measurement
  { theme: "Unit", vocabs: unit, emoji: "📐", isProFeature: true, day: 100 },
  // position
  {
    theme: "Position",
    vocabs: position,
    emoji: "📍",
    isProFeature: true,
    day: 10000,
  },
  {
    theme: "Direction",
    vocabs: direction,
    emoji: "➡️",
    isProFeature: true,
    day: 10000,
  },

  // occupation

  {
    theme: "Occupation 2",
    vocabs: occupation2,
    emoji: "👨🏻‍🎨",
    isProFeature: true,
    day: 10000,
  },
  {
    theme: "Occupation 3",
    vocabs: occupation3,
    emoji: "🧑‍🎤",
    isProFeature: true,
    day: 10000,
  },
  {
    theme: "Occupation 4",
    vocabs: occupation4,
    emoji: "🔬",
    isProFeature: true,
    day: 10000,
  },
  {
    theme: "Occupation 5",
    vocabs: occupation5,
    emoji: "🎬",
    isProFeature: true,
    day: 10000,
  },
];
