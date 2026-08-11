import type { LongFormPrompt } from "@/lib/types";

/** Standalone long-form speaking bank for advanced → fluent practice. */
export const longFormBank: LongFormPrompt[] = [
  {
    id: "lf-1",
    title: "Introduce your week",
    promptEnglish:
      "Speak for ~60 seconds about your week: what you did, one problem, one good thing.",
    tips: ["Use て-form chains", "Add んです for one explanation", "End with 来週は〜"],
    modelRomaji:
      "Konshuu wa isogashikatta n desu. Getsuyoubi kara shigoto ga atte, suiyoubi wa tomodachi to nomi ni ikimashita. Chotto tsukaremashita kedo, tanoshikatta desu. Raishuu wa motto yukkuri shitai desu.",
    modelHiragana:
      "こんしゅうはいそがしかったんです。げつようびからしごとがあって、すいようびはともだちとのみにいきました。ちょっとつかれましたけど、たのしかったです。らいしゅうはもっとゆっくりしたいです。",
    targetSeconds: 60,
  },
  {
    id: "lf-2",
    title: "Soft complaint",
    promptEnglish:
      "Politely explain that a delivery was late and ask what happens next — without sounding angry.",
    tips: ["Start with ちょっとご相談なんですが", "Use ていただけますか", "Thank them even if unresolved"],
    modelRomaji:
      "Sumimasen, chotto go-soudan nan desu ga. Kinou todoku hazu datta nimotsu ga mada kite inakute… Dou natte iru ka oshiete itadakemasen ka? Ojikan torimasu ga, yoroshiku onegai shimasu.",
    modelHiragana:
      "すみません、ちょっとごそうだんなんですが。きのうとどくはずだったにもつがまだきていなくて…どうなっているかおしえていただけませんか？おじかんとりますが、よろしくお願いします。",
    targetSeconds: 45,
  },
  {
    id: "lf-3",
    title: "Disagree softly",
    promptEnglish:
      "A friend says a movie was amazing. You disagreed. Soften your opinion and keep the vibe.",
    tips: ["Start with そうなんだね", "Use かも / ちょっと", "Offer one positive"],
    modelRomaji:
      "Sou nan da ne. Boku wa chotto nagaku kanjita kamo. Demo, engi wa yokatta to omou. Mata issho ni mi ni ikou yo.",
    modelHiragana:
      "そうなんだね。ぼくはちょっとながくかんじたかも。でも、えんぎはよかったとおもう。またいっしょにみにいこうよ。",
    targetSeconds: 40,
  },
  {
    id: "lf-4",
    title: "Work update",
    promptEnglish:
      "Give a 90-second status update: what you finished, what’s blocked, what you need.",
    tips: ["〜まで終わりました", "〜で止まっていて", "〜していただけますか"],
    modelRomaji:
      "Kyou made no shinchoku desu. Shiryou no dai-ichi kou wa owari mashita. Demo, deeta no kakunin de tomatte ite, Tanaka-san ni mite itadakitai desu. Asu no asa made ni henji moraetara tasukarimasu.",
    modelHiragana:
      "きょうまでのしんちょくです。しりょうのだいいっこうはおわりました。でも、データのかくにんでとまっていて、たなかさんにみていただきたいです。あすのあさまでにへんじもらえたらたすかります。",
    targetSeconds: 90,
  },
  {
    id: "lf-5",
    title: "Tell a story",
    promptEnglish:
      "Tell a short story about getting lost in a station — setup, problem, resolution, feeling.",
    tips: ["Use たら / ときに", "Add びっくりして", "End with なるほど moment"],
    modelRomaji:
      "Saisho wa Shibuya ni iku tsumori datta n desu. Demo, norikae o machigaete, kawaii eki ni tsuite… Bikkuri shite, ekiin-san ni kiitara, niban-sen de modoreba ii to oshiete kuremashita. Kekkyoku okuremashita kedo, ii keiken deshita.",
    modelHiragana:
      "さいしょはしぶやにいくつもりだったんです。でも、のりかえをまちがえて、かわいいえきについて…びっくりして、えきいんさんにきいたら、にばんせんでもどればいいとおしえてくれました。けっきょくおくれましたけど、いいけいけんでした。",
    targetSeconds: 75,
  },
  {
    id: "lf-6",
    title: "Keigo self-intro",
    promptEnglish:
      "Introduce yourself to a client using humble/respectful language.",
    tips: ["申します", "おります", "よろしくお願いいたします"],
    modelRomaji:
      "Hajimemashite. Justin to moushimasu. Amerika kara mairimashita. Nihongo wa mada benkyou-chuu de gozaimasu ga, doryoku itashimasu. Yoroshiku onegai itashimasu.",
    modelHiragana:
      "はじめまして。ジャスティンともうします。アメリカからまいりました。にほんごはまだべんきょうちゅうでございますが、どりょくいたします。よろしくお願いいたします。",
    targetSeconds: 40,
  },
  {
    id: "lf-7",
    title: "Negotiate a deadline",
    promptEnglish:
      "Ask to move a deadline by three days, offer a partial delivery, stay polite.",
    tips: ["もし可能でしたら", "一部だけ先に", "ご検討いただけますか"],
    modelRomaji:
      "Moshi kanou deshitara, shimekiri o mikka hodo nobashite itadakemasen ka? Ichibu dake saki ni owatashi dekimasu. Gokentou itadakemasu ka?",
    modelHiragana:
      "もしかのうでしたら、しめきりをみっかほどのばしていただけませんか？いちぶだけさきにおわたしできます。ごけんとういただけますか？",
    targetSeconds: 50,
  },
  {
    id: "lf-8",
    title: "Explain a Japanese cultural thing",
    promptEnglish:
      "Explain お疲れ様 to an English-speaking friend — in Japanese — simply.",
    tips: ["つまり", "場面によって", "example dialogue"],
    modelRomaji:
      "Otsukaresama wa, shigoto no ato nado de tsukau aisatsu desu. Tsumari, 'otsukare' to iu kimochi o tsutaemasu. Baai ni yotte, kaeri ni mo tsukaimasu.",
    modelHiragana:
      "おつかれさまは、しごとのあとなどでつかうあいさつです。つまり、「おつかれ」というきもちをつたえます。ばあいによって、かえりにもつかいます。",
    targetSeconds: 55,
  },
  {
    id: "lf-9",
    title: "Make a plan",
    promptEnglish:
      "Invite a friend to dinner this weekend, suggest two options, and confirm time/place.",
    tips: ["〜ない？", "どっちがいい？", "じゃあ〜で"],
    modelRomaji:
      "Konshuumatsu, issho ni tabeni ikanai? Itarian to washoku, docchi ga ii? Ja, doyoubi no shichi-ji ni Shibuya de.",
    modelHiragana:
      "こんしゅうまつ、いっしょにたべにいかない？いたりあんとわしょく、どっちがいい？じゃあ、どようびのしちじにしぶやで。",
    targetSeconds: 45,
  },
  {
    id: "lf-10",
    title: "Phone call pivot",
    promptEnglish:
      "You're on a call: greet, explain you're busy, propose calling back, close politely.",
    tips: ["今ちょっと…", "かけ直してもいい？", "失礼します"],
    modelRomaji:
      "Moshi moshi, ima chotto isogashikute… Ato de kake-naoshite mo ii? Sumimasen. Ja, mata ato de. Shitsurei shimasu.",
    modelHiragana:
      "もしもし、いまちょっといそがしくて…あとでかけなおしてもいい？すみません。じゃあ、またあとで。しつれいします。",
    targetSeconds: 40,
  },
  {
    id: "lf-11",
    title: "Opinion with nuance",
    promptEnglish:
      "Give a nuanced opinion on remote work — one benefit, one downside, your preference.",
    tips: ["一方で", "〜がち", "個人的には"],
    modelRomaji:
      "Rimooto wa jikan ga tsukaeru no wa ii n desu. Ippou de, kaiwa ga heru koto mo arimasu. Kojinteki ni wa, mix ga ichiban ii to omoimasu.",
    modelHiragana:
      "リモートはじかんがつかえるのはいいんです。いっぽうで、かいわがへることもあります。こじんてきには、ミックスがいちばんいいとおもいます。",
    targetSeconds: 70,
  },
  {
    id: "lf-12",
    title: "Humor recovery",
    promptEnglish:
      "You misheard someone. Recover with humor, clarify, and continue the chat.",
    tips: ["あっ、ごめん", "ってこと？", "なるほど"],
    modelRomaji:
      "A, gomen! Chigau imi da to omotteta. Zenzen wakattenakatta. Mou ichido itte kureru? Aa, naruhodo!",
    modelHiragana:
      "あっ、ごめん！ちがういみだとおもってた。ぜんぜんわかってなかった。もういちどいってくれる？ああ、なるほど！",
    targetSeconds: 35,
  },
  {
    id: "lf-13",
    title: "Describe your neighborhood",
    promptEnglish:
      "Describe where you live for ~60 seconds: what’s nearby, what you like, one annoyance.",
    tips: ["〜があって", "便利 / ちょっとうるさい", "End with 気に入ってます"],
    modelRomaji:
      "Watashi no machi wa eki ga chikakute, konbini mo ooi desu. Benri nan desu kedo, yoru wa chotto urusai koto mo arimasu. Demo, kekkou ki ni ittemasu.",
    modelHiragana:
      "わたしのまちはえきがちかくて、コンビニもおおいです。べんりなんですけど、よるはちょっとうるさいこともあります。でも、けっこうきにいってます。",
    targetSeconds: 60,
  },
  {
    id: "lf-14",
    title: "Recommend a show",
    promptEnglish:
      "Recommend an anime or drama to a friend — genre, vibe, why they might like it.",
    tips: ["おすすめは", "雰囲気は", "もし〜が好きなら"],
    modelRomaji:
      "Osusume wa nichijou-kei no anime desu. Fun'iki wa odayaka de, warai mo arimasu. Moshi school life ga suki nara, kitto tanoshimeru to omoimasu.",
    modelHiragana:
      "おすすめはにちじょうけいのアニメです。ふんいきはおだやかで、わらいもあります。もしスクールライフがすきなら、きっとたのしめるとおもいます。",
    targetSeconds: 50,
  },
  {
    id: "lf-15",
    title: "Apologize and repair",
    promptEnglish:
      "You’re late to meet a friend. Apologize, explain briefly, and propose a fix.",
    tips: ["ごめん、おくれた", "〜で", "次は〜"],
    modelRomaji:
      "Gomen, okureta! Densha ga okurete… Ima iku ne. Tsugi wa motto hayaku deru yo.",
    modelHiragana:
      "ごめん、おくれた！でんしゃがおくれて…いまいくね。つぎはもっとはやくでるよ。",
    targetSeconds: 35,
  },
  {
    id: "lf-16",
    title: "Explain your study method",
    promptEnglish:
      "Explain how you study Japanese in simple Japanese — input, review, speaking.",
    tips: ["まいにち", "きいて", "ふりかえって"],
    modelRomaji:
      "Mainichi sukoshi kiite, tango o review shite, sore kara koe ni dashite hanashimasu. Muzukashii toki mo arimasu kedo, tsuzuketeimasu.",
    modelHiragana:
      "まいにちすこしきいて、たんごをレビューして、それからこえにだしてはなします。むずかしいときもありますけど、つづけています。",
    targetSeconds: 55,
  },
];

export function getLongForm(id: string) {
  return longFormBank.find((p) => p.id === id);
}
