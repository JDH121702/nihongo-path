import { expandSpeaking, type CompactSpeaking } from "./builder";

const compact: CompactSpeaking[] = [
  // ─── Unit 7: Work & Office ───────────────────────────────────────────
  {
    id: "sp-7-1",
    unit: 7,
    unitTitle: "Work & Office",
    order: 1,
    title: "Otsukaresama — The Office Handshake",
    subtitle: "Leave, greet, and close the day like a coworker",
    scenario:
      "It's 18:10 in a Tokyo office. You're heading out while Tanaka-san is still at their desk. This exchange happens thousands of times a day in Japan.",
    durationMin: 26,
    objectives: [
      "Use おつかれさまです vs おつかれさまでした at the right moment",
      "Leave first with おさきにしつれいします",
      "Respond naturally when someone leaves before you",
    ],
    dialogue: [
      [
        "You",
        "Otsukaresama desu. Kyō wa hayaku kaerimasu.",
        "おつかれさまです。きょうははやくかえります。",
        "Good work today. I'm heading home early.",
      ],
      [
        "Tanaka",
        "Otsukaresama desu. Osaki ni dōzo.",
        "おつかれさまです。おさきにどうぞ。",
        "Good work. Please, go ahead (leave first).",
      ],
      [
        "You",
        "Osaki ni shitsurei shimasu.",
        "おさきにしつれいします。",
        "Excuse me for leaving first.",
      ],
      [
        "Tanaka",
        "Ki o tsukete. Mata ashita.",
        "きをつけて。またあした。",
        "Take care. See you tomorrow.",
      ],
      [
        "You",
        "Hai, otsukaresama deshita.",
        "はい、おつかれさまでした。",
        "Thanks — good work today. (closing the day)",
      ],
      [
        "Tanaka",
        "Hai, mata ashita. Oyasumi.",
        "はい、またあした。おやすみ。",
        "Yes, see you tomorrow. Rest well.",
      ],
    ],
    patterns: [
      {
        chunk: "おつかれさまです / でした",
        romaji: "otsukaresama desu / deshita",
        hiragana: "おつかれさまです / でした",
        meaning: "Thanks for your hard work (workplace greeting/closing)",
        whenToUse:
          "です while people are still 'on duty.' でした when the work block is over — leaving, after a meeting, end of shift.",
        examples: [
          [
            "おつかれさまです",
            "otsukaresama desu",
            "Good work (passing in the hallway)",
          ],
          [
            "おつかれさまでした",
            "otsukaresama deshita",
            "Good work (as you walk out the door)",
          ],
        ],
      },
      {
        chunk: "おさきにしつれいします",
        romaji: "osaki ni shitsurei shimasu",
        hiragana: "おさきにしつれいします",
        meaning: "Excuse me for leaving before you",
        whenToUse:
          "Required when you leave while others are still working. The staying person often replies おさきにどうぞ.",
        examples: [
          [
            "おさきにしつれいします",
            "osaki ni shitsurei shimasu",
            "Excuse me for heading out first",
          ],
          [
            "おさきにどうぞ",
            "osaki ni dōzo",
            "Please, go ahead and leave",
          ],
        ],
      },
      {
        chunk: "きをつけて",
        romaji: "ki o tsukete",
        hiragana: "きをつけて",
        meaning: "Take care / be careful",
        whenToUse:
          "When someone leaves the office, heads home late, or goes into rain.",
        examples: [
          [
            "きをつけてかえってね",
            "ki o tsukete kaette ne",
            "Take care getting home",
          ],
          [
            "あめだからきをつけて",
            "ame dakara ki o tsukete",
            "It's raining, so be careful",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "です vs でした is about the work, not the clock",
        "おつかれさまです is a living greeting — morning after standup, passing a desk at 3pm. でした marks closure: the meeting ended, your shift ended, you're walking out. Using でした at 10am to someone still working sounds like you're dismissing them.",
      ],
      [
        "しつれいします packages the apology",
        "おさきに alone can feel abrupt. しつれいします ('I'm being rude') is the social wrapper that makes leaving first acceptable.",
      ],
    ],
    culturalNote: [
      "おつかれさま is not 'you look tired'",
      "It's workplace social glue — hello, thanks, goodbye, and 'I see your effort' in one phrase. Customers don't say it to store staff (that's ありがとう). Coworkers say it to each other constantly. Skip it and you sound like you don't belong on the team.",
    ],
    shadowing: [
      ["Osaki ni shitsurei shimasu.", "おさきにしつれいします。"],
      ["Otsukaresama deshita.", "おつかれさまでした。"],
    ],
    quiz: [
      [
        "You're leaving at 18:00. A coworker is still working. You say:",
        [
          "さようなら",
          "おさきにしつれいします",
          "おつかれさまです、またね！",
          "いってきます",
        ],
        1,
        "おさきにしつれいします is the set phrase for leaving first. いってきます is for home, not the office.",
      ],
      [
        "A coworker is still at their desk at 3pm. The natural greeting is:",
        [
          "おつかれさまでした",
          "おつかれさまです",
          "おやすみなさい",
          "おめでとうございます",
        ],
        1,
        "です while work is ongoing. でした would sound like you're closing their day for them.",
      ],
      [
        "おさきにどうぞ means:",
        [
          "Please leave first",
          "You're fired",
          "Good morning",
          "Pay now",
        ],
        0,
        "おさきにどうぞ lets someone leave first.",
      ],
    ],
    production: [
      [
        "Excuse me for leaving first",
        "おさきに + しつれいします",
        "Osaki ni shitsurei shimasu.",
        "おさきにしつれいします。",
      ],
      [
        "Please go ahead and leave first",
        "おさきに + どうぞ",
        "Osaki ni dōzo.",
        "おさきにどうぞ。",
      ],
    ],
  },
  {
    id: "sp-7-2",
    unit: 7,
    unitTitle: "Work & Office",
    order: 2,
    title: "Opening and Steering a Meeting",
    subtitle: "かいぎ — start, invite opinions, move on",
    scenario:
      "A 15-minute standup in a Shibuya startup. Tanaka-san chairs. You need to flag yesterday's item and not freeze when asked for ごいけん.",
    durationMin: 26,
    objectives: [
      "Open or follow では、かいぎをはじめます",
      "Bring up a prior topic with せんじつのけんですが",
      "Pass or contribute with ごいけん / とくにありません",
    ],
    dialogue: [
      [
        "Tanaka",
        "Dewa, kaigi o hajimemasu. Senjitsu no ken desu ga...",
        "では、かいぎをはじめます。せんじつのけんですが…",
        "Well then, let's start the meeting. About the matter from the other day...",
      ],
      [
        "You",
        "Hai. Shiryō wa kesa okurimashita.",
        "はい。しりょうはけさおくりました。",
        "Yes. I sent the materials this morning.",
      ],
      [
        "Tanaka",
        "Arigatō gozaimasu. Goiken wa arimasu ka?",
        "ありがとうございます。ごいけんはありますか？",
        "Thank you. Does anyone have comments?",
      ],
      [
        "You",
        "Ima wa toku ni arimasen.",
        "いまはとくにありません。",
        "Nothing in particular right now.",
      ],
      [
        "Tanaka",
        "Dewa, tsugi ni susumimashō.",
        "では、つぎにすすみましょう。",
        "All right, let's move on.",
      ],
      [
        "You",
        "Hai, yoroshiku onegai shimasu.",
        "はい、よろしくお願いします。",
        "Yes, please (I'll handle my part).",
      ],
    ],
    patterns: [
      {
        chunk: "では、〜をはじめます",
        romaji: "dewa, ~ o hajimemasu",
        hiragana: "では、〜をはじめます",
        meaning: "Well then, let's begin ___",
        whenToUse:
          "Meeting-openers and polite transitions. では is slightly more formal than じゃあ.",
        examples: [
          [
            "では、かいぎをはじめます",
            "dewa, kaigi o hajimemasu",
            "Well then, let's begin the meeting",
          ],
          [
            "では、つぎにすすみましょう",
            "dewa, tsugi ni susumimashō",
            "Well then, let's move on",
          ],
        ],
      },
      {
        chunk: "せんじつのけんですが",
        romaji: "senjitsu no ken desu ga",
        hiragana: "せんじつのけんですが",
        meaning: "About the matter from the other day...",
        whenToUse:
          "Reopen a previous agenda item without dumping context. けん = 'the matter/case' — workplace gold.",
        examples: [
          [
            "せんじつのけんですが",
            "senjitsu no ken desu ga",
            "About that matter from the other day...",
          ],
          [
            "メールのけんなんですが",
            "mēru no ken nan desu ga",
            "It's about the email matter...",
          ],
        ],
      },
      {
        chunk: "つぎにすすみましょう",
        romaji: "tsugi ni susumimashō",
        hiragana: "つぎにすすみましょう",
        meaning: "Let's move on to the next point",
        whenToUse:
          "Chairing or helping a meeting progress after a topic wraps.",
        examples: [
          [
            "では、つぎにすすみましょう",
            "dewa, tsugi ni susumimashō",
            "Well then, let's move on",
          ],
          [
            "じかんですので、つぎに",
            "jikan desu node, tsugi ni",
            "We're out of time, so next",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "が soft-opens the real topic",
        "〜なんですが / 〜けんですが trails off on purpose. It says 'I'm about to bring something up — ready?' Jumping to the request without が feels blunt in meetings.",
      ],
    ],
    culturalNote: [
      "Silence after ごいけん isありますか is normal",
      "Japanese meetings often wait a beat. とくにありません is a complete, respectable answer — you're not failing. If you do have a concern, preface it with すこしきになるんですが so it doesn't land as an attack.",
    ],
    shadowing: [
      ["Dewa, kaigi o hajimemasu.", "では、かいぎをはじめます。"],
      ["Senjitsu no ken desu ga...", "せんじつのけんですが…"],
    ],
    quiz: [
      [
        "You need to reopen yesterday's topic. You start with:",
        [
          "もういちどいいます",
          "せんじつのけんですが",
          "わかりません",
          "おつかれさまです",
        ],
        1,
        "せんじつのけんですが is the standard 'about that previous matter' opener.",
      ],
      [
        "The chair asks ごいけんはありますか. You have nothing. You say:",
        [
          "いいえ、だめです",
          "とくにありません",
          "はなしたくないです",
          "そうですね、はい",
        ],
        1,
        "とくにありません = nothing in particular. Clean, polite, done.",
      ],
      [
        "とくにありません means:",
        [
          "I have many opinions",
          "Nothing in particular",
          "Start over",
          "Email me",
        ],
        1,
        "とくにありません = nothing in particular.",
      ],
    ],
    production: [
      [
        "Well then, let's begin the meeting",
        "では + かいぎを + はじめます",
        "Dewa, kaigi o hajimemasu.",
        "では、かいぎをはじめます。",
      ],
      [
        "Does anyone have comments?",
        "ごいけん + ありますか",
        "Goiken wa arimasu ka?",
        "ごいけんはありますか？",
      ],
    ],
  },
  {
    id: "sp-7-3",
    unit: 7,
    unitTitle: "Work & Office",
    order: 3,
    title: "Confirming Without Looking Lost",
    subtitle: "かくにん — deadlines, りょうかい, and the follow-up mail",
    scenario:
      "Tanaka-san just assigned a Friday deadline in the hallway. You need to confirm the time, show you got it, and promise a written check — the combo that makes you look reliable.",
    durationMin: 26,
    objectives: [
      "Confirm a condition with 〜でかまいませんか",
      "Acknowledge with りょうかいです / かくにんしました",
      "Offer a written follow-up: メールでもおくっておきます",
    ],
    dialogue: [
      [
        "You",
        "Shimekiri wa kin'yōbi de kamaimasen ka?",
        "しめきりはきんようびでかまいませんか？",
        "Is Friday all right for the deadline?",
      ],
      [
        "Tanaka",
        "Hai. Kin'yōbi no jūyo-ji made ni onegai shimasu.",
        "はい。きんようびのじゅうよじまでにおねがいします。",
        "Yes. Please have it in by Friday at 2pm.",
      ],
      [
        "You",
        "Ryōkai desu. Mēru de mo kakunin shite okimasu ne.",
        "りょうかいです。メールでもかくにんしておきますね。",
        "Understood. I'll also confirm it by email.",
      ],
      [
        "Tanaka",
        "Arigatō. Yoroshiku onegai shimasu.",
        "ありがとう。よろしくおねがいします。",
        "Thanks. I'm counting on you.",
      ],
      [
        "You",
        "Hai, kakunin shimashita.",
        "はい、かくにんしました。",
        "Yes — confirmed.",
      ],
      [
        "You",
        "Kashikomarimashita. Sugu yarimasu.",
        "かしこまりました。すぐやります。",
        "Understood. I'll do it right away.",
      ],
    ],
    patterns: [
      {
        chunk: "〜でかまいませんか",
        romaji: "~ de kamaimasen ka",
        hiragana: "〜でかまいませんか",
        meaning: "Is ___ all right? / Would ___ be okay?",
        whenToUse:
          "Check a condition without sounding like you're negotiating aggressively. Softer than いいですか in client-facing talk.",
        examples: [
          [
            "きんようびでかまいませんか",
            "kin'yōbi de kamaimasen ka",
            "Is Friday all right?",
          ],
          [
            "これでかまいませんか",
            "kore de kamaimasen ka",
            "Is this all right as-is?",
          ],
        ],
      },
      {
        chunk: "りょうかいです / かくにんしました",
        romaji: "ryōkai desu / kakunin shimashita",
        hiragana: "りょうかいです / かくにんしました",
        meaning: "Understood / I've confirmed it",
        whenToUse:
          "りょうかい = I got the instruction (internal, slightly casual-professional). かくにんしました = I checked/verified a fact. Both beat a bare はい.",
        examples: [
          ["りょうかいです", "ryōkai desu", "Understood (I'll do it)"],
          ["かくにんしました", "kakunin shimashita", "I've confirmed it"],
        ],
      },
      {
        chunk: "かしこまりました",
        romaji: "kashikomarimashita",
        hiragana: "かしこまりました",
        meaning: "Certainly / understood (service/work register)",
        whenToUse:
          "Confirming you'll carry out a request from a superior or client.",
        examples: [
          [
            "かしこまりました",
            "kashikomarimashita",
            "Certainly",
          ],
          [
            "はい、かしこまりました",
            "hai, kashikomarimashita",
            "Yes, understood",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "〜ておきます = do it in advance / for later",
        "メールでかくにんしておきます = I'll go ahead and confirm by email (so we both have a record). おく is the 'handle it now so the future is safe' helper — huge at work.",
      ],
      [
        "までに = by (deadline)",
        "じゅうよじまで = until 2. じゅうよじまでに = by 2. Missing に is a classic mix-up that changes the meaning.",
      ],
    ],
    culturalNote: [
      "Verbal yes + written echo is the Japanese reliability combo",
      "Hallway agreements evaporate. Saying メールでもおくっておきますね isn't neurotic — it protects both of you. Many teams treat Slack/email confirmation as the real かくにん, not the nod in the corridor.",
    ],
    shadowing: [
      ["Kin'yōbi de kamaimasen ka?", "きんようびでかまいませんか？"],
      ["Ryōkai desu. Kakunin shimashita.", "りょうかいです。かくにんしました。"],
    ],
    quiz: [
      [
        "Your boss gives a deadline. The crisp acknowledgment is:",
        ["たぶん", "りょうかいです", "ちょっと", "さようなら"],
        1,
        "りょうかいです signals you received and accepted the instruction.",
      ],
      [
        "〜までに means:",
        [
          "Starting from that time",
          "Around that time",
          "By that deadline",
          "After that time",
        ],
        2,
        "までに = by. まで without に is 'until / up to.'",
      ],
      [
        "りょうかい means:",
        [
          "Understood / roger",
          "Goodbye",
          "Maybe later",
          "Never",
        ],
        0,
        "りょうかい confirms understanding.",
      ],
    ],
    production: [
      [
        "Understood. I'll confirm it by email too",
        "りょうかい + メールでもかくにんしておきます",
        "Ryōkai desu. Mēru de mo kakunin shite okimasu.",
        "りょうかいです。メールでもかくにんしておきます。",
      ],
      [
        "I'll confirm and get back to you",
        "かくにんして + ごれんらくします",
        "Kakunin shite gorenraku shimasu.",
        "かくにんしてごれんらくします。",
      ],
    ],
  },
  {
    id: "sp-7-4",
    unit: 7,
    unitTitle: "Work & Office",
    order: 4,
    title: "I'm Running Late — Call It In",
    subtitle: "おくれ — delay, ETA, and きをつけて",
    scenario:
      "The Yamanote line stopped between stations. You're due at a 10:00 client meeting. You call Tanaka-san from the packed car — short, specific, apologetic.",
    durationMin: 26,
    objectives: [
      "Open with おくれてすみません + a real reason",
      "Give an ETA with 〜ふんほどかかりそうです",
      "Close so the other person can replan",
    ],
    dialogue: [
      [
        "You",
        "Moshimoshi, Tanaka-san desu ka. Okurete sumimasen.",
        "もしもし、タナカさんですか。おくれてすみません。",
        "Hello, is this Tanaka-san? Sorry I'm running late.",
      ],
      [
        "Tanaka",
        "Daijōbu desu ka?",
        "だいじょうぶですか？",
        "Are you okay?",
      ],
      [
        "You",
        "Densha ga chikoku shite ite, juppun hodo kakarisō desu.",
        "でんしゃがちこくしていて、じゅっぷんほどかかりそうです。",
        "The train is delayed, so it looks like I'll need about ten more minutes.",
      ],
      [
        "Tanaka",
        "Wakarimashita. Ki o tsukete kudasai.",
        "わかりました。きをつけてください。",
        "Got it. Please be careful.",
      ],
      [
        "You",
        "Sumimasen. Yoroshiku onegai shimasu.",
        "すみません。よろしくおねがいします。",
        "Sorry. Thank you for handling it.",
      ],
      [
        "Boss",
        "Wakatta. Tsugi kara renraku shite.",
        "わかった。つぎかられんらくして。",
        "Got it. Contact me next time.",
      ],
    ],
    patterns: [
      {
        chunk: "おくれてすみません",
        romaji: "okurete sumimasen",
        hiragana: "おくれてすみません",
        meaning: "Sorry I'm late / sorry for the delay",
        whenToUse:
          "Lead with the apology, then the reason. Reverse order (reason first) can sound like you're justifying.",
        examples: [
          [
            "おくれてすみません",
            "okurete sumimasen",
            "Sorry I'm late",
          ],
          [
            "おそくなってごめんなさい",
            "osoku natte gomennasai",
            "Sorry I ended up late (softer / closer relationships)",
          ],
        ],
      },
      {
        chunk: "〜ほどかかりそうです",
        romaji: "~ hodo kakarisō desu",
        hiragana: "〜ほどかかりそうです",
        meaning: "It looks like it will take about ___",
        whenToUse:
          "Give people a number they can plan around. ほど hedges so you aren't locked to an exact minute.",
        examples: [
          [
            "じゅっぷんほどかかりそうです",
            "juppun hodo kakarisō desu",
            "It looks like about ten minutes",
          ],
          [
            "さんじゅっぷんほどかかります",
            "sanjuppun hodo kakarimasu",
            "It'll take about thirty minutes",
          ],
        ],
      },
      {
        chunk: "おくれてすみません",
        romaji: "okurete sumimasen",
        hiragana: "おくれてすみません",
        meaning: "Sorry for being late",
        whenToUse:
          "Arrive late to work or a meeting; pair with a short reason.",
        examples: [
          [
            "おくれてすみません",
            "okurete sumimasen",
            "Sorry I'm late",
          ],
          [
            "でんしゃがおくれて…",
            "densha ga okurete…",
            "The train was delayed…",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "〜ていて explains an ongoing cause",
        "でんしゃがちこくしていて = the train is (currently) running late, and that's why... The て-form chains the situation into your apology.",
      ],
      [
        "そうです here is 'looks like,' not hearsay",
        "かかりそうです = it appears it will take... Stem + そう. Different from ちこくするそうです ('I hear it's delayed').",
      ],
    ],
    culturalNote: [
      "Call before you are late, not after you arrive",
      "Japanese workplaces treat late-and-silent as worse than late-and-announced. A 30-second call with a time estimate lets them start without you or stall the client. ちえんしょうめいしょ from the station helps later — but the call is what saves the relationship.",
    ],
    shadowing: [
      ["Okurete sumimasen.", "おくれてすみません。"],
      [
        "Juppun hodo kakarisō desu.",
        "じゅっぷんほどかかりそうです。",
      ],
    ],
    quiz: [
      [
        "Best first line when you'll be late to work:",
        [
          "いまどこ？",
          "おくれてすみません",
          "ちこくはあたりまえです",
          "あしたいきます",
        ],
        1,
        "Apology first, then reason and ETA.",
      ],
      [
        "じゅっぷんほどかかりそうです means:",
        [
          "I'll be there in exactly ten minutes",
          "It looks like about ten more minutes",
          "I left ten minutes ago",
          "The meeting is at ten",
        ],
        1,
        "ほど + そうです = approximate + 'it looks like.'",
      ],
      [
        "A short late-reason often uses:",
        [
          "んです",
          "のみます",
          "だまれ",
          "さいこ",
        ],
        0,
        "んです softens the explanation.",
      ],
    ],
    production: [
      [
        "Sorry I'm late. The train is delayed",
        "おくれてすみません + でんしゃがちこくしていて",
        "Okurete sumimasen. Densha ga chikoku shite ite...",
        "おくれてすみません。でんしゃがちこくしていて…",
      ],
      [
        "Sorry, I'll be about 10 minutes late",
        "じゅうぷんほど + おくれます",
        "Jū-pun hodo okuremasu. Sumimasen.",
        "じゅうぷんほどおくれます。すみません。",
      ],
    ],
  },
  {
    id: "sp-7-5",
    unit: 7,
    unitTitle: "Work & Office",
    order: 5,
    title: "Handing Work Off Before You Vanish",
    subtitle: "ひきつぎ — status, leftovers, and 'call me if...'",
    scenario:
      "You're off Thursday–Friday. Sato-san will cover your tickets. A sloppy ひきつぎ is how Monday becomes a fire. You walk them through what's done and what isn't.",
    durationMin: 26,
    objectives: [
      "Ask someone to cover with たのみたいんですが",
      "Mark completed work with 〜てあります",
      "Leave an escape hatch: わからないことがあったら",
    ],
    dialogue: [
      [
        "You",
        "Yasumi no aida, kore o tanomitai n desu ga...",
        "やすみのあいだ、これをたのみたいんですが…",
        "While I'm off, I'd like to ask you to handle this...",
      ],
      [
        "Sato",
        "Wakarimashita. Doko made yatte arimasu ka?",
        "わかりました。どこまでやってありますか？",
        "Got it. How far has it been done?",
      ],
      [
        "You",
        "Koko made desu. Nokori wa kochira ni kaite arimasu.",
        "ここまでです。のこりはこちらにかいてあります。",
        "Up to here. The rest is written down here.",
      ],
      [
        "Sato",
        "Wakaranai koto ga attara, renraku shimasu ne.",
        "わからないことがあったら、れんらくしますね。",
        "If anything's unclear, I'll get in touch.",
      ],
      [
        "You",
        "Onegai shimasu. Memo mo nokoshite okimasu.",
        "おねがいします。メモものこしておきます。",
        "Please do. I'll leave a memo as well.",
      ],
      [
        "You",
        "Hai, tadashiku uketori mashita.",
        "はい、ただしくうけとりました。",
        "Yes, I received it correctly.",
      ],
    ],
    patterns: [
      {
        chunk: "〜てあります",
        romaji: "~ te arimasu",
        hiragana: "〜てあります",
        meaning: "Has been done / is in a prepared state",
        whenToUse:
          "Handovers, checklists, 'I already set this up.' Focuses on the resulting state, not who did it.",
        examples: [
          [
            "かいてあります",
            "kaite arimasu",
            "It's written (there for you)",
          ],
          [
            "やってあります",
            "yatte arimasu",
            "It's already been done",
          ],
        ],
      },
      {
        chunk: "わからないことがあったら",
        romaji: "wakaranai koto ga attara",
        hiragana: "わからないことがあったら",
        meaning: "If there's anything you don't understand",
        whenToUse:
          "Close a ひきつぎ so the other person isn't stuck being polite and silent.",
        examples: [
          [
            "わからないことがあったら、れんらくしてください",
            "wakaranai koto ga attara, renraku shite kudasai",
            "If anything's unclear, please contact me",
          ],
          [
            "もんだいがあったら、すぐいってください",
            "mondai ga attara, sugu itte kudasai",
            "If there's a problem, say so right away",
          ],
        ],
      },
      {
        chunk: "きょうゆうします",
        romaji: "kyōyū shimasu",
        hiragana: "きょうゆうします",
        meaning: "I'll share (the file/doc)",
        whenToUse:
          "Handing off docs in chat or meetings.",
        examples: [
          [
            "いまきょうゆうします",
            "ima kyōyū shimasu",
            "I'll share it now",
          ],
          [
            "フォルダにきょうゆうしました",
            "foruda ni kyōyū shimashita",
            "I shared it in the folder",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "てあります vs ています",
        "やってあります = it's in a done/prepared state (ready for the next person). やっています = someone is doing it now. Handovers want てあります.",
      ],
    ],
    culturalNote: [
      "A ひきつぎ that lives only in your head is not a ひきつぎ",
      "Japanese teams expect written residue: a memo, a ticket comment, a folder path. Saying きいてください if you're on a plane to Okinawa is not a plan. Leave the メモ, then say れんらくして.",
    ],
    shadowing: [
      ["Doko made yatte arimasu ka?", "どこまでやってありますか？"],
      [
        "Wakaranai koto ga attara, renraku shite kudasai.",
        "わからないことがあったら、れんらくしてください。",
      ],
    ],
    quiz: [
      [
        "〜てあります in a handover means:",
        [
          "I will do it later",
          "It has been prepared / is in a done state",
          "Please do it now",
          "I don't want to do it",
        ],
        1,
        "てあります highlights the resulting ready state.",
      ],
      [
        "You want Sato to ping you if stuck. You say:",
        [
          "しらないでください",
          "わからないことがあったら、れんらくしてください",
          "だいじょうぶです、むしして",
          "おつかれさまでした",
        ],
        1,
        "あったら + れんらくしてください is the standard escape hatch.",
      ],
      [
        "ごかくにんおねがいします asks someone to:",
        [
          "Leave forever",
          "Please check/confirm",
          "Sing",
          "Pay double",
        ],
        1,
        "ごかくにん = please confirm.",
      ],
    ],
    production: [
      [
        "If anything is unclear, please contact me",
        "わからないことがあったら + れんらくしてください",
        "Wakaranai koto ga attara, renraku shite kudasai.",
        "わからないことがあったら、れんらくしてください。",
      ],
      [
        "Please take a look when you can",
        "ごかくにん + おねがいします",
        "Gokakunin onegai shimasu.",
        "ごかくにんおねがいします。",
      ],
    ],
  },
  {
    id: "sp-7-6",
    unit: 7,
    unitTitle: "Work & Office",
    order: 6,
    title: "Remote Day Survival Japanese",
    subtitle: "リモート — audio, camera, and dying Wi-Fi",
    scenario:
      "Monday Zoom with the Osaka office. Your apartment Wi-Fi stutters, someone's still muted, and Tanaka-san asks if you can かおだし. This is weekly life now.",
    durationMin: 26,
    objectives: [
      "Check audio/video with きこえますか / みえますか",
      "Excuse a tech problem without derailing",
      "Offer a fallback: チャットでもだいじょうぶです",
    ],
    dialogue: [
      [
        "Tanaka",
        "Koe ga kikoemasu ka?",
        "こえがきこえますか？",
        "Can you hear my voice?",
      ],
      [
        "You",
        "Hai, kikoemasu. Sumimasen, chotto setsuzoku ga warui desu.",
        "はい、きこえます。すみません、ちょっとせつぞくがわるいです。",
        "Yes, I can hear you. Sorry — the connection is a bit bad.",
      ],
      [
        "Tanaka",
        "Kamerā wa ofu de mo daijōbu desu yo.",
        "カメラはオフでもだいじょうぶですよ。",
        "It's fine even if your camera's off.",
      ],
      [
        "You",
        "Arigatō gozaimasu. Chatto de mo okurimasu ne.",
        "ありがとうございます。チャットでもおくりますね。",
        "Thank you. I'll send it in chat as well.",
      ],
      [
        "Tanaka",
        "Yoroshiku onegai shimasu. Myūto ni natte masu yo, Sato-san.",
        "よろしくおねがいします。ミュートになってますよ、サトウさん。",
        "Thanks. Sato-san — you're on mute.",
      ],
      [
        "Tanaka",
        "Ja, online de aimashō.",
        "じゃあ、オンラインであいましょう。",
        "Then let's meet online.",
      ],
    ],
    patterns: [
      {
        chunk: "〜がきこえますか / みえますか",
        romaji: "~ ga kikoemasu ka / miemasu ka",
        hiragana: "〜がきこえますか / みえますか",
        meaning: "Can you hear / see ___?",
        whenToUse:
          "Every call's first 10 seconds. Potential form きこえる / みえる = perceptible, not 'I am listening.'",
        examples: [
          [
            "こえがきこえますか",
            "koe ga kikoemasu ka",
            "Can you hear my voice?",
          ],
          [
            "がめんがみえますか",
            "gamen ga miemasu ka",
            "Can you see the screen?",
          ],
        ],
      },
      {
        chunk: "〜でもだいじょうぶです",
        romaji: "~ de mo daijōbu desu",
        hiragana: "〜でもだいじょうぶです",
        meaning: "___ is fine too / even ___ is okay",
        whenToUse:
          "Offer or accept a backup channel when the ideal one fails.",
        examples: [
          [
            "カメラはオフでもだいじょうぶです",
            "kamerā wa ofu de mo daijōbu desu",
            "Camera off is fine too",
          ],
          [
            "チャットでもだいじょうぶです",
            "chatto de mo daijōbu desu",
            "Chat is fine too",
          ],
        ],
      },
      {
        chunk: "オンラインで",
        romaji: "onrain de",
        hiragana: "オンラインで",
        meaning: "online / via video call",
        whenToUse:
          "Remote meetings, hybrid days, quick syncs.",
        examples: [
          [
            "オンラインでいいですか",
            "onrain de ii desu ka",
            "Is online OK?",
          ],
          [
            "きょうはオンラインです",
            "kyō wa onrain desu",
            "Today is online",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "きこえる / みえる are potential, not きく / みる",
        "ききます = I will listen. きこえます = it is audible to me. On calls you almost always want the potential: is the signal arriving?",
      ],
    ],
    culturalNote: [
      "かおだし is social, not just video",
      "Turning the camera on for the greeting, then off if the line is weak, is a common compromise. Staying invisible the entire meeting without a reason can read as checked-out. A quick せつぞくがわるいです earns the pass.",
    ],
    shadowing: [
      ["Koe ga kikoemasu ka?", "こえがきこえますか？"],
      ["Chatto de mo daijōbu desu.", "チャットでもだいじょうぶです。"],
    ],
    quiz: [
      [
        "You can't hear the other person. You ask:",
        [
          "きこえますか",
          "ききますか",
          "きいてください、だけ",
          "みますか",
        ],
        0,
        "きこえますか = is it audible? ききますか = will you listen?",
      ],
      [
        "Your Wi-Fi is dying. A natural excuse is:",
        [
          "つかれました",
          "ちょっとせつぞくがわるいです",
          "にほんごがわかりません",
          "おさきにしつれいします",
        ],
        1,
        "せつぞくがわるいです is the standard tech-softener.",
      ],
      [
        "オンラインでいいですか asks if:",
        [
          "In-person only",
          "Online is OK",
          "Wi-Fi password",
          "Camera off forever",
        ],
        1,
        "オンラインで = via online.",
      ],
    ],
    production: [
      [
        "Sorry, the connection is a bit bad",
        "すみません + せつぞくがわるいです",
        "Sumimasen, chotto setsuzoku ga warui desu.",
        "すみません、ちょっとせつぞくがわるいです。",
      ],
      [
        "Can we do it online?",
        "オンラインで + いいですか",
        "Onrain de ii desu ka?",
        "オンラインでいいですか？",
      ],
    ],
  },

  // ─── Unit 8: Body, Health & Home ─────────────────────────────────────
  {
    id: "sp-8-1",
    unit: 8,
    unitTitle: "Body, Health & Home",
    order: 1,
    title: "Calling In Sick Without Oversharing",
    subtitle: "たいちょう — unwell, fever, おだいじに",
    scenario:
      "You woke up with a fever in your Nakano apartment. You message Tanaka-san before 9:00 — short, factual, and you wait for おだいじに, not a diagnosis.",
    durationMin: 26,
    objectives: [
      "Report たいちょうがわるい without a medical essay",
      "Ask やすんでもいいですか",
      "Receive and return おだいじに appropriately",
    ],
    dialogue: [
      [
        "You",
        "Sumimasen, chotto taichō ga warukute...",
        "すみません、ちょっとたいちょうがわるくて…",
        "Sorry — I'm feeling a bit unwell...",
      ],
      [
        "Tanaka",
        "Daijōbu desu ka? Netsu wa arimasu ka?",
        "だいじょうぶですか？ねつはありますか？",
        "Are you okay? Do you have a fever?",
      ],
      [
        "You",
        "Sukoshi arimasu. Kyō wa yasunde mo ii desu ka?",
        "すこしあります。きょうはやすんでもいいですか？",
        "A little, yes. Would it be all right if I rest today?",
      ],
      [
        "Tanaka",
        "Mochiron desu. Odaiji ni.",
        "もちろんです。おだいじに。",
        "Of course. Take care of yourself.",
      ],
      [
        "You",
        "Sumimasen. Yoroshiku onegai shimasu.",
        "すみません。よろしくおねがいします。",
        "Sorry. Thank you for covering things.",
      ],
      [
        "Pharmacist",
        "Shokugo ni nonde kudasai.",
        "しょくごにのんでください。",
        "Please take it after meals.",
      ],
    ],
    patterns: [
      {
        chunk: "たいちょうがわるい",
        romaji: "taichō ga warui",
        hiragana: "たいちょうがわるい",
        meaning: "I'm not feeling well / my condition is bad",
        whenToUse:
          "The default workplace illness phrase. Vague on purpose — you don't owe a symptom list in the first message.",
        examples: [
          [
            "たいちょうがわるくて",
            "taichō ga warukute",
            "I'm not feeling well, so...",
          ],
          [
            "きょうはたいちょうがいまいちです",
            "kyō wa taichō ga imaichi desu",
            "I'm not at my best today",
          ],
        ],
      },
      {
        chunk: "おだいじに",
        romaji: "odaiji ni",
        hiragana: "おだいじに",
        meaning: "Take care (said to someone who is ill)",
        whenToUse:
          "Only toward someone who's sick or injured — not a generic goodbye. Reply with ありがとうございます, not おだいじに back.",
        examples: [
          ["おだいじに", "odaiji ni", "Please take care of yourself"],
          [
            "どうぞおだいじに",
            "dōzo odaiji ni",
            "Please do take care",
          ],
        ],
      },
      {
        chunk: "〜をください",
        romaji: "~ o kudasai",
        hiragana: "〜をください",
        meaning: "Please give me ___",
        whenToUse:
          "Pharmacy counter, asking for a specific medicine or size.",
        examples: [
          [
            "このくすりをください",
            "kono kusuri o kudasai",
            "This medicine, please",
          ],
          [
            "ばんそうこうをください",
            "bansōkō o kudasai",
            "Band-aids, please",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "〜てもいいですか asks permission, not ability",
        "やすんでもいいですか = may I take the day? やすめますか = can I / am I able to rest? At work you want permission.",
      ],
    ],
    culturalNote: [
      "Japanese offices prefer you stay home with a fever",
      "Post-COVID, ねつがある is a stop sign, not a badge of dedication. Coming in 'just for the meeting' can look inconsiderate. Message early, rest, and send a brief あしたはでます / まだだめです update the night before.",
    ],
    shadowing: [
      ["Chotto taichō ga warukute...", "ちょっとたいちょうがわるくて…"],
      ["Kyō wa yasunde mo ii desu ka?", "きょうはやすんでもいいですか？"],
    ],
    quiz: [
      [
        "Your coworker is sick. You say:",
        ["おつかれさまです", "おだいじに", "いただきます", "おさきにどうぞ"],
        1,
        "おだいじに is specifically for illness or injury.",
      ],
      [
        "たいちょうがわるい is best for:",
        [
          "Telling a client their idea is bad",
          "Reporting that you feel unwell",
          "Saying the weather is bad",
          "Complaining about salary",
        ],
        1,
        "たいちょう = physical condition.",
      ],
      [
        "おだいじに is said when someone is:",
        [
          "Celebrating a win",
          "Unwell",
          "Buying lunch",
          "Late for karaoke",
        ],
        1,
        "おだいじに = take care of yourself.",
      ],
    ],
    production: [
      [
        "Sorry, I'm feeling a bit unwell...",
        "すみません + たいちょうがわるくて",
        "Sumimasen, chotto taichō ga warukute...",
        "すみません、ちょっとたいちょうがわるくて…",
      ],
      [
        "I have a headache",
        "あたまが + いたいです",
        "Atama ga itai desu.",
        "あたまがいたいです。",
      ],
    ],
  },
  {
    id: "sp-8-2",
    unit: 8,
    unitTitle: "Body, Health & Home",
    order: 2,
    title: "At the Drugstore Counter",
    subtitle: "やっきょく — symptoms, かぜぐすり, after meals",
    scenario:
      "A Matsumoto Kiyoshi in Shinjuku. You don't need a doctor yet — you need something for a sore throat and cough, and you need to understand しょくご.",
    durationMin: 26,
    objectives: [
      "Ask for medicine with a symptom, not a brand name",
      "Describe pain with 〜がいたい",
      "Follow しょくごにのんでください",
    ],
    dialogue: [
      [
        "You",
        "Sumimasen, kaze-gusuri wa arimasu ka?",
        "すみません、かぜぐすりはありますか？",
        "Excuse me, do you have cold medicine?",
      ],
      [
        "Pharmacist",
        "Donoyō na shōjō desu ka?",
        "どのようなしょうじょうですか？",
        "What kind of symptoms?",
      ],
      [
        "You",
        "Nodo ga itakute, seki ga demasu.",
        "のどがいたくて、せきがでます。",
        "My throat hurts, and I have a cough.",
      ],
      [
        "Pharmacist",
        "Kochira ga ii to omoimasu. Shokugo ni nonde kudasai.",
        "こちらがいいとおもいます。しょくごにのんでください。",
        "I think this one is good. Please take it after meals.",
      ],
      [
        "You",
        "Arigatō gozaimasu. Ichinichi nan-kai desu ka?",
        "ありがとうございます。いちにちなんかいですか？",
        "Thank you. How many times a day?",
      ],
      [
        "Nurse",
        "Namae o onegai shimasu.",
        "なまえをおねがいします。",
        "Your name, please.",
      ],
    ],
    patterns: [
      {
        chunk: "〜がいたい",
        romaji: "~ ga itai",
        hiragana: "〜がいたい",
        meaning: "My ___ hurts",
        whenToUse:
          "Body part + がいたい. Pharmacists and clinics expect this pattern more than English brand names.",
        examples: [
          ["あたまがいたい", "atama ga itai", "I have a headache"],
          ["おなかがいたい", "onaka ga itai", "My stomach hurts"],
        ],
      },
      {
        chunk: "しょくごにのんでください",
        romaji: "shokugo ni nonde kudasai",
        hiragana: "しょくごにのんでください",
        meaning: "Please take it after meals",
        whenToUse:
          "Standard dosing language. Pair with しょくぜん (before meals) and いちにち〜かい.",
        examples: [
          [
            "しょくごにのんでください",
            "shokugo ni nonde kudasai",
            "Please take it after meals",
          ],
          [
            "しょくぜんにのんでください",
            "shokuzen ni nonde kudasai",
            "Please take it before meals",
          ],
        ],
      },
      {
        chunk: "よやくしています",
        romaji: "yoyaku shite imasu",
        hiragana: "よやくしています",
        meaning: "I have an appointment",
        whenToUse:
          "Clinic/hospital reception check-in.",
        examples: [
          [
            "さんじによやくしています",
            "san-ji ni yoyaku shite imasu",
            "I have a 3 o'clock appointment",
          ],
          [
            "はじめてです",
            "hajimete desu",
            "It's my first time (here)",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "て-form chains symptoms",
        "のどがいたくて、せきがでます = throat hurts, and (so/and) I cough. One て-link is enough — don't recite your whole medical history.",
      ],
    ],
    culturalNote: [
      "Drugstore staff will actually counsel you — let them",
      "In Japan, 登録販売者 at マツキヨ / ウエルシア ask symptoms and warn about drowsiness. Saying ねむくならないのがいいです helps them pick. Bring your 保険証 only if you're going to a clinic, not the drugstore.",
    ],
    shadowing: [
      ["Nodo ga itakute, seki ga demasu.", "のどがいたくて、せきがでます。"],
      ["Shokugo ni nonde kudasai.", "しょくごにのんでください。"],
    ],
    quiz: [
      [
        "How do you say 'I have a headache'?",
        ["あたまです", "あたまがいたい", "あたまをたべます", "あたまはありません"],
        1,
        "Body part + がいたい.",
      ],
      [
        "しょくごに means:",
        ["Before meals", "During meals", "After meals", "Instead of meals"],
        2,
        "しょくご = after eating. しょくぜん = before.",
      ],
      [
        "After meals dosing is:",
        [
          "しょくご",
          "しんじゅく",
          "のみかい",
          "きゅうこう",
        ],
        0,
        "しょくご = after eating.",
      ],
    ],
    production: [
      [
        "My throat hurts, and I have a cough",
        "のどがいたくて + せきがでます",
        "Nodo ga itakute, seki ga demasu.",
        "のどがいたくて、せきがでます。",
      ],
      [
        "I have an appointment at 3",
        "さんじに + よやく",
        "San-ji ni yoyaku shite imasu.",
        "さんじによやくしています。",
      ],
    ],
  },
  {
    id: "sp-8-3",
    unit: 8,
    unitTitle: "Body, Health & Home",
    order: 3,
    title: "Booking a Clinic Visit",
    subtitle: "よやく — first visit, open slots, ほけんしょう",
    scenario:
      "A neighborhood ないか clinic in Koenji. Same-day slots vanish by noon. You call at 8:40 and need the first-visit script plus 'is the afternoon open?'",
    durationMin: 26,
    objectives: [
      "Request an appointment with よやくをしたいんですが",
      "Ask いつがあいていますか / ごごはあいていますか",
      "Handle はじめてですか and ほけんしょう",
    ],
    dialogue: [
      [
        "You",
        "Sumimasen, shinsatsu yoyaku o shitai n desu ga...",
        "すみません、しんさつよやくをしたいんですが…",
        "Excuse me, I'd like to make a medical appointment...",
      ],
      [
        "Reception",
        "Hajimete desu ka?",
        "はじめてですか？",
        "Is this your first visit?",
      ],
      [
        "You",
        "Hai, hajimete desu. Ashita no gogo wa aite imasu ka?",
        "はい、はじめてです。あしたのごごはあいていますか？",
        "Yes, first time. Is tomorrow afternoon open?",
      ],
      [
        "Reception",
        "Gogo san-ji no waku wa aite imasu. Hokenshō o motte kite kudasai.",
        "ごごさんじのわくはあいています。ほけんしょうをもってきてください。",
        "The 3pm slot is open. Please bring your insurance card.",
      ],
      [
        "You",
        "Sore dewa, onegai shimasu.",
        "それでは、おねがいします。",
        "In that case, yes please.",
      ],
      [
        "Agent",
        "Shitsumon wa arimasu ka?",
        "しつもんはありますか？",
        "Do you have any questions?",
      ],
    ],
    patterns: [
      {
        chunk: "よやくをしたいんですが",
        romaji: "yoyaku o shitai n desu ga",
        hiragana: "よやくをしたいんですが",
        meaning: "I'd like to make a reservation / appointment...",
        whenToUse:
          "Clinics, restaurants, salons. The んですが wrapper is softer than よやくしてください.",
        examples: [
          [
            "しんさつよやくをしたいんですが",
            "shinsatsu yoyaku o shitai n desu ga",
            "I'd like to book a medical appointment...",
          ],
          [
            "あしたよやくをしたいんですが",
            "ashita yoyaku o shitai n desu ga",
            "I'd like to book for tomorrow...",
          ],
        ],
      },
      {
        chunk: "〜はあいていますか",
        romaji: "~ wa aite imasu ka",
        hiragana: "〜はあいていますか",
        meaning: "Is ___ available / open?",
        whenToUse:
          "Times, seats, rooms. あいている = vacant/free, not 'the shop is open' (that's あいています for businesses too — context decides).",
        examples: [
          [
            "ごごはあいていますか",
            "gogo wa aite imasu ka",
            "Is the afternoon open?",
          ],
          [
            "こんしゅうのきんようびはあいていますか",
            "konshū no kin'yōbi wa aite imasu ka",
            "Is this Friday available?",
          ],
        ],
      },
      {
        chunk: "やちんです",
        romaji: "yachin desu",
        hiragana: "やちんです",
        meaning: "That's the rent",
        whenToUse:
          "Discussing monthly cost; clarify what's included.",
        examples: [
          [
            "やちんはいくらですか",
            "yachin wa ikura desu ka",
            "How much is the rent?",
          ],
          [
            "共益費べつです",
            "kyōeki-hi betsu desu",
            "Common fees are separate",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "はじめてです = it's my first time (here)",
        "Clinics ask because first visits need extra forms and time. Answer はい、はじめてです or いいえ、まえにきました.",
      ],
    ],
    culturalNote: [
      "Bring ほけんしょう even if you're 'just asking'",
      "Without Japanese insurance you'll pay 10割 (full price) and still be seen at many clinics — but reception will ask immediately. Walk-ins exist, yet よやく or a numbered ticket beats sitting two hours for 風邪. Many clinics close for ひるやすみ around 12:30–14:30.",
    ],
    shadowing: [
      [
        "Shinsatsu yoyaku o shitai n desu ga...",
        "しんさつよやくをしたいんですが…",
      ],
      ["Ashita no gogo wa aite imasu ka?", "あしたのごごはあいていますか？"],
    ],
    quiz: [
      [
        "You want a clinic appointment. You start with:",
        [
          "くすりください",
          "よやくをしたいんですが",
          "いたいです、いま",
          "おだいじに",
        ],
        1,
        "よやくをしたいんですが is the polite booking opener.",
      ],
      [
        "あいていますか about a time slot means:",
        [
          "Are you open as a business?",
          "Is that slot free / available?",
          "Are you tired?",
          "Did you go out?",
        ],
        1,
        "For appointments, あいている = the slot is vacant.",
      ],
      [
        "よやくしています means:",
        [
          "I have an appointment",
          "I'm lost",
          "I'm hungry",
          "I'm quitting",
        ],
        0,
        "よやく = reservation/appointment.",
      ],
    ],
    production: [
      [
        "I'd like to make a medical appointment...",
        "しんさつよやくを + したいんですが",
        "Shinsatsu yoyaku o shitai n desu ga...",
        "しんさつよやくをしたいんですが…",
      ],
      [
        "How much is the rent?",
        "やちん + いくら",
        "Yachin wa ikura desu ka?",
        "やちんはいくらですか？",
      ],
    ],
  },
  {
    id: "sp-8-4",
    unit: 8,
    unitTitle: "Body, Health & Home",
    order: 4,
    title: "Rent, Utilities, and the Transfer Date",
    subtitle: "やちん — ふりこみ, what's included, asking for one day",
    scenario:
      "You're in a 1K in Suginami. The landlord's office called: this month's transfer hasn't landed. You need to ask what's included and whether one day late is survivable.",
    durationMin: 26,
    objectives: [
      "Ask about rent with 〜についてききたいんですが",
      "Check inclusions: 〜もふくまれていますか",
      "Request a short delay without sounding casual",
    ],
    dialogue: [
      [
        "You",
        "Sumimasen, yachin no furikomi ni tsuite kikitai n desu ga...",
        "すみません、やちんのふりこみについてききたいんですが…",
        "Sorry — I'd like to ask about the rent transfer...",
      ],
      [
        "Landlord",
        "Maitsuki futsuka made ni onegai shimasu.",
        "まいつきふつかまでにおねがいします。",
        "Please have it in by the 2nd every month.",
      ],
      [
        "You",
        "Suidōdai mo fukumarete imasu ka?",
        "すいどうだいもふくまれていますか？",
        "Is the water bill included too?",
      ],
      [
        "Landlord",
        "Iie, betsu desu. Gasu to denki mo betsu desu.",
        "いいえ、べつです。ガスとでんきもべつです。",
        "No, that's separate. Gas and electricity are separate too.",
      ],
      [
        "You",
        "Wakarimashita. Kongetsu ichinichi okurete mo ii desu ka?",
        "わかりました。こんげついちにちおくれてもいいですか？",
        "Understood. Would it be all right if I'm one day late this month?",
      ],
      [
        "You",
        "Wakarimashita. Ki o tsukemasu.",
        "わかりました。きをつけます。",
        "Understood. I'll be careful.",
      ],
    ],
    patterns: [
      {
        chunk: "〜についてききたいんですが",
        romaji: "~ ni tsuite kikitai n desu ga",
        hiragana: "〜についてききたいんですが",
        meaning: "I'd like to ask about ___...",
        whenToUse:
          "Admin calls: rent, contracts, bills. Names the topic before the actual question.",
        examples: [
          [
            "やちんについてききたいんですが",
            "yachin ni tsuite kikitai n desu ga",
            "I'd like to ask about the rent...",
          ],
          [
            "けいやくについてききたいんですが",
            "keiyaku ni tsuite kikitai n desu ga",
            "I'd like to ask about the contract...",
          ],
        ],
      },
      {
        chunk: "〜もふくまれていますか",
        romaji: "~ mo fukumarete imasu ka",
        hiragana: "〜もふくまれていますか",
        meaning: "Is ___ included as well?",
        whenToUse:
          "Rent ads hide 管理費, water, internet. Always ask. も = 'this too, on top of rent.'",
        examples: [
          [
            "すいどうだいもふくまれていますか",
            "suidōdai mo fukumarete imasu ka",
            "Is water included too?",
          ],
          [
            "インターネットもふくまれていますか",
            "intānetto mo fukumarete imasu ka",
            "Is internet included too?",
          ],
        ],
      },
      {
        chunk: "もえますか / もえない",
        romaji: "moemasu ka / moenai",
        hiragana: "もえますか / もえない",
        meaning: "Is it burnable? / non-burnable",
        whenToUse:
          "Sorting trash; ask neighbors or check the poster.",
        examples: [
          [
            "これはもえますか",
            "kore wa moemasu ka",
            "Is this burnable?",
          ],
          [
            "ペットボトルはこちらです",
            "petto botoru wa kochira desu",
            "PET bottles go here",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "べつです = it's separate (not included)",
        "A one-word answer you'll hear constantly for utilities. Opposite energy: こみです / ふくまれています.",
      ],
    ],
    culturalNote: [
      "Late rent is a bigger deal than late Netflix",
      "Many contracts treat even a few days as 延滞. Ask before the ふりこみ date, not after. 管理会社 often wants a bank transfer with your name in katakana matching the contract. 礼金 is gone once paid — don't expect it back.",
    ],
    shadowing: [
      [
        "Yachin no furikomi ni tsuite kikitai n desu ga...",
        "やちんのふりこみについてききたいんですが…",
      ],
      ["Suidōdai mo fukumarete imasu ka?", "すいどうだいもふくまれていますか？"],
    ],
    quiz: [
      [
        "ふくまれていますか asks:",
        [
          "Do I have to pay extra on the side?",
          "Is this included?",
          "When is it due?",
          "Who is the landlord?",
        ],
        1,
        "ふくまれる = to be included.",
      ],
      [
        "The landlord says べつです. That means:",
        [
          "It's included in rent",
          "It's a separate charge",
          "You don't need it",
          "Pay it next year",
        ],
        1,
        "べつ = separate.",
      ],
      [
        "やちん is:",
        [
          "Rent",
          "Train",
          "Soup",
          "Boss",
        ],
        0,
        "やちん = rent.",
      ],
    ],
    production: [
      [
        "Is the water bill included too?",
        "すいどうだい + もふくまれていますか",
        "Suidōdai mo fukumarete imasu ka?",
        "すいどうだいもふくまれていますか？",
      ],
      [
        "Is this burnable trash?",
        "もえるごみ + ですか",
        "Kore wa moeru gomi desu ka?",
        "これはもえるごみですか？",
      ],
    ],
  },
  {
    id: "sp-8-5",
    unit: 8,
    unitTitle: "Body, Health & Home",
    order: 5,
    title: "Trash Night With the Building Rules",
    subtitle: "ごみ — burnables, PET bottles, はちじまでに",
    scenario:
      "Your first Tuesday in a Setagaya アパート. A neighbor stops you at the ごみ置き場 because you mixed ペットボトル with burnables. This conversation saves you a note on your door.",
    durationMin: 26,
    objectives: [
      "Name もえるごみ vs しげんごみ",
      "Confirm the drop-off rule 〜までにだしてください",
      "Ask whether an item is べつ",
    ],
    dialogue: [
      [
        "Neighbor",
        "Gomi no hi, wakarimasu ka?",
        "ごみのひ、わかりますか？",
        "Do you know the trash days?",
      ],
      [
        "You",
        "Moeru gomi wa kayōbi to kin'yōbi desu yo ne.",
        "もえるごみはかようびときんようびですよね。",
        "Burnable trash is Tuesday and Friday, right?",
      ],
      [
        "Neighbor",
        "Sō desu. Asa hachi-ji made ni dashite kudasai.",
        "そうです。あさはちじまでにだしてください。",
        "That's right. Please put it out by 8am.",
      ],
      [
        "You",
        "Pettobotoru wa betsu desu ka?",
        "ペットボトルはべつですか？",
        "Are PET bottles separate?",
      ],
      [
        "Neighbor",
        "Hai, shigen-gomi no hi ni dashimasu. Suiyōbi desu.",
        "はい、しげんごみのひにだします。すいようびです。",
        "Yes, we put those out on recyclables day. That's Wednesday.",
      ],
      [
        "Neighbor",
        "Kochira koso. Mata chikaku ni ittara.",
        "こちらこそ。またちかくにいたら。",
        "Likewise. If you're around again.",
      ],
    ],
    patterns: [
      {
        chunk: "〜までにだしてください",
        romaji: "~ made ni dashite kudasai",
        hiragana: "〜までにだしてください",
        meaning: "Please put it out by ___",
        whenToUse:
          "Trash, forms, anything that must appear before a cutoff. Collection trucks will ignore late bags.",
        examples: [
          [
            "あさはちじまでにだしてください",
            "asa hachi-ji made ni dashite kudasai",
            "Please put it out by 8am",
          ],
          [
            "きょうじゅうにだしてください",
            "kyōjū ni dashite kudasai",
            "Please put it out sometime today",
          ],
        ],
      },
      {
        chunk: "もえるごみ / しげんごみ",
        romaji: "moeru gomi / shigen-gomi",
        hiragana: "もえるごみ / しげんごみ",
        meaning: "Burnable trash / recyclable resources",
        whenToUse:
          "Every municipality splits differently. Learn your building's poster — then use these two umbrellas to ask.",
        examples: [
          [
            "もえるごみはかようです",
            "moeru gomi wa kayōbi desu",
            "Burnables are Tuesday",
          ],
          [
            "しげんごみはすいようびです",
            "shigen-gomi wa suiyōbi desu",
            "Recyclables are Wednesday",
          ],
        ],
      },
      {
        chunk: "よろしくおねがいします",
        romaji: "yoroshiku onegai shimasu",
        hiragana: "よろしくお願いします",
        meaning: "Please treat me well / nice to be neighbors",
        whenToUse:
          "First greeting to neighbors; moving-in gift exchange.",
        examples: [
          [
            "となりのものです。よろしく",
            "tonari no mono desu. yoroshiku",
            "I'm your neighbor. Nice to meet you",
          ],
          [
            "これからよろしくおねがいします",
            "kore kara yoroshiku onegai shimasu",
            "Looking forward to being neighbors",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "よね seeks confirmation you think you already know",
        "かようびですよね = 'it's Tuesday, right?' Invites the neighbor to correct you. Better than pretending you know.",
      ],
    ],
    culturalNote: [
      "Wrong trash can get a チラシ on your bag — or your door",
      "Japan's 分別 is local religion: some wards want bottle caps off, labels peeled, and 燃えないごみ once a month. Night-before dumping is often banned because of crows and neighbors. Photograph the ごみカレンダー on day one.",
    ],
    shadowing: [
      ["Asa hachi-ji made ni dashite kudasai.", "あさはちじまでにだしてください。"],
      ["Pettobotoru wa betsu desu ka?", "ペットボトルはべつですか？"],
    ],
    quiz: [
      [
        "ペットボトル usually go out as:",
        ["もえるごみ", "しげんごみ", "なまごみ only", "どろ"],
        1,
        "PET bottles are recyclables — しげんごみ — in most cities.",
      ],
      [
        "はちじまでにだしてください means:",
        [
          "Put it out after 8",
          "Put it out by 8",
          "Put it out at exactly 8 only",
          "Don't put it out on the 8th",
        ],
        1,
        "までに = by that time.",
      ],
      [
        "もえるごみ is:",
        [
          "Burnable trash",
          "PET only",
          "Electronics",
          "Mail",
        ],
        0,
        "もえる = burnable.",
      ],
    ],
    production: [
      [
        "Please put it out by 8am",
        "あさはちじ + までにだしてください",
        "Asa hachi-ji made ni dashite kudasai.",
        "あさはちじまでにだしてください。",
      ],
      [
        "I'm your new neighbor — nice to meet you",
        "となり + よろしく",
        "Tonari no mono desu. Yoroshiku onegai shimasu.",
        "となりのものです。よろしくお願いします。",
      ],
    ],
  },
  {
    id: "sp-8-6",
    unit: 8,
    unitTitle: "Body, Health & Home",
    order: 6,
    title: "Meeting the People Next Door",
    subtitle: "ごきんじょ — おせわになります and noise",
    scenario:
      "Move-in day. You knock on the door across the hall with a tiny 手みやげ from the depachika — optional but remembered. This 30-second script sets the next two years.",
    durationMin: 26,
    objectives: [
      "Introduce yourself as おとなりの〜です",
      "Use おせわになります as a new neighbor",
      "Offer おとにきをつけます without being asked",
    ],
    dialogue: [
      [
        "You",
        "Hajimemashite. Otonari no Justin desu.",
        "はじめまして。おとなりのジャスティンです。",
        "Nice to meet you. I'm Justin from next door.",
      ],
      [
        "Neighbor",
        "Hajimemashite. Dōzo yoroshiku.",
        "はじめまして。どうぞよろしく。",
        "Nice to meet you. Please treat me well.",
      ],
      [
        "You",
        "Osewa ni narimasu. Oto ni ki o tsukemasu.",
        "おせわになります。おとにきをつけます。",
        "Thank you in advance for your kindness. I'll be careful about noise.",
      ],
      [
        "Neighbor",
        "Tondemo nai desu. Nanika attara, itte kudasai ne.",
        "とんでもないです。なにかあったら、いってくださいね。",
        "Not at all. If anything comes up, please say so.",
      ],
      [
        "You",
        "Arigatō gozaimasu. Yoroshiku onegai shimasu.",
        "ありがとうございます。よろしくおねがいします。",
        "Thank you. I look forward to being neighbors.",
      ],
      [
        "You",
        "Arigatō gozaimasu. Tasukarimasu.",
        "ありがとうございます。たすかります。",
        "Thank you. That helps.",
      ],
    ],
    patterns: [
      {
        chunk: "おせわになります",
        romaji: "osewa ni narimasu",
        hiragana: "おせわになります",
        meaning: "I'll be in your care / thank you in advance",
        whenToUse:
          "New neighbors, new teams, new clients — you anticipate receiving help. Past: おせわになりました when leaving.",
        examples: [
          [
            "おせわになります",
            "osewa ni narimasu",
            "I'll be in your care",
          ],
          [
            "いつもおせわになっております",
            "itsumo osewa ni natte orimasu",
            "I'm always grateful for your help (very polite)",
          ],
        ],
      },
      {
        chunk: "おとにきをつけます",
        romaji: "oto ni ki o tsukemasu",
        hiragana: "おとにきをつけます",
        meaning: "I'll be careful about noise",
        whenToUse:
          "Offer this unprompted in thin-walled アパート. It signals you understand the #1 neighbor conflict.",
        examples: [
          [
            "おとにきをつけます",
            "oto ni ki o tsukemasu",
            "I'll be careful about the noise",
          ],
          [
            "よるはしずかにします",
            "yoru wa shizuka ni shimasu",
            "I'll keep it quiet at night",
          ],
        ],
      },
      {
        chunk: "こしょうしています",
        romaji: "koshō shite imasu",
        hiragana: "こしょうしています",
        meaning: "It's broken / out of order",
        whenToUse:
          "Reporting appliance or building equipment issues.",
        examples: [
          [
            "エアコンがこしょうしています",
            "eakon ga koshō shite imasu",
            "The AC is broken",
          ],
          [
            "せんたくきがうごきません",
            "sentakuki ga ugokimasen",
            "The washing machine won't run",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "とんでもないです deflects thanks or apology",
        "Here it means 'don't mention it / not at all' after your おせわになります. Don't use とんでもございません in casual neighbor chat — too stiff.",
      ],
    ],
    culturalNote: [
      "You don't need an expensive gift — you need a face and a name",
      "A 300-yen sweet and 30 seconds of はじめまして beats silence for two years. Night noise, trash mistakes, and Amazon boxes in the hall become solvable if they know you're ジャスティン next door, not 'that foreigner.'",
    ],
    shadowing: [
      ["Otonari no Justin desu.", "おとなりのジャスティンです。"],
      ["Osewa ni narimasu. Oto ni ki o tsukemasu.", "おせわになります。おとにきをつけます。"],
    ],
    quiz: [
      [
        "As a new neighbor you say:",
        ["おだいじに", "おせわになります", "おくれてすみません", "りょうかいです"],
        1,
        "おせわになります is the 'I'll be in your care' formula.",
      ],
      [
        "おとにきをつけます promises:",
        [
          "You'll listen to music louder",
          "You'll be careful about noise",
          "You'll move out",
          "You'll take out their trash",
        ],
        1,
        "おと = sound/noise. きをつける = be careful.",
      ],
      [
        "ごきんじょ means:",
        [
          "Neighbors",
          "Airport",
          "Menu",
          "Battery",
        ],
        0,
        "ごきんじょ = neighborhood/neighbors.",
      ],
    ],
    production: [
      [
        "I'll be in your care. I'll be careful about noise",
        "おせわになります + おとにきをつけます",
        "Osewa ni narimasu. Oto ni ki o tsukemasu.",
        "おせわになります。おとにきをつけます。",
      ],
      [
        "The air conditioner is broken",
        "エアコン + こしょう",
        "Eakon ga koshō shite imasu.",
        "エアコンがこしょうしています。",
      ],
    ],
  },

  // ─── Unit 9: Relationships & Feelings ────────────────────────────────
  {
    id: "sp-9-1",
    unit: 9,
    unitTitle: "Relationships & Feelings",
    order: 1,
    title: "Asking Someone to Date You",
    subtitle: "つきあう — すき, the ask, and よろしくね",
    scenario:
      "After several ラーメン nights in Shimokitazawa, you're done living in 'are we friends?' limbo. Japanese こくはく is often quieter than movies — but the words still have to be said.",
    durationMin: 26,
    objectives: [
      "Say 〜のことがすきです clearly",
      "Ask with つきあってください / くれないかな",
      "Close a yes with よろしくね, not a speech",
    ],
    dialogue: [
      [
        "You",
        "Saki kara iitakatta n da kedo, Mika no koto ga suki desu.",
        "さきからいいたかったんだけど、ミカのことがすきです。",
        "I've wanted to say this for a while — I like you, Mika.",
      ],
      [
        "Mika",
        "E... hontō?",
        "え…ほんとう？",
        "Huh... really?",
      ],
      [
        "You",
        "Yokattara, tsukiatte kudasai.",
        "よかったら、つきあってください。",
        "If you're okay with it, please go out with me.",
      ],
      [
        "Mika",
        "Un, watashi mo. Yoroshiku ne.",
        "うん、わたしも。よろしくね。",
        "Yeah — me too. Let's take care of this.",
      ],
      [
        "You",
        "Ureshii. Arigatō.",
        "うれしい。ありがとう。",
        "I'm happy. Thank you.",
      ],
      [
        "You",
        "Ja, rainichi dō?",
        "じゃあ、らいにちどう？",
        "Then how about the day after tomorrow?",
      ],
    ],
    patterns: [
      {
        chunk: "〜のことがすき",
        romaji: "~ no koto ga suki",
        hiragana: "〜のことがすき",
        meaning: "I like ___ (a person, as a whole)",
        whenToUse:
          "のことが marks the person as the object of feeling, not a hobby. ラーメンがすき vs ミカのことがすき.",
        examples: [
          [
            "あなたのことがすきです",
            "anata no koto ga suki desu",
            "I like you",
          ],
          [
            "ずっとすきでした",
            "zutto suki deshita",
            "I've liked you for a long time",
          ],
        ],
      },
      {
        chunk: "つきあってください",
        romaji: "tsukiatte kudasai",
        hiragana: "つきあってください",
        meaning: "Please go out with me / be my partner",
        whenToUse:
          "The actual ask. Softer: つきあってくれないかな. つきあう also means 'socialize with' at work — context is everything.",
        examples: [
          [
            "つきあってください",
            "tsukiatte kudasai",
            "Please go out with me",
          ],
          [
            "つきあってくれないかな",
            "tsukiatte kurenai ka na",
            "Would you go out with me, I wonder...",
          ],
        ],
      },
      {
        chunk: "よかったら",
        romaji: "yokattara",
        hiragana: "よかったら",
        meaning: "If you'd like / if it's OK",
        whenToUse:
          "Soft invitation — coffee, dinner, a walk.",
        examples: [
          [
            "よかったらコーヒーどう？",
            "yokattara kōhī dō?",
            "Want coffee if you're free?",
          ],
          [
            "よかったらいっしょに",
            "yokattara issho ni",
            "If you'd like, together",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "よかったら cushions the ask",
        "よかったら = if it would be all right with you. It gives the other person an easy out, which is why natives almost always add it.",
      ],
    ],
    culturalNote: [
      "こくはく is a door, not a mood",
      "In a lot of Japanese dating, you are not officially a couple until someone says つきあって. Ambiguous 好き and late-night LINE can last months. A clear ask is kindness. If they need time, かんがえさせて is a real answer — don't force 今日中.",
    ],
    shadowing: [
      ["Mika no koto ga suki desu.", "ミカのことがすきです。"],
      ["Yokattara, tsukiatte kudasai.", "よかったら、つきあってください。"],
    ],
    quiz: [
      [
        "To tell a person you like them romantically:",
        [
          "ラーメンがすきです",
          "あなたのことがすきです",
          "あなたです",
          "すきくないです",
        ],
        1,
        "のことがすき targets a person, not a food.",
      ],
      [
        "つきあってください in this context means:",
        [
          "Please accompany me to a meeting",
          "Please be my romantic partner",
          "Please leave me alone",
          "Please wait outside",
        ],
        1,
        "With すき, つきあう = date / be a couple.",
      ],
      [
        "よかったら softens:",
        [
          "An invitation",
          "A threat",
          "A train time",
          "A password",
        ],
        0,
        "よかったら = if you'd like.",
      ],
    ],
    production: [
      [
        "If you're okay with it, please go out with me",
        "よかったら + つきあってください",
        "Yokattara, tsukiatte kudasai.",
        "よかったら、つきあってください。",
      ],
      [
        "Want to grab coffee if you're free?",
        "よかったら + コーヒー",
        "Yokattara kōhī dō?",
        "よかったらコーヒーどう？",
      ],
    ],
  },
  {
    id: "sp-9-2",
    unit: 9,
    unitTitle: "Relationships & Feelings",
    order: 2,
    title: "Happy, Sad, and Naming It Out Loud",
    subtitle: "うれしい / かなしい — feelings as verbs of connection",
    scenario:
      "Ken notices your face on a bench in Yoyogi Park. You don't need a therapy session — you need かなしいことがあって and, later, きてくれてうれしい.",
    durationMin: 26,
    objectives: [
      "Name sadness without collapsing the conversation",
      "Use 〜てうれしい for gratitude-shaped happiness",
      "Offer space with はなしたくなったら",
    ],
    dialogue: [
      [
        "Ken",
        "Dō shita no. Kao ga kurai yo.",
        "どうしたの。かおがくらいよ。",
        "What's going on? Your face looks dark.",
      ],
      [
        "You",
        "Chotto, kanashii koto ga atte...",
        "ちょっと、かなしいことがあって…",
        "It's just... something sad happened...",
      ],
      [
        "Ken",
        "Hanashitaku nattara hanashite.",
        "はなしたくなったらはなして。",
        "If you feel like talking, talk.",
      ],
      [
        "You",
        "Arigatō. Demo kyō wa Mika ga kite kurete, sugoku ureshikatta.",
        "ありがとう。でもきょうはミカがきてくれて、すごくうれしかった。",
        "Thanks. But today Mika came for me, and I was really happy.",
      ],
      [
        "Ken",
        "Yokatta ne.",
        "よかったね。",
        "I'm glad.",
      ],
      [
        "Friend",
        "Uun, daijōbu. Ki ni shinaide.",
        "ううん、だいじょうぶ。きにしないで。",
        "No, it's fine. Don't worry about it.",
      ],
    ],
    patterns: [
      {
        chunk: "〜てうれしい",
        romaji: "~ te ureshii",
        hiragana: "〜てうれしい",
        meaning: "I'm happy that ___ / it makes me glad that ___",
        whenToUse:
          "Happiness caused by an action — especially someone showing up for you. More specific than bare うれしい.",
        examples: [
          [
            "きてくれてうれしい",
            "kite kurete ureshii",
            "I'm happy you came (for me)",
          ],
          [
            "あえてうれしい",
            "aete ureshii",
            "I'm happy we could meet",
          ],
        ],
      },
      {
        chunk: "かなしいことがあって",
        romaji: "kanashii koto ga atte",
        hiragana: "かなしいことがあって",
        meaning: "Something sad happened, and...",
        whenToUse:
          "Open the door without dumping details. Friends can ask; you don't have to volunteer the whole story.",
        examples: [
          [
            "かなしいことがあって",
            "kanashii koto ga atte",
            "Something sad happened...",
          ],
          [
            "ちょっとつらいことがあって",
            "chotto tsurai koto ga atte",
            "Something kind of hard happened...",
          ],
        ],
      },
      {
        chunk: "ごめん / ごめんなさい",
        romaji: "gomen / gomen nasai",
        hiragana: "ごめん / ごめんなさい",
        meaning: "Sorry (casual / polite)",
        whenToUse:
          "Personal apologies between friends; upgrade formality with strangers.",
        examples: [
          [
            "ほんとごめん",
            "honto gomen",
            "I'm really sorry",
          ],
          [
            "おそくなってごめん",
            "osoku natte gomen",
            "Sorry I'm late",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "くれて marks kindness toward you",
        "きてくれて = you came, and that action was for my benefit. Dropping くれて (きてうれしい) is possible but less warm.",
      ],
    ],
    culturalNote: [
      "Japanese friends often sit in the feeling before solving it",
      "はなしたくなったらはなして is not cold — it's respect. Jumping to 忘れたほうがいい can feel like erasure. よかったね after good news is the matching warmth: you don't need a paragraph.",
    ],
    shadowing: [
      ["Kanashii koto ga atte...", "かなしいことがあって…"],
      ["Kite kurete ureshii.", "きてくれてうれしい。"],
    ],
    quiz: [
      [
        "きてくれてうれしい means:",
        [
          "Please come later",
          "I'm happy you came for me",
          "I don't want you to come",
          "Coming is sad",
        ],
        1,
        "てくれて + うれしい = glad about a kindness done for you.",
      ],
      [
        "A gentle way to say something sad happened:",
        ["しにたい", "かなしいことがあって", "ばかか", "うれしいね！"],
        1,
        "かなしいことがあって opens without oversharing.",
      ],
      [
        "かなしい means:",
        ["Sad", "Hungry", "Early", "Expensive"],
        0,
        "かなしい = sad.",
      ],
    ],
    production: [
      [
        "I'm happy you came (for me)",
        "きてくれて + うれしい",
        "Kite kurete ureshii.",
        "きてくれてうれしい。",
      ],
      [
        "I'm really sorry",
        "ほんと + ごめん",
        "Honto gomen.",
        "ほんとごめん。",
      ],
    ],
  },
  {
    id: "sp-9-3",
    unit: 9,
    unitTitle: "Relationships & Feelings",
    order: 3,
    title: "Apologizing Like You Mean It",
    subtitle: "あやまる — ごめんなさい, わるかった, no excuses first",
    scenario:
      "You snapped at Mika over LINE and then went quiet. A real apology in Japanese is short, owns the harm, and does not start with でも.",
    durationMin: 26,
    objectives: [
      "Lead with ほんとうにごめんなさい",
      "Own it with わるかった / きずつけたくなかった",
      "Ask for a next step, not instant erasure",
    ],
    dialogue: [
      [
        "You",
        "Kono mae wa, hontō ni gomennasai.",
        "このまえは、ほんとうにごめんなさい。",
        "About last time — I'm truly sorry.",
      ],
      [
        "Mika",
        "...Kiiteru yo.",
        "…きいてるよ。",
        "...I'm listening.",
      ],
      [
        "You",
        "Warukatta to omotteru. Kizutsuketaku nakatta.",
        "わるかったとおもってる。きずつけたくなかった。",
        "I think I was in the wrong. I didn't want to hurt you.",
      ],
      [
        "Mika",
        "Tsugi kara, hanashite ne. Okotteru yori, kanashikatta.",
        "つぎから、はなしてね。おこってるより、かなしかった。",
        "From now on, talk to me. More than angry, I was sad.",
      ],
      [
        "You",
        "Un. Arigatō. Yurushite kurete.",
        "うん。ありがとう。ゆるしてくれて。",
        "Yeah. Thank you — for forgiving me.",
      ],
      [
        "You",
        "Sō da ne. Kangaete miru.",
        "そうだね。かんがえてみる。",
        "Yeah. I'll think about it.",
      ],
    ],
    patterns: [
      {
        chunk: "ほんとうにごめんなさい",
        romaji: "hontō ni gomennasai",
        hiragana: "ほんとうにごめんなさい",
        meaning: "I'm truly sorry",
        whenToUse:
          "Personal harm, not bumping someone on the train (that's すみません). ごめんなさい is closer and heavier.",
        examples: [
          [
            "ほんとうにごめんなさい",
            "hontō ni gomennasai",
            "I'm truly sorry",
          ],
          [
            "このまえはごめんなさい",
            "kono mae wa gomennasai",
            "Sorry about last time",
          ],
        ],
      },
      {
        chunk: "わるかった",
        romaji: "warukatta",
        hiragana: "わるかった",
        meaning: "I was wrong / my bad (owns the fault)",
        whenToUse:
          "Casual but serious among intimates. Pair with what you'll do differently — not a stack of reasons.",
        examples: [
          ["わるかった", "warukatta", "I was in the wrong"],
          [
            "ぼくがわるかった",
            "boku ga warukatta",
            "I was the one who was wrong",
          ],
        ],
      },
      {
        chunk: "〜たほうがいい",
        romaji: "~ ta hō ga ii",
        hiragana: "〜たほうがいい",
        meaning: "You should ___ / it'd be better to ___",
        whenToUse:
          "Gentle advice to friends; soften with かも.",
        examples: [
          [
            "やすんだほうがいいよ",
            "yasunda hō ga ii yo",
            "You should rest",
          ],
          [
            "いったほうがいいとおもう",
            "itta hō ga ii to omou",
            "I think you should go",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "より compares feelings, not people",
        "おこってるより、かなしかった = rather than being angry, I was sad. Useful when you need to name the real emotion.",
      ],
    ],
    culturalNote: [
      "A Japanese apology dies if you attach でも",
      "ごめんなさい。でもいそがしかった is not an apology — it's a defense. Say the sorry, name the harm, then stop talking. ゆるしてくれて assumes they already offered grace; if they haven't, don't skip to thanks.",
    ],
    shadowing: [
      ["Hontō ni gomennasai.", "ほんとうにごめんなさい。"],
      ["Warukatta to omotteru.", "わるかったとおもってる。"],
    ],
    quiz: [
      [
        "You hurt a close friend. The right weight is:",
        ["すみません、おりてください", "ほんとうにごめんなさい", "おつかれさまです", "りょうかい"],
        1,
        "ごめんなさい carries personal apology. すみません is too light here.",
      ],
      [
        "わるかった means:",
        [
          "The weather was bad",
          "I was in the wrong",
          "You were in the wrong",
          "I'm busy",
        ],
        1,
        "わるかった owns the speaker's fault.",
      ],
      [
        "ごめんなさい is:",
        [
          "An apology",
          "A greeting only",
          "A toast",
          "A platform",
        ],
        0,
        "ごめんなさい = sorry.",
      ],
    ],
    production: [
      [
        "I'm truly sorry. I was in the wrong",
        "ほんとうにごめんなさい + わるかった",
        "Hontō ni gomennasai. Warukatta.",
        "ほんとうにごめんなさい。わるかった。",
      ],
      [
        "You should rest",
        "やすんだ + ほうがいい",
        "Yasunda hō ga ii yo.",
        "やすんだほうがいいよ。",
      ],
    ],
  },
  {
    id: "sp-9-4",
    unit: 9,
    unitTitle: "Relationships & Feelings",
    order: 4,
    title: "Can I Talk Something Through With You?",
    subtitle: "そうだん — ride along, don't solve yet",
    scenario:
      "An izakaya counter in Ebisu after 21:00. You don't want advice-as-a-lecture. You want Yuki to そうだんにのる — sit with the problem.",
    durationMin: 26,
    objectives: [
      "Open with そうだんにのってもらえる？",
      "Ask どうしたらいい without demanding an answer",
      "Say you needed to be heard: きいてほしくて",
    ],
    dialogue: [
      [
        "You",
        "Chotto sōdan ni notte moraeru?",
        "ちょっとそうだんにのってもらえる？",
        "Hey, can I talk something through with you?",
      ],
      [
        "Yuki",
        "Dō shita no.",
        "どうしたの。",
        "What's up?",
      ],
      [
        "You",
        "Shigoto to puraibēto no baransu ga muzukashikute...",
        "しごととプライベートのバランスがむずかしくて…",
        "The balance between work and private life is hard...",
      ],
      [
        "Yuki",
        "Dō shitara ii to omou?",
        "どうしたらいいとおもう？",
        "What do you think you should do?",
      ],
      [
        "You",
        "Wakaranai kara, kiite hoshikute.",
        "わからないから、きいてほしくて。",
        "I don't know — that's why I wanted you to listen.",
      ],
      [
        "You",
        "Wakatta. Muri shinai de ne.",
        "わかった。むりしないでね。",
        "Got it. Don't push yourself.",
      ],
    ],
    patterns: [
      {
        chunk: "そうだんにのって",
        romaji: "sōdan ni notte",
        hiragana: "そうだんにのって",
        meaning: "Hear me out / give me counsel (literally 'ride the consultation')",
        whenToUse:
          "Ask a friend or senior to be your sounding board. Polite: そうだんにのっていただけますか.",
        examples: [
          [
            "そうだんにのってもらえる？",
            "sōdan ni notte moraeru?",
            "Can I talk this through with you?",
          ],
          [
            "そうだんにのってください",
            "sōdan ni notte kudasai",
            "Please hear me out",
          ],
        ],
      },
      {
        chunk: "どうしたらいい",
        romaji: "dō shitara ii",
        hiragana: "どうしたらいい",
        meaning: "What should I do? / What would be best to do?",
        whenToUse:
          "Open-ended advice. Add とおもう？ to throw it back gently.",
        examples: [
          [
            "どうしたらいいとおもいますか",
            "dō shitara ii to omoimasu ka",
            "What do you think I should do?",
          ],
          [
            "どうしたらいいかわからない",
            "dō shitara ii ka wakaranai",
            "I don't know what I should do",
          ],
        ],
      },
      {
        chunk: "ちょっとつかれてる",
        romaji: "chotto tsukareteru",
        hiragana: "ちょっとつかれてる",
        meaning: "I'm a bit tired",
        whenToUse:
          "Soft distance — decline plans without a dramatic story.",
        examples: [
          [
            "きょうはちょっとつかれてる",
            "kyō wa chotto tsukareteru",
            "I'm a bit tired today",
          ],
          [
            "またこんどでいい？",
            "mata kondo de ii?",
            "Can we do it another time?",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "ほしくて states the desired action toward you",
        "きいてほしくて = I wanted (you) to listen. て-form of ほしい after a verb = I want someone to do X.",
      ],
    ],
    culturalNote: [
      "そうだん is not automatically 'fix this'",
      "Japanese listeners often ask はなしを聞いてほしいの、アドバイスがほしいの？ If you only need ears, say so: きいてほしいだけ. It saves both of you from a solution you didn't ask for.",
    ],
    shadowing: [
      ["Sōdan ni notte moraeru?", "そうだんにのってもらえる？"],
      ["Dō shitara ii ka wakaranai.", "どうしたらいいかわからない。"],
    ],
    quiz: [
      [
        "そうだんにのってください asks someone to:",
        [
          "Ride the train with you",
          "Hear you out / advise you",
          "Pay your bill",
          "Leave you alone",
        ],
        1,
        "そうだんにのる = take on someone's consultation.",
      ],
      [
        "どうしたらいい means:",
        ["How did you do it?", "What should I do?", "When do we go?", "Who are you?"],
        1,
        "たら + いい = what would be good to do.",
      ],
      [
        "そうだん is:",
        [
          "Talking something through",
          "Deleting files",
          "Buying tickets",
          "Sleeping",
        ],
        0,
        "そうだん = consult/talk over.",
      ],
    ],
    production: [
      [
        "Can I talk something through with you?",
        "そうだんにのって + もらえる？",
        "Sōdan ni notte moraeru?",
        "そうだんにのってもらえる？",
      ],
      [
        "I'm a bit tired today",
        "ちょっと + つかれてる",
        "Kyō wa chotto tsukareteru.",
        "きょうはちょっとつかれてる。",
      ],
    ],
  },
  {
    id: "sp-9-5",
    unit: 9,
    unitTitle: "Relationships & Feelings",
    order: 5,
    title: "I Need a Little Space",
    subtitle: "きょり — alone time without ending it",
    scenario:
      "You've been glued together every night for three weeks. You like them. You also can't hear yourself think. Japanese has clean tools for space that isn't a breakup.",
    durationMin: 26,
    objectives: [
      "Ask for ひとりのじかん without blaming",
      "Clarify きょりをおきたいわけじゃない",
      "Promise a thread: れんらくはしてね",
    ],
    dialogue: [
      [
        "You",
        "Saikin, chotto tsukarete te...",
        "さいきん、ちょっとつかれてて…",
        "Lately I've been a bit worn out...",
      ],
      [
        "Mika",
        "Watashi no sei?",
        "わたしのせい？",
        "Is it my fault?",
      ],
      [
        "You",
        "Chigau yo. Hitori no jikan ga hoshii dake. Kyori o okitai wake ja nai.",
        "ちがうよ。ひとりのじかんがほしいだけ。きょりをおきたいわけじゃない。",
        "No. I just want time alone. It's not that I want distance (from us).",
      ],
      [
        "Mika",
        "...Wakatta. Renraku wa shite ne.",
        "…わかった。れんらくはしてね。",
        "...Okay. Do keep in touch, though.",
      ],
      [
        "You",
        "Un, arigatō. Wakatte kurete.",
        "うん、ありがとう。わかってくれて。",
        "Yeah, thank you — for understanding.",
      ],
      [
        "Friend",
        "Un, ōen shiteru yo.",
        "うん、おうえんしてるよ。",
        "Yeah, I'm rooting for you.",
      ],
    ],
    patterns: [
      {
        chunk: "ひとりのじかんがほしい",
        romaji: "hitori no jikan ga hoshii",
        hiragana: "ひとりのじかんがほしい",
        meaning: "I want time to myself",
        whenToUse:
          "The least accusatory way to ask for space. Add だけ ('that's all') to shrink the threat.",
        examples: [
          [
            "ひとりのじかんがほしい",
            "hitori no jikan ga hoshii",
            "I want time alone",
          ],
          [
            "ちょっとひとりになりたい",
            "chotto hitori ni naritai",
            "I want to be alone for a bit",
          ],
        ],
      },
      {
        chunk: "きょりをおく",
        romaji: "kyori o oku",
        hiragana: "きょりをおく",
        meaning: "To put distance (emotional/physical)",
        whenToUse:
          "Can sound like a soft breakup. If that's not what you mean, deny it explicitly: わけじゃない.",
        examples: [
          [
            "きょりをおきたいわけじゃない",
            "kyori o okitai wake ja nai",
            "It's not that I want to put distance between us",
          ],
          [
            "すこしきょりがひつようなきがする",
            "sukoshi kyori ga hitsuyō na ki ga suru",
            "I feel like a little distance is necessary",
          ],
        ],
      },
      {
        chunk: "しんぱいしないで",
        romaji: "shinpai shinai de",
        hiragana: "しんぱいしないで",
        meaning: "Don't worry",
        whenToUse:
          "Reassure a friend who's anxious.",
        examples: [
          [
            "しんぱいしないで",
            "shinpai shinai de",
            "Don't worry",
          ],
          [
            "だいじょうぶだよ",
            "daijōbu da yo",
            "It'll be fine",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "わけじゃない denies the implication",
        "きょりをおきたいわけじゃない = it's not the case that I want distance. Use it when the other person heard a bigger meaning than you said.",
      ],
    ],
    culturalNote: [
      "Space requests get heard as rejection unless you close the loop",
      "Japanese partners may fill silence with 嫌われた. Pair ひとりのじかん with a concrete next contact: あしたのよる、メッセージする. れんらくはしてね is them asking not to be ghosted — answer that fear.",
    ],
    shadowing: [
      ["Hitori no jikan ga hoshii dake.", "ひとりのじかんがほしいだけ。"],
      ["Kyori o okitai wake ja nai.", "きょりをおきたいわけじゃない。"],
    ],
    quiz: [
      [
        "ひとりのじかんがほしい means:",
        [
          "I want to break up",
          "I want time to myself",
          "I want to move in",
          "I want a group hang",
        ],
        1,
        "ひとりのじかん = time alone. Not automatically a breakup.",
      ],
      [
        "わけじゃない is used to:",
        [
          "Agree strongly",
          "Deny an implication",
          "Order food",
          "Greet a neighbor",
        ],
        1,
        "It's not the case that...",
      ],
      [
        "きょり here means:",
        [
          "Emotional/space distance",
          "Train fare",
          "Shoe size",
          "Wi-Fi",
        ],
        0,
        "きょり = distance/space.",
      ],
    ],
    production: [
      [
        "I just want time alone. It's not that I want distance",
        "ひとりのじかんがほしいだけ + きょりをおきたいわけじゃない",
        "Hitori no jikan ga hoshii dake. Kyori o okitai wake ja nai.",
        "ひとりのじかんがほしいだけ。きょりをおきたいわけじゃない。",
      ],
      [
        "Don't worry about it",
        "しんぱい + しないで",
        "Shinpai shinai de.",
        "しんぱいしないで。",
      ],
    ],
  },
  {
    id: "sp-9-6",
    unit: 9,
    unitTitle: "Relationships & Feelings",
    order: 6,
    title: "Thanks That Isn't a Receipt",
    subtitle: "ありがとう for being there — not for the bag or the bill",
    scenario:
      "Yuki sat with you through a rough week. This ありがとう is about the person, not a transaction. Japanese has a register for that — if you only know ありがとうございました for cashiers, this is the missing half.",
    durationMin: 26,
    objectives: [
      "Thank a specific kindness with 〜てくれてありがとう",
      "Name the feeling: あんしんした / ひとりじゃなかった",
      "Offer the relationship back: いつでもよんで",
    ],
    dialogue: [
      [
        "You",
        "Kono mae, hanashi o kiite kurete arigatō.",
        "このまえ、はなしをきいてくれてありがとう。",
        "Thank you for listening to me the other day.",
      ],
      [
        "Yuki",
        "Atarimae da yo. Tomodachi da mon.",
        "あたりまえだよ。ともだちだもん。",
        "Of course. That's what friends are.",
      ],
      [
        "You",
        "Sore demo, anshin shita. Hitori ja nakatta.",
        "それでも、あんしんした。ひとりじゃなかった。",
        "Even so, I felt relieved. I wasn't alone.",
      ],
      [
        "Yuki",
        "Itsu de mo yonde.",
        "いつでもよんで。",
        "Call me anytime.",
      ],
      [
        "You",
        "Un. Daiji ni shiteru yo, kono kankei.",
        "うん。だいじにしてるよ、このかんけい。",
        "Yeah. I really value this relationship.",
      ],
      [
        "You",
        "Un, mata renraku suru.",
        "うん、またれんらくする。",
        "Yeah, I'll message again.",
      ],
    ],
    patterns: [
      {
        chunk: "〜てくれてありがとう",
        romaji: "~ te kurete arigatō",
        hiragana: "〜てくれてありがとう",
        meaning: "Thank you for doing ___ (for me)",
        whenToUse:
          "Emotional thanks. Name the action: きいてくれて, きてくれて, まっててくれて. Not for a convenience-store bag.",
        examples: [
          [
            "きいてくれてありがとう",
            "kiite kurete arigatō",
            "Thanks for listening",
          ],
          [
            "ささえてくれてありがとう",
            "sasaete kurete arigatō",
            "Thanks for supporting me",
          ],
        ],
      },
      {
        chunk: "いつでもよんで",
        romaji: "itsu de mo yonde",
        hiragana: "いつでもよんで",
        meaning: "Call me anytime / reach out anytime",
        whenToUse:
          "Offer ongoing presence. Reciprocate if you mean it — empty いつでも is worse than silence.",
        examples: [
          ["いつでもよんで", "itsu de mo yonde", "Call me anytime"],
          [
            "いつでもれんらくして",
            "itsu de mo renraku shite",
            "Get in touch anytime",
          ],
        ],
      },
      {
        chunk: "またれんらくする",
        romaji: "mata renraku suru",
        hiragana: "またれんらくする",
        meaning: "I'll contact you again",
        whenToUse:
          "Closing a sensitive talk without slamming the door.",
        examples: [
          [
            "またれんらくするね",
            "mata renraku suru ne",
            "I'll be in touch",
          ],
          [
            "すこしじかんがほしい",
            "sukoshi jikan ga hoshii",
            "I need a little time",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "それでも keeps the thanks alive after 'of course'",
        "あたりまえだよ can accidentally shut thanks down. それでも ('even so') lets you finish the feeling.",
      ],
    ],
    culturalNote: [
      "Transactional ありがとう is tiny; relational ありがとう is the real one",
      "Cashiers get ありがとうございました. Friends get a named action and a feeling. だいじにしてるよ is intimate — use it when you mean the bond, not the favor. Overusing it on acquaintances feels heavy.",
    ],
    shadowing: [
      ["Hanashi o kiite kurete arigatō.", "はなしをきいてくれてありがとう。"],
      ["Daiji ni shiteru yo, kono kankei.", "だいじにしてるよ、このかんけい。"],
    ],
    quiz: [
      [
        "Thanks for listening (to a friend):",
        [
          "バッグいりますか",
          "きいてくれてありがとう",
          "おつりです",
          "りょうかいです",
        ],
        1,
        "てくれてありがとう names a kindness done for you.",
      ],
      [
        "ひとりじゃなかった expresses:",
        [
          "I missed the train",
          "I wasn't alone",
          "I want to be alone",
          "There was one person",
        ],
        1,
        "じゃなかった = was not. ひとり = alone.",
      ],
      [
        "ありがとう for presence often pairs with:",
        [
          "いてくれて",
          "かえれ",
          "だまれ",
          "やめろ",
        ],
        0,
        "いてくれてありがとう thanks them for being there.",
      ],
    ],
    production: [
      [
        "Thank you for listening to me",
        "はなしをきいてくれて + ありがとう",
        "Hanashi o kiite kurete arigatō.",
        "はなしをきいてくれてありがとう。",
      ],
      [
        "I'll be in touch",
        "また + れんらくする",
        "Mata renraku suru ne.",
        "またれんらくするね。",
      ],
    ],
  },

  // ─── Unit 10: Travel Deep ────────────────────────────────────────────
  {
    id: "sp-10-1",
    unit: 10,
    unitTitle: "Travel Deep",
    order: 1,
    title: "Hotel Check-In That Doesn't Stall the Line",
    subtitle: "ホテル — name, nights, passport, breakfast",
    scenario:
      "19:40 at a business hotel near Kyoto Station. A tour group is behind you. Reception wants your name, nights, and passport — in that order — and you want breakfast hours.",
    durationMin: 26,
    objectives: [
      "Claim a booking: よやくしています、〜です",
      "Handle パスポートをおねがいします",
      "Ask ちょうしょくはなんじからですか",
    ],
    dialogue: [
      [
        "Reception",
        "Irasshaimase. Go-yoyaku wa gozaimasu ka?",
        "いらっしゃいませ。ごよやくはございますか？",
        "Welcome. Do you have a reservation?",
      ],
      [
        "You",
        "Hai, Smith desu. Kon'ya kara nihaku yoyaku shite imasu.",
        "はい、スミスです。こんやからにはくよやくしています。",
        "Yes, Smith. I've reserved two nights starting tonight.",
      ],
      [
        "Reception",
        "Kashikomarimashita. Pasupōto o onegai shimasu.",
        "かしこまりました。パスポートをおねがいします。",
        "Certainly. Your passport, please.",
      ],
      [
        "You",
        "Hai, dōzo. Chōshoku wa nan-ji kara desu ka?",
        "はい、どうぞ。ちょうしょくはなんじからですか？",
        "Here you go. What time does breakfast start?",
      ],
      [
        "Reception",
        "Gozen shichi-ji kara desu. Oheya wa go-kai desu.",
        "ごぜんしちじからです。おへやはごかいです。",
        "From 7am. Your room is on the 5th floor.",
      ],
      [
        "Clerk",
        "Kashikomarimashita. Oheya no kagi desu.",
        "かしこまりました。おへやのかぎです。",
        "Certainly. Here's your room key.",
      ],
    ],
    patterns: [
      {
        chunk: "よやくしています",
        romaji: "yoyaku shite imasu",
        hiragana: "よやくしています",
        meaning: "I have a reservation (in effect)",
        whenToUse:
          "Check-in. Add name + nights so they don't hunt. にはく = two nights, いっぱく = one.",
        examples: [
          [
            "よやくしています、スミスです",
            "yoyaku shite imasu, Sumisu desu",
            "I have a reservation — I'm Smith",
          ],
          [
            "こんやからにはくよやくしています",
            "kon'ya kara nihaku yoyaku shite imasu",
            "I've booked two nights from tonight",
          ],
        ],
      },
      {
        chunk: "〜はなんじからですか",
        romaji: "~ wa nan-ji kara desu ka",
        hiragana: "〜はなんじからですか",
        meaning: "What time does ___ start from?",
        whenToUse:
          "Breakfast, baths, check-in, check-out. Pair with なんじまで for closing time.",
        examples: [
          [
            "ちょうしょくはなんじからですか",
            "chōshoku wa nan-ji kara desu ka",
            "What time is breakfast from?",
          ],
          [
            "チェックアウトはなんじまでですか",
            "chekkuauto wa nan-ji made desu ka",
            "Until what time is checkout?",
          ],
        ],
      },
      {
        chunk: "よやくしています",
        romaji: "yoyaku shite imasu",
        hiragana: "よやくしています",
        meaning: "I have a reservation",
        whenToUse:
          "Hotel check-in; name + nights.",
        examples: [
          [
            "よやくしています、スミスです",
            "yoyaku shite imasu, Sumisu desu",
            "I have a reservation, Smith",
          ],
          [
            "にはくおねがいします",
            "ni-haku onegai shimasu",
            "Two nights, please",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "ございます is hotel-register あります",
        "ごよやくはございますか = do you have a reservation? You can answer with plain はい、しています. You don't need to mirror ございます.",
      ],
    ],
    culturalNote: [
      "Hotels photocopy passports for foreign guests — it's the law",
      "Don't take パスポートをおねがいします as suspicion. Business hotels often include 大浴場 with last entry an hour before close — ask おふろはなんじまでですか. Breakfast tickets sometimes hide in the key-card sleeve.",
    ],
    shadowing: [
      [
        "Kon'ya kara nihaku yoyaku shite imasu.",
        "こんやからにはくよやくしています。",
      ],
      ["Chōshoku wa nan-ji kara desu ka?", "ちょうしょくはなんじからですか？"],
    ],
    quiz: [
      [
        "にはくよやくしています means:",
        [
          "I want one night",
          "I've reserved two nights",
          "I don't have a reservation",
          "I'm checking out",
        ],
        1,
        "にはく = two nights. いっぱく = one night.",
      ],
      [
        "なんじから asks:",
        ["Until when", "From what time", "How much", "Which floor"],
        1,
        "から = from. まで = until.",
      ],
      [
        "よやくしています at a hotel means:",
        [
          "I have a reservation",
          "I want breakfast only",
          "I'm checking out forever",
          "No rooms",
        ],
        0,
        "よやく = reservation.",
      ],
    ],
    production: [
      [
        "I've reserved two nights starting tonight",
        "こんやから + にはくよやくしています",
        "Kon'ya kara nihaku yoyaku shite imasu.",
        "こんやからにはくよやくしています。",
      ],
      [
        "I have a reservation under Smith",
        "よやく + スミス",
        "Yoyaku shite imasu. Sumisu desu.",
        "よやくしています。スミスです。",
      ],
    ],
  },
  {
    id: "sp-10-2",
    unit: 10,
    unitTitle: "Travel Deep",
    order: 2,
    title: "Changing the Reservation",
    subtitle: "よやくへんこう — extend a night, check くうしつ",
    scenario:
      "Kyoto is better than the itinerary. You want one more night. Front desk has to check くうしつ — you need the extend script and a graceful if-not.",
    durationMin: 26,
    objectives: [
      "Request よやくをへんこうしたいんですが",
      "Ask いっぱくのばせますか",
      "Wait through くうしつをかくにんしますね",
    ],
    dialogue: [
      [
        "You",
        "Sumimasen, yoyaku o henkō shitai n desu ga...",
        "すみません、よやくをへんこうしたいんですが…",
        "Excuse me, I'd like to change my reservation...",
      ],
      [
        "Reception",
        "Hai, onamae o onegai shimasu.",
        "はい、おなまえをおねがいします。",
        "Yes — your name, please.",
      ],
      [
        "You",
        "Ippaku nobasemasu ka? Ashita mo tomari tai desu.",
        "いっぱくのばせますか？あしたもとまりたいです。",
        "Can I extend by one night? I'd like to stay tomorrow as well.",
      ],
      [
        "Reception",
        "Kūshitsu o kakunin shimasu ne... Hai, daijōbu desu.",
        "くうしつをかくにんしますね…はい、だいじょうぶです。",
        "I'll check vacancies... Yes, that's fine.",
      ],
      [
        "You",
        "Yokatta. Arigatō gozaimasu.",
        "よかった。ありがとうございます。",
        "That's a relief. Thank you very much.",
      ],
      [
        "Staff",
        "Mitsukattara renraku shimasu.",
        "みつかったられんらくします。",
        "If we find it, we'll contact you.",
      ],
    ],
    patterns: [
      {
        chunk: "よやくをへんこうしたい",
        romaji: "yoyaku o henkō shitai",
        hiragana: "よやくをへんこうしたい",
        meaning: "I want to change the reservation",
        whenToUse:
          "Dates, name, number of people, smoking/non. Start here, then specify.",
        examples: [
          [
            "よやくをへんこうしたいんですが",
            "yoyaku o henkō shitai n desu ga",
            "I'd like to change the reservation...",
          ],
          [
            "ひづけをへんこうできますか",
            "hizuke o henkō dekimasu ka",
            "Can I change the date?",
          ],
        ],
      },
      {
        chunk: "いっぱくのばせますか",
        romaji: "ippaku nobasemasu ka",
        hiragana: "いっぱくのばせますか",
        meaning: "Can I extend by one night?",
        whenToUse:
          "Potential のばせます = is extending possible? Clearer than もういちはくください.",
        examples: [
          [
            "いっぱくのばせますか",
            "ippaku nobasemasu ka",
            "Can I extend one night?",
          ],
          [
            "にはくたんしゅくできますか",
            "nihaku tanshuku dekimasu ka",
            "Can I shorten it by two nights?",
          ],
        ],
      },
      {
        chunk: "なくしました",
        romaji: "nakushimashita",
        hiragana: "なくしました",
        meaning: "I lost it",
        whenToUse:
          "Lost & found desk; describe the item right after.",
        examples: [
          [
            "さいふをなくしました",
            "saifu o nakushimashita",
            "I lost my wallet",
          ],
          [
            "くろいさいふです",
            "kuroi saifu desu",
            "It's a black wallet",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "のばす / たんしゅく are the stay verbs",
        "のばす = extend. たんしゅく = shorten. Hotels understand these instantly. キャンセル is its own (often paid) path.",
      ],
    ],
    culturalNote: [
      "Peak weekends in Kyoto/Tokyo can be fully sold — ask early",
      "くうしつをかくにんしますね is not a stall; inventory is real. If they say 満室, ask ちかくのホテルをしょうかいできますか. Same-day extensions are easier than adding a night from abroad via the booking site.",
    ],
    shadowing: [
      ["Yoyaku o henkō shitai n desu ga...", "よやくをへんこうしたいんですが…"],
      ["Ippaku nobasemasu ka?", "いっぱくのばせますか？"],
    ],
    quiz: [
      [
        "いっぱくのばせますか asks to:",
        [
          "Check out now",
          "Extend the stay by one night",
          "Change the guest name",
          "Cancel breakfast",
        ],
        1,
        "いっぱく = one night. のばす = extend.",
      ],
      [
        "くうしつ means:",
        ["Breakfast", "A vacant room", "Passport", "The fifth floor"],
        1,
        "空室 = empty/available room.",
      ],
      [
        "なくしました means:",
        [
          "I lost it",
          "I found it",
          "I bought it",
          "I broke the law",
        ],
        0,
        "なくす = lose.",
      ],
    ],
    production: [
      [
        "I'd like to change my reservation. Can I extend one night?",
        "よやくをへんこうしたい + いっぱくのばせますか",
        "Yoyaku o henkō shitai n desu ga. Ippaku nobasemasu ka?",
        "よやくをへんこうしたいんですが。いっぱくのばせますか？",
      ],
      [
        "I lost my wallet",
        "さいふ + なくしました",
        "Saifu o nakushimashita.",
        "さいふをなくしました。",
      ],
    ],
  },
  {
    id: "sp-10-3",
    unit: 10,
    unitTitle: "Travel Deep",
    order: 3,
    title: "I Lost My Wallet",
    subtitle: "ふんしつ — last seen, おとしもの, police if needed",
    scenario:
      "Your wallet is gone somewhere between the hotel lobby sofa and the convenience store. Front desk is the first stop — they know the おとしもの flow better than you do.",
    durationMin: 26,
    objectives: [
      "Report なくしてしまいました",
      "Answer さいごにどこでみましたか",
      "Agree to けいさつ / おとしものセンター if needed",
    ],
    dialogue: [
      [
        "You",
        "Sumimasen, saifu o nakushite shimaimashita.",
        "すみません、さいふをなくしてしまいました。",
        "Excuse me — I've lost my wallet.",
      ],
      [
        "Staff",
        "Saigo ni doko de mimashita ka?",
        "さいごにどこでみましたか？",
        "Where did you last see it?",
      ],
      [
        "You",
        "Robī no sofa no atari desu.",
        "ロビーのソファのあたりです。",
        "Around the sofa in the lobby.",
      ],
      [
        "Staff",
        "Otoshimono wa mada todoite imasen. Keisatsu ni mo todokemasu ka?",
        "おとしものはまだとどいていません。けいさつにもとどけますか？",
        "No lost-and-found item has come in yet. Shall we report it to the police too?",
      ],
      [
        "You",
        "Hai, onegai shimasu. Kurejitto kādo mo haitte imasu.",
        "はい、おねがいします。クレジットカードもはいっています。",
        "Yes, please. My credit cards are in it too.",
      ],
      [
        "Staff",
        "Mōshiwake gozaimasen. Orimashō.",
        "もうしわけございません。おりましょう。",
        "We're very sorry. Let's get off (and transfer).",
      ],
    ],
    patterns: [
      {
        chunk: "なくしてしまいました",
        romaji: "nakushite shimaimashita",
        hiragana: "なくしてしまいました",
        meaning: "I've gone and lost it (regretful completion)",
        whenToUse:
          "しまう adds 'this happened, unfortunately.' More natural than bare なくしました for bad surprises.",
        examples: [
          [
            "さいふをなくしてしまいました",
            "saifu o nakushite shimaimashita",
            "I've lost my wallet",
          ],
          [
            "けいたいをなくしてしまいました",
            "keitai o nakushite shimaimashita",
            "I've lost my phone",
          ],
        ],
      },
      {
        chunk: "さいごにどこでみましたか",
        romaji: "saigo ni doko de mimashita ka",
        hiragana: "さいごにどこでみましたか",
        meaning: "Where did you last see it?",
        whenToUse:
          "The question staff will ask. Prepare あたり ('around') if you're not sure of the exact spot.",
        examples: [
          [
            "さいごにどこでみましたか",
            "saigo ni doko de mimashita ka",
            "Where did you last see it?",
          ],
          [
            "えきのあたりです",
            "eki no atari desu",
            "Around the station",
          ],
        ],
      },
      {
        chunk: "おくれています",
        romaji: "okurete imasu",
        hiragana: "おくれています",
        meaning: "It's delayed",
        whenToUse:
          "Platform announcements and asking staff about delays.",
        examples: [
          [
            "なんぷんおくれていますか",
            "nan-pun okurete imasu ka",
            "How many minutes late is it?",
          ],
          [
            "じこでおくれています",
            "jiko de okurete imasu",
            "Delayed due to an accident",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "てしまう = completion + regret",
        "Not every しまう is a disaster (たべてしまった can be 'I ate the whole thing'), but with なくす it clearly means 'it's gone, and that's bad.'",
      ],
    ],
    culturalNote: [
      "Japan's lost-and-found is unusually good — still call your cards",
      "Wallets often turn up at the 交番 or hotel おとしもの. Report anyway so the trail exists. For IC cards, the issuer can freeze them. Don't wait 'until tomorrow morning' if クレジットカード is inside.",
    ],
    shadowing: [
      [
        "Saifu o nakushite shimaimashita.",
        "さいふをなくしてしまいました。",
      ],
      ["Robī no sofa no atari desu.", "ロビーのソファのあたりです。"],
    ],
    quiz: [
      [
        "なくしてしまいました adds a feeling of:",
        ["Pride", "Regret that it's gone", "Future plans", "Hunger"],
        1,
        "しまう here marks an unfortunate completion.",
      ],
      [
        "おとしもの means:",
        ["A souvenir", "A lost item", "A reservation", "A complaint"],
        1,
        "おとしもの = something dropped/lost.",
      ],
      [
        "おくれています means:",
        [
          "It's delayed",
          "It's early",
          "It's free",
          "It's closed forever",
        ],
        0,
        "おくれ = delay.",
      ],
    ],
    production: [
      [
        "I've lost my wallet",
        "さいふを + なくしてしまいました",
        "Saifu o nakushite shimaimashita.",
        "さいふをなくしてしまいました。",
      ],
      [
        "How many minutes is it delayed?",
        "なんぷん + おくれ",
        "Nan-pun okurete imasu ka?",
        "なんぷんおくれていますか？",
      ],
    ],
  },
  {
    id: "sp-10-4",
    unit: 10,
    unitTitle: "Travel Deep",
    order: 4,
    title: "Complaining Without Starting a War",
    subtitle: "くじょう — noise, もうしわけございません, a different room",
    scenario:
      "2:10am. The room next door is a party. You go downstairs in a hoodie and use the Japanese complaint wrapper: a request, not a verdict.",
    durationMin: 26,
    objectives: [
      "Open a complaint as おねがいがあるんですが",
      "State the problem with 〜て、〜んです",
      "Ask べつのへやにかえてもらえますか",
    ],
    dialogue: [
      [
        "You",
        "Sumimasen, chotto onegai ga aru n desu ga...",
        "すみません、ちょっとおねがいがあるんですが…",
        "Excuse me — I have a small request...",
      ],
      [
        "Staff",
        "Hai, dō saremashita ka?",
        "はい、どうされましたか？",
        "Yes, what seems to be the matter?",
      ],
      [
        "You",
        "Tonari no heya ga urusakute, nemurenai n desu.",
        "となりのへやがうるさくて、ねむれないんです。",
        "The next room is noisy, and I can't sleep.",
      ],
      [
        "Staff",
        "Mōshiwake gozaimasen. Betsu no heya ni go-annai dekimasu.",
        "もうしわけございません。べつのへやにごあんないできます。",
        "We're very sorry. We can show you to a different room.",
      ],
      [
        "You",
        "Tasukarimasu. Onegai shimasu.",
        "たすかります。おねがいします。",
        "That would be a huge help. Please do.",
      ],
      [
        "Manager",
        "Mōshiwake arimasen. Sugu torikaemasu.",
        "もうしわけありません。すぐとりかえます。",
        "I'm sorry. We'll replace it right away.",
      ],
    ],
    patterns: [
      {
        chunk: "〜て、〜んです",
        romaji: "~ te, ~ n desu",
        hiragana: "〜て、〜んです",
        meaning: "___ , and (that's why) ___ (explanatory)",
        whenToUse:
          "Complaints that explain impact: noisy → can't sleep. んです invites them to fix it.",
        examples: [
          [
            "うるさくて、ねむれないんです",
            "urusakute, nemurenai n desu",
            "It's noisy, and I can't sleep",
          ],
          [
            "れいぼうがきかなくて、あついんです",
            "reibō ga kikanakute, atsui n desu",
            "The AC isn't working, and it's hot",
          ],
        ],
      },
      {
        chunk: "べつの〜にかえてもらえますか",
        romaji: "betsu no ~ ni kaete moraemasu ka",
        hiragana: "べつの〜にかえてもらえますか",
        meaning: "Could I have it changed to a different ___?",
        whenToUse:
          "Rooms, seats, dishes. てもらえますか is a favor, not a demand.",
        examples: [
          [
            "べつのへやにかえてもらえますか",
            "betsu no heya ni kaete moraemasu ka",
            "Could you change me to a different room?",
          ],
          [
            "べつのせきにかえてもらえますか",
            "betsu no seki ni kaete moraemasu ka",
            "Could you change me to a different seat?",
          ],
        ],
      },
      {
        chunk: "もうしわけありません",
        romaji: "mōshiwake arimasen",
        hiragana: "もうしわけありません",
        meaning: "I'm very sorry (formal)",
        whenToUse:
          "Staff apology; you can use it when complaining politely.",
        examples: [
          [
            "もうしわけありません",
            "mōshiwake arimasen",
            "I'm very sorry",
          ],
          [
            "これ、ちがうんですけど",
            "kore, chigau n desu kedo",
            "This isn't right…",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "どうされましたか is staff-speak for 'what happened?'",
        "れる／られる here is honorific, not passive. You answer with the problem, not されませんでした.",
      ],
    ],
    culturalNote: [
      "Japanese complaints work better as requests than verdicts",
      "このホテルは最悪です puts staff on defense. ねむれないんです + かえてもらえますか gives them a job. You will usually get もうしわけございません even when it's the other guest's fault — accept the apology and the fix.",
    ],
    shadowing: [
      [
        "Tonari no heya ga urusakute, nemurenai n desu.",
        "となりのへやがうるさくて、ねむれないんです。",
      ],
      [
        "Betsu no heya ni kaete moraemasu ka?",
        "べつのへやにかえてもらえますか？",
      ],
    ],
    quiz: [
      [
        "A soft way to start a complaint:",
        [
          "さいていです",
          "おねがいがあるんですが",
          "ばかじゃないですか",
          "おかねかえせ",
        ],
        1,
        "Frame it as a request first.",
      ],
      [
        "たすかります in this context means:",
        [
          "I will help you",
          "That would really help me",
          "I am drowning",
          "Check please",
        ],
        1,
        "助かります = I'd be saved / that's a big help.",
      ],
      [
        "もうしわけありません is:",
        [
          "A strong apology",
          "A joke",
          "A toast",
          "A greeting to friends",
        ],
        0,
        "Formal deep apology.",
      ],
    ],
    production: [
      [
        "The next room is noisy and I can't sleep. Could you change my room?",
        "うるさくてねむれない + べつのへやにかえてもらえますか",
        "Tonari no heya ga urusakute, nemurenai n desu. Betsu no heya ni kaete moraemasu ka?",
        "となりのへやがうるさくて、ねむれないんです。べつのへやにかえてもらえますか？",
      ],
      [
        "This isn't what I ordered",
        "ちがい + んですけど",
        "Kore, chigau n desu kedo.",
        "これ、ちがうんですけど。",
      ],
    ],
  },
  {
    id: "sp-10-5",
    unit: 10,
    unitTitle: "Travel Deep",
    order: 5,
    title: "When the Train Just Stops",
    subtitle: "でんしゃちえん — how long, ちえんしょうめいしょ, next shinkansen",
    scenario:
      "A personal-injury delay on the Tokaido Line. The platform is a quiet crowd staring at phones. You need an ETA and a 遅延証明書 for the hotel / office.",
    durationMin: 26,
    objectives: [
      "Understand ちえんしています announcements",
      "Ask つぎはなんじごろきますか",
      "Request ちえんしょうめいしょ",
    ],
    dialogue: [
      [
        "Staff",
        "Jiko no eikyō de, densha ga chien shite imasu.",
        "じこのえいきょうで、でんしゃがちえんしています。",
        "Due to an incident, trains are delayed.",
      ],
      [
        "You",
        "Tsugi wa nan-ji goro kimasu ka?",
        "つぎはなんじごろきますか？",
        "About what time will the next one come?",
      ],
      [
        "Staff",
        "Nijuppun hodo okure-sō desu.",
        "にじゅっぷんほどおくれそうです。",
        "It looks like about a 20-minute delay.",
      ],
      [
        "You",
        "Chien shōmeisho wa moraemasu ka?",
        "ちえんしょうめいしょはもらえますか？",
        "Can I get a delay certificate?",
      ],
      [
        "Staff",
        "Hai, achira de o-watashi shimasu. Shinkansen wa betsu desu.",
        "はい、あちらでおわたしします。しんかんせんはべつです。",
        "Yes, we'll hand them out over there. The shinkansen is separate.",
      ],
      [
        "Officer",
        "Hai, mairimashō.",
        "はい、まいりましょう。",
        "Yes, let's go (I'll take you).",
      ],
    ],
    patterns: [
      {
        chunk: "ちえんしています",
        romaji: "chien shite imasu",
        hiragana: "ちえんしています",
        meaning: "It is delayed (currently)",
        whenToUse:
          "Trains, flights, meetings. ちこく is more 'a person is late'; ちえん is the service running late.",
        examples: [
          [
            "でんしゃがちえんしています",
            "densha ga chien shite imasu",
            "The train is delayed",
          ],
          [
            "にじゅっぷんちえんしています",
            "nijuppun chien shite imasu",
            "It's delayed by 20 minutes",
          ],
        ],
      },
      {
        chunk: "ちえんしょうめいしょはもらえますか",
        romaji: "chien shōmeisho wa moraemasu ka",
        hiragana: "ちえんしょうめいしょはもらえますか",
        meaning: "Can I receive a delay certificate?",
        whenToUse:
          "Work, school, hotel check-in. Many gates have a QR / printer now; staff still understand the ask.",
        examples: [
          [
            "ちえんしょうめいしょはもらえますか",
            "chien shōmeisho wa moraemasu ka",
            "Can I get a delay certificate?",
          ],
          [
            "ちえんしょうめいしょはどこですか",
            "chien shōmeisho wa doko desu ka",
            "Where are the delay certificates?",
          ],
        ],
      },
      {
        chunk: "みちにまよいました",
        romaji: "michi ni mayoi mashita",
        hiragana: "みちにまよいました",
        meaning: "I got lost",
        whenToUse:
          "Police box (こうばん) — start with this, then destination.",
        examples: [
          [
            "みちにまよいました",
            "michi ni mayoimashita",
            "I got lost",
          ],
          [
            "えきはどこですか",
            "eki wa doko desu ka",
            "Where is the station?",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "ごろ softens clock time",
        "なんじごろ = about what time. Essential when nobody actually knows なんじ exactly.",
      ],
    ],
    culturalNote: [
      "じこ always means 'incident' here — don't picture a crash",
      "人身事故 announcements are sadly common. Platforms stay eerily calm. Download the operator's app (JR East, Tokyu, etc.) for recovery estimates. 遅延証明書 is accepted by most offices as proof you weren't just sleeping in.",
    ],
    shadowing: [
      ["Densha ga chien shite imasu.", "でんしゃがちえんしています。"],
      ["Chien shōmeisho wa moraemasu ka?", "ちえんしょうめいしょはもらえますか？"],
    ],
    quiz: [
      [
        "ちえんしょうめいしょ is:",
        [
          "A reserved seat",
          "A delay certificate",
          "A lunch box",
          "A hotel key",
        ],
        1,
        "遅延証明書 proves the train was late.",
      ],
      [
        "なんじごろきますか asks:",
        [
          "Where does it go?",
          "About what time will it come?",
          "How much is it?",
          "Which car?",
        ],
        1,
        "ごろ = approximately.",
      ],
      [
        "みちにまよいました means:",
        [
          "I got lost",
          "I won",
          "I'm hungry",
          "I'm early",
        ],
        0,
        "まよう = get lost.",
      ],
    ],
    production: [
      [
        "Can I get a delay certificate?",
        "ちえんしょうめいしょ + はもらえますか",
        "Chien shōmeisho wa moraemasu ka?",
        "ちえんしょうめいしょはもらえますか？",
      ],
      [
        "I got lost — where's the station?",
        "まよいました + えき",
        "Michi ni mayoimashita. Eki wa doko desu ka?",
        "みちにまよいました。えきはどこですか？",
      ],
    ],
  },
  {
    id: "sp-10-6",
    unit: 10,
    unitTitle: "Travel Deep",
    order: 6,
    title: "At the Police Box",
    subtitle: "こうばん — lost, directions, and the map on the desk",
    scenario:
      "You left Shibuya scramble one alley too far and the towers all look the same. A 交番 officer with a huge paper map is still one of Japan's best tourist services.",
    durationMin: 26,
    objectives: [
      "Say みちにまよいました",
      "State a destination with 〜までいきたいです",
      "Follow まっすぐ / ふたつめをみぎ",
    ],
    dialogue: [
      [
        "You",
        "Sumimasen, michi ni mayoimashita.",
        "すみません、みちにまよいました。",
        "Excuse me — I've gotten lost.",
      ],
      [
        "Officer",
        "Doko ni ikitai desu ka?",
        "どこにいきたいですか？",
        "Where do you want to go?",
      ],
      [
        "You",
        "Kono hoteru made ikitai desu.",
        "このホテルまでいきたいです。",
        "I want to get to this hotel.",
      ],
      [
        "Officer",
        "Massugu itte, futatsume o migi desu. Chizu mo o-mise shimasu ne.",
        "まっすぐいって、ふたつめをみぎです。ちずもおみせしますね。",
        "Go straight, then right at the second one. I'll show you on a map too.",
      ],
      [
        "You",
        "Arigatō gozaimasu. Tasukarimashita.",
        "ありがとうございます。たすかりました。",
        "Thank you very much. That saved me.",
      ],
      [
        "You",
        "Arigatō gozaimashita. Tasukarimashita.",
        "ありがとうございました。たすかりました。",
        "Thank you. That saved me.",
      ],
    ],
    patterns: [
      {
        chunk: "みちにまよいました",
        romaji: "michi ni mayoimashita",
        hiragana: "みちにまよいました",
        meaning: "I've lost my way",
        whenToUse:
          "The 交番 opener. Clearer than わかりません alone.",
        examples: [
          [
            "みちにまよいました",
            "michi ni mayoimashita",
            "I've gotten lost",
          ],
          [
            "えきへのみちがわかりません",
            "eki e no michi ga wakarimasen",
            "I don't know the way to the station",
          ],
        ],
      },
      {
        chunk: "〜までいきたいです",
        romaji: "~ made ikitai desu",
        hiragana: "〜までいきたいです",
        meaning: "I want to go as far as ___",
        whenToUse:
          "Show a map pin or hotel card. まで marks the endpoint.",
        examples: [
          [
            "このホテルまでいきたいです",
            "kono hoteru made ikitai desu",
            "I want to go to this hotel",
          ],
          [
            "しんじゅくえきまでいきたいです",
            "Shinjuku eki made ikitai desu",
            "I want to go to Shinjuku Station",
          ],
        ],
      },
      {
        chunk: "たすかりました",
        romaji: "tasukarimashita",
        hiragana: "たすかりました",
        meaning: "That helped / you saved me",
        whenToUse:
          "After real help from staff or strangers — warmer than plain thanks.",
        examples: [
          [
            "ほんとうにたすかりました",
            "hontō ni tasukarimashita",
            "That really helped",
          ],
          [
            "たすかります",
            "tasukarimasu",
            "That would help (in advance)",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "ふたつめをみぎ = right at the second (street/light)",
        "Counters: ひとつめ, ふたつめ, みっつめ. を marks the intersection you turn at.",
      ],
    ],
    culturalNote: [
      "こうばん officers expect lost people — that's part of the job",
      "They will photocopy a map and highlight it. For stolen phones or lost passports they file a 遺失届 you may need for embassy replacement. A 交番 is not the place for an argument; it is the place for a map and a report number.",
    ],
    shadowing: [
      ["Michi ni mayoimashita.", "みちにまよいました。"],
      ["Kono hoteru made ikitai desu.", "このホテルまでいきたいです。"],
    ],
    quiz: [
      [
        "You've gotten lost. At the こうばん you say:",
        [
          "つかまりました",
          "みちにまよいました",
          "おつかれさまでした",
          "いただきます",
        ],
        1,
        "みちにまよう = to lose one's way.",
      ],
      [
        "ふたつめをみぎです means:",
        [
          "Left at the first street",
          "Right at the second one",
          "Go back two stations",
          "Two tickets please",
        ],
        1,
        "ふたつめ = the second. みぎ = right.",
      ],
      [
        "たすかりました means:",
        [
          "That helped",
          "I'm angry",
          "I'm leaving Japan",
          "No thanks forever",
        ],
        0,
        "Warm thanks after help.",
      ],
    ],
    production: [
      [
        "I've gotten lost. I want to go to this hotel",
        "みちにまよいました + このホテルまでいきたいです",
        "Michi ni mayoimashita. Kono hoteru made ikitai desu.",
        "みちにまよいました。このホテルまでいきたいです。",
      ],
      [
        "That really helped",
        "ほんとうに + たすかりました",
        "Hontō ni tasukarimashita.",
        "ほんとうにたすかりました。",
      ],
    ],
  },

  // ─── Unit 11: Opinions & Media ───────────────────────────────────────
  {
    id: "sp-11-1",
    unit: 11,
    unitTitle: "Opinions & Media",
    order: 1,
    title: "I Hear That... — らしい",
    subtitle: "Hearsay you didn't witness yourself",
    scenario:
      "Office kitchen, 8:50am. Ken saw the weather news; you didn't. らしい lets you pass on a report without pretending you checked the radar.",
    durationMin: 26,
    objectives: [
      "Attach らしい to mark secondhand info",
      "Ask ほんとう？ / ニュースでみた？",
      "Act on hearsay without overclaiming",
    ],
    dialogue: [
      [
        "Ken",
        "Ashita wa taifū ga kuru rashii yo.",
        "あしたはたいふうがくるらしいよ。",
        "I hear a typhoon's coming tomorrow.",
      ],
      [
        "You",
        "Hontō? Nyūsu de mita?",
        "ほんとう？ニュースでみた？",
        "Really? Did you see it on the news?",
      ],
      [
        "Ken",
        "Un. Densha mo tomaru rashii.",
        "うん。でんしゃもとまるらしい。",
        "Yeah. I hear the trains will stop too.",
      ],
      [
        "You",
        "Jā, kyō no uchi ni kaimono shita hō ga ii ne.",
        "じゃあ、きょうのうちにかいものしたほうがいいね。",
        "Then we'd better shop today while we can.",
      ],
      [
        "Ken",
        "Sō da ne.",
        "そうだね。",
        "Yeah, that's right.",
      ],
      [
        "Friend",
        "Un, tabun sō da to omou.",
        "うん、たぶんそうだとおもう。",
        "Yeah, I think that's probably right.",
      ],
    ],
    patterns: [
      {
        chunk: "〜らしい",
        romaji: "~ rashii",
        hiragana: "〜らしい",
        meaning: "I hear that ___ / it seems (based on what I've gathered)",
        whenToUse:
          "Information you got from news, rumor, or a third person. You are not the eyewitness.",
        examples: [
          [
            "あしたはあめらしい",
            "ashita wa ame rashii",
            "I hear it'll rain tomorrow",
          ],
          [
            "かれはかいしゃをやめるらしい",
            "kare wa kaisha o yameru rashii",
            "I hear he's quitting the company",
          ],
        ],
      },
      {
        chunk: "〜したほうがいい",
        romaji: "~ shita hō ga ii",
        hiragana: "〜したほうがいい",
        meaning: "You'd better ___ / it's better to ___",
        whenToUse:
          "Advice after hearing news. Past-ish た form + ほうがいい is the usual shape.",
        examples: [
          [
            "かいものしたほうがいい",
            "kaimono shita hō ga ii",
            "You'd better do the shopping",
          ],
          [
            "はやくかえったほうがいい",
            "hayaku kaetta hō ga ii",
            "You'd better go home early",
          ],
        ],
      },
      {
        chunk: "〜らしい",
        romaji: "~ rashii",
        hiragana: "〜らしい",
        meaning: "I hear that ___ / seems that ___",
        whenToUse:
          "Hearsay from news or friends — not your direct claim.",
        examples: [
          [
            "あしたはあめらしい",
            "ashita wa ame rashii",
            "I hear it'll rain tomorrow",
          ],
          [
            "かれ、やめたらしいよ",
            "kare, yameta rashii yo",
            "I hear he quit",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "らしい vs そうです (hearsay)",
        "Both report secondhand info. らしい can also mean 'typical of' (子どもらしい). Hearsay そうです is だそうです after a noun/な-adj. Don't confuse with appearance そう (おいしそう).",
      ],
    ],
    culturalNote: [
      "Japanese speakers flag the source so they can't be blamed later",
      "らしい / だって / そうです are social insurance. Stating a typhoon as flat fact when you only overheard Ken is how office rumors become your fault. Keep the marker on.",
    ],
    shadowing: [
      ["Ashita wa taifū ga kuru rashii yo.", "あしたはたいふうがくるらしいよ。"],
      ["Kyō no uchi ni kaimono shita hō ga ii.", "きょうのうちにかいものしたほうがいい。"],
    ],
    quiz: [
      [
        "あしたはあめらしい means:",
        [
          "I can see it raining now",
          "I hear / it seems it'll rain tomorrow",
          "I want rain tomorrow",
          "It rained yesterday",
        ],
        1,
        "らしい marks hearsay or inferred report.",
      ],
      [
        "したほうがいい is:",
        ["A past tense of する", "Advice: you'd better do it", "A question particle", "A greeting"],
        1,
        "た + ほうがいい = it's better if you do.",
      ],
      [
        "〜らしい marks:",
        [
          "Hearsay/seeming",
          "Orders",
          "Prices only",
          "Train cars",
        ],
        0,
        "らしい = I hear/seems.",
      ],
    ],
    production: [
      [
        "I hear a typhoon is coming tomorrow",
        "たいふうがくる + らしい",
        "Ashita wa taifū ga kuru rashii.",
        "あしたはたいふうがくるらしい。",
      ],
      [
        "I hear it'll rain tomorrow",
        "あめ + らしい",
        "Ashita wa ame rashii.",
        "あしたはあめらしい。",
      ],
    ],
  },
  {
    id: "sp-11-2",
    unit: 11,
    unitTitle: "Opinions & Media",
    order: 2,
    title: "It Looks Like... — Appearance そう",
    subtitle: "おいしそう, つかれてそう, about to happen",
    scenario:
      "A bakery window in Daikanyama, then Mika reading your face. Appearance そう is what you judge with your eyes — not what the news said.",
    durationMin: 26,
    objectives: [
      "Make い-adj into おいしそう",
      "Read people with つかれてそう",
      "Use verb-stem そう for 'about to'",
    ],
    dialogue: [
      [
        "Mika",
        "Kono kēki, oishisō!",
        "このケーキ、おいしそう！",
        "This cake looks delicious!",
      ],
      [
        "You",
        "Hontō. A, Mika, tsukarete-sō da ne.",
        "ほんとう。あ、ミカ、つかれてそうだね。",
        "True. Ah, Mika — you look tired.",
      ],
      [
        "Mika",
        "Un, nemu-sō na kurai. Kono rāmen, karasō?",
        "うん、ねむそうなくらい。このラーメン、からそう？",
        "Yeah, I look about ready to fall asleep. Does this ramen look spicy?",
      ],
      [
        "You",
        "Miteru dake de mo, karasō. Ame, furi-sō da yo.",
        "みてるだけでも、からそう。あめ、ふりそうだよ。",
        "Even just looking, it looks spicy. Looks like rain's about to fall.",
      ],
      [
        "Mika",
        "Jā, hayaku kaerō.",
        "じゃあ、はやくかえろう。",
        "Then let's head back soon.",
      ],
      [
        "You",
        "Sō ka mo ne. Chotto hen da ne.",
        "そうかもね。ちょっとへんだね。",
        "Maybe. It's a bit odd.",
      ],
    ],
    patterns: [
      {
        chunk: "い-adj → そう (おいしそう)",
        romaji: "i-adjective stem + sō",
        hiragana: "おいしそう・からそう",
        meaning: "Looks / seems ___ (from appearance)",
        whenToUse:
          "Drop い, add そう. いい becomes よさそう. This is your eyes, not a news report.",
        examples: [
          ["おいしそう", "oishisō", "Looks delicious"],
          ["たかそう", "takasō", "Looks expensive"],
        ],
      },
      {
        chunk: "verb stem + そう",
        romaji: "verb stem + sō",
        hiragana: "ふりそう・こわれそう",
        meaning: "Looks like it's about to ___",
        whenToUse:
          "Imminent events you can sense: rain, breaking, crying, falling asleep.",
        examples: [
          ["あめがふりそう", "ame ga furisō", "It looks like it's about to rain"],
          ["なきそう", "nakisō", "Looks like (someone's) about to cry"],
        ],
      },
      {
        chunk: "〜みたい",
        romaji: "~ mitai",
        hiragana: "〜みたい",
        meaning: "seems like / looks like",
        whenToUse:
          "Appearance-based judgment; softer than a hard claim.",
        examples: [
          [
            "つかれてるみたい",
            "tsukareteru mitai",
            "Looks tired",
          ],
          [
            "おいしいみたいだよ",
            "oishii mitai da yo",
            "Seems tasty",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "つかれてそう vs つかれそう",
        "つかれてそう = looks tired (already in that state). つかれそう = looks like they will get tired. The て is the difference between now and soon.",
      ],
      [
        "Appearance そう ≠ hearsay そうだ",
        "あめがふりそう = looking at the sky. あめがふるそうだ = I heard it will rain. Same letters, different grammar.",
      ],
    ],
    culturalNote: [
      "おいしそう is a compliment you say before eating",
      "Photographing the plate and saying おいしそう is normal. Saying まずいそう is almost never done to the cook. For people, つかれてそう can be caring or nosy — tone decides.",
    ],
    shadowing: [
      ["Kono kēki, oishisō!", "このケーキ、おいしそう！"],
      ["Ame, furisō da yo.", "あめ、ふりそうだよ。"],
    ],
    quiz: [
      [
        "おいしそう means:",
        [
          "I heard it was delicious",
          "It looks delicious",
          "It was delicious yesterday",
          "I don't want it",
        ],
        1,
        "Adj-stem + そう = appearance.",
      ],
      [
        "あめがふりそう vs あめがふるそうだ:",
        [
          "They're identical",
          "ふりそう = looks about to; ふるそうだ = I heard it will",
          "ふりそう is past tense",
          "ふるそうだ is only for food",
        ],
        1,
        "Appearance vs hearsay — don't mix them.",
      ],
      [
        "〜みたい marks:",
        [
          "Appearance/seems like",
          "Must do",
          "Never",
          "Platform 2",
        ],
        0,
        "みたい = looks/seems.",
      ],
    ],
    production: [
      [
        "This cake looks delicious. It looks like it's about to rain",
        "おいしそう + あめがふりそう",
        "Kono kēki, oishisō. Ame ga furisō da yo.",
        "このケーキ、おいしそう。あめがふりそうだよ。",
      ],
      [
        "Looks like they're tired",
        "つかれてる + みたい",
        "Tsukareteru mitai.",
        "つかれてるみたい。",
      ],
    ],
  },
  {
    id: "sp-11-3",
    unit: 11,
    unitTitle: "Opinions & Media",
    order: 3,
    title: "It's Like... — みたい",
    subtitle: "Resemblance, vibe, and soft conclusions",
    scenario:
      "A freak warm day in March in Ueno. Ken reaches for みたい — the everyday cousin of ようだ that you'll hear on every train.",
    durationMin: 26,
    objectives: [
      "Compare with noun + みたい",
      "Draw a soft conclusion with 〜みたいだ",
      "Feel the difference from らしい / そう",
    ],
    dialogue: [
      [
        "Ken",
        "Kyō no kūki, natsu mitai.",
        "きょうのくうき、なつのみたい。",
        "The air today is like summer.",
      ],
      [
        "You",
        "Hontō. Ase kaite ru. Kodomo mitai.",
        "ほんとう。あせかいてる。こどもみたい。",
        "True. I'm sweating. Like a kid.",
      ],
      [
        "Ken",
        "Demo ashita wa yuki mitai da yo, yohō da to.",
        "でもあしたはゆきみたいだよ、よほうだと。",
        "But tomorrow seems like snow, according to the forecast.",
      ],
      [
        "You",
        "Haru na no ni? Hen mitai.",
        "はるなのに？へんみたい。",
        "Even though it's spring? Seems weird.",
      ],
      [
        "Ken",
        "Nihon no sangatsu mitai da ne.",
        "にほんのさんがつみたいだね。",
        "That's so like March in Japan.",
      ],
      [
        "Friend",
        "Yappari ne! Kami ga ii yo ne.",
        "やっぱりね！かみがいいよね。",
        "Right?! The hair is so good.",
      ],
    ],
    patterns: [
      {
        chunk: "noun + みたい",
        romaji: "noun + mitai",
        hiragana: "なつのみたい・こどもみたい",
        meaning: "Like ___ / resembles ___",
        whenToUse:
          "Casual simile. Polite writing prefers のよう. Speech loves みたい.",
        examples: [
          ["ゆめみたい", "yume mitai", "Like a dream"],
          ["えいがみたい", "eiga mitai", "Like a movie"],
        ],
      },
      {
        chunk: "〜みたいだ",
        romaji: "~ mitai da",
        hiragana: "〜みたいだ",
        meaning: "It seems that ___ / it looks like ___",
        whenToUse:
          "Soft conclusion from what you see or just heard. Less 'report' than らしい, less 'eyes only' than そう.",
        examples: [
          [
            "あしたはゆきみたいだ",
            "ashita wa yuki mitai da",
            "It seems like snow tomorrow",
          ],
          [
            "もうおわったみたい",
            "mō owatta mitai",
            "Looks like it's already over",
          ],
        ],
      },
      {
        chunk: "すきなキャラ",
        romaji: "suki na kyara",
        hiragana: "すきなキャラ",
        meaning: "favorite character",
        whenToUse:
          "Anime/game talk — safe small-talk fuel.",
        examples: [
          [
            "だれがすき？",
            "dare ga suki?",
            "Who's your favorite?",
          ],
          [
            "このキャラすき",
            "kono kyara suki",
            "I like this character",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "なのに = even though (frustration)",
        "はるなのにゆき = snow even though it's spring. な attaches to nouns/な-adj before のに.",
      ],
    ],
    culturalNote: [
      "みたい is the default 'seems' of spoken Japanese",
      "If you only ever say と思います, you sound like a textbook. 終わったみたい / いないみたい is how people actually close a thought. Save らしい for 'I gathered this from others.'",
    ],
    shadowing: [
      ["Kyō no kūki, natsu mitai.", "きょうのくうき、なつのみたい。"],
      ["Mō owatta mitai.", "もうおわったみたい。"],
    ],
    quiz: [
      [
        "こどもみたい means:",
        ["I have a child", "Like a child", "I hate children", "Children's day"],
        1,
        "noun + みたい = resembles.",
      ],
      [
        "もうおわったみたい is:",
        [
          "A hard fact you witnessed from the start",
          "A soft conclusion: it seems it's already over",
          "An order to finish",
          "A past-tense greeting",
        ],
        1,
        "みたいだ softens the conclusion.",
      ],
      [
        "すきなキャラ is:",
        [
          "Favorite character",
          "Boss title",
          "Train pass",
          "Trash day",
        ],
        0,
        "キャラ = character.",
      ],
    ],
    production: [
      [
        "The air today is like summer. It seems weird",
        "なつのみたい + へんみたい",
        "Kyō no kūki, natsu mitai. Hen mitai.",
        "きょうのくうき、なつのみたい。へんみたい。",
      ],
      [
        "Who's your favorite character?",
        "だれ + すき",
        "Dare ga suki?",
        "だれがすき？",
      ],
    ],
  },
  {
    id: "sp-11-4",
    unit: 11,
    unitTitle: "Opinions & Media",
    order: 4,
    title: "Did You See the News?",
    subtitle: "ニュース — みた？, ショック, ほんとうかな",
    scenario:
      "LINE at lunch. A heavy headline is everywhere. You need language for 'I saw it,' 'I'm shaken,' and 'I'm not sure it's the whole story' — without giving a TED talk.",
    durationMin: 26,
    objectives: [
      "Open with ニュースみた？",
      "React with ショックだった / こわい",
      "Doubt gently with ほんとうかな",
    ],
    dialogue: [
      [
        "Mika",
        "Kesa no nyūsu, mita?",
        "けさのニュース、みた？",
        "Did you see this morning's news?",
      ],
      [
        "You",
        "Mita mita. Chotto shokku datta.",
        "みたみた。ちょっとショックだった。",
        "Yeah, I saw it. It was a bit of a shock.",
      ],
      [
        "Mika",
        "Hontō ka na, tte omotta.",
        "ほんとうかな、っておもった。",
        "I wondered if it's really true.",
      ],
      [
        "You",
        "Kosei ga aru kamo shirenai kedo, mushi wa dekinai ne.",
        "こせいがあるかもしれないけど、むしはできないね。",
        "There might be bias, but we can't just ignore it.",
      ],
      [
        "Mika",
        "Mata hanashi shiyō.",
        "またはなししよう。",
        "Let's talk more later.",
      ],
      [
        "You",
        "Un, demo waruku wa nai to omou.",
        "うん、でもわるくはないとおもう。",
        "Yeah, but I don't think it's bad.",
      ],
    ],
    patterns: [
      {
        chunk: "〜みた？",
        romaji: "~ mita?",
        hiragana: "〜みた？",
        meaning: "Did you see ___?",
        whenToUse:
          "News, shows, tweets. Casual past of 見る. Polite: みましたか.",
        examples: [
          ["ニュースみた？", "nyūsu mita?", "Did you see the news?"],
          ["あのばんぐみみた？", "ano bangumi mita?", "Did you see that show?"],
        ],
      },
      {
        chunk: "ほんとうかな",
        romaji: "hontō ka na",
        hiragana: "ほんとうかな",
        meaning: "I wonder if that's really true",
        whenToUse:
          "Soft skepticism. Less aggressive than うそでしょ toward the speaker.",
        examples: [
          ["ほんとうかな", "hontō ka na", "I wonder if that's true"],
          [
            "そうかな、っておもった",
            "sō ka na, tte omotta",
            "I thought, 'is that so?'",
          ],
        ],
      },
      {
        chunk: "ちょっと…",
        romaji: "chotto…",
        hiragana: "ちょっと…",
        meaning: "It's a bit… (trailing criticism)",
        whenToUse:
          "Soften negatives; let the other person fill in.",
        examples: [
          [
            "ちょっとながいかも",
            "chotto nagai kamo",
            "Maybe a bit long",
          ],
          [
            "いまいちかも",
            "imaichi kamo",
            "Maybe not quite there",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "っておもった quotes your own thought",
        "ほんとうかな、っておもった = I thought 'is it true?' The って is casual と.",
      ],
    ],
    culturalNote: [
      "Japanese news talk often stays in feelings, not debate-club mode",
      "ショックだった / こわいね keeps harmony while still reacting. Jumping to a political speech with acquaintances can freeze the table. またはなししよう is a polite off-ramp when the topic is too heavy for a food court.",
    ],
    shadowing: [
      ["Kesa no nyūsu, mita?", "けさのニュース、みた？"],
      ["Hontō ka na, tte omotta.", "ほんとうかな、っておもった。"],
    ],
    quiz: [
      [
        "A soft way to doubt a headline:",
        ["うそつき！", "ほんとうかな", "りょうかいです", "おだいじに"],
        1,
        "ほんとうかな wonders without attacking.",
      ],
      [
        "ショックだった describes:",
        [
          "That you were electrically shocked",
          "That the news hit you emotionally",
          "That you agreed 100%",
          "That you missed the news",
        ],
        1,
        "ショック is a common loanword for emotional jolt.",
      ],
      [
        "ちょっと… often softens:",
        [
          "Criticism",
          "Math",
          "Passports",
          "Umbrellas",
        ],
        0,
        "Trailing ちょっと softens negatives.",
      ],
    ],
    production: [
      [
        "Did you see the news? It was a bit of a shock",
        "ニュースみた？ + ちょっとショックだった",
        "Nyūsu mita? Chotto shokku datta.",
        "ニュースみた？ちょっとショックだった。",
      ],
      [
        "It's a bit long maybe",
        "ちょっと + ながい + かも",
        "Chotto nagai kamo.",
        "ちょっとながいかも。",
      ],
    ],
  },
  {
    id: "sp-11-5",
    unit: 11,
    unitTitle: "Opinions & Media",
    order: 5,
    title: "Talking About Your Oshi",
    subtitle: "おし — fandom, ライブ, おしかつ",
    scenario:
      "A オタク hangout in Nakano Broadway. Yuki asks だれがおし？ — the fastest friendship test in modern Japan. You don't need to be shy about liking something loudly.",
    durationMin: 26,
    objectives: [
      "Ask and answer だれがおし？",
      "Talk ライブ and グッズ without apology",
      "Use おしかつ as a lifestyle word",
    ],
    dialogue: [
      [
        "Yuki",
        "Dare ga oshi?",
        "だれがおし？",
        "Who's your oshi (favorite)?",
      ],
      [
        "You",
        "Kono gurūpu no rīdo. Kondo no raibu, iku?",
        "このグループのリード。こんどのライブ、いく？",
        "The lead of this group. Going to the next live?",
      ],
      [
        "Yuki",
        "Iku iku! Oshikatsu daisuki.",
        "いくいく！おしかつだいすき。",
        "I'm going, I'm going! I love oshi-activities.",
      ],
      [
        "You",
        "Guzzu, sude ni kacchatta.",
        "グッズ、すでにかっちゃった。",
        "I already went and bought merch.",
      ],
      [
        "Yuki",
        "Wakaru, watashi mo.",
        "わかる、わたしも。",
        "I get it — me too.",
      ],
      [
        "Friend",
        "Naruhodo ne. Benkyō ni naru.",
        "なるほどね。べんきょうになる。",
        "I see. That's informative.",
      ],
    ],
    patterns: [
      {
        chunk: "だれがおし？",
        romaji: "dare ga oshi?",
        hiragana: "だれがおし？",
        meaning: "Who's your favorite (idol/character/member)?",
        whenToUse:
          "Fandom small talk. おし is the person you support. You can おしへん (change) — people joke about it.",
        examples: [
          ["だれがおし？", "dare ga oshi?", "Who's your oshi?"],
          ["いまのおしはだれ？", "ima no oshi wa dare?", "Who's your current oshi?"],
        ],
      },
      {
        chunk: "おしかつ",
        romaji: "oshikatsu",
        hiragana: "おしかつ",
        meaning: "Oshi activities — supporting your favorite",
        whenToUse:
          "Lives, merch, streaming milestones, birthday ads on trains. A normal hobby word now, not a slur.",
        examples: [
          ["おしかつだいすき", "oshikatsu daisuki", "I love doing oshi stuff"],
          [
            "こんしゅうおしかつする",
            "konshū oshikatsu suru",
            "I'm doing oshi activities this week",
          ],
        ],
      },
      {
        chunk: "〜によると",
        romaji: "~ ni yoru to",
        hiragana: "〜によると",
        meaning: "According to ___",
        whenToUse:
          "Cite an article, friend, or news before the claim.",
        examples: [
          [
            "ニュースによると",
            "nyūsu ni yoru to",
            "According to the news",
          ],
          [
            "ともだちによると",
            "tomodachi ni yoru to",
            "According to a friend",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "かっちゃった = かってしまった",
        "ちゃう／じゃう is casual てしまう. Here it's laughing regret: I (impulsively) bought it.",
      ],
    ],
    culturalNote: [
      "おし culture is mainstream — salarymen have them too",
      "From ジャニーズ to VTubers to baseball, だれがおし is bonding, not a confession of immaturity. Mocking someone's おし is a fast way to end a friendship. わかる is the correct response to merch guilt.",
    ],
    shadowing: [
      ["Dare ga oshi?", "だれがおし？"],
      ["Oshikatsu daisuki.", "おしかつだいすき。"],
    ],
    quiz: [
      [
        "だれがおし？ asks:",
        [
          "Who is pushing you?",
          "Who is your favorite to support?",
          "Who is your boss?",
          "Who is late?",
        ],
        1,
        "推し = the one you support.",
      ],
      [
        "おしかつ refers to:",
        [
          "Office overtime",
          "Activities supporting your favorite",
          "Taking out trash",
          "Hotel checkout",
        ],
        1,
        "おしかつ = the hobby of supporting your oshi.",
      ],
      [
        "〜によると means:",
        [
          "According to ___",
          "Instead of ___",
          "Except ___",
          "Against ___",
        ],
        0,
        "によると cites a source.",
      ],
    ],
    production: [
      [
        "Who's your oshi? I love oshi activities",
        "だれがおし？ + おしかつだいすき",
        "Dare ga oshi? Oshikatsu daisuki.",
        "だれがおし？おしかつだいすき。",
      ],
      [
        "According to the news…",
        "ニュース + によると",
        "Nyūsu ni yoru to…",
        "ニュースによると…",
      ],
    ],
  },
  {
    id: "sp-11-6",
    unit: 11,
    unitTitle: "Opinions & Media",
    order: 6,
    title: "Softening a Critique",
    subtitle: "ひはんをやわらげる — わるくはない, こじんてきには",
    scenario:
      "Tanaka-san asks what you think of a 40-page deck. A blunt わかりにくいです can land like a punch. You need the cushion words Japanese offices run on.",
    durationMin: 26,
    objectives: [
      "Start with わるくはないとおもいます",
      "Own the view: こじんてきには",
      "Point at a part, not the person",
    ],
    dialogue: [
      [
        "Tanaka",
        "Kono shiryō, dō omoimasu ka?",
        "このしりょう、どうおもいますか？",
        "What do you think of these materials?",
      ],
      [
        "You",
        "Waruku wa nai to omoimasu. Kojinteki ni wa, mō chotto mijikai hō ga ii kamo.",
        "わるくはないとおもいます。こじんてきには、もうちょっとみじかいほうがいいかも。",
        "I don't think it's bad. Personally, a bit shorter might be better.",
      ],
      [
        "Tanaka",
        "Naruhodo. Doko ga nagai desu ka?",
        "なるほど。どこがながいですか？",
        "I see. Which part is long?",
      ],
      [
        "You",
        "Ni-pēji-me ga chotto wakarinikui ka na, to.",
        "にページめがちょっとわかりにくいかな、と。",
        "Page two is a bit hard to follow, I guess...",
      ],
      [
        "Tanaka",
        "Fīdobakku arigatō.",
        "フィードバックありがとう。",
        "Thanks for the feedback.",
      ],
      [
        "You",
        "Ja, mata yōi shite oku ne.",
        "じゃあ、またよういしておくね。",
        "I'll get it ready again then.",
      ],
    ],
    patterns: [
      {
        chunk: "わるくはないけど",
        romaji: "waruku wa nai kedo",
        hiragana: "わるくはないけど",
        meaning: "It's not bad, but...",
        whenToUse:
          "Open a critique by saving face. The は marks contrast: not bad — however.",
        examples: [
          [
            "わるくはないとおもいます",
            "waruku wa nai to omoimasu",
            "I don't think it's bad",
          ],
          [
            "わるくはないけど、みじかいほうがいい",
            "waruku wa nai kedo, mijikai hō ga ii",
            "It's not bad, but shorter would be better",
          ],
        ],
      },
      {
        chunk: "こじんてきには",
        romaji: "kojinteki ni wa",
        hiragana: "こじんてきには",
        meaning: "Personally / as for me",
        whenToUse:
          "Shrinks the claim so it isn't 'this is objectively wrong.' Essential with seniors.",
        examples: [
          [
            "こじんてきには、みじかいほうがいいかも",
            "kojinteki ni wa, mijikai hō ga ii kamo",
            "Personally, shorter might be better",
          ],
          [
            "こじんてきないけんです",
            "kojinteki na iken desu",
            "This is just my personal opinion",
          ],
        ],
      },
      {
        chunk: "どうおもる / どうおもう？",
        romaji: "dō omou?",
        hiragana: "どうおもう？",
        meaning: "What do you think?",
        whenToUse:
          "Invite opinion without cornering them.",
        examples: [
          [
            "これ、どうおもう？",
            "kore, dō omou?",
            "What do you think of this?",
          ],
          [
            "どうかな",
            "dō kana",
            "I wonder / not sure",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "かな、と leaves the sentence open",
        "わかりにくいかな、と trails off: 'it's a bit hard to follow, I guess...' The hanging と quotes your own tentative thought.",
      ],
    ],
    culturalNote: [
      "Critique the page, never the person, in the first pass",
      "にページめがわかりにくい is safer than たなかさんのせつめいはへた. Japanese meetings often sandwich: plus → concern → plus. フィードバックありがとう is them accepting the cushion — you did it right.",
    ],
    shadowing: [
      [
        "Waruku wa nai to omoimasu.",
        "わるくはないとおもいます。",
      ],
      [
        "Kojinteki ni wa, mō chotto mijikai hō ga ii kamo.",
        "こじんてきには、もうちょっとみじかいほうがいいかも。",
      ],
    ],
    quiz: [
      [
        "A cushioned critique starts with:",
        ["だめです", "わるくはないとおもいます", "ばかか", "しらなかった"],
        1,
        "わるくはない saves face before the real comment.",
      ],
      [
        "こじんてきには does what?",
        [
          "Makes the opinion sound like company policy",
          "Marks it as your personal view",
          "Means you hate it",
          "Cancels the meeting",
        ],
        1,
        "個人的には = personally speaking.",
      ],
      [
        "どうおもう？ asks:",
        [
          "What do you think?",
          "Where is it?",
          "How much?",
          "Who are you?",
        ],
        0,
        "どうおもう = what do you think.",
      ],
    ],
    production: [
      [
        "I don't think it's bad. Personally, a bit shorter might be better",
        "わるくはない + こじんてきには + みじかいほうがいいかも",
        "Waruku wa nai to omoimasu. Kojinteki ni wa, mō chotto mijikai hō ga ii kamo.",
        "わるくはないとおもいます。こじんてきには、もうちょっとみじかいほうがいいかも。",
      ],
      [
        "What do you think of this?",
        "これ + どうおもう",
        "Kore, dō omou?",
        "これ、どうおもう？",
      ],
    ],
  },

  // ─── Unit 12: Stories & Time ─────────────────────────────────────────
  {
    id: "sp-12-1",
    unit: 12,
    unitTitle: "Stories & Time",
    order: 1,
    title: "When That Happened — とき",
    subtitle: "がくせいのとき, きたとき, pinning a memory",
    scenario:
      "A long 終電 wait with Ken. Stories need a time hook. とき is how Japanese puts a frame around a memory without conjugating yourself into a corner.",
    durationMin: 26,
    objectives: [
      "Use noun + のとき for life stages",
      "Use verb + とき for 'when I ___'",
      "Ask いちばんびっくりした？ about a time",
    ],
    dialogue: [
      [
        "Ken",
        "Nihon ni kita toki, nani ga ichiban bikkuri shita?",
        "にほんにきたとき、なにがいちばんびっくりした？",
        "When you came to Japan, what surprised you most?",
      ],
      [
        "You",
        "Densha no yasashisa. Gakusei no toki, konna chitsujo wa sōzō shite nakatta.",
        "でんしゃのやさしさ。がくせいのとき、こんなちつじょはそうぞうしてなかった。",
        "How kind the trains feel. When I was a student, I never imagined this kind of order.",
      ],
      [
        "Ken",
        "Kodomo no toki, Nihon ni kita koto aru?",
        "こどものとき、にほんにきたことある？",
        "When you were a kid, did you ever come to Japan?",
      ],
      [
        "You",
        "Nai. Hajimete kita no wa ninen mae.",
        "ない。はじめてきたのはにねんまえ。",
        "No. The first time I came was two years ago.",
      ],
      [
        "Ken",
        "Hē.",
        "へえ。",
        "Huh / wow.",
      ],
      [
        "Friend",
        "Un, sore nara daijōbu da ne.",
        "うん、それならだいじょうぶだね。",
        "Yeah, in that case it's fine.",
      ],
    ],
    patterns: [
      {
        chunk: "noun + のとき",
        romaji: "noun + no toki",
        hiragana: "がくせいのとき・こどものとき",
        meaning: "When I was a ___ / during ___",
        whenToUse:
          "Life stages and named periods: がくせい, こども, かいぎ, りょこう.",
        examples: [
          [
            "がくせいのとき",
            "gakusei no toki",
            "When I was a student",
          ],
          [
            "こどものとき",
            "kodomo no toki",
            "When I was a child",
          ],
        ],
      },
      {
        chunk: "verb + とき",
        romaji: "verb + toki",
        hiragana: "きたとき・いくとき",
        meaning: "When (I) ___",
        whenToUse:
          "Dictionary form ≈ when doing / whenever. た form ≈ when (after) that happened. Nuance is a later lesson — start by copying natives.",
        examples: [
          [
            "にほんにきたとき",
            "Nihon ni kita toki",
            "When I came to Japan",
          ],
          [
            "わからないとき、きいて",
            "wakaranai toki, kiite",
            "When you don't understand, ask",
          ],
        ],
      },
      {
        chunk: "〜たら",
        romaji: "~ tara",
        hiragana: "〜たら",
        meaning: "when/if ___ (then…)",
        whenToUse:
          "Sequence and soft conditions in stories and plans.",
        examples: [
          [
            "ついたらでんわして",
            "tsuitara denwa shite",
            "Call when you arrive",
          ],
          [
            "やすかったらがう",
            "yasukattara kau",
            "I'll buy it if it's cheap",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "はじめて〜のは = the first time that...",
        "はじめてきたのはにねんまえ = the first time I came was two years ago. の nominalizes the verb phrase.",
      ],
    ],
    culturalNote: [
      "Train やさしさ is a real first-week story",
      "Visitors often mention quiet cars, ありがとうございます to the driver, and people lining up. When Japanese friends ask びっくりした？ they're inviting a story, not a complaint — とき lets you answer in a scene, not a lecture.",
    ],
    shadowing: [
      ["Nihon ni kita toki...", "にほんにきたとき…"],
      ["Gakusei no toki, sōzō shite nakatta.", "がくせいのとき、そうぞうしてなかった。"],
    ],
    quiz: [
      [
        "がくせいのとき means:",
        [
          "I am a student now",
          "When I was a student",
          "Students are noisy",
          "After I graduate",
        ],
        1,
        "noun + のとき = during that life stage.",
      ],
      [
        "にほんにきたとき is:",
        ["Before coming to Japan", "When I came to Japan", "I will come to Japan", "I hate Japan"],
        1,
        "た + とき frames that past moment.",
      ],
      [
        "ついたらでんわして means:",
        [
          "Call when you arrive",
          "Never call",
          "Call the boss only",
          "Delete the call",
        ],
        0,
        "たら = when/if.",
      ],
    ],
    production: [
      [
        "When I came to Japan, I was surprised",
        "にほんにきたとき + びっくりした",
        "Nihon ni kita toki, bikkuri shita.",
        "にほんにきたとき、びっくりした。",
      ],
      [
        "Call me when you arrive",
        "ついたら + でんわ",
        "Tsuitara denwa shite.",
        "ついたらでんわして。",
      ],
    ],
  },
  {
    id: "sp-12-2",
    unit: 12,
    unitTitle: "Stories & Time",
    order: 2,
    title: "If / When — たら, ば, なら",
    subtitle: "Three doors for hypotheticals and advice",
    scenario:
      "Planning Golden Week over coffee in Kichijoji. たら for what unfolds, ば for tight conditions, なら for 'if that's the case' — natives mix them; you can start clean.",
    durationMin: 26,
    objectives: [
      "Plan with 〜たら",
      "Set a condition with 〜ば",
      "Bounce a suggestion with 〜なら",
    ],
    dialogue: [
      [
        "Mika",
        "Yasumi dattara, doko iku?",
        "やすみだったら、どこいく？",
        "If you had time off, where would you go?",
      ],
      [
        "You",
        "Kyōto. Anata nara, doko?",
        "きょうと。あなたなら、どこ？",
        "Kyoto. If it were you, where?",
      ],
      [
        "Mika",
        "Okane ga areba, Okinawa.",
        "おかねがあれば、おきなわ。",
        "If I had the money, Okinawa.",
      ],
      [
        "You",
        "Yasumi ga toretara, ikō yo.",
        "やすみがとれたら、いこうよ。",
        "If we can get time off, let's go.",
      ],
      [
        "Mika",
        "Ii ne!",
        "いいね！",
        "Nice!",
      ],
      [
        "Boss",
        "Tsugi kara hayaku renraku shite.",
        "つぎからはやくれんらくして。",
        "Contact me sooner next time.",
      ],
    ],
    patterns: [
      {
        chunk: "〜たら / 〜ば",
        romaji: "~ tara / ~ ba",
        hiragana: "〜たら / 〜ば",
        meaning: "If / when ___ (then...)",
        whenToUse:
          "たら is the everyday workhorse for sequences and hypotheticals. ば feels a bit tighter/conditional — あれば, いけば.",
        examples: [
          [
            "やすみがとれたら、いく",
            "yasumi ga toretara, iku",
            "If I can get time off, I'll go",
          ],
          [
            "おかねがあれば、おきなわ",
            "okane ga areba, Okinawa",
            "If I have money, Okinawa",
          ],
        ],
      },
      {
        chunk: "〜なら",
        romaji: "~ nara",
        hiragana: "〜なら",
        meaning: "If that's the case / if it's ___ we're talking about",
        whenToUse:
          "Responds to someone else's topic or choice. きょうとなら、でんしゃがいい = if it's Kyoto (we're discussing), the train is best.",
        examples: [
          [
            "あなたなら、どこ？",
            "anata nara, doko?",
            "If it were you, where?",
          ],
          [
            "あしたなら、だいじょうぶ",
            "ashita nara, daijōbu",
            "If it's tomorrow, I'm fine",
          ],
        ],
      },
      {
        chunk: "〜せいで",
        romaji: "~ sei de",
        hiragana: "〜せいで",
        meaning: "because of ___ (blame nuance)",
        whenToUse:
          "Excuses carefully — often sounds like blaming something.",
        examples: [
          [
            "トラフィックのせいで",
            "torafikku no sei de",
            "Because of traffic",
          ],
          [
            "ねぼうしたせいで",
            "nebō shita sei de",
            "Because I overslept",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "なら looks backward at the other person's words",
        "Someone said a day, a place, a plan — なら takes that as given and comments. たら looks forward: when/if X happens, Y.",
      ],
      [
        "ば with ある is あれば",
        "おかねがあれば. Don't say あったら only — both work, but あれば is the textbook pair you'll hear in 'if I had...'",
      ],
    ],
    culturalNote: [
      "Holiday plans stay たら until tickets exist",
      "いこうよ after とれたら is hopeful, not a booking. Confirm with よやくした later. Japanese friends often keep 行きたいね alive for months — that's bonding, not flakiness.",
    ],
    shadowing: [
      ["Yasumi ga toretara, ikō yo.", "やすみがとれたら、いこうよ。"],
      ["Anata nara, doko?", "あなたなら、どこ？"],
    ],
    quiz: [
      [
        "あなたなら、どこ？ uses なら to mean:",
        [
          "After you go",
          "If it were you / in your case",
          "You must go",
          "Never you",
        ],
        1,
        "なら takes 'you' as the given case.",
      ],
      [
        "おかねがあれば is:",
        ["I have money now", "If I have/had money", "I spent the money", "Money is bad"],
        1,
        "ば marks the condition.",
      ],
      [
        "〜せいで often feels like:",
        [
          "Blaming a cause",
          "Praise",
          "A toast",
          "A greeting",
        ],
        0,
        "せいで = because of (blame nuance).",
      ],
    ],
    production: [
      [
        "If we can get time off, let's go. If it were you, where?",
        "とれたら、いこう + あなたなら、どこ",
        "Yasumi ga toretara, ikō yo. Anata nara, doko?",
        "やすみがとれたら、いこうよ。あなたなら、どこ？",
      ],
      [
        "Because of the traffic…",
        "トラフィック + せいで",
        "Torafikku no sei de…",
        "トラフィックのせいで…",
      ],
    ],
  },
  {
    id: "sp-12-3",
    unit: 12,
    unitTitle: "Stories & Time",
    order: 3,
    title: "Before and After",
    subtitle: "まえに / あとで — sequence you can actually use",
    scenario:
      "A cold night in your apartment. Mika's staying over; there's medicine, a walk, and an umbrella. まえに and あとで keep the order straight.",
    durationMin: 26,
    objectives: [
      "Put an action before another with まえに",
      "Put an action after with たあとで",
      "Use でるまえに for last-second checks",
    ],
    dialogue: [
      [
        "You",
        "Neru mae ni, kusuri o nonde ne.",
        "ねるまえに、くすりをのんでね。",
        "Before you sleep, take your medicine, okay?",
      ],
      [
        "Mika",
        "Un. Tabeta ato de, sanpo shinai?",
        "うん。たべたあとで、さんぽしない？",
        "Okay. After we eat, want to take a walk?",
      ],
      [
        "You",
        "Ii yo. Deru mae ni, kasa o motte.",
        "いいよ。でるまえに、かさをもって。",
        "Sure. Before we go out, grab an umbrella.",
      ],
      [
        "Mika",
        "Ato de renraku suru ne. Haha ni.",
        "あとでれんらくするね。ははに。",
        "I'll get in touch later. With my mom.",
      ],
      [
        "You",
        "Wakatta.",
        "わかった。",
        "Got it.",
      ],
      [
        "You",
        "Ijō desu. Arigatō gozaimashita.",
        "いじょうです。ありがとうございました。",
        "That's all. Thank you.",
      ],
    ],
    patterns: [
      {
        chunk: "る-form + まえに",
        romaji: "dictionary form + mae ni",
        hiragana: "ねるまえに・でるまえに",
        meaning: "Before doing ___",
        whenToUse:
          "The verb before まえに stays in dictionary form even if the whole sentence is past.",
        examples: [
          ["ねるまえに", "neru mae ni", "Before sleeping"],
          [
            "にほんにくるまえに",
            "Nihon ni kuru mae ni",
            "Before coming to Japan",
          ],
        ],
      },
      {
        chunk: "た-form + あとで",
        romaji: "ta-form + ato de",
        hiragana: "たべたあとで・おわったあとで",
        meaning: "After doing ___",
        whenToUse:
          "あとで can also stand alone: あとでね = later. With a verb, use たあとで.",
        examples: [
          ["たべたあとで", "tabeta ato de", "After eating"],
          ["しごとがおわったあとで", "shigoto ga owatta ato de", "After work finishes"],
        ],
      },
      {
        chunk: "ほうこくします",
        romaji: "hōkoku shimasu",
        hiragana: "ほうこくします",
        meaning: "I'll report / this is my report",
        whenToUse:
          "Work updates; keep facts short then ask for questions.",
        examples: [
          [
            "けっかをほうこくします",
            "kekka o hōkoku shimasu",
            "I'll report the results",
          ],
          [
            "いじょうです",
            "ijō desu",
            "That's all (from me)",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "まえに wants the dictionary form — always",
        "Learners say ねたまえに. Natives say ねるまえに. The 'before' verb is not past, even if the story is.",
      ],
    ],
    culturalNote: [
      "あとでね is a real time — or a soft goodbye",
      "Friends say あとでれんらくする and mean tonight. Others mean 'eventually.' If you need a clock, add one: くじごろ. ねるまえにくすり is also how clinics phrase dosing — you'll hear it again at the 薬局.",
    ],
    shadowing: [
      ["Neru mae ni, kusuri o nonde ne.", "ねるまえに、くすりをのんでね。"],
      ["Tabeta ato de, sanpo shinai?", "たべたあとで、さんぽしない？"],
    ],
    quiz: [
      [
        "Correct 'before sleeping':",
        ["ねたまえに", "ねるまえに", "ねてまえ", "ねるあとで"],
        1,
        "Dictionary form + まえに.",
      ],
      [
        "たべたあとで means:",
        ["Before eating", "While eating", "After eating", "Instead of eating"],
        2,
        "た-form + あとで = after doing.",
      ],
      [
        "いじょうです closes:",
        [
          "A report/turn",
          "A restaurant forever",
          "A friendship",
          "A passport",
        ],
        0,
        "いじょうです = that's all.",
      ],
    ],
    production: [
      [
        "Before you sleep, take your medicine. After we eat, let's walk",
        "ねるまえに + たべたあとで",
        "Neru mae ni, kusuri o nonde ne. Tabeta ato de, sanpo shiyō.",
        "ねるまえに、くすりをのんでね。たべたあとで、さんぽしよう。",
      ],
      [
        "That's all from me",
        "いじょうです",
        "Ijō desu.",
        "いじょうです。",
      ],
    ],
  },
  {
    id: "sp-12-4",
    unit: 12,
    unitTitle: "Stories & Time",
    order: 4,
    title: "Once Upon a Time",
    subtitle: "むかしばなし — むかしむかし and story past",
    scenario:
      "Rainy afternoon at a kissaten. Yuki retells つるのおんがえし the way it was told to her — and you need the story-frame phrases Japanese kids still hear.",
    durationMin: 26,
    objectives: [
      "Open with むかしむかし、あるところに",
      "Use 〜がいました for story characters",
      "Recognize classic むかしばなし titles in kana",
    ],
    dialogue: [
      [
        "Yuki",
        "Mukashi mukashi, aru tokoro ni ojīsan to obāsan ga imashita.",
        "むかしむかし、あるところにおじいさんとおばあさんがいました。",
        "Long long ago, in a certain place, there lived an old man and an old woman.",
      ],
      [
        "You",
        "Sono hanashi, shitteru. Momotarō?",
        "そのはなし、しってる。ももたろう？",
        "I know that story. Momotaro?",
      ],
      [
        "Yuki",
        "Chigau yo. Tsuru no ongaeshi.",
        "ちがうよ。つるのおんがえし。",
        "Nope. The Crane's Return of a Favor.",
      ],
      [
        "You",
        "Ā, yasashii hanashi da ne.",
        "ああ、やさしいはなしだね。",
        "Ah — that's a tender story.",
      ],
      [
        "Yuki",
        "Kodomo no koro, yoku kiita yo.",
        "こどものころ、よくきいたよ。",
        "I heard it a lot when I was a kid.",
      ],
      [
        "Grandparent",
        "Sō da yo. Mae wa minna aruita n da.",
        "そうだよ。まえはみんなあるいたんだ。",
        "That's right. Everyone used to walk.",
      ],
    ],
    patterns: [
      {
        chunk: "むかしむかし",
        romaji: "mukashi mukashi",
        hiragana: "むかしむかし",
        meaning: "Long, long ago (story opener)",
        whenToUse:
          "Folktales and joking 'story mode.' Almost always followed by あるところに.",
        examples: [
          [
            "むかしむかし、あるところに",
            "mukashi mukashi, aru tokoro ni",
            "Long ago, in a certain place...",
          ],
          [
            "むかしばなしをきいた",
            "mukashibanashi o kiita",
            "I heard a folktale",
          ],
        ],
      },
      {
        chunk: "〜がいました",
        romaji: "~ ga imashita",
        hiragana: "〜がいました",
        meaning: "There lived ___ (animate story past)",
        whenToUse:
          "People and animals in stories. Places/things use ありました.",
        examples: [
          [
            "おじいさんとおばあさんがいました",
            "ojīsan to obāsan ga imashita",
            "There lived an old man and an old woman",
          ],
          [
            "かわいいつるがいました",
            "kawaii tsuru ga imashita",
            "There was a lovely crane",
          ],
        ],
      },
      {
        chunk: "むかしは〜だった",
        romaji: "mukashi wa ~ datta",
        hiragana: "むかしは〜だった",
        meaning: "Long ago, it was ___",
        whenToUse:
          "Family stories and nostalgia; invite more with それで？",
        examples: [
          [
            "むかしはしずかだった",
            "mukashi wa shizuka datta",
            "It used to be quiet",
          ],
          [
            "こどものころはよくあそんだ",
            "kodomo no koro wa yoku asonda",
            "I played a lot as a kid",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "ころ vs とき",
        "こどものころ = around the period of childhood (fuzzy). こどものとき can be the same, but ころ leans 'in those days.'",
      ],
    ],
    culturalNote: [
      "むかしばなし still shape how adults talk about kindness and greed",
      "つるのおんがえし, ももたろう, かさじぞう — knowing the titles is cultural literacy. People quote them the way English speakers quote fairy tales. 恩返し (returning a kindness) is a living social idea, not just a kids' plot.",
    ],
    shadowing: [
      [
        "Mukashi mukashi, aru tokoro ni ojīsan to obāsan ga imashita.",
        "むかしむかし、あるところにおじいさんとおばあさんがいました。",
      ],
      ["Kodomo no koro, yoku kiita yo.", "こどものころ、よくきいたよ。"],
    ],
    quiz: [
      [
        "むかしむかし opens:",
        ["A business email", "A folktale", "A train announcement", "A hotel check-in"],
        1,
        "It's the 'once upon a time' of Japanese.",
      ],
      [
        "つるのおんがえし is about:",
        [
          "A peach boy fighting oni",
          "A crane returning a kindness",
          "A delayed train",
          "A spicy ramen",
        ],
        1,
        "恩返し = returning a favor.",
      ],
      [
        "むかしは〜だった talks about:",
        [
          "The past",
          "Only tomorrow",
          "Math homework",
          "Wi-Fi passwords",
        ],
        0,
        "むかし = long ago.",
      ],
    ],
    production: [
      [
        "Long long ago, there lived an old man and an old woman",
        "むかしむかし、あるところに + がいました",
        "Mukashi mukashi, aru tokoro ni ojīsan to obāsan ga imashita.",
        "むかしむかし、あるところにおじいさんとおばあさんがいました。",
      ],
      [
        "It used to be quiet around here",
        "むかしは + しずか",
        "Mukashi wa shizuka datta.",
        "むかしはしずかだった。",
      ],
    ],
  },
  {
    id: "sp-12-5",
    unit: 12,
    unitTitle: "Stories & Time",
    order: 5,
    title: "The Excuse, Then the Fix",
    subtitle: "いいわけ — じつは, てしまって, then what you'll do",
    scenario:
      "Yesterday's deadline slipped. Tanaka-san asks what happened. A Japanese いいわけ that survives is apology + one cause + a future fix — not a novel.",
    durationMin: 26,
    objectives: [
      "Open the real reason with じつは",
      "Use てしまって for regretful cause",
      "Close with つぎからは〜します",
    ],
    dialogue: [
      [
        "Tanaka",
        "Kinō no shimekiri, dō narimashita ka?",
        "きのうのしめきり、どうなりましたか？",
        "What happened with yesterday's deadline?",
      ],
      [
        "You",
        "Sumimasen. Jitsu wa, pasokon ga kowarete shimatte...",
        "すみません。じつは、パソコンがこわれてしまって…",
        "I'm sorry. The truth is, my computer broke, and...",
      ],
      [
        "Tanaka",
        "Renraku wa?",
        "れんらくは？",
        "And contacting me?",
      ],
      [
        "You",
        "Okurete shimatte, mōshiwake arimasen. Tsugi kara wa sugu renraku shimasu.",
        "おくれてしまって、もうしわけありません。つぎからはすぐれんらくします。",
        "I ended up being late to tell you — I'm very sorry. From now on I'll contact you right away.",
      ],
      [
        "Tanaka",
        "Wakatta. Kondo wa hayaku itte ne.",
        "わかった。こんどははやくいってね。",
        "All right. Next time, say so early.",
      ],
      [
        "Friend",
        "Jā, ato de kuwashiku kiite ii?",
        "じゃあ、あとでくわしくきいていい？",
        "Can I ask for details later?",
      ],
    ],
    patterns: [
      {
        chunk: "じつは〜",
        romaji: "jitsu wa ~",
        hiragana: "じつは〜",
        meaning: "The truth is... / actually...",
        whenToUse:
          "Reveal the real cause after すみません. Don't start the whole meeting with じつは.",
        examples: [
          [
            "じつは、パソコンがこわれて",
            "jitsu wa, pasokon ga kowarete",
            "The truth is, the computer broke...",
          ],
          [
            "じつは、わすれていました",
            "jitsu wa, wasurete imashita",
            "The truth is, I had forgotten",
          ],
        ],
      },
      {
        chunk: "〜てしまって",
        romaji: "~ te shimatte",
        hiragana: "〜てしまって",
        meaning: "I ended up ___ (and that's why...) — regret",
        whenToUse:
          "Cause clause of an excuse. Then stop and apologize; don't stack three てしまってs.",
        examples: [
          [
            "こわれてしまって",
            "kowarete shimatte",
            "It broke (unfortunately), and...",
          ],
          [
            "わすれてしまって、すみません",
            "wasurete shimatte, sumimasen",
            "I went and forgot — sorry",
          ],
        ],
      },
      {
        chunk: "あとで",
        romaji: "ato de",
        hiragana: "あとで",
        meaning: "later / afterwards",
        whenToUse:
          "Defer a story or task without refusing it.",
        examples: [
          [
            "あとではなすね",
            "ato de hanasu ne",
            "I'll tell you later",
          ],
          [
            "あとでいい？",
            "ato de ii?",
            "Later OK?",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "どうなりましたか asks for the outcome, not your feelings",
        "Answer with status + cause + next action. たいちょうがわるくて alone is incomplete if the file still isn't there.",
      ],
    ],
    culturalNote: [
      "The missed れんらく is often worse than the missed deadline",
      "Japanese managers can absorb a delay they heard about at 16:00. Silence until the next morning reads as hiding. A good いいわけ owns both: the event and the late message. Then つぎからは — and actually do it.",
    ],
    shadowing: [
      ["Jitsu wa, pasokon ga kowarete shimatte...", "じつは、パソコンがこわれてしまって…"],
      [
        "Tsugi kara wa sugu renraku shimasu.",
        "つぎからはすぐれんらくします。",
      ],
    ],
    quiz: [
      [
        "じつは is used to:",
        [
          "Greet the room",
          "Introduce the real reason",
          "Order coffee",
          "End a folktale",
        ],
        1,
        "実は = the truth is.",
      ],
      [
        "After an excuse, the repair line is:",
        [
          "あなたのせいです",
          "つぎからはすぐれんらくします",
          "しりません",
          "おつかれさまでした",
        ],
        1,
        "Promise the behavior change.",
      ],
      [
        "あとで means:",
        [
          "Later",
          "Never",
          "Yesterday only",
          "Underground",
        ],
        0,
        "あとで = later.",
      ],
    ],
    production: [
      [
        "I'm sorry. The truth is, my computer broke... From now on I'll contact you right away",
        "じつは + こわれてしまって + つぎからはすぐれんらくします",
        "Sumimasen. Jitsu wa, pasokon ga kowarete shimatte... Tsugi kara wa sugu renraku shimasu.",
        "すみません。じつは、パソコンがこわれてしまって…つぎからはすぐれんらくします。",
      ],
      [
        "I'll tell you later",
        "あとで + はなす",
        "Ato de hanasu ne.",
        "あとではなすね。",
      ],
    ],
  },
  {
    id: "sp-12-6",
    unit: 12,
    unitTitle: "Stories & Time",
    order: 6,
    title: "Reporting Back Cleanly",
    subtitle: "ほうこく — done, no problems, where the file lives",
    scenario:
      "Friday 17:40. Tanaka-san wants a close-of-week ほうこく, not a memoir. Status, issues, artifacts — then stop talking so they can go home.",
    durationMin: 26,
    objectives: [
      "Open with ほうこくがあります",
      "Mark completion: かんりょうしました",
      "Clear issues: もんだいはありませんでした",
    ],
    dialogue: [
      [
        "You",
        "Hōkoku ga arimasu. Ken wa sakujitsu kanryō shimashita.",
        "ほうこくがあります。けんはさくじつかんりょうしました。",
        "I have a report. The matter was completed yesterday.",
      ],
      [
        "Tanaka",
        "Mondai wa arimashita ka?",
        "もんだいはありましたか？",
        "Were there any problems?",
      ],
      [
        "You",
        "Toku ni arimasen deshita. Shiryō mo foruda ni iremashita.",
        "とくにありませんでした。しりょうもフォルダにいれました。",
        "Nothing in particular. I also put the materials in the folder.",
      ],
      [
        "Tanaka",
        "Arigatō. Yoku dekiteru ne.",
        "ありがとう。よくできてるね。",
        "Thanks. It's looking well done.",
      ],
      [
        "You",
        "Hoka ni nani ka areba, itte kudasai.",
        "ほかになにかあれば、いってください。",
        "If there's anything else, please say so.",
      ],
      [
        "You",
        "Un, mata tsuzukeru ne.",
        "うん、またつづけるね。",
        "Yeah, I'll continue later.",
      ],
    ],
    patterns: [
      {
        chunk: "ほうこくがあります",
        romaji: "hōkoku ga arimasu",
        hiragana: "ほうこくがあります",
        meaning: "I have a report (to give)",
        whenToUse:
          "Standup, Slack huddle, grabbing a manager. Names the speech act so they switch into listening mode.",
        examples: [
          [
            "ほうこくがあります",
            "hōkoku ga arimasu",
            "I have a report",
          ],
          [
            "みじかくほうこくします",
            "mijikaku hōkoku shimasu",
            "I'll report briefly",
          ],
        ],
      },
      {
        chunk: "かんりょうしました / もんだいはありませんでした",
        romaji: "kanryō shimashita / mondai wa arimasen deshita",
        hiragana: "かんりょうしました / もんだいはありませんでした",
        meaning: "It's completed / there were no problems",
        whenToUse:
          "The two sentences managers actually need. If there WAS a problem, say it next — don't hide it in とくに.",
        examples: [
          [
            "さくじつかんりょうしました",
            "sakujitsu kanryō shimashita",
            "It was completed yesterday",
          ],
          [
            "もんだいはありませんでした",
            "mondai wa arimasen deshita",
            "There were no problems",
          ],
        ],
      },
      {
        chunk: "つづく / つづける",
        romaji: "tsuzuku / tsuzukeru",
        hiragana: "つづく / つづける",
        meaning: "to continue",
        whenToUse:
          "Cliffhanger stories; promise the rest.",
        examples: [
          [
            "つづきはまたあとで",
            "tsuzuki wa mata ato de",
            "The rest later",
          ],
          [
            "はなしのつづき",
            "hanashi no tsuzuki",
            "the rest of the story",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "さくじつ vs きのう",
        "さくじつ is the workplace/formal 'yesterday.' きのう is fine with teammates; さくじつ shines in ほうこく.",
      ],
    ],
    culturalNote: [
      "A good ほうこく is short enough to survive 17:41",
      "Japanese teams hate mystery: is it done, is it blocked, where is the file? Three clean sentences beat a humble まだまだです that hides a finished task. Close with ほかになにかあれば so the manager can dismiss you.",
    ],
    shadowing: [
      [
        "Hōkoku ga arimasu. Ken wa sakujitsu kanryō shimashita.",
        "ほうこくがあります。けんはさくじつかんりょうしました。",
      ],
      ["Mondai wa arimasen deshita.", "もんだいはありませんでした。"],
    ],
    quiz: [
      [
        "ほうこくがあります announces:",
        [
          "You're leaving first",
          "You're about to give a status report",
          "You're sick",
          "You want a raise right now",
        ],
        1,
        "報告 = report.",
      ],
      [
        "かんりょうしました means:",
        ["I started", "It's completed", "I forgot", "I disagree"],
        1,
        "完了 = completion.",
      ],
      [
        "つづきはまたあとで means:",
        [
          "The rest later",
          "Start over now",
          "Cancel forever",
          "Pay double",
        ],
        0,
        "つづき = continuation.",
      ],
    ],
    production: [
      [
        "I have a report. It was completed yesterday. There were no problems",
        "ほうこくがあります + かんりょうしました + もんだいはありませんでした",
        "Hōkoku ga arimasu. Sakujitsu kanryō shimashita. Mondai wa arimasen deshita.",
        "ほうこくがあります。さくじつかんりょうしました。もんだいはありませんでした。",
      ],
      [
        "I'll continue the story later",
        "つづき + あとで",
        "Tsuzuki wa mata ato de.",
        "つづきはまたあとで。",
      ],
    ],
  },
];

export const speakingLessons712 = compact.map(expandSpeaking);
