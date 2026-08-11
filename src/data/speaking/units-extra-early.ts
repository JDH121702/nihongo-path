import { expandSpeaking, type CompactSpeaking } from "./builder";

const compact: CompactSpeaking[] = [
  {
    id: "sp-1-4",
    unit: 1,
    unitTitle: "Sound & Script Foundation",
    order: 4,
    title: "Numbers You Actually Hear",
    subtitle: "Prices, platforms, and 番線—not a counting song",
    scenario: "A ticket machine and a platform announcement. Numbers are everywhere on day one.",
    durationMin: 16,
    objectives: [
      "Hear いち〜じゅう in prices and platforms",
      "Use ばんせん and えん in real phrases",
      "Catch にばんせんです as a whole chunk",
    ],
    dialogue: [
      ["Announcement", "Niban-sen desu. Go-chūi kudasai.", "にばんせんです。ごちゅういください。", "Platform 2. Please be careful."],
      ["You", "Sumimasen, ikura desu ka?", "すみません、いくらですか？", "Excuse me, how much is it?"],
      ["Staff", "Happyaku-en desu.", "はっぴゃくえんです。", "It's 800 yen."],
      ["You", "Hai, onegai shimasu.", "はい、お願いします。", "Yes, please."],
    ],
    patterns: [
      {
        chunk: "いくらですか",
        romaji: "ikura desu ka",
        hiragana: "いくらですか",
        meaning: "How much is it?",
        whenToUse: "Any price: convenience store, tickets, market stalls.",
        examples: [
          ["これ、いくらですか", "kore, ikura desu ka", "How much is this?"],
          ["ふたりでいくらですか", "futari de ikura desu ka", "How much for two people?"],
        ],
      },
      {
        chunk: "〜えん",
        romaji: "~ en",
        hiragana: "〜えん",
        meaning: "___ yen",
        whenToUse: "Always attach えん to money amounts.",
        examples: [
          ["さんびゃくえん", "sanbyaku-en", "300 yen"],
          ["せんえん", "sen-en", "1,000 yen"],
        ],
      },
    ],
    grammarNotes: [
      ["八百 is はっぴゃく, not はちひゃく", "Sound changes on 300/600/800 are high-frequency. Learn them as chunks."],
    ],
    culturalNote: [
      "Machines talk to you",
      "Ticket gates and platforms announce numbers constantly. Train your ear on ばんせん before you worry about grammar charts.",
    ],
    shadowing: [
      ["Ikura desu ka?", "いくらですか？"],
      ["Niban-sen desu.", "にばんせんです。"],
    ],
    quiz: [
      ["How do you ask the price?", ["どこですか", "いくらですか", "だれですか", "いつですか"], 1, "いくらですか is the price chunk."],
      ["800 yen is heard as:", ["はちひゃくえん", "はっぴゃくえん", "やおえん", "はちえん"], 1, "八百円 is はっぴゃくえん."],
    ],
    production: [
      ["How much is this?", "これ + いくら", "Kore, ikura desu ka?", "これ、いくらですか？"],
    ],
  },
  {
    id: "sp-2-4",
    unit: 2,
    unitTitle: "Survival Patterns",
    order: 4,
    title: "This, That, and Pointing",
    subtitle: "これ/それ/あれ when you don't know the word",
    scenario: "A bakery. You point. Staff confirm. This is how adults survive unknown vocabulary.",
    durationMin: 16,
    objectives: [
      "Use これ/それ/あれ by distance",
      "Order with これにします",
      "Confirm with これですか",
    ],
    dialogue: [
      ["You", "Sumimasen, kore kudasai.", "すみません、これください。", "Excuse me, this one please."],
      ["Staff", "Kore desu ka?", "これですか？", "This one?"],
      ["You", "Hai, sore desu. Sore ni shimasu.", "はい、それです。それにします。", "Yes, that one. I'll go with that."],
      ["Staff", "Kashikomarimashita.", "かしこまりました。", "Certainly."],
    ],
    patterns: [
      {
        chunk: "これにします",
        romaji: "kore ni shimasu",
        hiragana: "これにします",
        meaning: "I'll go with this / I'll take this",
        whenToUse: "Deciding among options—menus, sizes, seats.",
        examples: [
          ["みずのにします", "mizu no ni shimasu", "I'll have the water one"],
          ["こっちにします", "kocchi ni shimasu", "I'll go with this one (casual)"],
        ],
      },
      {
        chunk: "これ / それ / あれ",
        romaji: "kore / sore / are",
        hiragana: "これ / それ / あれ",
        meaning: "this (near me) / that (near you) / that over there",
        whenToUse: "When you cannot name the thing. Point + these three cover 80% of shops.",
        examples: [
          ["あれ、なに？", "are, nani?", "What's that over there?"],
          ["それ、おいしいですよ", "sore, oishii desu yo", "That one's tasty"],
        ],
      },
    ],
    grammarNotes: [
      ["にします = decide on", "Xにします is a decision, not a description. これです = 'it is this.' これにします = 'I'll take this.'"],
    ],
    culturalNote: [
      "Pointing is polite if you soften it",
      "すみません + これ is kinder than snapping fingers. Staff will repeat これですか to confirm—just say はい.",
    ],
    shadowing: [
      ["Kore kudasai.", "これください。"],
      ["Sore ni shimasu.", "それにします。"],
    ],
    quiz: [
      ["Near the listener is:", ["これ", "それ", "あれ", "どれ"], 1, "それ is near the other person."],
      ["I'll take this =", ["これです", "これにします", "これですか", "これが好き"], 1, "にします marks the choice."],
    ],
    production: [
      ["I'll go with that one", "それ + にします", "Sore ni shimasu.", "それにします。"],
    ],
  },
  {
    id: "sp-3-4",
    unit: 3,
    unitTitle: "Daily Life Dialogues",
    order: 4,
    title: "Trains: Fast, Local, Wrong Side",
    subtitle: "各停, 急行, and 'is this going to…?'",
    scenario: "Yamanote is easy. Other lines are not. You check before you board.",
    durationMin: 18,
    objectives: [
      "Ask このでんしゃ、〜いきますか",
      "Hear ふつう / きゅうこう / かいそく",
      "Recover when you're on the wrong train",
    ],
    dialogue: [
      ["You", "Sumimasen, kono densha, Yokohama ikimasu ka?", "すみません、このでんしゃ、よこはまいきますか？", "Excuse me, does this train go to Yokohama?"],
      ["Stranger", "Iya, kore wa Yamate-sen. Achira no hō desu.", "いや、これはやまのてせん。あちらのほうです。", "No, this is the Yamanote. That way."],
      ["You", "A, sumimasen! Kyūkō no hō ga hayai desu ka?", "あ、すみません！きゅうこうのほうがはやいですか？", "Ah, sorry! Is the express faster?"],
      ["Stranger", "Un, kyūkō ga ii yo. Tsugi no tsuka.", "うん、きゅうこうがいいよ。つぎのつか。", "Yeah, take the express. The next one."],
    ],
    patterns: [
      {
        chunk: "このでんしゃ、〜いきますか",
        romaji: "kono densha, ~ ikimasu ka",
        hiragana: "このでんしゃ、〜いきますか",
        meaning: "Does this train go to ___?",
        whenToUse: "Ask anyone on the platform. Faster than reading the whole board.",
        examples: [
          ["このでんしゃ、しんじゅくいきますか", "kono densha, Shinjuku ikimasu ka", "Does this go to Shinjuku?"],
          ["つぎ、とまりますか", "tsugi, tomarimasu ka", "Does it stop at the next one?"],
        ],
      },
      {
        chunk: "〜のほうがいい",
        romaji: "~ no hō ga ii",
        hiragana: "〜のほうがいい",
        meaning: "___ is better / you should take ___",
        whenToUse: "Recommendations between two options.",
        examples: [
          ["きゅうこうのほうがいい", "kyūkō no hō ga ii", "The express is better"],
          ["あるいたほうがいい", "aruita hō ga ii", "Better to walk"],
        ],
      },
    ],
    grammarNotes: [
      ["のほう compares", "Aのほうがいい = A wins the comparison. You don't need to say B."],
    ],
    culturalNote: [
      "Ask the person next to you",
      "Platform strangers answer このでんしゃ questions all day. Start with すみません. Bow-nod when they help.",
    ],
    shadowing: [
      ["Kono densha, Yokohama ikimasu ka?", "このでんしゃ、よこはまいきますか？"],
      ["Kyūkō no hō ga ii yo.", "きゅうこうのほうがいいよ。"],
    ],
    quiz: [
      ["Ask if this train goes to Shinjuku:", ["しんじゅくです", "このでんしゃ、しんじゅくいきますか", "しんじゅくが好き", "しんじゅくください"], 1, "このでんしゃ + destination + いきますか."],
      ["Express is:", ["ふつう", "かくてい", "きゅうこう", "おわり"], 2, "急行 = きゅうこう."],
    ],
    production: [
      ["Does this train go to Shinjuku?", "このでんしゃ + いきますか", "Kono densha, Shinjuku ikimasu ka?", "このでんしゃ、しんじゅくいきますか？"],
    ],
  },
  {
    id: "sp-4-4",
    unit: 4,
    unitTitle: "Social & Connection",
    order: 4,
    title: "How Was Your Weekend?",
    subtitle: "月曜日の「週末どうだった？」",
    scenario: "Monday morning small talk. This is how coworkers become people.",
    durationMin: 17,
    objectives: [
      "Ask しゅうまつ、どうだった？",
      "Answer with 〜てた / のんびり",
      "Keep the ball in the air with そっちは？",
    ],
    dialogue: [
      ["Mika", "Ohayō. Shūmatsu, dō datta?", "おはよう。しゅうまつ、どうだった？", "Morning. How was your weekend?"],
      ["You", "Nomi ni itte ta. Kekkō tanoshikatta. Socchi wa?", "のみにいってた。けっこうたのしかった。そっちは？", "Went out drinking. Pretty fun. You?"],
      ["Mika", "Uchi de nete ta. Saabisu zangyō datta kara…", "うちでねてた。サービスざんぎょうだったから…", "Slept at home. Unpaid overtime, so…"],
      ["You", "Otsukare. Raishū wa hima?", "おつかれ。らいしゅうはひま？", "Rough. Free next week?"],
    ],
    patterns: [
      {
        chunk: "どうだった？",
        romaji: "dō datta?",
        hiragana: "どうだった？",
        meaning: "How was it?",
        whenToUse: "After events, weekends, movies, dates. Casual past of どう.",
        examples: [
          ["えいが、どうだった？", "eiga, dō datta?", "How was the movie?"],
          ["めんせつ、どうだった？", "mensetsu, dō datta?", "How was the interview?"],
        ],
      },
      {
        chunk: "そっちは？",
        romaji: "socchi wa?",
        hiragana: "そっちは？",
        meaning: "How about you / your side?",
        whenToUse: "Return the question without repeating the whole sentence.",
        examples: [
          ["こっちはだいじょうぶ。そっちは？", "kocchi wa daijōbu. socchi wa?", "I'm fine. You?"],
        ],
      },
    ],
    grammarNotes: [
      ["てた = ていた, shortened", "いってた = was going / went and was there. Monday stories live in this form."],
    ],
    culturalNote: [
      "Small talk is short on purpose",
      "Don't deliver a TED talk. One activity + たのしかった / つかれた + そっちは？ is the whole genre.",
    ],
    shadowing: [
      ["Shūmatsu, dō datta?", "しゅうまつ、どうだった？"],
      ["Socchi wa?", "そっちは？"],
    ],
    quiz: [
      ["Casual 'How was it?' is:", ["どうですか", "どうだった？", "どうしますか", "どうして"], 1, "どうだった is past/casual."],
      ["Return the question with:", ["さようなら", "そっちは？", "すみません", "ください"], 1, "そっちは？ keeps conversation balanced."],
    ],
    production: [
      ["How was your weekend?", "しゅうまつ + どうだった", "Shūmatsu, dō datta?", "しゅうまつ、どうだった？"],
    ],
  },
  {
    id: "sp-5-4",
    unit: 5,
    unitTitle: "Natural Native Speech",
    order: 4,
    title: "〜んだ / 〜んです Explanations",
    subtitle: "The little sound that makes Japanese feel like Japanese",
    scenario: "You're late. A flat おくれました sounds cold. おくれたんです explains.",
    durationMin: 18,
    objectives: [
      "Add んです to explain or seek explanation",
      "Hear の？ as the casual version",
      "Soften statements that would otherwise sound blunt",
    ],
    dialogue: [
      ["Boss", "Chotto osoi ne.", "ちょっとおそいね。", "You're a bit late."],
      ["You", "Sumimasen. Densha ga okureta n desu.", "すみません。でんしゃがおくれたんです。", "Sorry. The train was delayed (that's why)."],
      ["Boss", "Ā, sō na no. Daijōbu daijōbu.", "ああ、そうなの。だいじょうぶだいじょうぶ。", "Ah, I see. No worries."],
      ["You", "Ashita wa hayaku kimasu.", "あしたははやくきます。", "I'll come early tomorrow."],
    ],
    patterns: [
      {
        chunk: "〜んです",
        romaji: "~ n desu",
        hiragana: "〜んです",
        meaning: "It's that… / the thing is… (explanatory)",
        whenToUse: "Give reasons, ask why gently, make statements feel shared not announced.",
        examples: [
          ["ちょっとねつがあるんです", "chotto netsu ga aru n desu", "I've got a bit of a fever (that's why)"],
          ["どうしたんですか", "dō shita n desu ka", "What happened? (softer)"],
        ],
      },
      {
        chunk: "そうなの",
        romaji: "sō na no",
        hiragana: "そうなの",
        meaning: "Ah, I see / so that's it",
        whenToUse: "Acknowledge someone's んです explanation.",
        examples: [
          ["へー、そうなの", "hē, sō na no", "Huh, is that so"],
        ],
      },
    ],
    grammarNotes: [
      ["ん comes from の", "Formal のです → んです → casual の / んだ. Same job: wrapping a fact as an explanation."],
    ],
    culturalNote: [
      "Reasons are social, not legal",
      "A short んです reason is enough. Over-explaining sounds like you're arguing. One clause, then stop.",
    ],
    shadowing: [
      ["Densha ga okureta n desu.", "でんしゃがおくれたんです。"],
      ["Dō shita n desu ka?", "どうしたんですか？"],
    ],
    quiz: [
      ["Add explanation flavor with:", ["ですよ", "んです", "ます", "ね"], 1, "んです marks an explanation or soft why."],
      ["Softer 'what happened?' is:", ["なに", "どうしたんですか", "だれですか", "いくつ"], 1, "どうしたんですか seeks the story, not a report."],
    ],
    production: [
      ["Sorry, the train was delayed (explanatory)", "おくれた + んです", "Sumimasen. Densha ga okureta n desu.", "すみません。でんしゃがおくれたんです。"],
    ],
  },
  {
    id: "sp-6-4",
    unit: 6,
    unitTitle: "Favors & Nuance",
    order: 4,
    title: "Giving & Receiving Favors",
    subtitle: "あげる / くれる / もらう—who did the kindness",
    scenario: "A coworker prints something for you. The verb you choose shows who the favor flowed toward.",
    durationMin: 20,
    objectives: [
      "Use てくれる when they do you a favor",
      "Use てもらう when you receive the favor",
      "Avoid あげる toward a superior",
    ],
    dialogue: [
      ["You", "Insatsu, tetsudatte kurenai?", "いんさつ、てつだってくれない？", "Could you help me print? (casual)"],
      ["Ken", "Ii yo. Ato de yaru ne.", "いいよ。あとでやるね。", "Sure. I'll do it in a bit."],
      ["You", "Arigatō. Tasuke te moratta.", "ありがとう。たすけてもらった。", "Thanks. You really helped me."],
      ["Ken", "Ki ni shinai de.", "きにしないで。", "Don't worry about it."],
    ],
    patterns: [
      {
        chunk: "〜てくれる",
        romaji: "~ te kureru",
        hiragana: "〜てくれる",
        meaning: "Someone does ___ for me (kindness toward me)",
        whenToUse: "When the action benefits you or your in-group.",
        examples: [
          ["おしえてくれた", "oshiete kureta", "They taught me (kindly)"],
          ["まってくれない？", "matte kurenai?", "Will you wait for me?"],
        ],
      },
      {
        chunk: "〜てもらう",
        romaji: "~ te morau",
        hiragana: "〜てもらう",
        meaning: "I get someone to ___ / I receive the favor of ___",
        whenToUse: "Your viewpoint: you received the action. Polite request: てもらえますか.",
        examples: [
          ["みてもらう", "mite morau", "have someone look at it"],
          ["おくってもらう", "okutte morau", "have them give you a ride"],
        ],
      },
    ],
    grammarNotes: [
      ["あげる goes out, くれる comes in", "Don't あげる to your boss. From your mouth, their kindness is くれる / いただく."],
    ],
    culturalNote: [
      "Naming the favor is the thanks",
      "たすけてもらった acknowledges the flow. ありがとう alone can feel thin after real effort.",
    ],
    shadowing: [
      ["Tetsudatte kurenai?", "てつだってくれない？"],
      ["Tasuke te moratta.", "たすけてもらった。"],
    ],
    quiz: [
      ["They did me a kindness uses:", ["てあげる", "てくれる", "ていく", "てみる"], 1, "てくれる = favor toward the speaker."],
      ["I received the favor uses:", ["てもらう", "てしまう", "ておく", "てくる"], 0, "てもらう is the receive-a-favor verb."],
    ],
    production: [
      ["Will you wait for me?", "待って + くれない", "Matte kurenai?", "まってくれない？"],
    ],
  },
];

export const speakingLessonsExtraEarly = compact.map(expandSpeaking);
