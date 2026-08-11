import type { ReadingStory } from "@/lib/types";
import { extendedStories } from "./stories-extended";
import { literacyStories } from "./stories-literacy";
import { joyoStories } from "./stories-joyo";

const foundationStories: ReadingStory[] = [
  {
    id: "story-1",
    title: "森の小さな休み",
    subtitle: "A small rest in the forest",
    type: "story",
    level: 1,
    requiredKanji: ["人", "日", "木", "水", "火", "休", "小", "大"],
    paragraphs: [
      {
        japanese: "一人の人が森に行きました。",
        furigana: { 一人: "ひとり", 人: "ひと", 森: "もり", 行: "い" },
        english: "One person went to the forest.",
      },
      {
        japanese: "大きい木の下で休みました。",
        furigana: { 大: "おお", 木: "き", 休: "やす" },
        english: "They rested under a big tree.",
      },
      {
        japanese: "水を飲んで、火を見ました。",
        furigana: { 水: "みず", 飲: "の", 火: "ひ", 見: "み" },
        english: "They drank water and watched the fire.",
      },
      {
        japanese: "小さい休みでしたが、とても気持ちよかったです。",
        furigana: { 小: "ちい", 休: "やす", 気持: "きも" },
        english: "It was a small rest, but felt very good.",
      },
    ],
    comprehension: [
      {
        id: "q-story-1-1",
        question: "Where did the person go?",
        options: ["To the city", "To the forest", "To school", "To the station"],
        correctIndex: 1,
        explanation: "森 (mori) = forest.",
      },
      {
        id: "q-story-1-2",
        question: "What did they do under the tree?",
        options: ["Worked", "Rested", "Shopped", "Studied"],
        correctIndex: 1,
        explanation: "休みました (yasumimashita) = rested.",
      },
    ],
  },
  {
    id: "story-2",
    title: "今日の天気",
    subtitle: "Today's weather",
    type: "article",
    level: 2,
    requiredKanji: ["日", "天", "大", "小", "休", "林", "森"],
    paragraphs: [
      {
        japanese: "今日は天気がいいです。",
        furigana: { 今日: "きょう", 天気: "てんき" },
        english: "Today's weather is good.",
      },
      {
        japanese: "大きい森へ行きます。",
        furigana: { 大: "おお", 森: "もり", 行: "い" },
        english: "I'm going to the big forest.",
      },
      {
        japanese: "林の中を歩いて、小さい川を見ました。",
        furigana: { 林: "はやし", 中: "なか", 歩: "ある", 小: "ちい", 川: "かわ", 見: "み" },
        english: "I walked through the grove and saw a small river.",
      },
      {
        japanese: "とてもいい休みの日でした。",
        furigana: { 休: "やす", 日: "ひ" },
        english: "It was a very nice day off.",
      },
    ],
    comprehension: [
      {
        id: "q-story-2-1",
        question: "How is today's weather?",
        options: ["Bad", "Good", "Rainy", "Snowy"],
        correctIndex: 1,
        explanation: "天気がいい = weather is good.",
      },
    ],
  },
  {
    id: "story-3",
    title: "食堂で",
    subtitle: "At the cafeteria",
    type: "story",
    level: 3,
    requiredKanji: ["行", "来", "出", "見", "食", "言"],
    paragraphs: [
      {
        japanese: "学生が学校の食堂に行きました。",
        furigana: { 学生: "がくせい", 学校: "がっこう", 食堂: "しょくどう", 行: "い" },
        english: "A student went to the school cafeteria.",
      },
      {
        japanese: "「何を食べますか？」と店の人が言いました。",
        furigana: { 何: "なに", 食: "た", 店: "みせ", 人: "ひと", 言: "い" },
        english: "'What will you eat?' said the shop person.",
      },
      {
        japanese: "学生はメニューを見て、ラーメンを出しました。",
        furigana: { 見: "み", 出: "だ" },
        english: "The student looked at the menu and ordered ramen.",
      },
      {
        japanese: "友達も来て、一緒に食べました。",
        furigana: { 友達: "ともだち", 来: "き", 一緒: "いっしょ", 食: "た" },
        english: "A friend came too, and they ate together.",
      },
    ],
    comprehension: [
      {
        id: "q-story-3-1",
        question: "Where did the student go?",
        options: ["Station", "Cafeteria", "Bank", "Park"],
        correctIndex: 1,
        explanation: "食堂 (shokudou) = cafeteria.",
      },
    ],
  },
  {
    id: "story-4",
    title: "東京駅から",
    subtitle: "From Tokyo Station",
    type: "news",
    level: 4,
    requiredKanji: ["国", "町", "家", "駅", "学", "店"],
    paragraphs: [
      {
        japanese: "東京駅は大きい駅です。",
        furigana: { 東京駅: "とうきょうえき", 大: "おお", 駅: "えき" },
        english: "Tokyo Station is a big station.",
      },
      {
        japanese: "外国から来た人も多いです。",
        furigana: { 外国: "がいこく", 来: "き", 人: "ひと", 多: "おお" },
        english: "Many people come from foreign countries too.",
      },
      {
        japanese: "駅の近くにお店がたくさんあります。",
        furigana: { 近: "ちか", 店: "みせ" },
        english: "There are many shops near the station.",
      },
      {
        japanese: "家族と町に帰る人も見ます。",
        furigana: { 家族: "かぞく", 町: "まち", 帰: "かえ", 人: "ひと", 見: "み" },
        english: "You also see people returning to their town with family.",
      },
    ],
    comprehension: [
      {
        id: "q-story-4-1",
        question: "What is near Tokyo Station?",
        options: ["Many schools", "Many shops", "A forest", "A river"],
        correctIndex: 1,
        explanation: "お店がたくさん = many shops.",
      },
    ],
  },
  {
    id: "story-5",
    title: "来週の予定",
    subtitle: "Next week's schedule",
    type: "article",
    level: 5,
    requiredKanji: ["年", "月", "週", "一", "二", "三", "百"],
    paragraphs: [
      {
        japanese: "今年の来月、来週に旅行します。",
        furigana: { 今年: "ことし", 来月: "らいげつ", 来週: "らいしゅう", 旅行: "りょこう" },
        english: "Next week of next month this year, I'm traveling.",
      },
      {
        japanese: "一人で行く予定です。",
        furigana: { 一人: "ひとり", 行: "い", 予定: "よてい" },
        english: "I plan to go alone.",
      },
      {
        japanese: "三つの町を見ます。",
        furigana: { 三: "みっ", 町: "まち", 見: "み" },
        english: "I'll see three towns.",
      },
      {
        japanese: "百キロ以上歩くかもしれません。",
        furigana: { 百: "ひゃく", 以上: "いじょう", 歩: "ある" },
        english: "I might walk over 100 kilometers.",
      },
    ],
    comprehension: [
      {
        id: "q-story-5-1",
        question: "How many towns will they visit?",
        options: ["One", "Two", "Three", "One hundred"],
        correctIndex: 2,
        explanation: "三つ (mittsu) = three.",
      },
    ],
  },
  {
    id: "story-6",
    title: "新しい会社",
    subtitle: "A new company in the news",
    type: "news",
    level: 6,
    requiredKanji: ["新", "聞", "世", "会", "社", "発"],
    paragraphs: [
      {
        japanese: "新聞によると、新しい会社が発表されました。",
        furigana: { 新聞: "しんぶん", 新: "あたら", 会社: "かいしゃ", 発表: "はっぴょう" },
        english: "According to the newspaper, a new company was announced.",
      },
      {
        japanese: "世界の学生が会う場所を作ります。",
        furigana: { 世界: "せかい", 学生: "がくせい", 会: "あ", 場所: "ばしょ", 作: "つく" },
        english: "It will create a place for students from around the world to meet.",
      },
      {
        japanese: "来週、東京で出発イベントがあります。",
        furigana: { 来週: "らいしゅう", 東京: "とうきょう", 出発: "しゅっぱつ" },
        english: "Next week, there's a launch event in Tokyo.",
      },
      {
        japanese: "社会に新しい変化が来るかもしれません。",
        furigana: { 社会: "しゃかい", 新: "あたら", 変化: "へんか", 来: "き" },
        english: "New change may be coming to society.",
      },
    ],
    comprehension: [
      {
        id: "q-story-6-1",
        question: "What was announced?",
        options: ["A new school", "A new company", "A new station", "A new forest"],
        correctIndex: 1,
        explanation: "新しい会社が発表 = new company announced.",
      },
      {
        id: "q-story-6-2",
        question: "Where is the launch event?",
        options: ["Osaka", "Kyoto", "Tokyo", "Hokkaido"],
        correctIndex: 2,
        explanation: "東京で = in Tokyo.",
      },
    ],
  },
];

export const readingStories: ReadingStory[] = [
  ...foundationStories,
  ...extendedStories,
  ...literacyStories,
  ...joyoStories,
];

export function getStory(id: string) {
  return readingStories.find((s) => s.id === id);
}

export function getStoriesForUnit(unitId: number) {
  return readingStories.filter((s) => s.id === `story-${unitId}`);
}
