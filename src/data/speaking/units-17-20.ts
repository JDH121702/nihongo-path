import { expandSpeaking, type CompactSpeaking } from "./builder";

const compact: CompactSpeaking[] = [
  {
    id: "sp-17-1",
    unit: 17,
    unitTitle: "Debate & Persuasion",
    order: 1,
    title: "たしかに — いったんみとめる",
    subtitle: "Concede the point before you push back",
    scenario:
      "In a team debate about shipping a feature this week, you practice yielding one fact so your counter lands softer.",
    durationMin: 32,
    objectives: [
      "Open agreement with たしかに before disagreeing",
      "Pair たしかに with a short restatement of their point",
      "Pivot with でも / ただ without sounding like a fight",
      "Keep pitch calm so concession does not sound sarcastic",
      "Close the turn with one clear alternative",
    ],
    dialogue: [
      [
        "Alex",
        "Konshū shūryō shinai to, shijō ni okuremasen ka?",
        "こんしゅうしゅうりょうしないと、しじょうにおくれませんか？",
        "If we don't finish this week, won't we fall behind the market?",
      ],
      [
        "You",
        "Tashika ni, hayasa wa daiji desu.",
        "たしかに、はやさはだいじです。",
        "Certainly, speed matters.",
      ],
      [
        "Alex",
        "Desu yo ne. Jā konshū de ikimashō.",
        "ですよね。じゃあこんしゅうでいきましょう。",
        "Right? So let's go this week.",
      ],
      [
        "You",
        "Tada, tesuto ga mada tarimasen.",
        "ただ、テストがまだたりません。",
        "That said, testing still isn't enough.",
      ],
      [
        "Alex",
        "Demo kyaku wa matte imasu yo.",
        "でもきゃくはまっていますよ。",
        "But customers are waiting.",
      ],
      [
        "You",
        "Tashika ni sō desu. Demo koshō ga detara, motto okuremasu.",
        "たしかにそうです。でもこしょうがでたら、もっとおくれます。",
        "You're right about that. But if bugs appear, we'll fall further behind.",
      ],
      [
        "Mentor",
        "Ii ne. 'Tashika ni' de ukete kara, 'demo' de hanten shite iru.",
        "いいね。「たしかに」でうけてから、「でも」ではんてんしている。",
        "Nice. You receive with tashika ni, then flip with demo.",
      ],
      [
        "You",
        "Ja, shū matsu made ni MVP dake dashite, tsugi de kansei, dō desu ka?",
        "じゃ、しゅうまつまでにMVPだけだして、つぎでかんせい、どうですか？",
        "Then how about shipping only the MVP by weekend, and finishing next?",
      ],
      [
        "Alex",
        "Sore nara, rikai dekimasu.",
        "それなら、りかいできます。",
        "That I can accept.",
      ],
      [
        "Mentor",
        "Mitomeru, hanten, teian. Kore ga giron no kihon desu.",
        "みとめる、はんてん、ていあん。これがぎろんのきほんです。",
        "Concede, flip, propose. That's debate basics.",
      ],
    ],
    patterns: [
      {
        chunk: "たしかに",
        romaji: "tashika ni",
        hiragana: "たしかに",
        meaning: "Certainly / that's true (concede)",
        whenToUse:
          "Before a soft pushback. Marks that you heard them and accept part of their claim.",
        examples: [
          [
            "たしかに、そのとおりです",
            "tashika ni, sono tōri desu",
            "Certainly, that's exactly right.",
          ],
          [
            "たしかにやすいです。でもながもちしません",
            "tashika ni yasui desu. Demo nagamochi shimasen",
            "It is cheap, yes. But it won't last.",
          ],
          [
            "たしかにいそがしいですよね",
            "tashika ni isogashii desu yo ne",
            "You really are busy, aren't you.",
          ],
        ],
      },
      {
        chunk: "たしかに〜。ただ〜",
        romaji: "tashika ni ~. Tada ~",
        hiragana: "たしかに〜。ただ〜",
        meaning: "True… however…",
        whenToUse:
          "ただ is softer than でも in meetings. Use after conceding one fact.",
        examples: [
          [
            "たしかにひつようです。ただじかんがたりません",
            "tashika ni hitsuyō desu. Tada jikan ga tarimasen",
            "It is necessary. However, we don't have time.",
          ],
          [
            "たしかにきれいです。ただねだんがたかいです",
            "tashika ni kirei desu. Tada nedan ga takai desu",
            "It is beautiful. That said, the price is high.",
          ],
          [
            "たしかにべんりです。ただしゅうかんがいります",
            "tashika ni benri desu. Tada shūkan ga irimasu",
            "It's convenient. Still, it takes getting used to.",
          ],
        ],
      },
      {
        chunk: "たしかにそうですが",
        romaji: "tashika ni sō desu ga",
        hiragana: "たしかにそうですが",
        meaning: "That's true, but…",
        whenToUse:
          "Compact concede-plus-pivot in one breath. Common in polite debate.",
        examples: [
          [
            "たしかにそうですが、リスクもあります",
            "tashika ni sō desu ga, risuku mo arimasu",
            "That's true, but there are also risks.",
          ],
          [
            "たしかにそうですが、べつのほうほうもあります",
            "tashika ni sō desu ga, betsu no hōhō mo arimasu",
            "That's true, but there's another way too.",
          ],
          [
            "たしかにそうですが、きゃくのいけんもききたいです",
            "tashika ni sō desu ga, kyaku no iken mo kikitai desu",
            "That's true, but I'd also like to hear the customer's view.",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "Concede before you counter",
        "Japanese disagreement often starts with alignment. Jumping straight to でも sounds blunt. たしかに buys goodwill so your でも / ただ can land.",
      ],
      [
        "ただ vs でも",
        "でも is fine among peers. ただ softens the pivot in meetings and with seniors. Same logic, lower heat.",
      ],
      [
        "Restate briefly",
        "たしかに plus an echo of their keyword proves you listened. Empty たしかに feels like a stall.",
      ],
    ],
    culturalNote: [
      "Agreement is a bridge, not surrender",
      "In Japanese debate, conceding a slice of the other person's point is expected courtesy, not weakness. Teams often wait for that たしかに before they will entertain your alternative.",
    ],
    shadowing: [
      [
        "Tashika ni, hayasa wa daiji desu.",
        "たしかに、はやさはだいじです。",
      ],
      [
        "Tashika ni sō desu. Demo koshō ga detara, motto okuremasu.",
        "たしかにそうです。でもこしょうがでたら、もっとおくれます。",
      ],
      [
        "Tashika ni hitsuyō desu. Tada jikan ga tarimasen.",
        "たしかにひつようです。ただじかんがたりません。",
      ],
      [
        "Tashika ni sō desu ga, risuku mo arimasu.",
        "たしかにそうですが、リスクもあります。",
      ],
      [
        "Mitomeru, hanten, teian.",
        "みとめる、はんてん、ていあん。",
      ],
      [
        "Tada, tesuto ga mada tarimasen.",
        "ただ、テストがまだたりません。",
      ],
    ],
    quiz: [
      [
        "Best soft open before disagreeing:",
        [
          "ぜったいちがう",
          "たしかに",
          "うるさい",
          "しらん",
        ],
        1,
        "たしかに concedes before the counter.",
      ],
      [
        "Softer pivot than でも in a meeting:",
        [
          "ばか",
          "ただ",
          "うるさい",
          "やめろ",
        ],
        1,
        "ただ lowers the temperature.",
      ],
      [
        "たしかにそうですが continues with:",
        [
          "pure agreement only",
          "a contrasting point",
          "goodbye",
          "an apology only",
        ],
        1,
        "が sets up the flip.",
      ],
      [
        "Empty たしかに without echoing their point can sound:",
        [
          "extra polite",
          "like you didn't listen",
          "formal keigo",
          "dialect",
        ],
        1,
        "Restate a keyword so the concede feels real.",
      ],
    ],
    production: [
      [
        "Certainly, speed matters.",
        "たしかに + はやさはだいじです",
        "Tashika ni, hayasa wa daiji desu.",
        "たしかに、はやさはだいじです。",
      ],
      [
        "That's true, but there are also risks.",
        "たしかにそうですが + リスクもあります",
        "Tashika ni sō desu ga, risuku mo arimasu.",
        "たしかにそうですが、リスクもあります。",
      ],
      [
        "It is necessary. However, we don't have time.",
        "たしかにひつようです。ただ〜",
        "Tashika ni hitsuyō desu. Tada jikan ga tarimasen.",
        "たしかにひつようです。ただじかんがたりません。",
      ],
    ],
  },
  {
    id: "sp-17-2",
    unit: 17,
    unitTitle: "Debate & Persuasion",
    order: 2,
    title: "とはいえ — それでも",
    subtitle: "Acknowledge the truth, then hold your line",
    scenario:
      "A friend argues that remote work is always better. You grant the upside, then keep a nuanced stance with とはいえ.",
    durationMin: 34,
    objectives: [
      "Use とはいえ after accepting a premise",
      "Contrast benefit vs cost in one turn",
      "Keep とはいえ for thoughtful pushback, not sarcasm",
      "Combine with たしかに for a full concede-to-nevertheless arc",
      "Offer a balanced third option after とはいえ",
    ],
    dialogue: [
      [
        "Friend",
        "Rimōto nara, tsūkin mo nai shi, saikō janai?",
        "リモートなら、つうきんもないし、さいこうじゃない？",
        "With remote work there's no commute — isn't that the best?",
      ],
      [
        "You",
        "Tashika ni, jikan wa mamoreru.",
        "たしかに、じかんはまもれる。",
        "True, you do protect your time.",
      ],
      [
        "Friend",
        "Yappari! Zen'in rimōto ni shiyō yo.",
        "やっぱり！ぜんいんリモートにしようよ。",
        "See! Let's make everyone remote.",
      ],
      [
        "You",
        "To wa ie, kaiwa ga heru n da yo ne.",
        "とはいえ、かいわがへるんだよね。",
        "Even so, conversation drops off, right?",
      ],
      [
        "Friend",
        "Chat de tariru n ja nai?",
        "チャットでたりるんじゃない？",
        "Isn't chat enough?",
      ],
      [
        "You",
        "To wa ie, muzukashii sōdan wa kao ga ii.",
        "とはいえ、むずかしいそうだんはかおがいい。",
        "Still, hard discussions are better face-to-face.",
      ],
      [
        "Friend",
        "Un, sore wa wakaru.",
        "うん、それはわかる。",
        "Yeah, that I get.",
      ],
      [
        "You",
        "Dakara, isshūkan ni ikkai wa ofisu, toka dō?",
        "だから、いっしゅうかんにいっかいはオフィス、とかどう？",
        "So how about once a week in the office?",
      ],
      [
        "Friend",
        "Ā, baransu ne. Ari da wa.",
        "ああ、バランスね。ありだわ。",
        "Ah, balance. That works.",
      ],
      [
        "You",
        "Mitomeru. To wa ie. Teian. Kore de yawarakai.",
        "みとめる。とはいえ。ていあん。これでやわらかい。",
        "Concede. Nevertheless. Propose. Soft that way.",
      ],
    ],
    patterns: [
      {
        chunk: "とはいえ",
        romaji: "to wa ie",
        hiragana: "とはいえ",
        meaning: "Even so / that said / nevertheless",
        whenToUse:
          "After granting a truth. Stronger reflective flip than plain でも.",
        examples: [
          [
            "やすいとはいえ、しつがわるい",
            "yasui to wa ie, shitsu ga warui",
            "Even if it's cheap, the quality is bad.",
          ],
          [
            "いそがしいとはいえ、ねむりはひつようだ",
            "isogashii to wa ie, nemuri wa hitsuyō da",
            "Busy though you are, sleep is still necessary.",
          ],
          [
            "べんりとはいえ、きけんもある",
            "benri to wa ie, kiken mo aru",
            "Convenient as it is, there are dangers too.",
          ],
        ],
      },
      {
        chunk: "たしかに〜。とはいえ〜",
        romaji: "tashika ni ~. To wa ie ~",
        hiragana: "たしかに〜。とはいえ〜",
        meaning: "True… Even so…",
        whenToUse:
          "Full arc for nuanced opinions with friends or teammates.",
        examples: [
          [
            "たしかにたのしい。とはいえ、まいにちはつかれる",
            "tashika ni tanoshii. To wa ie, mainichi wa tsukareru",
            "It is fun. Even so, every day would be tiring.",
          ],
          [
            "たしかにやすい。とはいえ、なおしにくい",
            "tashika ni yasui. To wa ie, naoshi nikui",
            "It is cheap. Still, it's hard to repair.",
          ],
          [
            "たしかにはやい。とはいえ、まちがいやすい",
            "tashika ni hayai. To wa ie, machigai yasui",
            "It is fast. Even so, it's easy to make mistakes.",
          ],
        ],
      },
      {
        chunk: "〜とはいえ、〜べきだ",
        romaji: "~ to wa ie, ~ beki da",
        hiragana: "〜とはいえ、〜べきだ",
        meaning: "Even so, one should…",
        whenToUse:
          "When stating a principle after acknowledging pressure or an exception.",
        examples: [
          [
            "いそがしいとはいえ、かくにんすべきだ",
            "isogashii to wa ie, kakunin subeki da",
            "Busy as we are, we should still check.",
          ],
          [
            "やすいとはいえ、けいやくをよむべきだ",
            "yasui to wa ie, keiyaku o yomu beki da",
            "Cheap or not, you should read the contract.",
          ],
          [
            "なかがいいとはいえ、へんじはすべきだ",
            "naka ga ii to wa ie, henji wa subeki da",
            "Close friends or not, you should still reply.",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "とはいえ = 'saying that…'",
        "Literally 'even saying that.' You admit the previous claim stands, then add a limiting truth.",
      ],
      [
        "Register",
        "Fine in thoughtful conversation and writing. In very casual chat, それでも / でも also work; とはいえ sounds slightly more reflective.",
      ],
    ],
    culturalNote: [
      "Nuance beats victory",
      "Japanese persuasion often aims for a shared middle, not a knockout. とはいえ signals you're refining the picture together rather than defeating the other person.",
    ],
    shadowing: [
      [
        "To wa ie, kaiwa ga heru n da yo ne.",
        "とはいえ、かいわがへるんだよね。",
      ],
      [
        "Yasui to wa ie, shitsu ga warui.",
        "やすいとはいえ、しつがわるい。",
      ],
      [
        "Tashika ni tanoshii. To wa ie, mainichi wa tsukareru.",
        "たしかにたのしい。とはいえ、まいにちはつかれる。",
      ],
      [
        "Isogashii to wa ie, kakunin subeki da.",
        "いそがしいとはいえ、かくにんすべきだ。",
      ],
      [
        "To wa ie, muzukashii sōdan wa kao ga ii.",
        "とはいえ、むずかしいそうだんはかおがいい。",
      ],
      [
        "Mitomeru. To wa ie. Teian.",
        "みとめる。とはいえ。ていあん。",
      ],
    ],
    quiz: [
      [
        "とはいえ most closely means:",
        [
          "absolutely not",
          "even so / nevertheless",
          "please",
          "congratulations",
        ],
        1,
        "It concedes then limits.",
      ],
      [
        "Best pair before とはいえ:",
        [
          "うるさい",
          "たしかに",
          "バイバイ",
          "ただいま",
        ],
        1,
        "Concede first, then nevertheless.",
      ],
      [
        "やすいとはいえ、しつがわるい means:",
        [
          "Cheap and high quality",
          "Cheap, yet quality is bad",
          "Expensive but good",
          "Free forever",
        ],
        1,
        "Concession plus downside.",
      ],
      [
        "とはいえ is best for:",
        [
          "sarcastic shutdowns",
          "nuanced pushback",
          "ordering ramen",
          "airport security",
        ],
        1,
        "Reflective contrast.",
      ],
    ],
    production: [
      [
        "Even so, conversation drops off.",
        "とはいえ + かいわがへる",
        "To wa ie, kaiwa ga heru n da yo ne.",
        "とはいえ、かいわがへるんだよね。",
      ],
      [
        "Even if it's cheap, the quality is bad.",
        "やすいとはいえ + しつがわるい",
        "Yasui to wa ie, shitsu ga warui.",
        "やすいとはいえ、しつがわるい。",
      ],
      [
        "Busy as we are, we should still check.",
        "いそがしいとはいえ + かくにんすべきだ",
        "Isogashii to wa ie, kakunin subeki da.",
        "いそがしいとはいえ、かくにんすべきだ。",
      ],
    ],
  },
  {
    id: "sp-17-3",
    unit: 17,
    unitTitle: "Debate & Persuasion",
    order: 3,
    title: "むしろ — いっそこっち",
    subtitle: "Steer the argument toward a stronger alternative",
    scenario:
      "Choosing a lunch spot, your coworker clings to the usual chain. You reframe with むしろ toward a quieter place.",
    durationMin: 33,
    objectives: [
      "Use むしろ to redirect preference, not just negate",
      "Pair むしろ with a clearer benefit",
      "Avoid sounding dismissive when flipping options",
      "Practice むしろ〜ほうがいい for soft recommendations",
      "Hear むしろ as 'if anything' in native replies",
    ],
    dialogue: [
      [
        "Coworker",
        "Kyō mo itsumo no mise de ii yo ne?",
        "きょうもいつものみせでいいよね？",
        "The usual place again today is fine, right?",
      ],
      [
        "You",
        "Mā… demo kyō wa komu n ja nai?",
        "まあ…でもきょうはこむんじゃない？",
        "Well… but won't it be crowded today?",
      ],
      [
        "Coworker",
        "Demo chikai shi.",
        "でもちかいし。",
        "But it's close.",
      ],
      [
        "You",
        "Mushiro, sukoshi aruite shizuka na mise no hō ga yoku nai?",
        "むしろ、すこしあるいてしずかなみせのほうがよくない？",
        "Rather, wouldn't a quieter place a short walk away be better?",
      ],
      [
        "Coworker",
        "Shizuka na no ga ii no?",
        "しずかなのがいいの？",
        "You want quiet?",
      ],
      [
        "You",
        "Un. Kyō wa hanashi mo aru shi, mushiro soko no hō ga shūchū dekiru.",
        "うん。きょうははなしもあるし、むしろそこのほうがしゅうちゅうできる。",
        "Yeah. We have things to discuss, so if anything that'll help us focus.",
      ],
      [
        "Coworker",
        "Naruhodo. Jā soko ni shiyō ka.",
        "なるほど。じゃあそこにしようか。",
        "Got it. Let's do that then.",
      ],
      [
        "You",
        "Arigatō. Chikai yori, hanaseru basho — mushiro kocchi.",
        "ありがとう。ちかいより、はなせるばしょ — むしろこっち。",
        "Thanks. Rather than close, a place we can talk — this way.",
      ],
      [
        "Mentor",
        "Mushiro wa 'no' ja naku, yori tsuyoi sentakushi o dasu.",
        "むしろは「ノー」じゃなく、よりつよいせんたくしをだす。",
        "Mushiro isn't a flat no — it offers a stronger option.",
      ],
      [
        "You",
        "Hai. Hitei yori, hōkō tenkan desu ne.",
        "はい。ひていより、ほうこうてんかんですね。",
        "Right. More redirection than negation.",
      ],
    ],
    patterns: [
      {
        chunk: "むしろ",
        romaji: "mushiro",
        hiragana: "むしろ",
        meaning: "Rather / if anything / instead",
        whenToUse:
          "When flipping to a preferred alternative after weak agreement or mild doubt.",
        examples: [
          [
            "むしろあるいたほうがはやい",
            "mushiro aruita hō ga hayai",
            "It would actually be faster to walk.",
          ],
          [
            "むしろかんたんなほうをえらびたい",
            "mushiro kantan na hō o erabitai",
            "I'd rather choose the simple one.",
          ],
          [
            "むしろきみのいけんをききたい",
            "mushiro kimi no iken o kikitai",
            "I'd rather hear your opinion.",
          ],
        ],
      },
      {
        chunk: "むしろ〜ほうがいい",
        romaji: "mushiro ~ hō ga ii",
        hiragana: "むしろ〜ほうがいい",
        meaning: "It would be better to… instead",
        whenToUse:
          "Soft recommendation that reframes the default plan.",
        examples: [
          [
            "むしろあしたのほうがいい",
            "mushiro ashita no hō ga ii",
            "Rather, tomorrow would be better.",
          ],
          [
            "むしろメールのほうがあんしん",
            "mushiro mēru no hō ga anshin",
            "Email would actually feel safer.",
          ],
          [
            "むしろやすむほうがいいよ",
            "mushiro yasumu hō ga ii yo",
            "You'd honestly be better off resting.",
          ],
        ],
      },
      {
        chunk: "AよりむしろB",
        romaji: "A yori mushiro B",
        hiragana: "AよりむしろB",
        meaning: "Not A so much as B / rather B than A",
        whenToUse:
          "Clear contrast between two options when persuading.",
        examples: [
          [
            "やすいよりむしろあんぜんなほう",
            "yasui yori mushiro anzen na hō",
            "Rather than cheap, the safe option.",
          ],
          [
            "はやいよりむしろたしかなほう",
            "hayai yori mushiro tashika na hō",
            "Rather than fast, the reliable one.",
          ],
          [
            "かたいよりむしろやわらかいはなし",
            "katai yori mushiro yawarakai hanashi",
            "Rather than a stiff talk, a soft conversation.",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "Redirect, don't erase",
        "むしろ keeps the conversation collaborative. You aren't saying their idea is stupid — you're ranking another higher.",
      ],
      [
        "If anything",
        "In reactions, むしろ can mean 'if anything (the opposite)': むしろたのしかった — if anything, it was fun.",
      ],
      [
        "Tone",
        "Said flatly it can sound cold. Soften with んじゃない？ / ほうがよくない？",
      ],
    ],
    culturalNote: [
      "Better options over blunt nos",
      "Persuasion in Japanese workplaces often wins by offering a superior path, not by shooting down the first idea. むしろ packages that move as helpful reframing.",
    ],
    shadowing: [
      [
        "Mushiro, sukoshi aruite shizuka na mise no hō ga yoku nai?",
        "むしろ、すこしあるいてしずかなみせのほうがよくない？",
      ],
      [
        "Mushiro aruita hō ga hayai.",
        "むしろあるいたほうがはやい。",
      ],
      [
        "Mushiro ashita no hō ga ii.",
        "むしろあしたのほうがいい。",
      ],
      [
        "Yasui yori mushiro anzen na hō.",
        "やすいよりむしろあんぜんなほう。",
      ],
      [
        "Mushiro kimi no iken o kikitai.",
        "むしろきみのいけんをききたい。",
      ],
      [
        "Hitei yori, hōkō tenkan.",
        "ひていより、ほうこうてんかん。",
      ],
    ],
    quiz: [
      [
        "むしろ primarily does what in debate?",
        [
          "Apologizes",
          "Redirects to a stronger option",
          "Ends the meeting",
          "Orders food",
        ],
        1,
        "It reframes toward an alternative.",
      ],
      [
        "むしろあしたのほうがいい means:",
        [
          "Yesterday was better",
          "Tomorrow would rather be better",
          "Never tomorrow",
          "Always today",
        ],
        1,
        "Recommendation via mushiro.",
      ],
      [
        "AよりむしろB contrasts:",
        [
          "two times of day only",
          "A against preferred B",
          "keigo levels",
          "train lines only",
        ],
        1,
        "Rather B than A.",
      ],
      [
        "Blunt むしろ without softening can sound:",
        [
          "extra cute",
          "cold or dismissive",
          "like keigo",
          "like singing",
        ],
        1,
        "Add んじゃない？ etc.",
      ],
    ],
    production: [
      [
        "Rather, wouldn't a quieter place be better?",
        "むしろ + しずかなみせのほうがよくない",
        "Mushiro, shizuka na mise no hō ga yoku nai?",
        "むしろ、しずかなみせのほうがよくない？",
      ],
      [
        "I'd rather choose the simple one.",
        "むしろ + かんたんなほうをえらびたい",
        "Mushiro kantan na hō o erabitai.",
        "むしろかんたんなほうをえらびたい。",
      ],
      [
        "Rather than cheap, the safe option.",
        "やすいよりむしろ + あんぜん",
        "Yasui yori mushiro anzen na hō.",
        "やすいよりむしろあんぜんなほう。",
      ],
    ],
  },
  {
    id: "sp-17-4",
    unit: 17,
    unitTitle: "Debate & Persuasion",
    order: 4,
    title: "〜ざるをえない — しかない",
    subtitle: "Admit necessity without sounding eager",
    scenario:
      "Budget cuts force a tough call. You explain why the team has no choice but to delay the launch — firmly, not dramatically.",
    durationMin: 36,
    objectives: [
      "Form 〜ざるをえない from verb stems (する→せざるをえない)",
      "Use it for reluctant necessity, not casual preference",
      "Pair with reasons so it doesn't sound fatalistic",
      "Contrast with softer しかない / なければならない",
      "Keep register meeting-appropriate",
    ],
    dialogue: [
      [
        "Manager",
        "Hatchū wa yotei dōri desu ka?",
        "はっちゅうはよていどおりですか？",
        "Is the launch still on schedule?",
      ],
      [
        "You",
        "…Sumimasen. Enki sezaru o enai to omoimasu.",
        "…すみません。えんきせざるをえないとおもいます。",
        "I'm sorry. I think we have no choice but to postpone.",
      ],
      [
        "Manager",
        "Hajimete no hōkoku desu ne. Riyū wa?",
        "はじめてのほうこくですね。りゆうは？",
        "First I'm hearing this. Reason?",
      ],
      [
        "You",
        "Yosan ga sakugen sarete, tesuto jikan ga tarimasen.",
        "よさんがさくげんされて、テストじかんがたりません。",
        "The budget was cut, so we don't have enough testing time.",
      ],
      [
        "Manager",
        "Kyaku ni wa dō tsutaemasu ka?",
        "きゃくにはどうつたえますか？",
        "How do we tell the client?",
      ],
      [
        "You",
        "Anzen o yūsen suru tame, enki sezaru o enai to setsumei shimasu.",
        "あんぜんをゆうせんするため、えんきせざるをえないとせつめいします。",
        "We'll explain that for safety's sake we have no choice but to delay.",
      ],
      [
        "Manager",
        "Tsuyoi hyōgen da ga, shinjitsu da.",
        "つよいひょうげんだが、しんじつだ。",
        "Strong wording, but it's the truth.",
      ],
      [
        "You",
        "Hai. Shitaku wa arimasen. Demo ima dashite wa, koshō ga demasu.",
        "はい。したくはありません。でもいまだしては、こしょうがでます。",
        "Yes. We don't want this. But if we ship now, bugs will appear.",
      ],
      [
        "Colleague",
        "Sezaru o enai — 'suru' wa 'se' ni naru n da yo.",
        "せざるをえない — 「する」は「せ」になるんだよ。",
        "Sezaru o enai — suru becomes se.",
      ],
      [
        "You",
        "Ki o tsukemasu. Hitsuyō o, reisei ni.",
        "きをつけます。ひつようを、れいせいに。",
        "I'll be careful. Necessity, calmly.",
      ],
    ],
    patterns: [
      {
        chunk: "〜ざるをえない",
        romaji: "~ zaru o enai",
        hiragana: "〜ざるをえない",
        meaning: "Have no choice but to… / cannot help but…",
        whenToUse:
          "Reluctant necessity under pressure. Formal-leaning; heavy for chat.",
        examples: [
          [
            "えんきせざるをえない",
            "enki sezaru o enai",
            "We have no choice but to postpone.",
          ],
          [
            "あやまらざるをえない",
            "ayamara zaru o enai",
            "I have no choice but to apologize.",
          ],
          [
            "みとめざるをえない",
            "mitome zaru o enai",
            "I have to admit it / no choice but to accept.",
          ],
        ],
      },
      {
        chunk: "する → せざるをえない",
        romaji: "suru → sezaru o enai",
        hiragana: "する → せざるをえない",
        meaning: "Irregular: suru becomes se- before zaru",
        whenToUse:
          "Any する verb noun: えんきする→えんきせざるをえない.",
        examples: [
          [
            "へんこうせざるをえない",
            "henkō sezaru o enai",
            "We have no choice but to change it.",
          ],
          [
            "キャンセルせざるをえない",
            "kyanseru sezaru o enai",
            "We have no choice but to cancel.",
          ],
          [
            "たいおうせざるをえない",
            "taiō sezaru o enai",
            "We have no choice but to respond/handle it.",
          ],
        ],
      },
      {
        chunk: "〜ざるをえないとおもう",
        romaji: "~ zaru o enai to omou",
        hiragana: "〜ざるをえないとおもう",
        meaning: "I think we have no choice but to…",
        whenToUse:
          "Softens the heavy form for bosses and clients.",
        examples: [
          [
            "えんきせざるをえないとおもいます",
            "enki sezaru o enai to omoimasu",
            "I think we have no choice but to postpone.",
          ],
          [
            "ことわらざるをえないとかんがえます",
            "kotowara zaru o enai to kangaemasu",
            "I think we have to decline.",
          ],
          [
            "まつざるをえないでしょう",
            "matsu zaru o enai deshō",
            "We'll probably have no choice but to wait.",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "Classical leftover",
        "ざる is an old negative; をえない is 'cannot obtain (avoiding it).' Together: cannot avoid doing X.",
      ],
      [
        "する → せ",
        "Almost every learner trip: しざるをえない is wrong. せざるをえない.",
      ],
      [
        "Weight",
        "Heavier than なければならない. Save for real constraints, not 'I have to buy coffee.'",
      ],
    ],
    culturalNote: [
      "Necessity without drama",
      "Using ざるをえない shows you recognize the cost. Japanese managers often accept hard news better when framed as unavoidable under shared constraints, not as personal preference.",
    ],
    shadowing: [
      [
        "Enki sezaru o enai to omoimasu.",
        "えんきせざるをえないとおもいます。",
      ],
      [
        "Anzen o yūsen suru tame, enki sezaru o enai.",
        "あんぜんをゆうせんするため、えんきせざるをえない。",
      ],
      [
        "Ayamara zaru o enai.",
        "あやまらざるをえない。",
      ],
      [
        "Henkō sezaru o enai.",
        "へんこうせざるをえない。",
      ],
      [
        "Mitome zaru o enai.",
        "みとめざるをえない。",
      ],
      [
        "Shitaku wa arimasen. Demo hitsuyō desu.",
        "したくはありません。でもひつようです。",
      ],
    ],
    quiz: [
      [
        "Correct form of する + ざるをえない:",
        [
          "しざるをえない",
          "せざるをえない",
          "すざるをえない",
          "させざるをえない",
        ],
        1,
        "する → せざるをえない.",
      ],
      [
        "〜ざるをえない signals:",
        [
          "eager preference",
          "reluctant necessity",
          "jokes",
          "greetings",
        ],
        1,
        "No choice under pressure.",
      ],
      [
        "Softener for bosses:",
        [
          "うるさい",
          "〜とおもいます",
          "ばかくらい",
          "ねむい",
        ],
        1,
        "〜ざるをえないとおもいます.",
      ],
      [
        "Too casual a use would be:",
        [
          "delaying a launch for safety",
          "having to buy gum",
          "admitting a budget cut",
          "canceling under law",
        ],
        1,
        "Save the heavy form for real constraints.",
      ],
    ],
    production: [
      [
        "I think we have no choice but to postpone.",
        "えんきせざるをえないとおもいます",
        "Enki sezaru o enai to omoimasu.",
        "えんきせざるをえないとおもいます。",
      ],
      [
        "I have no choice but to apologize.",
        "あやまらざるをえない",
        "Ayamara zaru o enai.",
        "あやまらざるをえない。",
      ],
      [
        "We have no choice but to change it.",
        "へんこうせざるをえない",
        "Henkō sezaru o enai.",
        "へんこうせざるをえない。",
      ],
    ],
  },
  {
    id: "sp-17-5",
    unit: 17,
    unitTitle: "Debate & Persuasion",
    order: 5,
    title: "やわらかいはんたい — そうともいえるけど",
    subtitle: "Disagree without lighting the fuse",
    scenario:
      "In a group chat about weekend plans, someone pushes a loud club. You practice soft disagreement that keeps the friendship intact.",
    durationMin: 35,
    objectives: [
      "Deploy そうともいえますが / そうかな for soft dissent",
      "Use ちょっと… and trailing けど to leave space",
      "Offer an alternative in the same breath as the disagree",
      "Avoid bare ちがうよ with acquaintances",
      "Read when silence or うーん is enough",
    ],
    dialogue: [
      [
        "Friend",
        "Konshū wa kurabu ikō ze! Zen'in shūgō!",
        "こんしゅうはクラブいこうぜ！ぜんいんしゅうごう！",
        "Club this week! Everyone assemble!",
      ],
      [
        "You",
        "Ā… sō da ne. Demo chotto…",
        "ああ…そうだね。でもちょっと…",
        "Ah… yeah. But, uh…",
      ],
      [
        "Friend",
        "Nani? Iya na no?",
        "なに？いやなの？",
        "What? You don't want to?",
      ],
      [
        "You",
        "Iya, sō to mo ieru kedo, konshū wa tsukarete te.",
        "いや、そうともいえるけど、こんしゅうはつかれてて。",
        "Well, you could say that, but I'm wiped this week.",
      ],
      [
        "Friend",
        "Jā rainen?",
        "じゃあらいねん？",
        "Next year then?",
      ],
      [
        "You",
        "Chigau chigau. Raishū no kāfe toka dō? Sukoshi otona na kanji de.",
        "ちがうちがう。らいしゅうのカフェとかどう？すこしおとななかんじで。",
        "No no. How about a café next week? A bit more low-key.",
      ],
      [
        "Friend",
        "Ō, wakatta. Sore nara ari.",
        "おう、わかった。それならあり。",
        "Oh, got it. That works.",
      ],
      [
        "You",
        "Arigatō. Hitei dake ja naku, betsu no teian.",
        "ありがとう。ひていだけじゃなく、べつのていあん。",
        "Thanks. Not just a no — another plan.",
      ],
      [
        "Mentor",
        "Soft disagreement wa 'chigau!' yori 'sō kana / chotto…'.",
        "ソフトなはんたいは「ちがう！」より「そうかな / ちょっと…」。",
        "Soft disagreement prefers sō kana / chotto… over chigau!",
      ],
      [
        "You",
        "Hai. Kankei o mamorinagara, iken o dasu.",
        "はい。かんけいをまもりながら、いけんをだす。",
        "Yes. Protect the relationship while stating a view.",
      ],
    ],
    patterns: [
      {
        chunk: "そうともいえるけど",
        romaji: "sō to mo ieru kedo",
        hiragana: "そうともいえるけど",
        meaning: "You could say that, but…",
        whenToUse:
          "Partial concede plus soft disagree among friends/peers.",
        examples: [
          [
            "そうともいえるけど、べつのもんだいもある",
            "sō to mo ieru kedo, betsu no mondai mo aru",
            "You could say that, but there's another issue too.",
          ],
          [
            "そうともいえますが、データがすくないです",
            "sō to mo iemasu ga, dēta ga sukunai desu",
            "One could say that, but we have little data.",
          ],
          [
            "そうともいえる。でもきょうはやめておく",
            "sō to mo ieru. Demo kyō wa yamete oku",
            "Fair enough. But I'll sit this one out today.",
          ],
        ],
      },
      {
        chunk: "そうかな / どうかな",
        romaji: "sō kana / dō kana",
        hiragana: "そうかな / どうかな",
        meaning: "I wonder… / I'm not so sure",
        whenToUse:
          "Light doubt without a hard no. Very common soft dissent.",
        examples: [
          [
            "そうかなあ…",
            "sō kanaa…",
            "I'm not so sure…",
          ],
          [
            "どうかなってきがする",
            "dō kana tte ki ga suru",
            "I've got a feeling it might not be.",
          ],
          [
            "そうかな。もうちょっとかんがえたい",
            "sō kana. Mō chotto kangaetai",
            "Hmm. I want to think a bit more.",
          ],
        ],
      },
      {
        chunk: "ちょっと…（いいよどみ）",
        romaji: "chotto… (iiyodomi)",
        hiragana: "ちょっと…（いいよどみ）",
        meaning: "Well… / it's a bit… (trailing off)",
        whenToUse:
          "Signals discomfort before naming the real reason. Natives fill the gap.",
        examples: [
          [
            "きょうはちょっと…",
            "kyō wa chotto…",
            "Today's a bit…",
          ],
          [
            "それ、ちょっとむずかしくて…",
            "sore, chotto muzukashikute…",
            "That's a bit difficult…",
          ],
          [
            "ざんねんだけど、ちょっとよやくが…",
            "zannen da kedo, chotto yoyaku ga…",
            "Sorry, but I've got a bit of a prior plan…",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "Leave the door open",
        "Trailing けど / て / … invites the other person to adjust. Hard stop いいえ closes the social channel.",
      ],
      [
        "Partial yes",
        "そうともいえる affirms a slice of their framing so the no doesn't feel total.",
      ],
      [
        "Register swap",
        "With bosses use そうともいえますが; with friends そうともいえるけど / そうかな.",
      ],
    ],
    culturalNote: [
      "Harmony is not silence",
      "You can disagree in Japanese — the skill is packaging. Soft forms protect かんけい so the group can still choose together after your no.",
    ],
    shadowing: [
      [
        "Sō to mo ieru kedo, konshū wa tsukarete te.",
        "そうともいえるけど、こんしゅうはつかれてて。",
      ],
      [
        "Sō kanaa…",
        "そうかなあ…",
      ],
      [
        "Kyō wa chotto…",
        "きょうはちょっと…",
      ],
      [
        "Sō to mo iemasu ga, dēta ga sukunai desu.",
        "そうともいえますが、データがすくないです。",
      ],
      [
        "Raishū no kāfe toka dō?",
        "らいしゅうのカフェとかどう？",
      ],
      [
        "Hitei dake ja naku, betsu no teian.",
        "ひていだけじゃなく、べつのていあん。",
      ],
    ],
    quiz: [
      [
        "Softest dissent among friends:",
        [
          "ぜったいちがう！",
          "そうかな…",
          "ばかだな",
          "うるさい",
        ],
        1,
        "そうかな leaves room.",
      ],
      [
        "そうともいえるけど does what?",
        [
          "Full agreement",
          "Partial concede then pushback",
          "Orders sushi",
          "Ends friendship",
        ],
        1,
        "Yes-ish, then but.",
      ],
      [
        "Trailing ちょっと… often means:",
        [
          "Enthusiastic yes",
          "Discomfort / soft no coming",
          "Train announcement",
          "Keigo upgrade",
        ],
        1,
        "Hesitation signals.",
      ],
      [
        "After soft no, best next move:",
        [
          "Stay silent forever",
          "Offer an alternative",
          "Block them",
          "Switch to English only",
        ],
        1,
        "Alternative keeps the bond.",
      ],
    ],
    production: [
      [
        "You could say that, but I'm wiped this week.",
        "そうともいえるけど + つかれてて",
        "Sō to mo ieru kedo, konshū wa tsukarete te.",
        "そうともいえるけど、こんしゅうはつかれてて。",
      ],
      [
        "I'm not so sure…",
        "そうかなあ",
        "Sō kanaa…",
        "そうかなあ…",
      ],
      [
        "Today's a bit…",
        "きょうはちょっと…",
        "Kyō wa chotto…",
        "きょうはちょっと…",
      ],
    ],
  },
  {
    id: "sp-17-6",
    unit: 17,
    unitTitle: "Debate & Persuasion",
    order: 6,
    title: "ポイントをとじる — そういうわけで",
    subtitle: "Land the plane: summarize and close your argument",
    scenario:
      "After a long discussion on pricing, you practice closing your point so the meeting can move on — without sounding abrupt.",
    durationMin: 34,
    objectives: [
      "Close with そういうわけで / まとめると / いじょうです",
      "Signal 'I'm done speaking' so others can respond",
      "Restate one takeaway before the close",
      "Invite reaction with いかがでしょうか after closing",
      "Avoid endless あとね… loops",
    ],
    dialogue: [
      [
        "You",
        "Yasu sureba uremasu ga, brand ga yowaku narimasu.",
        "やすすればうれますが、ブランドがよわくなります。",
        "If we lower the price we sell more, but the brand weakens.",
      ],
      [
        "Alex",
        "Un un.",
        "うんうん。",
        "Yeah yeah.",
      ],
      [
        "You",
        "Gyakuni, sukoshi takakute mo, shitsu o mamoru hō ga chōki de toki desu.",
        "ぎゃくに、すこしたかくても、しつをまもるほうがちょうきでとくです。",
        "Conversely, keeping quality even if a bit pricey pays off long-term.",
      ],
      [
        "Alex",
        "Dēta wa?",
        "データは？",
        "Data?",
      ],
      [
        "You",
        "Kako no kyanpēn de, nesage go ni riritsu ga ochimashita.",
        "かこのキャンペーンで、ねさげごにりりつがおちました。",
        "In a past campaign, margins fell after the discount.",
      ],
      [
        "You",
        "Sō iu wake de, konkai wa nesage shinai hō o suisen shimasu.",
        "そういうわけで、こんかいはねさげしないほうをすいせんします。",
        "For that reason, I recommend we don't discount this time.",
      ],
      [
        "Manager",
        "Rikai shimashita. Hoka ni iken wa?",
        "りかいしました。ほかにいけんは？",
        "Understood. Any other views?",
      ],
      [
        "You",
        "Watashi kara wa ijō desu.",
        "わたしからはいじょうです。",
        "That's all from me.",
      ],
      [
        "Mentor",
        "Close ga aru to, giron ga mae ni susumu.",
        "クローズがあると、ぎろんがまえにすすむ。",
        "When there's a close, debate moves forward.",
      ],
      [
        "Alex",
        "Matomeru to, brand yūsen ne.",
        "まとめると、ブランドゆうせんね。",
        "To sum up: brand first.",
      ],
    ],
    patterns: [
      {
        chunk: "そういうわけで",
        romaji: "sō iu wake de",
        hiragana: "そういうわけで",
        meaning: "For that reason / therefore",
        whenToUse:
          "After evidence, right before your recommendation or conclusion.",
        examples: [
          [
            "そういうわけで、えんきします",
            "sō iu wake de, enki shimasu",
            "For that reason, we'll postpone.",
          ],
          [
            "そういうわけで、ごきょうりょくください",
            "sō iu wake de, gokyōryoku kudasai",
            "Therefore, please cooperate.",
          ],
          [
            "そういうわけで、わたしはさんせいです",
            "sō iu wake de, watashi wa sansei desu",
            "For that reason, I'm in favor.",
          ],
        ],
      },
      {
        chunk: "まとめると / かんたんにいうと",
        romaji: "matomeru to / kantan ni iu to",
        hiragana: "まとめると / かんたんにいうと",
        meaning: "To sum up / simply put",
        whenToUse:
          "Compress a long turn into one takeaway line.",
        examples: [
          [
            "まとめると、じかんがたりない",
            "matomeru to, jikan ga tarinai",
            "To sum up: we don't have enough time.",
          ],
          [
            "かんたんにいうと、リスクがおおきい",
            "kantan ni iu to, risuku ga ōkii",
            "Simply put, the risk is large.",
          ],
          [
            "ようするに、いまはやめたほうがいい",
            "yōsuru ni, ima wa yameta hō ga ii",
            "In short, better to stop for now.",
          ],
        ],
      },
      {
        chunk: "いじょうです / わたしからはいじょうです",
        romaji: "ijō desu / watashi kara wa ijō desu",
        hiragana: "いじょうです / わたしからはいじょうです",
        meaning: "That's all (from me)",
        whenToUse:
          "Meeting turn-taking. Hands the floor back cleanly.",
        examples: [
          [
            "わたしからはいじょうです",
            "watashi kara wa ijō desu",
            "That's all from me.",
          ],
          [
            "ほうこくはいじょうです",
            "hōkoku wa ijō desu",
            "That concludes the report.",
          ],
          [
            "せつめいはいじょうです。ごしつもんはありますか",
            "setsumei wa ijō desu. Goshitsumon wa arimasu ka",
            "That's the explanation. Any questions?",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "Close = kindness",
        "Without a landing phrase, listeners don't know when to jump in. いじょうです is a courtesy to the room.",
      ],
      [
        "そういうわけで needs a prior wake",
        "Don't open with it. Build reason, then close.",
      ],
      [
        "まとめると vs つまり",
        "まとめると recaps your own long turn; つまり often reframes someone's words (Unit 18).",
      ],
    ],
    culturalNote: [
      "Endings are shared infrastructure",
      "Japanese meetings run on clear handoffs. A crisp close isn't arrogance — it lets the chair solicit the next voice without interrupting you mid-thought.",
    ],
    shadowing: [
      [
        "Sō iu wake de, konkai wa nesage shinai hō o suisen shimasu.",
        "そういうわけで、こんかいはねさげしないほうをすいせんします。",
      ],
      [
        "Watashi kara wa ijō desu.",
        "わたしからはいじょうです。",
      ],
      [
        "Matomeru to, jikan ga tarinai.",
        "まとめると、じかんがたりない。",
      ],
      [
        "Kantan ni iu to, risuku ga ōkii.",
        "かんたんにいうと、リスクがおおきい。",
      ],
      [
        "Hōkoku wa ijō desu.",
        "ほうこくはいじょうです。",
      ],
      [
        "Yōsuru ni, ima wa yameta hō ga ii.",
        "ようするに、いまはやめたほうがいい。",
      ],
    ],
    quiz: [
      [
        "そういうわけで belongs:",
        [
          "as a random opener",
          "after reasons, before the ask",
          "only in text messages",
          "in karaoke only",
        ],
        1,
        "Therefore needs prior wake.",
      ],
      [
        "わたしからはいじょうです means:",
        [
          "I quit the company",
          "That's all from me",
          "I disagree forever",
          "Please wait",
        ],
        1,
        "Floor handoff.",
      ],
      [
        "まとめると is for:",
        [
          "ordering coffee",
          "compressing your takeaway",
          "apologizing to police",
          "reading furigana",
        ],
        1,
        "Sum-up.",
      ],
      [
        "Missing a close often causes:",
        [
          "faster meetings",
          "people talking over you or awkward pauses",
          "automatic approval",
          "free lunch",
        ],
        1,
        "No landing = unclear turn end.",
      ],
    ],
    production: [
      [
        "For that reason, I recommend we don't discount.",
        "そういうわけで + すいせんします",
        "Sō iu wake de, nesage shinai hō o suisen shimasu.",
        "そういうわけで、ねさげしないほうをすいせんします。",
      ],
      [
        "That's all from me.",
        "わたしからはいじょうです",
        "Watashi kara wa ijō desu.",
        "わたしからはいじょうです。",
      ],
      [
        "To sum up: we don't have enough time.",
        "まとめると + じかんがたりない",
        "Matomeru to, jikan ga tarinai.",
        "まとめると、じかんがたりない。",
      ],
    ],
  },
  {
    id: "sp-18-1",
    unit: 18,
    unitTitle: "Presentation & Meetings",
    order: 1,
    title: "けつろんからいうと",
    subtitle: "Lead with the answer, then show the work",
    scenario:
      "You have three minutes in a standup. Practice putting the conclusion first so busy listeners stay with you.",
    durationMin: 32,
    objectives: [
      "Open with けつろんからいうと + one clear claim",
      "Follow with りゆうは briefly, not a novel",
      "Avoid burying the ask at the end only",
      "Use the pattern in both Japanese and mixed meetings",
      "Stop after the ask so questions can start",
    ],
    dialogue: [
      [
        "Chair",
        "Justin-san, sutētasu onegai shimasu.",
        "Justinさん、ステータスおねがいします。",
        "Justin, status please.",
      ],
      [
        "You",
        "Ketsuron kara iu to, kyōjū ni demo o okurimasu.",
        "けつろんからいうと、きょうじゅうにデモをおくります。",
        "Starting with the conclusion: I'll send the demo today.",
      ],
      [
        "Chair",
        "Osoku natte imasu ka?",
        "おそくなっていますか？",
        "Are we behind?",
      ],
      [
        "You",
        "Iie. Riyū wa, kinō no bug ga naotta kara desu.",
        "いいえ。りゆうは、きのうのバグがなおったからです。",
        "No. The reason is yesterday's bug is fixed.",
      ],
      [
        "Chair",
        "Risuku wa?",
        "リスクは？",
        "Risks?",
      ],
      [
        "You",
        "Ketsuron kara iu to, daiji na risuku wa arimasen. Tada, UI no iro dake mikomi desu.",
        "けつろんからいうと、だいじなリスクはありません。ただ、UIのいろだけみこみです。",
        "Bottom line: no major risks. Only the UI colors are pending.",
      ],
      [
        "Chair",
        "Ryōkai. Arigatō.",
        "りょうかい。ありがとう。",
        "Got it. Thanks.",
      ],
      [
        "Mentor",
        "Saisho ni kotae. Ato de riyū. Busy na hito muke.",
        "さいしょにこたえ。あとでりゆう。Busyなひとむけ。",
        "Answer first, reasons after. For busy people.",
      ],
      [
        "You",
        "Hai. Nagai maeoki wa iranai.",
        "はい。ながいまえおきはいらない。",
        "Right. No long preamble.",
      ],
      [
        "Colleague",
        "Jikan ga sukunai toki, kore ga shinsetsu da yo.",
        "じかんがすくないとき、これがしんせつだよ。",
        "When time is short, this is kindness.",
      ],
    ],
    patterns: [
      {
        chunk: "けつろんからいうと",
        romaji: "ketsuron kara iu to",
        hiragana: "けつろんからいうと",
        meaning: "Starting from the conclusion / bottom line",
        whenToUse:
          "Standups, reports, emails to busy stakeholders.",
        examples: [
          [
            "けつろんからいうと、さんせいです",
            "ketsuron kara iu to, sansei desu",
            "Bottom line: I'm in favor.",
          ],
          [
            "けつろんからいうと、みおくります",
            "ketsuron kara iu to, miokurimasu",
            "Bottom line: we'll pass for now.",
          ],
          [
            "けつろんからいうと、もうちょっとじかんがひつようです",
            "ketsuron kara iu to, mō chotto jikan ga hitsuyō desu",
            "Bottom line: we need a bit more time.",
          ],
        ],
      },
      {
        chunk: "りゆうは〜からです",
        romaji: "riyū wa ~ kara desu",
        hiragana: "りゆうは〜からです",
        meaning: "The reason is because…",
        whenToUse:
          "Immediately after the conclusion line.",
        examples: [
          [
            "りゆうは、データがたりないからです",
            "riyū wa, dēta ga tarinai kara desu",
            "The reason is we lack data.",
          ],
          [
            "りゆうは、きゃくがまっているからです",
            "riyū wa, kyaku ga matte iru kara desu",
            "Because the client is waiting.",
          ],
          [
            "りゆうは、コストがおおきいからです",
            "riyū wa, kosuto ga ōkii kara desu",
            "Because the cost is large.",
          ],
        ],
      },
      {
        chunk: "さいしょにおつたえすると",
        romaji: "saisho ni otsutae suru to",
        hiragana: "さいしょにおつたえすると",
        meaning: "To tell you first… (polite bottom-line opener)",
        whenToUse:
          "Client-facing or keigo-leaning updates.",
        examples: [
          [
            "さいしょにおつたえすると、のびそうです",
            "saisho ni otsutae suru to, nobi sō desu",
            "To tell you first: it may slip.",
          ],
          [
            "さいしょにおつたえすると、かんりょうしています",
            "saisho ni otsutae suru to, kanryō shite imasu",
            "Up front: it's completed.",
          ],
          [
            "さいしょにおつたえすると、へんこうがいります",
            "saisho ni otsutae suru to, henkō ga irimasu",
            "First: we'll need a change.",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "Pyramid style",
        "Japanese business talk increasingly favors conclusion-first, especially with global teams. Old-school slow build still exists — match the room.",
      ],
      [
        "One claim",
        "けつろんからいうと should introduce one sentence, not five.",
      ],
      [
        "Then stop",
        "After conclusion + reason + ask, pause. Don't restart the preamble.",
      ],
    ],
    culturalNote: [
      "Respect people's time",
      "Leading with the conclusion is read as consideration in modern Japanese offices, not as arrogance. Long wind-ups can feel like hiding bad news.",
    ],
    shadowing: [
      [
        "Ketsuron kara iu to, kyōjū ni demo o okurimasu.",
        "けつろんからいうと、きょうじゅうにデモをおくります。",
      ],
      [
        "Ketsuron kara iu to, sansei desu.",
        "けつろんからいうと、さんせいです。",
      ],
      [
        "Riyū wa, dēta ga tarinai kara desu.",
        "りゆうは、データがたりないからです。",
      ],
      [
        "Saisho ni otsutae suru to, nobi sō desu.",
        "さいしょにおつたえすると、のびそうです。",
      ],
      [
        "Ketsuron kara iu to, miokurimasu.",
        "けつろんからいうと、みおくります。",
      ],
      [
        "Nagai maeoki wa iranai.",
        "ながいまえおきはいらない。",
      ],
    ],
    quiz: [
      [
        "けつろんからいうと means:",
        [
          "Starting from gossip",
          "Starting from the conclusion",
          "Starting from lunch",
          "Starting from dialect",
        ],
        1,
        "Conclusion first.",
      ],
      [
        "Right after the conclusion, often come:",
        [
          "a karaoke song",
          "りゆうは",
          "a resignation",
          "silence forever",
        ],
        1,
        "Reason follows.",
      ],
      [
        "Best length for the conclusion line:",
        [
          "one clear claim",
          "a five-minute story",
          "only fillers",
          "an apology poem",
        ],
        0,
        "One sentence.",
      ],
      [
        "さいしょにおつたえすると is:",
        [
          "ruder",
          "a polite bottom-line opener",
          "Kansai slang only",
          "a food order",
        ],
        1,
        "Polite up-front tell.",
      ],
    ],
    production: [
      [
        "Bottom line: I'll send the demo today.",
        "けつろんからいうと + きょうじゅうに",
        "Ketsuron kara iu to, kyōjū ni demo o okurimasu.",
        "けつろんからいうと、きょうじゅうにデモをおくります。",
      ],
      [
        "The reason is we lack data.",
        "りゆうは + データがたりないからです",
        "Riyū wa, dēta ga tarinai kara desu.",
        "りゆうは、データがたりないからです。",
      ],
      [
        "Bottom line: I'm in favor.",
        "けつろんからいうと + さんせいです",
        "Ketsuron kara iu to, sansei desu.",
        "けつろんからいうと、さんせいです。",
      ],
    ],
  },
  {
    id: "sp-18-2",
    unit: 18,
    unitTitle: "Presentation & Meetings",
    order: 2,
    title: "つまり — いいなおし",
    subtitle: "Reframe so everyone shares one meaning",
    scenario:
      "A teammate's update is fuzzy. You use つまり to check understanding without embarrassing them.",
    durationMin: 33,
    objectives: [
      "Use つまり to paraphrase, not to mock",
      "Confirm with つまり〜ということですね",
      "Distinguish つまり from たとえば",
      "Repair misunderstanding mid-meeting",
      "Keep voice collaborative, not prosecutorial",
    ],
    dialogue: [
      [
        "Teammate",
        "Chotto API ga… ano, mawari ga… yahari…",
        "ちょっとAPIが…あの、まわりが…やはり…",
        "The API is a bit… the surrounding… well…",
      ],
      [
        "You",
        "Tsumari, kyō wa setsuzoku tesuto made, desu ka?",
        "つまり、きょうはせつぞくテストまで、ですか？",
        "So in other words, today's goal is connection testing?",
      ],
      [
        "Teammate",
        "Sō! Sore desu.",
        "そう！それです。",
        "Yes! That's it.",
      ],
      [
        "Chair",
        "Arigatō, seiri shite kurete.",
        "ありがとう、せいりしてくれて。",
        "Thanks for clarifying.",
      ],
      [
        "Teammate",
        "Ashita kara wa UI… tabun…",
        "あしたからはUI…たぶん…",
        "From tomorrow, UI… maybe…",
      ],
      [
        "You",
        "Tsumari, ashita wa gamen chōsei, to iu koto desu ne.",
        "つまり、あしたはがめんちょうせい、ということですね。",
        "So tomorrow means screen adjustments, right?",
      ],
      [
        "Teammate",
        "Hai, sonotōri desu.",
        "はい、そのとおりです。",
        "Yes, exactly.",
      ],
      [
        "Mentor",
        "Tsumari wa aite o tasukeru dōgu.",
        "つまりはあいてをたすけるどうぐ。",
        "Tsumari is a tool to help the other person.",
      ],
      [
        "You",
        "Warukuchi ja naku, kyōyū no imi o tsukuru.",
        "わるくちじゃなく、きょうゆうのいみをつくる。",
        "Not shade — building shared meaning.",
      ],
      [
        "Chair",
        "Yosh, tsugi.",
        "よし、つぎ。",
        "Alright, next.",
      ],
    ],
    patterns: [
      {
        chunk: "つまり",
        romaji: "tsumari",
        hiragana: "つまり",
        meaning: "In other words / so / that is",
        whenToUse:
          "Paraphrase fuzzy talk into one crisp line.",
        examples: [
          [
            "つまり、きょうはやめるってこと？",
            "tsumari, kyō wa yameru tte koto?",
            "So that means we're stopping today?",
          ],
          [
            "つまり、もっとじかんがひつようだ",
            "tsumari, motto jikan ga hitsuyō da",
            "In other words, we need more time.",
          ],
          [
            "つまり、さんせいってことね",
            "tsumari, sansei tte koto ne",
            "So you're saying you're in favor.",
          ],
        ],
      },
      {
        chunk: "つまり〜ということですね",
        romaji: "tsumari ~ to iu koto desu ne",
        hiragana: "つまり〜ということですね",
        meaning: "So that means…, right?",
        whenToUse:
          "Polite confirmation paraphrase in meetings.",
        examples: [
          [
            "つまり、のびるということですね",
            "tsumari, nobiru to iu koto desu ne",
            "So that means it will slip, right?",
          ],
          [
            "つまり、きゃくがOKということですね",
            "tsumari, kyaku ga OK to iu koto desu ne",
            "So the client is OK, correct?",
          ],
          [
            "つまり、わたしがいくということですね",
            "tsumari, watashi ga iku to iu koto desu ne",
            "So that means I go, yes?",
          ],
        ],
      },
      {
        chunk: "いいかえると",
        romaji: "iikaeru to",
        hiragana: "いいかえると",
        meaning: "To put it another way",
        whenToUse:
          "Slightly more formal twin of つまり when reframing your own point.",
        examples: [
          [
            "いいかえると、リスクがひくい",
            "iikaeru to, risuku ga hikui",
            "To put it another way, the risk is low.",
          ],
          [
            "いいかえると、いまがいちばんいい",
            "iikaeru to, ima ga ichiban ii",
            "In other words, now is best.",
          ],
          [
            "いいかえると、サポートがひつようだ",
            "iikaeru to, sapōto ga hitsuyō da",
            "Put another way, we need support.",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "Check, don't trap",
        "Rising intonation on ですね turns paraphrase into a confirmation, not a gotcha.",
      ],
      [
        "つまり ≠ たとえば",
        "たとえば gives an example; つまり compresses meaning.",
      ],
      [
        "Self vs other",
        "On your own slides, つまり wraps up. On others' turns, it rescues clarity.",
      ],
    ],
    culturalNote: [
      "Saving face while clarifying",
      "A gentle つまり〜ですね lets a struggling speaker keep dignity. You credit them with the idea while giving the room a usable sentence.",
    ],
    shadowing: [
      [
        "Tsumari, kyō wa setsuzoku tesuto made, desu ka?",
        "つまり、きょうはせつぞくテストまで、ですか？",
      ],
      [
        "Tsumari, nobiru to iu koto desu ne.",
        "つまり、のびるということですね。",
      ],
      [
        "Tsumari, motto jikan ga hitsuyō da.",
        "つまり、もっとじかんがひつようだ。",
      ],
      [
        "Iikaeru to, risuku ga hikui.",
        "いいかえると、リスクがひくい。",
      ],
      [
        "Tsumari, sansei tte koto ne.",
        "つまり、さんせいってことね。",
      ],
      [
        "Warukuchi ja naku, kyōyū no imi.",
        "わるくちじゃなく、きょうゆうのいみ。",
      ],
    ],
    quiz: [
      [
        "つまり is closest to:",
        [
          "for example",
          "in other words",
          "congratulations",
          "discount",
        ],
        1,
        "Paraphrase marker.",
      ],
      [
        "つまり〜ということですね is used to:",
        [
          "insult quietly",
          "confirm a paraphrase",
          "order tea",
          "end employment",
        ],
        1,
        "Polite check.",
      ],
      [
        "たとえば differs because it:",
        [
          "gives an example",
          "means never",
          "is only keigo",
          "deletes files",
        ],
        0,
        "Example vs paraphrase.",
      ],
      [
        "Best tone for つまり in meetings:",
        [
          "mocking",
          "collaborative",
          "shouting",
          "whisper only",
        ],
        1,
        "Help, don't prosecute.",
      ],
    ],
    production: [
      [
        "So in other words, today's goal is connection testing?",
        "つまり + せつぞくテストまで",
        "Tsumari, kyō wa setsuzoku tesuto made, desu ka?",
        "つまり、きょうはせつぞくテストまで、ですか？",
      ],
      [
        "So that means it will slip, right?",
        "つまり〜ということですね",
        "Tsumari, nobiru to iu koto desu ne.",
        "つまり、のびるということですね。",
      ],
      [
        "To put it another way, the risk is low.",
        "いいかえると + リスクがひくい",
        "Iikaeru to, risuku ga hikui.",
        "いいかえると、リスクがひくい。",
      ],
    ],
  },
  {
    id: "sp-18-3",
    unit: 18,
    unitTitle: "Presentation & Meetings",
    order: 3,
    title: "ごしつもんはありますか",
    subtitle: "Open the floor and handle Q&A without panic",
    scenario:
      "You finish a short presentation and practice inviting, buffering, and answering questions like a calm host.",
    durationMin: 35,
    objectives: [
      "Invite questions with ごしつもんはありますか",
      "Buy time with いいしつもんですね / すこしだけよろしいですか",
      "Redirect with のちほど / オフラインで",
      "Thank before and after answers",
      "Close Q&A cleanly when time is up",
    ],
    dialogue: [
      [
        "You",
        "Setsumei wa ijō desu. Goshitsumon wa arimasu ka?",
        "せつめいはいじょうです。ごしつもんはありますか？",
        "That's the explanation. Any questions?",
      ],
      [
        "Audience",
        "Hai. Nōryō wa dore gurai desu ka?",
        "はい。のうりょうはどれぐらいですか？",
        "Yes. About how much capacity?",
      ],
      [
        "You",
        "Ii shitsumon desu ne. Ima no mitōshi de wa, senken teido desu.",
        "いいしつもんですね。いまのみとおしでは、せんけんていどです。",
        "Good question. Current outlook is about a thousand.",
      ],
      [
        "Audience",
        "Hoka no kuni wa?",
        "ほかのくには？",
        "Other countries?",
      ],
      [
        "You",
        "Sore wa kyō no han'i gai na node, nochihodo shiryō de okurimasu.",
        "それはきょうのはんいがいなので、のちほどしりょうでおくります。",
        "That's outside today's scope, so I'll send materials later.",
      ],
      [
        "Audience",
        "Wakarimashita. Arigatō gozaimasu.",
        "わかりました。ありがとうございます。",
        "Understood. Thank you.",
      ],
      [
        "You",
        "Hoka ni goshitsumon wa yoroshii desu ka?",
        "ほかにごしつもんはよろしいですか？",
        "Any other questions?",
      ],
      [
        "Chair",
        "Jikan ni natta node, kore de.",
        "じかんになったので、これで。",
        "We're out of time, so that's it.",
      ],
      [
        "You",
        "Arigatō gozaimashita.",
        "ありがとうございました。",
        "Thank you very much.",
      ],
      [
        "Mentor",
        "Ukeru → home → kotaeru / mawasū. Panic shinai.",
        "うける→ほめる→こたえる/まわす。パニックしない。",
        "Receive → praise → answer or redirect. No panic.",
      ],
    ],
    patterns: [
      {
        chunk: "ごしつもんはありますか",
        romaji: "goshitsumon wa arimasu ka",
        hiragana: "ごしつもんはありますか",
        meaning: "Are there any questions?",
        whenToUse:
          "End of a talk or agenda item. Standard floor open.",
        examples: [
          [
            "ごしつもんはありますか",
            "goshitsumon wa arimasu ka",
            "Any questions?",
          ],
          [
            "なにかごしつもんはございますか",
            "nanika goshitsumon wa gozaimasu ka",
            "Do you have any questions? (more polite)",
          ],
          [
            "ここまででごしつもんはありますか",
            "koko made de goshitsumon wa arimasu ka",
            "Any questions so far?",
          ],
        ],
      },
      {
        chunk: "いいしつもんですね",
        romaji: "ii shitsumon desu ne",
        hiragana: "いいしつもんですね",
        meaning: "That's a good question",
        whenToUse:
          "Buffer while you organize the answer; builds rapport.",
        examples: [
          [
            "いいしつもんですね。すこしだけまってください",
            "ii shitsumon desu ne. Sukoshi dake matte kudasai",
            "Good question. Just a moment.",
          ],
          [
            "いいしつもんですね。かんけいがあります",
            "ii shitsumon desu ne. Kankei ga arimasu",
            "Good question. It's related.",
          ],
          [
            "たしかにだいじなしつもんですね",
            "tashika ni daiji na shitsumon desu ne",
            "That truly is an important question.",
          ],
        ],
      },
      {
        chunk: "のちほどおくります / オフラインで",
        romaji: "nochihodo okurimasu / ofurain de",
        hiragana: "のちほどおくります / オフラインで",
        meaning: "I'll send it later / offline",
        whenToUse:
          "When the question is valid but out of scope or too deep for the room.",
        examples: [
          [
            "のちほどメールでおくります",
            "nochihodo mēru de okurimasu",
            "I'll email it later.",
          ],
          [
            "オフラインでおはなししましょう",
            "ofurain de ohanashi shimashō",
            "Let's talk offline.",
          ],
          [
            "しりょうにまとめてきょうゆうします",
            "shiryō ni matomete kyōyū shimasu",
            "I'll compile it into materials and share.",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "Buffer phrases aren't empty",
        "いいしつもんですね buys 2–3 seconds and affirms the asker publicly.",
      ],
      [
        "Scope honesty",
        "はんいがい + のちほど is respected. Fake-answering damages trust more.",
      ],
      [
        "Closing Q&A",
        "ほかによろしいですか + chair's time call is the clean exit.",
      ],
    ],
    culturalNote: [
      "Questions are participation",
      "In many Japanese settings people hesitate to ask first. Your warm invite and thank-you lower the social cost of speaking up.",
    ],
    shadowing: [
      [
        "Goshitsumon wa arimasu ka?",
        "ごしつもんはありますか？",
      ],
      [
        "Ii shitsumon desu ne.",
        "いいしつもんですね。",
      ],
      [
        "Nochihodo shiryō de okurimasu.",
        "のちほどしりょうでおくります。",
      ],
      [
        "Hoka ni goshitsumon wa yoroshii desu ka?",
        "ほかにごしつもんはよろしいですか？",
      ],
      [
        "Ofurain de ohanashi shimashō.",
        "オフラインでおはなししましょう。",
      ],
      [
        "Setsumei wa ijō desu.",
        "せつめいはいじょうです。",
      ],
    ],
    quiz: [
      [
        "Standard invite after a talk:",
        [
          "うるさいですか",
          "ごしつもんはありますか",
          "ねむいですか",
          "かえれ",
        ],
        1,
        "Open the floor.",
      ],
      [
        "いいしつもんですね mainly:",
        [
          "insults the asker",
          "buffers and affirms",
          "ends the company",
          "orders lunch",
        ],
        1,
        "Rapport buffer.",
      ],
      [
        "Out-of-scope question — best move:",
        [
          "invent numbers",
          "のちほど / オフラインで",
          "ignore forever",
          "leave the room",
        ],
        1,
        "Defer cleanly.",
      ],
      [
        "なにか〜ございますか is:",
        [
          "more casual",
          "more polite",
          "Kansai only",
          "wrong grammar",
        ],
        1,
        "ございます elevates.",
      ],
    ],
    production: [
      [
        "Any questions?",
        "ごしつもんはありますか",
        "Goshitsumon wa arimasu ka?",
        "ごしつもんはありますか？",
      ],
      [
        "Good question.",
        "いいしつもんですね",
        "Ii shitsumon desu ne.",
        "いいしつもんですね。",
      ],
      [
        "I'll send materials later.",
        "のちほどしりょうでおくります",
        "Nochihodo shiryō de okurimasu.",
        "のちほどしりょうでおくります。",
      ],
    ],
  },
  {
    id: "sp-18-4",
    unit: 18,
    unitTitle: "Presentation & Meetings",
    order: 4,
    title: "アジェンダをまわる",
    subtitle: "Open the meeting, park tangents, keep time",
    scenario:
      "You chair a 30-minute sync. Practice stating the agenda, parking off-topics, and moving items along.",
    durationMin: 36,
    objectives: [
      "Open with きょうのアジェンダは",
      "Park tangents with それはべつできろう / あとで",
      "Advance with つぎのこうもくにいきましょう",
      "Confirm owners before leaving an item",
      "Protect the clock without sounding harsh",
    ],
    dialogue: [
      [
        "You",
        "Hajimemashō. Kyō no ajenda wa mittsu desu.",
        "はじめましょう。きょうのアジェンダはみっつです。",
        "Let's begin. Today's agenda has three items.",
      ],
      [
        "You",
        "Ichi: shinchoku. Ni: risuku. San: tsugi no akushon.",
        "いち：しんちょく。に：リスク。さん：つぎのアクション。",
        "One: progress. Two: risks. Three: next actions.",
      ],
      [
        "Alex",
        "Chotto, kyūkei ryokō no hanashi mo…",
        "ちょっと、きゅうけいりょこうのはなしも…",
        "Wait, about the team trip too…",
      ],
      [
        "You",
        "Sore wa tanoshii desu ga, kyō no ajenda gai desu. Ato de betsuni.",
        "それはたのしいですが、きょうのアジェンダがいです。あとでべつに。",
        "Fun, but outside today's agenda. Separately later.",
      ],
      [
        "Alex",
        "Ryōkai.",
        "りょうかい。",
        "Got it.",
      ],
      [
        "You",
        "Jā shinchoku kara. Go-fun de.",
        "じゃしんちょくから。ごふんで。",
        "Progress first. Five minutes.",
      ],
      [
        "Colleague",
        "Bug wa naorimashita.",
        "バグはなおりました。",
        "The bug is fixed.",
      ],
      [
        "You",
        "Arigatō. Tsugi no kōmoku ni ikimashō. Risuku.",
        "ありがとう。つぎのこうもくにいきましょう。リスク。",
        "Thanks. Next item: risks.",
      ],
      [
        "Manager",
        "Jikan dōri, ii unee da.",
        "じかんどおり、いいうねえだ。",
        "On time — good facilitation.",
      ],
      [
        "You",
        "Saigo ni akushon o kakunin shite owarimasu.",
        "さいごにアクションをかくにんしておわります。",
        "We'll confirm actions at the end and finish.",
      ],
    ],
    patterns: [
      {
        chunk: "きょうのアジェンダは",
        romaji: "kyō no ajenda wa",
        hiragana: "きょうのアジェンダは",
        meaning: "Today's agenda is…",
        whenToUse:
          "Meeting open. Number the items aloud.",
        examples: [
          [
            "きょうのアジェンダはみっつです",
            "kyō no ajenda wa mittsu desu",
            "Today's agenda has three items.",
          ],
          [
            "アジェンダにそってすすめます",
            "ajenda ni sotte susumemasu",
            "We'll proceed along the agenda.",
          ],
          [
            "まずアジェンダをきょうゆうします",
            "mazu ajenda o kyōyū shimasu",
            "First I'll share the agenda.",
          ],
        ],
      },
      {
        chunk: "アジェンダがい / あとでべつに",
        romaji: "ajenda gai / ato de betsu ni",
        hiragana: "アジェンダがい / あとでべつに",
        meaning: "Outside the agenda / separately later",
        whenToUse:
          "Parking lot for tangents without shutting people down.",
        examples: [
          [
            "それはきょうのアジェンダがいです",
            "sore wa kyō no ajenda gai desu",
            "That's outside today's agenda.",
          ],
          [
            "あとでべつにはなしましょう",
            "ato de betsu ni hanashimashō",
            "Let's talk about it separately later.",
          ],
          [
            "パーキングロットにいれますね",
            "pākingu rotto ni iremasu ne",
            "I'll put that in the parking lot.",
          ],
        ],
      },
      {
        chunk: "つぎのこうもくにいきましょう",
        romaji: "tsugi no kōmoku ni ikimashō",
        hiragana: "つぎのこうもくにいきましょう",
        meaning: "Let's move to the next item",
        whenToUse:
          "When discussion is good enough and time is tight.",
        examples: [
          [
            "つぎのこうもくにいきましょう",
            "tsugi no kōmoku ni ikimashō",
            "Let's move to the next item.",
          ],
          [
            "じかんなので、つぎへ",
            "jikan na node, tsugi e",
            "Time's up, so next.",
          ],
          [
            "ここまでで、つぎのトピックです",
            "koko made de, tsugi no topikku desu",
            "That's it here — next topic.",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "Chair voice",
        "Facilitation phrases are services to the group, not power trips. Warm tone matters.",
      ],
      [
        "がい = outside",
        "〜がい marks out-of-scope politely when paired with あとで.",
      ],
      [
        "Timebox aloud",
        "Saying ごふんで sets a social contract before debate expands.",
      ],
    ],
    culturalNote: [
      "Structure is hospitality",
      "A clear agenda and gentle parking lot are felt as care in Japanese meetings. Chaos reads as the chair not protecting everyone else's time.",
    ],
    shadowing: [
      [
        "Kyō no ajenda wa mittsu desu.",
        "きょうのアジェンダはみっつです。",
      ],
      [
        "Sore wa kyō no ajenda gai desu. Ato de betsu ni.",
        "それはきょうのアジェンダがいです。あとでべつに。",
      ],
      [
        "Tsugi no kōmoku ni ikimashō.",
        "つぎのこうもくにいきましょう。",
      ],
      [
        "Ajenda ni sotte susumemasu.",
        "アジェンダにそってすすめます。",
      ],
      [
        "Jikan na node, tsugi e.",
        "じかんなので、つぎへ。",
      ],
      [
        "Saigo ni akushon o kakunin shite owarimasu.",
        "さいごにアクションをかくにんしておわります。",
      ],
    ],
    quiz: [
      [
        "Meeting open staple:",
        [
          "きょうのアジェンダは",
          "ばかくらい",
          "ねむい",
          "かえれ",
        ],
        0,
        "State the agenda.",
      ],
      [
        "Tangent response:",
        [
          "yell",
          "アジェンダがい + あとで",
          "leave",
          "cry",
        ],
        1,
        "Park politely.",
      ],
      [
        "つぎのこうもくにいきましょう means:",
        [
          "Let's quit jobs",
          "Let's move to the next item",
          "Let's order pizza",
          "Let's sing",
        ],
        1,
        "Advance agenda.",
      ],
      [
        "Saying ごふんで helps:",
        [
          "hide risks",
          "timebox the item",
          "insult juniors",
          "delete slides",
        ],
        1,
        "Social time contract.",
      ],
    ],
    production: [
      [
        "Today's agenda has three items.",
        "きょうのアジェンダはみっつです",
        "Kyō no ajenda wa mittsu desu.",
        "きょうのアジェンダはみっつです。",
      ],
      [
        "That's outside today's agenda. Separately later.",
        "アジェンダがい + あとでべつに",
        "Sore wa kyō no ajenda gai desu. Ato de betsu ni.",
        "それはきょうのアジェンダがいです。あとでべつに。",
      ],
      [
        "Let's move to the next item.",
        "つぎのこうもくにいきましょう",
        "Tsugi no kōmoku ni ikimashō.",
        "つぎのこうもくにいきましょう。",
      ],
    ],
  },
  {
    id: "sp-18-5",
    unit: 18,
    unitTitle: "Presentation & Meetings",
    order: 5,
    title: "ふりかえりとまとめ",
    subtitle: "Summarize decisions so nobody leaves confused",
    scenario:
      "Near the end of a planning meeting, you practice reflecting decisions, owners, and deadlines out loud.",
    durationMin: 34,
    objectives: [
      "Summarize with ふりかえりますと / かくにんですが",
      "Name だれが / いつ / なに clearly",
      "Catch missing owners before adjourn",
      "Use いじょうで wrap + thanks",
      "Write the summary as you speak it",
    ],
    dialogue: [
      [
        "You",
        "Jikan mae desu. Furikaerimasu to, kettei wa futatsu desu.",
        "じかんまえです。ふりかえりますと、けっていはふたつです。",
        "We're ahead of time. Looking back, there are two decisions.",
      ],
      [
        "You",
        "Hitotsu: UI wa ashita made. Futatsu: API wa raishū.",
        "ひとつ：UIはあしたまで。ふたつ：APIはらいしゅう。",
        "One: UI by tomorrow. Two: API next week.",
      ],
      [
        "Chair",
        "Tanō wa?",
        "たんとうは？",
        "Owners?",
      ],
      [
        "You",
        "UI wa Alex-san. API wa watashi desu.",
        "UIはAlexさん。APIはわたしです。",
        "UI is Alex. API is me.",
      ],
      [
        "Alex",
        "Ashita no nanji?",
        "あしたのなんじ？",
        "What time tomorrow?",
      ],
      [
        "You",
        "Jūshichi-ji made de onegai shimasu.",
        "じゅうしちじまででおねがいします。",
        "By 17:00 please.",
      ],
      [
        "You",
        "Kakunin desu ga, hoka ni more wa arimasen ka?",
        "かくにんですが、ほかにもれはありませんか？",
        "Just to confirm — anything missing?",
      ],
      [
        "Colleague",
        "Nashi desu.",
        "なしです。",
        "Nothing.",
      ],
      [
        "You",
        "Ijō de kyō wa owari ni shimasu. Arigatō gozaimashita.",
        "いじょうできょうはおわりにします。ありがとうございました。",
        "With that, we'll end for today. Thank you.",
      ],
      [
        "Mentor",
        "Matome wa 'kioku' ja naku 'gōi no rokuon'.",
        "まとめは「きおく」じゃなく「ごういのろくおん」。",
        "A summary isn't memory — it's recording agreement.",
      ],
    ],
    patterns: [
      {
        chunk: "ふりかえりますと",
        romaji: "furikaerimasu to",
        hiragana: "ふりかえりますと",
        meaning: "Looking back / to recap",
        whenToUse:
          "End-of-meeting summary opener.",
        examples: [
          [
            "ふりかえりますと、けっていはふたつです",
            "furikaerimasu to, kettei wa futatsu desu",
            "To recap, there are two decisions.",
          ],
          [
            "ふりかえると、リスクがのこっています",
            "furikaeru to, risuku ga nokotte imasu",
            "Looking back, risks remain.",
          ],
          [
            "きょうをふりかえると、よくすすみました",
            "kyō o furikaeru to, yoku susumimashita",
            "Looking back on today, we made good progress.",
          ],
        ],
      },
      {
        chunk: "かくにんですが",
        romaji: "kakunin desu ga",
        hiragana: "かくにんですが",
        meaning: "Just to confirm…",
        whenToUse:
          "Before locking owners/dates; invites correction.",
        examples: [
          [
            "かくにんですが、あしたまでですね",
            "kakunin desu ga, ashita made desu ne",
            "Just to confirm — by tomorrow, right?",
          ],
          [
            "かくにんですが、たんとうはAlexさんです",
            "kakunin desu ga, tantō wa Alex-san desu",
            "Confirming: Alex is the owner.",
          ],
          [
            "かくにんですが、ほかにもれはありませんか",
            "kakunin desu ga, hoka ni more wa arimasen ka",
            "Confirming — anything else missing?",
          ],
        ],
      },
      {
        chunk: "いじょうで〜おわりにします",
        romaji: "ijō de ~ owari ni shimasu",
        hiragana: "いじょうで〜おわりにします",
        meaning: "With that, we'll end…",
        whenToUse:
          "Formal-ish close after summary.",
        examples: [
          [
            "いじょうできょうはおわりにします",
            "ijō de kyō wa owari ni shimasu",
            "With that, we'll end for today.",
          ],
          [
            "いじょうでミーティングをしめます",
            "ijō de mītingu o shimemasu",
            "With that, I'll close the meeting.",
          ],
          [
            "かんたんなまとめのいじょうです",
            "kantan na matome no ijō desu",
            "That's the brief summary.",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "Who / what / when",
        "A Japanese meeting summary that lacks たんとう or きげん isn't finished.",
      ],
      [
        "かくにんですが invites fix",
        "You're not accusing — you're offering a last edit window.",
      ],
      [
        "Speak the minutes",
        "Saying the summary aloud is how agreement becomes real before email.",
      ],
    ],
    culturalNote: [
      "Agreement must be audible",
      "Silent nods aren't enough. Restating decisions protects juniors who won't interrupt and seniors who half-listened while multitasking.",
    ],
    shadowing: [
      [
        "Furikaerimasu to, kettei wa futatsu desu.",
        "ふりかえりますと、けっていはふたつです。",
      ],
      [
        "Kakunin desu ga, hoka ni more wa arimasen ka?",
        "かくにんですが、ほかにもれはありませんか？",
      ],
      [
        "Ijō de kyō wa owari ni shimasu.",
        "いじょうできょうはおわりにします。",
      ],
      [
        "Kakunin desu ga, ashita made desu ne.",
        "かくにんですが、あしたまでですね。",
      ],
      [
        "UI wa Alex-san. API wa watashi desu.",
        "UIはAlexさん。APIはわたしです。",
      ],
      [
        "Arigatō gozaimashita.",
        "ありがとうございました。",
      ],
    ],
    quiz: [
      [
        "ふりかえりますと opens:",
        [
          "a karaoke set",
          "a meeting recap",
          "a fight",
          "a recipe",
        ],
        1,
        "Recap marker.",
      ],
      [
        "かくにんですが is for:",
        [
          "locking without checking",
          "inviting confirmation/correction",
          "insults",
          "passwords",
        ],
        1,
        "Confirm window.",
      ],
      [
        "A complete summary needs:",
        [
          "only vibes",
          "who / what / when",
          "only emojis",
          "only silence",
        ],
        1,
        "Owners and dates.",
      ],
      [
        "いじょうできょうはおわりにします means:",
        [
          "We quit the company",
          "We'll end for today",
          "We start overtime",
          "We delete the agenda",
        ],
        1,
        "Close.",
      ],
    ],
    production: [
      [
        "To recap, there are two decisions.",
        "ふりかえりますと + けっていはふたつ",
        "Furikaerimasu to, kettei wa futatsu desu.",
        "ふりかえりますと、けっていはふたつです。",
      ],
      [
        "Just to confirm — anything missing?",
        "かくにんですが + もれはありませんか",
        "Kakunin desu ga, hoka ni more wa arimasen ka?",
        "かくにんですが、ほかにもれはありませんか？",
      ],
      [
        "With that, we'll end for today.",
        "いじょうできょうはおわりにします",
        "Ijō de kyō wa owari ni shimasu.",
        "いじょうできょうはおわりにします。",
      ],
    ],
  },
  {
    id: "sp-18-6",
    unit: 18,
    unitTitle: "Presentation & Meetings",
    order: 6,
    title: "つぎのアクションまで",
    subtitle: "Leave with owners, dates, and a clean goodbye",
    scenario:
      "The meeting is ending. You lock next actions, thank people, and release the room without trailing chaos.",
    durationMin: 32,
    objectives: [
      "Assign with 〜さん、おねがいします",
      "Set dates with 〜までに",
      "Close with きょうはここまで / しつれいします",
      "Offer わからないてんはあとで",
      "Avoid restarting debate after the close",
    ],
    dialogue: [
      [
        "You",
        "Akushon o kakunin shimasu.",
        "アクションをかくにんします。",
        "I'll confirm the actions.",
      ],
      [
        "You",
        "Alex-san, UI o ashita made ni onegai shimasu.",
        "Alexさん、UIをあしたまでにおねがいします。",
        "Alex, UI by tomorrow please.",
      ],
      [
        "Alex",
        "Hai, uketamawarimashita.",
        "はい、うけたまわりました。",
        "Yes, understood.",
      ],
      [
        "You",
        "Watashi wa API o raishū moku-yō made ni.",
        "わたしはAPIをらいしゅうもくようまでにおくります。",
        "I'll deliver the API by next Thursday.",
      ],
      [
        "Chair",
        "Other?",
        "ほかは？",
        "Anything else?",
      ],
      [
        "You",
        "Wakaranai ten wa, ato de chat de dōzo.",
        "わからないてんは、あとでチャットでどうぞ。",
        "Anything unclear — ping chat later.",
      ],
      [
        "You",
        "Kyō wa koko made desu. Minasan, arigatō gozaimashita.",
        "きょうはここまでです。みなさん、ありがとうございました。",
        "That's all for today. Everyone, thank you.",
      ],
      [
        "All",
        "Arigatō gozaimashita.",
        "ありがとうございました。",
        "Thank you.",
      ],
      [
        "Alex",
        "Chotto matte, mou ichido giron…",
        "ちょっとまって、もういちどぎろん…",
        "Wait, one more debate…",
      ],
      [
        "You",
        "Ajenda wa tojimashita. Betsu de yoyaku shimashō.",
        "アジェンダはとじました。べつでよやくしましょう。",
        "Agenda's closed. Let's book a separate slot.",
      ],
    ],
    patterns: [
      {
        chunk: "〜さん、〜までにおねがいします",
        romaji: "~ san, ~ made ni onegai shimasu",
        hiragana: "〜さん、〜までにおねがいします",
        meaning: "X, please do Y by Z",
        whenToUse:
          "Public action assignment with deadline.",
        examples: [
          [
            "Alexさん、あしたまでにおねがいします",
            "Alex-san, ashita made ni onegai shimasu",
            "Alex, by tomorrow please.",
          ],
          [
            "みなさん、きんようまでにおねがいします",
            "minasan, kinyō made ni onegai shimasu",
            "Everyone, by Friday please.",
          ],
          [
            "レポートをげつようまでにおねがいします",
            "repōto o getsuyō made ni onegai shimasu",
            "The report by Monday please.",
          ],
        ],
      },
      {
        chunk: "きょうはここまでです",
        romaji: "kyō wa koko made desu",
        hiragana: "きょうはここまでです",
        meaning: "That's all for today",
        whenToUse:
          "Friendly meeting close before thanks.",
        examples: [
          [
            "きょうはここまでです",
            "kyō wa koko made desu",
            "That's all for today.",
          ],
          [
            "きょうはここまでにしましょう",
            "kyō wa koko made ni shimashō",
            "Let's stop here for today.",
          ],
          [
            "じかんですので、ここまで",
            "jikan desu node, koko made",
            "We're out of time, so here.",
          ],
        ],
      },
      {
        chunk: "べつでよやくしましょう",
        romaji: "betsu de yoyaku shimashō",
        hiragana: "べつでよやくしましょう",
        meaning: "Let's book a separate time",
        whenToUse:
          "When someone tries to reopen after close.",
        examples: [
          [
            "べつでよやくしましょう",
            "betsu de yoyaku shimashō",
            "Let's schedule separately.",
          ],
          [
            "みじかいフォローをいれますね",
            "mijikai forō o iremasu ne",
            "I'll add a short follow-up.",
          ],
          [
            "アジェンダはとじました",
            "ajenda wa tojimashita",
            "The agenda is closed.",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "Public assignment",
        "Naming だれ + いつ in the room beats private assumptions later.",
      ],
      [
        "Close is a boundary",
        "Restarting debate after ここまで burns trust in the chair.",
      ],
      [
        "うけたまわりました",
        "Alex's reply is humble receive — matching register in formal teams.",
      ],
    ],
    culturalNote: [
      "Thanks release the room",
      "ありがとうございました after ここまで is the social unlock. People wait for it before packing laptops or dropping off the call.",
    ],
    shadowing: [
      [
        "Alex-san, UI o ashita made ni onegai shimasu.",
        "Alexさん、UIをあしたまでにおねがいします。",
      ],
      [
        "Kyō wa koko made desu.",
        "きょうはここまでです。",
      ],
      [
        "Betsu de yoyaku shimashō.",
        "べつでよやくしましょう。",
      ],
      [
        "Wakaranai ten wa, ato de chat de dōzo.",
        "わからないてんは、あとでチャットでどうぞ。",
      ],
      [
        "Ajenda wa tojimashita.",
        "アジェンダはとじました。",
      ],
      [
        "Minasan, arigatō gozaimashita.",
        "みなさん、ありがとうございました。",
      ],
    ],
    quiz: [
      [
        "Action assign pattern:",
        [
          "〜までにおねがいします",
          "うるさい",
          "ねむい",
          "ばか",
        ],
        0,
        "Owner + deadline.",
      ],
      [
        "きょうはここまでです means:",
        [
          "Work forever",
          "That's all for today",
          "Start now",
          "Cancel salary",
        ],
        1,
        "Close.",
      ],
      [
        "Someone reopens after close — say:",
        [
          "Sure, 2 more hours",
          "べつでよやくしましょう",
          "You're fired",
          "Ignore forever",
        ],
        1,
        "Separate slot.",
      ],
      [
        "うけたまわりました is:",
        [
          "rude reject",
          "humble 'received/understood'",
          "a food order",
          "dialect only",
        ],
        1,
        "Humble receive.",
      ],
    ],
    production: [
      [
        "Alex, UI by tomorrow please.",
        "Alexさん + あしたまでにおねがいします",
        "Alex-san, ashita made ni onegai shimasu.",
        "Alexさん、あしたまでにおねがいします。",
      ],
      [
        "That's all for today.",
        "きょうはここまでです",
        "Kyō wa koko made desu.",
        "きょうはここまでです。",
      ],
      [
        "Let's schedule separately.",
        "べつでよやくしましょう",
        "Betsu de yoyaku shimashō.",
        "べつでよやくしましょう。",
      ],
    ],
  },
  {
    id: "sp-19-1",
    unit: 19,
    unitTitle: "Humor & Banter",
    order: 1,
    title: "ツッコミきほん",
    subtitle: "The straight-man line that makes the joke land",
    scenario:
      "Your friend drops a wild claim at izakaya. You practice light ツッコミ that bonds instead of wounds.",
    durationMin: 34,
    objectives: [
      "Deliver short ツッコミ like なんでやねん / それはない",
      "Keep timing immediate and tone warm",
      "Match friend-register, not meeting-register",
      "Know when ツッコミ becomes mean",
      "Laugh with, not at, the ボケ",
    ],
    dialogue: [
      [
        "Friend",
        "Kinō, go-jikan de Nihongo masutā shita wa.",
        "きのう、ごじかんでにほんごマスターしたわ。",
        "Yesterday I mastered Japanese in five hours.",
      ],
      [
        "You",
        "Sore wa nai yo.",
        "それはないよ。",
        "No way / that's not a thing.",
      ],
      [
        "Friend",
        "Hontō. Yume no naka de ne.",
        "ほんとう。ゆめのなかでね。",
        "Really. In a dream, though.",
      ],
      [
        "You",
        "Āā! Nande ya nen!",
        "あああ！なんでやねん！",
        "Aaaah! Why would you!",
      ],
      [
        "Friend",
        "Tsukkomi arigatō.",
        "ツッコミありがとう。",
        "Thanks for the tsukkomi.",
      ],
      [
        "You",
        "Boke ga nai to, tsukkomi mo hikaranai.",
        "ボケがないと、ツッコミもひからない。",
        "Without a boke, tsukkomi doesn't spark.",
      ],
      [
        "Friend",
        "Jā mō ikkai. Kyō kara shachō.",
        "じゃあもういっかい。きょうからしゃちょう。",
        "One more. I'm president starting today.",
      ],
      [
        "You",
        "Uso daro. Shōmei wa?",
        "うそだろ。しょうめいは？",
        "Yeah right. Proof?",
      ],
      [
        "Friend",
        "Meishi… nai.",
        "めいし…ない。",
        "Business card… don't have one.",
      ],
      [
        "You",
        "Yappari! Kanpeki na tsukkomi taimingu.",
        "やっぱり！かんぺきなツッコミタイミング。",
        "Knew it! Perfect tsukkomi timing.",
      ],
    ],
    patterns: [
      {
        chunk: "それはない",
        romaji: "sore wa nai",
        hiragana: "それはない",
        meaning: "That's not happening / come on / no way",
        whenToUse:
          "Friendly call-out of exaggeration. Soften with よ.",
        examples: [
          [
            "それはないよ",
            "sore wa nai yo",
            "Come on, that's not a thing.",
          ],
          [
            "さすがにそれはない",
            "sasuga ni sore wa nai",
            "That's going too far.",
          ],
          [
            "いくらなんでもそれはない",
            "ikura nan demo sore wa nai",
            "No matter how you spin it, no.",
          ],
        ],
      },
      {
        chunk: "なんでやねん",
        romaji: "nande ya nen",
        hiragana: "なんでやねん",
        meaning: "Why would you / what the— (Kansai-flavored tsukkomi)",
        whenToUse:
          "Playful; widely understood as comedy flavor even outside Kansai.",
        examples: [
          [
            "なんでやねん！",
            "nande ya nen!",
            "Why would you!",
          ],
          [
            "いきなりなんでやねん",
            "ikinari nande ya nen",
            "Out of nowhere — why!",
          ],
          [
            "またそれ、なんでやねん",
            "mata sore, nande ya nen",
            "That again — why!",
          ],
        ],
      },
      {
        chunk: "うそだろ / まじか",
        romaji: "uso daro / maji ka",
        hiragana: "うそだろ / まじか",
        meaning: "No way / seriously?",
        whenToUse:
          "Quick disbelief tsukkomi among close friends.",
        examples: [
          [
            "うそだろ",
            "uso daro",
            "Yeah right.",
          ],
          [
            "まじかよ",
            "maji ka yo",
            "Are you serious?",
          ],
          [
            "しんじられないんだけど",
            "shinjirarenai n da kedo",
            "I can't believe that…",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "ボケ / ツッコミ pair",
        "The funny claim is ボケ; your corrective snap is ツッコミ. Both roles are cooperative.",
      ],
      [
        "それはない ≠ logical essay",
        "It's a beat, not a lecture. One short line.",
      ],
      [
        "Register",
        "Never drop なんでやねん on your boss in a formal meeting.",
      ],
    ],
    culturalNote: [
      "Comedy is teamwork",
      "In Japanese banter, a good ツッコミ is a gift — it completes the friend's joke. Silence can feel colder than a soft roast.",
    ],
    shadowing: [
      [
        "Sore wa nai yo.",
        "それはないよ。",
      ],
      [
        "Nande ya nen!",
        "なんでやねん！",
      ],
      [
        "Uso daro.",
        "うそだろ。",
      ],
      [
        "Maji ka yo.",
        "まじかよ。",
      ],
      [
        "Mata sore, nande ya nen.",
        "またそれ、なんでやねん。",
      ],
      [
        "Tsukkomi arigatō.",
        "ツッコミありがとう。",
      ],
    ],
    quiz: [
      [
        "ツッコミ's job is to:",
        [
          "ignore the joke",
          "snap back and complete the bit",
          "fire someone",
          "order sake only",
        ],
        1,
        "Straight-man line.",
      ],
      [
        "それはない among friends means:",
        [
          "formal agreement",
          "come on / no way",
          "please sign",
          "train delay",
        ],
        1,
        "Call-out.",
      ],
      [
        "なんでやねん is:",
        [
          "boardroom keigo",
          "playful Kansai-flavored tsukkomi",
          "hospital form",
          "bank PIN",
        ],
        1,
        "Comedy flavor.",
      ],
      [
        "Drop なんでやねん on a client?",
        [
          "always",
          "never in formal settings",
          "required by law",
          "only Mondays",
        ],
        1,
        "Wrong register.",
      ],
    ],
    production: [
      [
        "Come on, that's not a thing.",
        "それはないよ",
        "Sore wa nai yo.",
        "それはないよ。",
      ],
      [
        "Why would you!",
        "なんでやねん",
        "Nande ya nen!",
        "なんでやねん！",
      ],
      [
        "Yeah right.",
        "うそだろ",
        "Uso daro.",
        "うそだろ。",
      ],
    ],
  },
  {
    id: "sp-19-2",
    unit: 19,
    unitTitle: "Humor & Banter",
    order: 2,
    title: "ともだちをちょっかい",
    subtitle: "Tease close friends without crossing the line",
    scenario:
      "Your friend is late again. You tease, they counter, and you land the joke with affection.",
    durationMin: 33,
    objectives: [
      "Use またそれ / いつものやつ for familiar teasing",
      "Soft landing with じょうだん / でもありがとう",
      "Read whether the friend is laughing",
      "Avoid sensitive topics (family, body, money) unless invited",
      "Accept being teased back gracefully",
    ],
    dialogue: [
      [
        "Friend",
        "Gomen, chotto okureta.",
        "ごめん、ちょっとおくれた。",
        "Sorry, I'm a bit late.",
      ],
      [
        "You",
        "Mata sore. Itsumo no yatsu da ne.",
        "またそれ。いつものやつだね。",
        "That again. The usual, huh.",
      ],
      [
        "Friend",
        "Kōtsū ga…",
        "こうつうが…",
        "Traffic was…",
      ],
      [
        "You",
        "Kōtsū? Kimi no tokei no hanashi desho.",
        "こうつう？きみのとけいのはなしでしょ。",
        "Traffic? You mean your watch, right?",
      ],
      [
        "Friend",
        "Kibishii nā. Demo warui.",
        "きびしいなあ。でもわるい。",
        "Harsh. But my bad.",
      ],
      [
        "You",
        "Jōdan jōdan. Kita nara ii yo.",
        "じょうだんじょうだん。きたならいいよ。",
        "Kidding kidding. Glad you made it.",
      ],
      [
        "Friend",
        "Omae mo kinō okureta yo na.",
        "おまえもきのうおくれたよな。",
        "You were late yesterday too.",
      ],
      [
        "You",
        "Ugh… mitomezaru o enai.",
        "うぐ…みとめざるをえない。",
        "Ugh… I have to admit it.",
      ],
      [
        "Friend",
        "Tsukkomi kaeshi!",
        "ツッコミかえし！",
        "Tsukkomi reverse!",
      ],
      [
        "You",
        "Yoshi yoshi. Nakayoshi no shōko.",
        "よしよし。なかよしのしょうこ。",
        "Alright. Proof we're close.",
      ],
    ],
    patterns: [
      {
        chunk: "またそれ",
        romaji: "mata sore",
        hiragana: "またそれ",
        meaning: "That again",
        whenToUse:
          "Teasing a repeated habit among close friends.",
        examples: [
          [
            "またそれかよ",
            "mata sore ka yo",
            "That again?",
          ],
          [
            "またそのせつめいか",
            "mata sono setsumei ka",
            "That excuse again?",
          ],
          [
            "またおくれ？",
            "mata okure?",
            "Late again?",
          ],
        ],
      },
      {
        chunk: "いつものやつ",
        romaji: "itsumo no yatsu",
        hiragana: "いつものやつ",
        meaning: "The usual (bit / excuse / move)",
        whenToUse:
          "Naming a familiar pattern fondly or teasingly.",
        examples: [
          [
            "いつものやつだね",
            "itsumo no yatsu da ne",
            "That's the usual.",
          ],
          [
            "いつものパターンきた",
            "itsumo no patān kita",
            "Here comes the usual pattern.",
          ],
          [
            "またいつものやつやってる",
            "mata itsumo no yatsu yatteru",
            "Doing the usual thing again.",
          ],
        ],
      },
      {
        chunk: "じょうだんじょうだん",
        romaji: "jōdan jōdan",
        hiragana: "じょうだんじょうだん",
        meaning: "Just kidding / kidding kidding",
        whenToUse:
          "Soft landing if the tease might sting.",
        examples: [
          [
            "じょうだんじょうだん、きにしないで",
            "jōdan jōdan, ki ni shinaide",
            "Kidding — don't worry.",
          ],
          [
            "わりとほんき？ …じょうだん",
            "wari to honki? …jōdan",
            "Kinda serious? …kidding.",
          ],
          [
            "おこらないで、じょうだんだから",
            "okoranaide, jōdan da kara",
            "Don't get mad — it was a joke.",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "Closeness tax",
        "Teasing works only where trust already exists. With new coworkers, skip it.",
      ],
      [
        "Land the plane",
        "If their smile fades, じょうだん + sincere line immediately.",
      ],
      [
        "Take the return roast",
        "Blocking all counters kills the game.",
      ],
    ],
    culturalNote: [
      "Affection wears a rough jacket",
      "Among close friends, a light roast can mean 'I see you.' The safety check is mutual laughter — if only you laugh, stop.",
    ],
    shadowing: [
      [
        "Mata sore. Itsumo no yatsu da ne.",
        "またそれ。いつものやつだね。",
      ],
      [
        "Jōdan jōdan. Kita nara ii yo.",
        "じょうだんじょうだん。きたならいいよ。",
      ],
      [
        "Mata okure?",
        "またおくれ？",
      ],
      [
        "Itsumo no patān kita.",
        "いつものパターンきた。",
      ],
      [
        "Okoranaide, jōdan da kara.",
        "おこらないで、じょうだんだから。",
      ],
      [
        "Nakayoshi no shōko.",
        "なかよしのしょうこ。",
      ],
    ],
    quiz: [
      [
        "またそれ teases:",
        [
          "a new law",
          "a repeated habit",
          "keigo",
          "train maps",
        ],
        1,
        "Familiar bit.",
      ],
      [
        "If their smile dies, you:",
        [
          "double down",
          "じょうだん + soften",
          "leave forever",
          "switch to English insults",
        ],
        1,
        "Soft landing.",
      ],
      [
        "いつものやつ means:",
        [
          "a stranger",
          "the usual bit",
          "a boss",
          "a password",
        ],
        1,
        "Familiar pattern.",
      ],
      [
        "Teasing brand-new coworkers is:",
        [
          "always safe",
          "risky / usually skip",
          "required",
          "HR-approved always",
        ],
        1,
        "Needs trust first.",
      ],
    ],
    production: [
      [
        "That again. The usual, huh.",
        "またそれ + いつものやつ",
        "Mata sore. Itsumo no yatsu da ne.",
        "またそれ。いつものやつだね。",
      ],
      [
        "Kidding kidding. Glad you made it.",
        "じょうだんじょうだん + きたならいいよ",
        "Jōdan jōdan. Kita nara ii yo.",
        "じょうだんじょうだん。きたならいいよ。",
      ],
      [
        "Late again?",
        "またおくれ？",
        "Mata okure?",
        "またおくれ？",
      ],
    ],
  },
  {
    id: "sp-19-3",
    unit: 19,
    unitTitle: "Humor & Banter",
    order: 3,
    title: "じこげとく — わらいをとる",
    subtitle: "Roast yourself first so others feel safe",
    scenario:
      "You spill coffee before a hangout. Practice self-deprecating lines that invite warmth, not pity.",
    durationMin: 32,
    objectives: [
      "Use わたしらしい / だめだなあ on yourself",
      "Keep self-roast light — not fish for trauma care",
      "Bounce to a forward-looking line",
      "Accept kindness after self-deprecation",
      "Avoid permanent-identity insults about yourself",
    ],
    dialogue: [
      [
        "You",
        "Mita? Kōhī, zenbu seki ni…",
        "みた？コーヒー、ぜんぶせきに…",
        "See? Coffee, all over the seat…",
      ],
      [
        "Friend",
        "Daijōbu? Napkin aru yo.",
        "だいじょうぶ？ナプキンあるよ。",
        "You OK? I've got napkins.",
      ],
      [
        "You",
        "Watashi rashii ne. Asa kara dame da nā.",
        "わたしらしいね。あさからだめだなあ。",
        "So me. Already a mess this morning.",
      ],
      [
        "Friend",
        "Sonna koto nai yo.",
        "そんなことないよ。",
        "That's not true.",
      ],
      [
        "You",
        "Jōdan. Fukidashi wa tsuita. Arigatō.",
        "じょうだん。ふきだしはついた。ありがとう。",
        "Kidding. Spill crisis handled. Thanks.",
      ],
      [
        "Friend",
        "Kyō no unsei, kōhī-kei?",
        "きょうのうんせい、コーヒーけい？",
        "Today's fortune: coffee-type?",
      ],
      [
        "You",
        "Sō. Boke wa jibun de yaru to yasui.",
        "そう。ボケはじぶんでやるとやすい。",
        "Yep. Doing the boke yourself is cheap insurance.",
      ],
      [
        "Friend",
        "Tsugi wa watashi no ban.",
        "つぎはわたしのばん。",
        "Next turn's mine.",
      ],
      [
        "You",
        "Kitai shite ru.",
        "きたいしてる。",
        "Looking forward to it.",
      ],
      [
        "Mentor",
        "Jiko-getoku wa doa. Jiko-bōryoku wa kabe.",
        "じこげとくはドア。じこぼうりょくはかべ。",
        "Self-deprecation is a door. Self-violence is a wall.",
      ],
    ],
    patterns: [
      {
        chunk: "わたしらしいね",
        romaji: "watashi rashii ne",
        hiragana: "わたしらしいね",
        meaning: "Typical me / so me",
        whenToUse:
          "Light self-call on a small fail among friends.",
        examples: [
          [
            "またわすれた。わたしらしいね",
            "mata wasureta. Watashi rashii ne",
            "Forgot again. So me.",
          ],
          [
            "みちにもうよう。ぼくらしい",
            "michi ni mayou. Boku rashii",
            "Got lost. Classic me.",
          ],
          [
            "さいふわすれた。わたしらしいわ",
            "saifu wasureta. Watashi rashii wa",
            "Forgot my wallet. So me.",
          ],
        ],
      },
      {
        chunk: "だめだなあ",
        romaji: "dame da nā",
        hiragana: "だめだなあ",
        meaning: "I'm hopeless / ah man (self-directed)",
        whenToUse:
          "Playful sigh at yourself; smile while saying it.",
        examples: [
          [
            "あさからだめだなあ",
            "asa kara dame da nā",
            "Already hopeless this morning.",
          ],
          [
            "きおくりょく、だめだなあ",
            "kioku-ryoku, dame da nā",
            "Memory — hopeless.",
          ],
          [
            "またやっちゃった。だめだわ",
            "mata yacchatta. Dame da wa",
            "Did it again. Hopeless.",
          ],
        ],
      },
      {
        chunk: "あるある（じぶんごと）",
        romaji: "aru aru (jibun-goto)",
        hiragana: "あるある（じぶんごと）",
        meaning: "Relatable fail framing",
        whenToUse:
          "Turn your mishap into shared 'yep, that happens.'",
        examples: [
          [
            "あるある、コーヒーこぼれ",
            "aru aru, kōhī kobore",
            "Classic — coffee spill.",
          ],
          [
            "あるあるだよね、でんしゃののりすごし",
            "aru aru da yo ne, densha no norisugoshi",
            "So relatable, missing your stop.",
          ],
          [
            "これ、あるあるすぎる",
            "kore, aru aru sugiru",
            "This is way too relatable.",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "Invite, don't drown",
        "One self-roast beat is enough. Long self-hate speeches make friends into therapists.",
      ],
      [
        "Bounce forward",
        "After だめだなあ, wipe the spill / thank / move on.",
      ],
      [
        "Gendered endings",
        "わ / なあ flavors exist; pick what fits your voice.",
      ],
    ],
    culturalNote: [
      "Lower yourself to lift the room",
      "Light self-deprecation is a social lubricant in Japanese friend groups — it reduces competition. Heavy self-negation, though, makes people uncomfortable.",
    ],
    shadowing: [
      [
        "Watashi rashii ne. Asa kara dame da nā.",
        "わたしらしいね。あさからだめだなあ。",
      ],
      [
        "Mata wasureta. Watashi rashii ne.",
        "またわすれた。わたしらしいね。",
      ],
      [
        "Aru aru, kōhī kobore.",
        "あるある、コーヒーこぼれ。",
      ],
      [
        "Mata yacchatta. Dame da wa.",
        "またやっちゃった。だめだわ。",
      ],
      [
        "Jōdan. Arigatō.",
        "じょうだん。ありがとう。",
      ],
      [
        "Boke wa jibun de yaru to yasui.",
        "ボケはじぶんでやるとやすい。",
      ],
    ],
    quiz: [
      [
        "わたしらしいね is usually:",
        [
          "praising a boss",
          "light self-tease",
          "formal keigo",
          "a lawsuit",
        ],
        1,
        "Typical me.",
      ],
      [
        "After self-deprecation, best next:",
        [
          "monologue for 10 minutes",
          "bounce forward / thank",
          "cry only",
          "blame everyone",
        ],
        1,
        "Land and move.",
      ],
      [
        "あるある frames a fail as:",
        [
          "unique shame",
          "shared relatable bit",
          "criminal",
          "keigo",
        ],
        1,
        "Relatable.",
      ],
      [
        "Self-deprecation vs self-violence:",
        [
          "same always",
          "light invite vs heavy wall",
          "only grammar",
          "only dialect",
        ],
        1,
        "Keep it light.",
      ],
    ],
    production: [
      [
        "So me. Already a mess this morning.",
        "わたしらしいね + だめだなあ",
        "Watashi rashii ne. Asa kara dame da nā.",
        "わたしらしいね。あさからだめだなあ。",
      ],
      [
        "Forgot again. So me.",
        "またわすれた + わたしらしいね",
        "Mata wasureta. Watashi rashii ne.",
        "またわすれた。わたしらしいね。",
      ],
      [
        "Classic — coffee spill.",
        "あるある + コーヒーこぼれ",
        "Aru aru, kōhī kobore.",
        "あるある、コーヒーこぼれ。",
      ],
    ],
  },
  {
    id: "sp-19-4",
    unit: 19,
    unitTitle: "Humor & Banter",
    order: 4,
    title: "くうきをよむ",
    subtitle: "Know when the joke should stay in your pocket",
    scenario:
      "A friend's pet is sick. You feel a joke rising — and practice reading the room to shelve it.",
    durationMin: 35,
    objectives: [
      "Spot low-energy / serious cues before joking",
      "Switch to だいじょうぶ？ / つらいね support mode",
      "Use いまはじょうだんじゃないね if needed",
      "Re-enter humor only after they open the door",
      "Apologize briefly if a joke misfires",
    ],
    dialogue: [
      [
        "Friend",
        "Kyō wa… chotto heiki ja nai.",
        "きょうは…ちょっとへいきじゃない。",
        "Today I'm… not really OK.",
      ],
      [
        "You",
        "Dō shita? Daijōbu?",
        "どうした？だいじょうぶ？",
        "What happened? You OK?",
      ],
      [
        "Friend",
        "Pet ga byōki de…",
        "ペットがびょうきで…",
        "My pet is sick…",
      ],
      [
        "You",
        "(kokoro) Jōdan, yametoite.",
        "（こころ）じょうだん、やめといて。",
        "(to self) Shelve the joke.",
      ],
      [
        "You",
        "Tsurai ne… Nan ka dekiru koto aru?",
        "つらいね…なんかできることある？",
        "That's hard… Anything I can do?",
      ],
      [
        "Friend",
        "Ima wa kiite kureru dake de ii.",
        "いまはきいてくれるだけでいい。",
        "Just listening is enough for now.",
      ],
      [
        "You",
        "Un. Itsu demo.",
        "うん。いつでも。",
        "Yeah. Anytime.",
      ],
      [
        "Friend",
        "(ato de) Gomen, heikyō na kanji de.",
        "（あとで）ごめん、へいきょうなかんじで。",
        "(later) Sorry for the heavy vibe.",
      ],
      [
        "You",
        "Ki ni shinai. Ima wa jōdan ja nakatta ne.",
        "きにしない。いまはじょうだんじゃなかったね。",
        "Don't worry. That wasn't a joke moment.",
      ],
      [
        "Mentor",
        "Kūki o yomu = warai o korosu nja naku, taimingu o mamoru.",
        "くうきをよむ＝わらいをころすんじゃなく、タイミングをまもる。",
        "Reading the room isn't killing humor — it's protecting timing.",
      ],
    ],
    patterns: [
      {
        chunk: "だいじょうぶ？",
        romaji: "daijōbu?",
        hiragana: "だいじょうぶ？",
        meaning: "You OK?",
        whenToUse:
          "First check when energy drops. Soft, not invasive.",
        examples: [
          [
            "だいじょうぶ？かおいろわるいよ",
            "daijōbu? Kaoiro warui yo",
            "You OK? You look pale.",
          ],
          [
            "きょう、だいじょうぶ？",
            "kyō, daijōbu?",
            "You OK today?",
          ],
          [
            "むりしないで、だいじょうぶ？",
            "muri shinaide, daijōbu?",
            "Don't push — you OK?",
          ],
        ],
      },
      {
        chunk: "つらいね",
        romaji: "tsurai ne",
        hiragana: "つらいね",
        meaning: "That's tough / I'm with you in the feeling",
        whenToUse:
          "Validate without fixing immediately.",
        examples: [
          [
            "それはつらいね",
            "sore wa tsurai ne",
            "That's really hard.",
          ],
          [
            "うん、つらいよね",
            "un, tsurai yo ne",
            "Yeah, it hurts, right?",
          ],
          [
            "きいてるだけでも、つらいねってつたわる",
            "kiiteru dake demo, tsurai ne tte tsutawaru",
            "Even just listening, 'that's hard' lands.",
          ],
        ],
      },
      {
        chunk: "いまはじょうだんじゃないね",
        romaji: "ima wa jōdan ja nai ne",
        hiragana: "いまはじょうだんじゃないね",
        meaning: "This isn't a joke moment",
        whenToUse:
          "Explicitly mark tone shift; also for self-check aloud.",
        examples: [
          [
            "いまはじょうだんじゃないね",
            "ima wa jōdan ja nai ne",
            "Not a joking moment.",
          ],
          [
            "わるい、じょうだんわるかった",
            "warui, jōdan warukatta",
            "My bad — that joke was wrong.",
          ],
          [
            "くうき、まちがえた。ごめん",
            "kūki, machigaeta. Gomen",
            "Misread the room. Sorry.",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "Priority swap",
        "Support language outranks banter when stakes are real.",
      ],
      [
        "Short beats",
        "だいじょうぶ？ + つらいね often enough; don't interview.",
      ],
      [
        "Repair",
        "If you joked wrong: ごめん、わるかった — one line, then listen.",
      ],
    ],
    culturalNote: [
      "くうき is a skill, not magic",
      "Reading くうき means watching face, pace, and topic weight. Friends trust you more when you can both joke and go quiet.",
    ],
    shadowing: [
      [
        "Daijōbu?",
        "だいじょうぶ？",
      ],
      [
        "Tsurai ne… Nan ka dekiru koto aru?",
        "つらいね…なんかできることある？",
      ],
      [
        "Ima wa jōdan ja nai ne.",
        "いまはじょうだんじゃないね。",
      ],
      [
        "Warui, jōdan warukatta.",
        "わるい、じょうだんわるかった。",
      ],
      [
        "Kūki, machigaeta. Gomen.",
        "くうき、まちがえた。ごめん。",
      ],
      [
        "Un. Itsu demo.",
        "うん。いつでも。",
      ],
    ],
    quiz: [
      [
        "Friend is heavy — first move:",
        [
          "なんでやねん immediately",
          "だいじょうぶ？",
          "ignore",
          "sing",
        ],
        1,
        "Check-in.",
      ],
      [
        "つらいね does what?",
        [
          "fixes everything",
          "validates feeling",
          "ends friendship",
          "orders food",
        ],
        1,
        "Empathy beat.",
      ],
      [
        "Joke misfire repair:",
        [
          "double the roast",
          "ごめん、わるかった",
          "leave country",
          "switch to keigo forever",
        ],
        1,
        "Brief apology.",
      ],
      [
        "Reading the room means:",
        [
          "never joke again",
          "protect timing",
          "only use dialect",
          "only text",
        ],
        1,
        "Timing skill.",
      ],
    ],
    production: [
      [
        "You OK?",
        "だいじょうぶ？",
        "Daijōbu?",
        "だいじょうぶ？",
      ],
      [
        "That's hard… Anything I can do?",
        "つらいね + できることある",
        "Tsurai ne… Nan ka dekiru koto aru?",
        "つらいね…なんかできることある？",
      ],
      [
        "Not a joking moment.",
        "いまはじょうだんじゃないね",
        "Ima wa jōdan ja nai ne.",
        "いまはじょうだんじゃないね。",
      ],
    ],
  },
  {
    id: "sp-19-5",
    unit: 19,
    unitTitle: "Humor & Banter",
    order: 5,
    title: "ボケて、リカバリー",
    subtitle: "Throw a silly pitch, then catch your own fall",
    scenario:
      "You attempt a dad joke in a group chat hangout. It flops — practice recovering with grace.",
    durationMin: 34,
    objectives: [
      "Attempt a light ボケ without forcing",
      "Recover with すべった / さいあかのギャグだった",
      "Invite others to ツッコミ instead of explaining the joke",
      "Know when to stop trying a second joke",
      "Keep dignity with laughter, not excuses",
    ],
    dialogue: [
      [
        "You",
        "Kinō no tsuki, mangetsu… mangetsu tte, man ga getsu?",
        "きのうのつき、まんげつ…まんげつって、まんがげつ？",
        "Last night's moon was full… full moon… manga moon?",
      ],
      [
        "Friend",
        "…Ha?",
        "…は？",
        "…Huh?",
      ],
      [
        "You",
        "Subetta. Saiaku no gyagu datta.",
        "すべった。さいあくのギャグだった。",
        "It bombed. Worst gag ever.",
      ],
      [
        "Friend",
        "Tsukkomi: sore wa nai.",
        "ツッコミ：それはない。",
        "Tsukkomi: that's not a thing.",
      ],
      [
        "You",
        "Arigatō, tasukatta.",
        "ありがとう、たすかった。",
        "Thanks, you saved me.",
      ],
      [
        "Friend",
        "Mata chōsen suru no?",
        "またちょうせんするの？",
        "Gonna try again?",
      ],
      [
        "You",
        "Iya, kyō wa ichikai de jūbun.",
        "いや、きょうはいっかいでじゅうぶん。",
        "Nah, once is enough today.",
      ],
      [
        "Other",
        "Yokatta, jibun de subetta tte ieru hito.",
        "よかった、じぶんですべったっていえるひと。",
        "Nice — someone who can say they bombed.",
      ],
      [
        "You",
        "Boke wa yūki. Recovery wa aisatsu.",
        "ボケはゆうき。リカバリーはあいさつ。",
        "A boke is courage. Recovery is manners.",
      ],
      [
        "Friend",
        "Kanpai de kesō.",
        "かんぱいでけそう。",
        "We'll erase it with a toast.",
      ],
    ],
    patterns: [
      {
        chunk: "すべった",
        romaji: "subetta",
        hiragana: "すべった",
        meaning: "It bombed / the joke slipped",
        whenToUse:
          "Admit a failed joke quickly; invites mercy laugh.",
        examples: [
          [
            "あ、すべった",
            "a, subetta",
            "Ah, that bombed.",
          ],
          [
            "かんぜんにすべったわ",
            "kanzen ni subetta wa",
            "That totally bombed.",
          ],
          [
            "すべりました。すみません",
            "suberimashita. Sumimasen",
            "That bombed. Sorry. (polite)",
          ],
        ],
      },
      {
        chunk: "さいあくのギャグだった",
        romaji: "saiaku no gyagu datta",
        hiragana: "さいあくのギャグだった",
        meaning: "That was the worst gag",
        whenToUse:
          "Self-tsukkomi after a flop.",
        examples: [
          [
            "さいあくのギャグだった",
            "saiaku no gyagu datta",
            "Worst gag ever.",
          ],
          [
            "パパギャグだった、ごめん",
            "papa gyagu datta, gomen",
            "Dad joke — sorry.",
          ],
          [
            "じぶんでもわからんギャグだった",
            "jibun demo wakaran gyagu datta",
            "Even I don't get that gag.",
          ],
        ],
      },
      {
        chunk: "きょうはいっかいでじゅうぶん",
        romaji: "kyō wa ikkai de jūbun",
        hiragana: "きょうはいっかいでじゅうぶん",
        meaning: "Once is enough for today",
        whenToUse:
          "Stop digging after a flop.",
        examples: [
          [
            "きょうはいっかいでじゅうぶん",
            "kyō wa ikkai de jūbun",
            "Once is enough today.",
          ],
          [
            "つぎはまたこんど",
            "tsugi wa mata kondo",
            "Next try another time.",
          ],
          [
            "ギャグはやすみます",
            "gyagu wa yasumimasu",
            "I'm resting the gags.",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "Name the flop",
        "Naming すべった is itself a social repair.",
      ],
      [
        "Don't explain",
        "Explaining a dead joke kills it twice.",
      ],
      [
        "One and done",
        "A second forced joke after a flop looks needy.",
      ],
    ],
    culturalNote: [
      "Grace after slip",
      "Japanese friend groups often forgive a bad joke instantly if you own it. Defensiveness ('you just don't get it') is what sticks awkwardly.",
    ],
    shadowing: [
      [
        "Subetta. Saiaku no gyagu datta.",
        "すべった。さいあくのギャグだった。",
      ],
      [
        "A, subetta.",
        "あ、すべった。",
      ],
      [
        "Kyō wa ikkai de jūbun.",
        "きょうはいっかいでじゅうぶん。",
      ],
      [
        "Papa gyagu datta, gomen.",
        "パパギャグだった、ごめん。",
      ],
      [
        "Arigatō, tasukatta.",
        "ありがとう、たすかった。",
      ],
      [
        "Gyagu wa yasumimasu.",
        "ギャグはやすみます。",
      ],
    ],
    quiz: [
      [
        "すべった means:",
        [
          "I won",
          "the joke bombed",
          "train arrived",
          "paid rent",
        ],
        1,
        "Flop admit.",
      ],
      [
        "After a flop, avoid:",
        [
          "owning it",
          "long explanations",
          "thanking tsukkomi",
          "stopping",
        ],
        1,
        "Don't autopsy.",
      ],
      [
        "さいあくのギャグだった is:",
        [
          "self-tsukkomi",
          "keigo to clients",
          "legal term",
          "menu item",
        ],
        0,
        "Self-call.",
      ],
      [
        "Second forced joke after flop:",
        [
          "always funny",
          "often needy",
          "required",
          "keigo",
        ],
        1,
        "Stop digging.",
      ],
    ],
    production: [
      [
        "It bombed. Worst gag ever.",
        "すべった + さいあくのギャグ",
        "Subetta. Saiaku no gyagu datta.",
        "すべった。さいあくのギャグだった。",
      ],
      [
        "Once is enough today.",
        "きょうはいっかいでじゅうぶん",
        "Kyō wa ikkai de jūbun.",
        "きょうはいっかいでじゅうぶん。",
      ],
      [
        "Ah, that bombed.",
        "あ、すべった",
        "A, subetta.",
        "あ、すべった。",
      ],
    ],
  },
  {
    id: "sp-19-6",
    unit: 19,
    unitTitle: "Humor & Banter",
    order: 6,
    title: "やさしくおとすバンター",
    subtitle: "Close the roast with warmth so nobody leaves bruised",
    scenario:
      "After a round of teasing about cooking fails, you practice landing lines that restore everyone.",
    durationMin: 33,
    objectives: [
      "End banter with でもすきだよ / たのしかった",
      "Use おたがいさま when both got roasted",
      "Invite next hang without leftover sting",
      "Notice who went quiet and check in",
      "Keep banter as a loop that returns to care",
    ],
    dialogue: [
      [
        "Friend",
        "Omae no ryōri, mada kikenbutsu.",
        "おまえのりょうり、まだきけんぶつ。",
        "Your cooking is still a hazardous material.",
      ],
      [
        "You",
        "Kibishii! Demo… tashika ni salt ga yūmei.",
        "きびしい！でも…たしかにソルトがゆうめい。",
        "Harsh! But… yeah, my salt is famous.",
      ],
      [
        "Friend",
        "Ha ha. Gomen, tsuyokatta?",
        "はは。ごめん、つよかった？",
        "Ha ha. Sorry — too strong?",
      ],
      [
        "You",
        "Daijōbu. Demo suki da yo, konna banter.",
        "だいじょうぶ。でもすきだよ、こんなバンター。",
        "I'm fine. But I like this kind of banter.",
      ],
      [
        "Friend",
        "Otagai-sama. Kinō ore mo koboshita shi.",
        "おたがいさま。きのうおれもこぼしたし。",
        "We're even. I spilled yesterday too.",
      ],
      [
        "You",
        "Kanpai. Tsugi wa kimi no ban… yasashiku ne.",
        "かんぱい。つぎはきみのばん…やさしくね。",
        "Cheers. Your turn next… be gentle.",
      ],
      [
        "Quiet one",
        "…",
        "…",
        "…",
      ],
      [
        "You",
        "Hey, daijōbu? Chotto shizuka datta?",
        "ねえ、だいじょうぶ？ちょっとしずかだった？",
        "Hey, you OK? You went a bit quiet?",
      ],
      [
        "Quiet one",
        "Un, waraiteta dake.",
        "うん、わらってただけ。",
        "Yeah, just laughing.",
      ],
      [
        "You",
        "Yokatta. Banter wa, kaeru basho ga hitsuyō.",
        "よかった。バンターは、かえるばしょがひつよう。",
        "Good. Banter needs a place to come home to.",
      ],
    ],
    patterns: [
      {
        chunk: "でもすきだよ",
        romaji: "demo suki da yo",
        hiragana: "でもすきだよ",
        meaning: "But I like it / still fond",
        whenToUse:
          "After a roast exchange; reaffirms the bond.",
        examples: [
          [
            "きびしいけど、でもすきだよ",
            "kibishii kedo, demo suki da yo",
            "Harsh, but I like it.",
          ],
          [
            "そんなとこもふくめてすき",
            "sonna toko mo fukumete suki",
            "I like that about you too.",
          ],
          [
            "またやろう、このかんじ",
            "mata yarō, kono kanji",
            "Let's do this vibe again.",
          ],
        ],
      },
      {
        chunk: "おたがいさま",
        romaji: "otagai-sama",
        hiragana: "おたがいさま",
        meaning: "We're even / same here",
        whenToUse:
          "When both sides took hits; equalizes status.",
        examples: [
          [
            "おたがいさまだね",
            "otagai-sama da ne",
            "We're even.",
          ],
          [
            "いや、おたがいさま",
            "iya, otagai-sama",
            "Nah, same to you.",
          ],
          [
            "つっこみもおたがいさま",
            "tsukkomi mo otagai-sama",
            "The tsukkomi goes both ways.",
          ],
        ],
      },
      {
        chunk: "やさしくね",
        romaji: "yasashiku ne",
        hiragana: "やさしくね",
        meaning: "Be gentle, OK?",
        whenToUse:
          "Set a soft rule before the next roast round.",
        examples: [
          [
            "つぎはやさしくね",
            "tsugi wa yasashiku ne",
            "Next time, be gentle.",
          ],
          [
            "じょうだんはOK、きずつけないでね",
            "jōdan wa OK, kizutsukenaide ne",
            "Jokes OK — don't hurt.",
          ],
          [
            "げんかいせん、まもろう",
            "genkaisen, mamorō",
            "Let's keep the boundary.",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "Banter needs a return path",
        "Without a warm landing, teasing becomes ranking.",
      ],
      [
        "Check the quiet one",
        "Silence isn't always consent laughter.",
      ],
      [
        "おたがいさま equalizes",
        "It prevents one person becoming the permanent punchline.",
      ],
    ],
    culturalNote: [
      "Circle back to care",
      "Japanese friend humor often ends with a reaffirmation — a toast, a すき, a plan. The roast is the spark; the landing is the relationship.",
    ],
    shadowing: [
      [
        "Demo suki da yo, konna banter.",
        "でもすきだよ、こんなバンター。",
      ],
      [
        "Otagai-sama da ne.",
        "おたがいさまだね。",
      ],
      [
        "Tsugi wa yasashiku ne.",
        "つぎはやさしくね。",
      ],
      [
        "Hey, daijōbu? Chotto shizuka datta?",
        "ねえ、だいじょうぶ？ちょっとしずかだった？",
      ],
      [
        "Mata yarō, kono kanji.",
        "またやろう、このかんじ。",
      ],
      [
        "Jōdan wa OK, kizutsukenaide ne.",
        "じょうだんはOK、きずつけないでね。",
      ],
    ],
    quiz: [
      [
        "Warm landing after roast:",
        [
          "でもすきだよ",
          "かえれ",
          "ばかだけ",
          "むし",
        ],
        0,
        "Reaffirm bond.",
      ],
      [
        "おたがいさま means:",
        [
          "I win",
          "we're even",
          "you owe me",
          "formal keigo",
        ],
        1,
        "Equalize.",
      ],
      [
        "Someone went quiet — you:",
        [
          "roast harder",
          "check in",
          "ignore",
          "post online",
        ],
        1,
        "Care check.",
      ],
      [
        "やさしくね sets:",
        [
          "a boundary for next round",
          "a salary",
          "a lawsuit",
          "a train",
        ],
        0,
        "Soft rule.",
      ],
    ],
    production: [
      [
        "But I like this kind of banter.",
        "でもすきだよ",
        "Demo suki da yo, konna banter.",
        "でもすきだよ、こんなバンター。",
      ],
      [
        "We're even.",
        "おたがいさまだね",
        "Otagai-sama da ne.",
        "おたがいさまだね。",
      ],
      [
        "Next time, be gentle.",
        "つぎはやさしくね",
        "Tsugi wa yasashiku ne.",
        "つぎはやさしくね。",
      ],
    ],
  },
  {
    id: "sp-20-1",
    unit: 20,
    unitTitle: "Fluency Capstone",
    order: 1,
    title: "いちにち・レジスターきりかえ",
    subtitle: "Konbini casual → office polite without whiplash",
    scenario:
      "From morning convenience store to your desk greeting, practice switching register in under a minute of real life.",
    durationMin: 38,
    objectives: [
      "Keep っす / short forms with konbini staff appropriately light",
      "Switch to おはようございます / よろしく with coworkers",
      "Avoid dragging っす into the meeting room",
      "Greet the same person differently by context",
      "Feel register as costume change, not personality change",
    ],
    dialogue: [
      [
        "Clerk",
        "Irasshaimase.",
        "いらっしゃいませ。",
        "Welcome.",
      ],
      [
        "You",
        "Kono onigiri, atatamete moratte ii desu ka?",
        "このおにぎり、あたためてもらっていいですか？",
        "Could I get this onigiri warmed up?",
      ],
      [
        "Clerk",
        "Hai, shōshō omachi kudasai.",
        "はい、しょうしょうおまちください。",
        "Yes, just a moment.",
      ],
      [
        "You",
        "Dōmo.",
        "どうも。",
        "Thanks.",
      ],
      [
        "You",
        "(ofisu) Ohayō gozaimasu.",
        "（オフィス）おはようございます。",
        "(office) Good morning.",
      ],
      [
        "Boss",
        "Ohayō. Kyō no yotei wa?",
        "おはよう。きょうのよていは？",
        "Morning. Today's plan?",
      ],
      [
        "You",
        "Ketsuron kara iu to, shūsei o hiru made ni dashimasu.",
        "けつろんからいうと、しゅうせいをひるまでにだします。",
        "Bottom line: I'll deliver the revision by noon.",
      ],
      [
        "Boss",
        "Yoroshiku.",
        "よろしく。",
        "Thanks / counting on you.",
      ],
      [
        "Friend-coworker",
        "Yo. Asa kara shigoto-gao.",
        "よー。あさからしごとがお。",
        "Yo. Work-face already this morning.",
      ],
      [
        "You",
        "Un, demo ima wa ofisu. Ato de ssu ni modoru.",
        "うん、でもいまはオフィス。あとでっすにもどる。",
        "Yeah, but this is the office. I'll switch back to casual later.",
      ],
    ],
    patterns: [
      {
        chunk: "〜てもらっていいですか",
        romaji: "~ te moratte ii desu ka",
        hiragana: "〜てもらっていいですか",
        meaning: "Could I have you…? (service request)",
        whenToUse:
          "Konbini/café polite-light requests.",
        examples: [
          [
            "あたためてもらっていいですか",
            "atatamete moratte ii desu ka",
            "Could you warm this up?",
          ],
          [
            "ふくろにいれてもらっていいですか",
            "fukuro ni irete moratte ii desu ka",
            "Could you put it in a bag?",
          ],
          [
            "ぶんりしていただけるとたすかります",
            "bunri shite itadakeru to tasukarimasu",
            "I'd appreciate if you could separate them.",
          ],
        ],
      },
      {
        chunk: "おはようございます → けつろんからいうと",
        romaji: "ohayō gozaimasu → ketsuron kara iu to",
        hiragana: "おはようございます → けつろんからいうと",
        meaning: "Office open + conclusion-first update",
        whenToUse:
          "Morning boss check-in.",
        examples: [
          [
            "おはようございます。けつろんからいうと、まにあいます",
            "ohayō gozaimasu. Ketsuron kara iu to, maniaimasu",
            "Good morning. Bottom line: we'll make it.",
          ],
          [
            "おはようございます。きょうじゅうにそうしんします",
            "ohayō gozaimasu. Kyōjū ni sōshin shimasu",
            "Good morning. I'll send it today.",
          ],
          [
            "おはようございます。リスクはひくいです",
            "ohayō gozaimasu. Risuku wa hikui desu",
            "Good morning. Risk is low.",
          ],
        ],
      },
      {
        chunk: "いまはオフィス / あとでカジュアル",
        romaji: "ima wa ofisu / ato de kajuaru",
        hiragana: "いまはオフィス / あとでカジュアル",
        meaning: "Context switch markers (meta)",
        whenToUse:
          "When friends tease your work face — acknowledge the switch.",
        examples: [
          [
            "いまはオフィスモード",
            "ima wa ofisu mōdo",
            "Office mode right now.",
          ],
          [
            "あとでくだすね",
            "ato de kudasu ne",
            "I'll drop the register later.",
          ],
          [
            "ばしょでことばをかえる",
            "basho de kotoba o kaeru",
            "Change language with the place.",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "Same mouth, different height",
        "Fluency is switching, not picking one forever register.",
      ],
      [
        "Konbini: polite-light",
        "です/ます without heavy keigo is enough.",
      ],
      [
        "Friend tease",
        "しごとがお jokes are affection — laugh and stay appropriate until you're off-duty.",
      ],
    ],
    culturalNote: [
      "Place teaches register",
      "Japanese adults change speech height many times a day. Near-native fluency looks like matching the doorway you just walked through.",
    ],
    shadowing: [
      [
        "Kono onigiri, atatamete moratte ii desu ka?",
        "このおにぎり、あたためてもらっていいですか？",
      ],
      [
        "Ohayō gozaimasu.",
        "おはようございます。",
      ],
      [
        "Ketsuron kara iu to, shūsei o hiru made ni dashimasu.",
        "けつろんからいうと、しゅうせいをひるまでにだします。",
      ],
      [
        "Ima wa ofisu mōdo.",
        "いまはオフィスモード。",
      ],
      [
        "Dōmo.",
        "どうも。",
      ],
      [
        "Basho de kotoba o kaeru.",
        "ばしょでことばをかえる。",
      ],
    ],
    quiz: [
      [
        "Konbini warm-up request:",
        [
          "あたためてもらっていいですか",
          "あたためろ",
          "なんでやねん",
          "せざるをえない",
        ],
        0,
        "Polite-light request.",
      ],
      [
        "Boss morning update style:",
        [
          "けつろんからいうと",
          "すべった",
          "またそれ",
          "おたがいさま",
        ],
        0,
        "Conclusion first.",
      ],
      [
        "Dragging っす into formal meetings is:",
        [
          "always best",
          "register mismatch",
          "required keigo",
          "dialect law",
        ],
        1,
        "Wrong height.",
      ],
      [
        "Friend teases しごとがお — you:",
        [
          "lecture them",
          "acknowledge and keep office register for now",
          "quit",
          "cry",
        ],
        1,
        "Context stays.",
      ],
    ],
    production: [
      [
        "Could you warm this onigiri up?",
        "あたためてもらっていいですか",
        "Atatamete moratte ii desu ka?",
        "あたためてもらっていいですか？",
      ],
      [
        "Good morning. Bottom line: we'll make it.",
        "おはようございます + けつろんからいうと",
        "Ohayō gozaimasu. Ketsuron kara iu to, maniaimasu.",
        "おはようございます。けつろんからいうと、まにあいます。",
      ],
      [
        "Office mode right now.",
        "いまはオフィスモード",
        "Ima wa ofisu mōdo.",
        "いまはオフィスモード。",
      ],
    ],
  },
  {
    id: "sp-20-2",
    unit: 20,
    unitTitle: "Fluency Capstone",
    order: 2,
    title: "でんわ — もしもしからでは",
    subtitle: "Phone openings, holds, and clean hang-ups",
    scenario:
      "You call a client office, get transferred, leave a message, and close without awkward silence.",
    durationMin: 37,
    objectives: [
      "Open with もしもし / おせわになっております",
      "Ask for someone with 〜さんはいらっしゃいますか",
      "Handle hold with しょうしょうおまちください acceptance",
      "Leave a callback with のちほどおでんわいただけますか",
      "Close with では、しつれいします",
    ],
    dialogue: [
      [
        "You",
        "Moshi moshi. ABC no Justin to mōshimasu.",
        "もしもし。ABCのJustinともうします。",
        "Hello. This is Justin from ABC.",
      ],
      [
        "Reception",
        "Osewa ni natte orimasu. Ikaga itashimashō ka?",
        "おせわになっております。いかがいたしましょうか？",
        "Thank you for your continued support. How may I help?",
      ],
      [
        "You",
        "Tanaka-san wa irasshaimasu ka?",
        "Tanakaさんはいらっしゃいますか？",
        "Is Tanaka-san available?",
      ],
      [
        "Reception",
        "Shōshō omachi kudasai.",
        "しょうしょうおまちください。",
        "Please wait a moment.",
      ],
      [
        "You",
        "Hai, onegai shimasu.",
        "はい、おねがいします。",
        "Yes, please.",
      ],
      [
        "Reception",
        "Mōshiwake gozaimasen. Tadamaiseki o hazushite orimasu.",
        "もうしわけございません。ただいませきをはずしております。",
        "I'm sorry. They're away from their desk right now.",
      ],
      [
        "You",
        "Kashikomarimashita. Nochihodo odenwa itadakemasu ka?",
        "かしこまりました。のちほどおでんわいただけますか？",
        "Understood. Could they call me back later?",
      ],
      [
        "Reception",
        "Kashikomarimashita. Bangō o onegai shimasu.",
        "かしこまりました。ばんごうをおねがいします。",
        "Certainly. Your number please.",
      ],
      [
        "You",
        "Zero-nine-zero no… De wa, shitsurei shimasu.",
        "ゼロきゅうゼロの…では、しつれいします。",
        "090-… Well then, excuse me.",
      ],
      [
        "Reception",
        "Shitsurei itashimasu.",
        "しつれいいたします。",
        "Goodbye (polite).",
      ],
    ],
    patterns: [
      {
        chunk: "もしもし / 〜ともうします",
        romaji: "moshi moshi / ~ to mōshimasu",
        hiragana: "もしもし / 〜ともうします",
        meaning: "Hello (phone) / I am called… (humble)",
        whenToUse:
          "Phone open to businesses; humble self-intro.",
        examples: [
          [
            "もしもし。Justinともうします",
            "moshi moshi. Justin to mōshimasu",
            "Hello. This is Justin.",
          ],
          [
            "ABCのJustinともうします",
            "ABC no Justin to mōshimasu",
            "Justin from ABC speaking.",
          ],
          [
            "おせわになっております",
            "osewa ni natte orimasu",
            "Thank you for your continued support.",
          ],
        ],
      },
      {
        chunk: "〜さんはいらっしゃいますか",
        romaji: "~ san wa irasshaimasu ka",
        hiragana: "〜さんはいらっしゃいますか",
        meaning: "Is X available? (honorific)",
        whenToUse:
          "Asking reception for someone.",
        examples: [
          [
            "Tanakaさんはいらっしゃいますか",
            "Tanaka-san wa irasshaimasu ka",
            "Is Tanaka-san in?",
          ],
          [
            "ごたんとうのかたはいらっしゃいますか",
            "gotantō no kata wa irasshaimasu ka",
            "Is the person in charge available?",
          ],
          [
            "いま、おでんわだいじょうぶでしょうか",
            "ima, odenwa daijōbu deshō ka",
            "Is now a good time to talk?",
          ],
        ],
      },
      {
        chunk: "では、しつれいします",
        romaji: "dewa, shitsurei shimasu",
        hiragana: "では、しつれいします",
        meaning: "Well then, excuse me (phone close)",
        whenToUse:
          "Ending business calls cleanly.",
        examples: [
          [
            "では、しつれいします",
            "dewa, shitsurei shimasu",
            "Well then, goodbye.",
          ],
          [
            "のちほどおでんわいただけますか",
            "nochihodo odenwa itadakemasu ka",
            "Could you call me back later?",
          ],
          [
            "よろしくおつたえください",
            "yoroshiku otsutae kudasai",
            "Please pass along my regards/message.",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "Phone is keigo-heavy",
        "Business calls default higher than face-to-face with the same person.",
      ],
      [
        "もしもし is phone-only",
        "Don't use it walking into a shop.",
      ],
      [
        "では closes",
        "Signals the call is ending so both sides can hang up.",
      ],
    ],
    culturalNote: [
      "Silence on the line is louder",
      "Japanese phone closings are ritual: thanks, では, しつれいします. Skipping them feels abrupt even if the content was fine.",
    ],
    shadowing: [
      [
        "Moshi moshi. ABC no Justin to mōshimasu.",
        "もしもし。ABCのJustinともうします。",
      ],
      [
        "Tanaka-san wa irasshaimasu ka?",
        "Tanakaさんはいらっしゃいますか？",
      ],
      [
        "Nochihodo odenwa itadakemasu ka?",
        "のちほどおでんわいただけますか？",
      ],
      [
        "Dewa, shitsurei shimasu.",
        "では、しつれいします。",
      ],
      [
        "Osewa ni natte orimasu.",
        "おせわになっております。",
      ],
      [
        "Yoroshiku otsutae kudasai.",
        "よろしくおつたえください。",
      ],
    ],
    quiz: [
      [
        "Business phone self-intro:",
        [
          "おれだ",
          "〜ともうします",
          "なんでやねん",
          "すべった",
        ],
        1,
        "Humble name.",
      ],
      [
        "Ask if someone is in:",
        [
          "いらっしゃいますか",
          "いる？だけ always",
          "かえれ",
          "ねむい",
        ],
        0,
        "Honorific presence.",
      ],
      [
        "Clean close:",
        [
          "では、しつれいします",
          "きるだけ",
          "うるさい",
          "またそれ",
        ],
        0,
        "Ritual close.",
      ],
      [
        "もしもし belongs:",
        [
          "in a shop entrance",
          "on the phone",
          "in email subject only",
          "in court only",
        ],
        1,
        "Phone open.",
      ],
    ],
    production: [
      [
        "Hello. This is Justin from ABC.",
        "もしもし + ともうします",
        "Moshi moshi. ABC no Justin to mōshimasu.",
        "もしもし。ABCのJustinともうします。",
      ],
      [
        "Could they call me back later?",
        "のちほどおでんわいただけますか",
        "Nochihodo odenwa itadakemasu ka?",
        "のちほどおでんわいただけますか？",
      ],
      [
        "Well then, excuse me.",
        "では、しつれいします",
        "Dewa, shitsurei shimasu.",
        "では、しつれいします。",
      ],
    ],
  },
  {
    id: "sp-20-3",
    unit: 20,
    unitTitle: "Fluency Capstone",
    order: 3,
    title: "とつぜんのわだいてんかん",
    subtitle: "Pivot topics without sounding rude or lost",
    scenario:
      "Coffee with a friend drifts from work stress to weekend plans. Practice ところで / そういえば pivots.",
    durationMin: 34,
    objectives: [
      "Pivot with ところで / そういえば / あっ",
      "Close the old topic lightly before jumping",
      "Use はなしかわるんだけど as an explicit shift",
      "Return with もとにもどると if needed",
      "Keep pivots collaborative, not hijacks",
    ],
    dialogue: [
      [
        "Friend",
        "Shigoto, yabai yo ne konshū.",
        "しごと、やばいよねこんしゅう。",
        "Work's rough this week, huh.",
      ],
      [
        "You",
        "Un… tsurai ne. Ichōdai shite.",
        "うん…つらいね。いちおうきいてる。",
        "Yeah… tough. I'm listening.",
      ],
      [
        "Friend",
        "Mō chotto dake…",
        "もうちょっとだけ…",
        "Just a bit more…",
      ],
      [
        "You",
        "Un. …Tokorode sa, shūmatsu aiteru?",
        "うん。…ところでさ、しゅうまつあいてる？",
        "Yeah. …By the way, free this weekend?",
      ],
      [
        "Friend",
        "Ō, hanashi kawaru ne.",
        "おう、はなしかわるね。",
        "Oh, topic change.",
      ],
      [
        "You",
        "Gomen. Hanashi kawarun da kedo, karioki de.",
        "ごめん。はなしかわるんだけど、かりおきで。",
        "Sorry. Changing topics — parking the work talk.",
      ],
      [
        "Friend",
        "Ii yo. Sō ieba, eiga mitai.",
        "いいよ。そういえば、えいがみたい。",
        "Fine. Come to think of it, I want to see a movie.",
      ],
      [
        "You",
        "Yosh. Ato de shigoto ni modoreru yo.",
        "よし。あとでしごとにもどれるよ。",
        "Cool. We can return to work talk later.",
      ],
      [
        "Friend",
        "Moto ni modoru to, yabai no wa getsuyō made.",
        "もとにもどると、やばいのはげつようまで。",
        "Back on topic: the rough part lasts till Monday.",
      ],
      [
        "You",
        "Rikai. Support suru. Eiga mo ikō.",
        "りかい。サポートする。えいがもいこう。",
        "Got it. I'll support. And let's do the movie.",
      ],
    ],
    patterns: [
      {
        chunk: "ところで",
        romaji: "tokorode",
        hiragana: "ところで",
        meaning: "By the way",
        whenToUse:
          "Clean pivot to a new topic; slightly deliberate.",
        examples: [
          [
            "ところで、しゅうまつは？",
            "tokorode, shūmatsu wa?",
            "By the way, the weekend?",
          ],
          [
            "ところで、あのけんどうなった？",
            "tokorode, ano ken dō natta?",
            "By the way, what happened with that matter?",
          ],
          [
            "ところでさ、ひるごはんまだ？",
            "tokorode sa, hirugohan mada?",
            "Hey, by the way — lunch yet?",
          ],
        ],
      },
      {
        chunk: "そういえば",
        romaji: "sō ieba",
        hiragana: "そういえば",
        meaning: "Come to think of it / that reminds me",
        whenToUse:
          "Pivot triggered by association, not random hijack.",
        examples: [
          [
            "そういえば、メールまだだった",
            "sō ieba, mēru mada datta",
            "Come to think of it, I still haven't emailed.",
          ],
          [
            "そういえば、きみのたんじょうびいつ？",
            "sō ieba, kimi no tanjōbi itsu?",
            "That reminds me — when's your birthday?",
          ],
          [
            "そういえばきのう、へんなめにあった",
            "sō ieba kinō, hen na me ni atta",
            "Come to think of it, something weird happened yesterday.",
          ],
        ],
      },
      {
        chunk: "はなしかわるんだけど / もとにもどると",
        romaji: "hanashi kawaru n da kedo / moto ni modoru to",
        hiragana: "はなしかわるんだけど / もとにもどると",
        meaning: "Changing topics… / getting back to…",
        whenToUse:
          "Explicit meta-shifts so listeners aren't lost.",
        examples: [
          [
            "はなしかわるんだけど",
            "hanashi kawaru n da kedo",
            "Changing the subject…",
          ],
          [
            "もとにもどると",
            "moto ni modoru to",
            "Getting back to it…",
          ],
          [
            "さっきのつづきだけど",
            "sakki no tsuzuki da kedo",
            "Continuing from earlier…",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "Announce the turn",
        "Meta phrases prevent 'wait, what are we talking about?'",
      ],
      [
        "ところで vs そういえば",
        "ところで = deliberate by-the-way; そういえば = association spark.",
      ],
      [
        "Permission",
        "ごめん、はなしかわる feels cooperative.",
      ],
    ],
    culturalNote: [
      "Topics are shared property",
      "Sudden jumps without a marker can feel self-centered. A tiny ところで / そういえば keeps the conversation feeling mutual.",
    ],
    shadowing: [
      [
        "Tokorode sa, shūmatsu aiteru?",
        "ところでさ、しゅうまつあいてる？",
      ],
      [
        "Sō ieba, eiga mitai.",
        "そういえば、えいがみたい。",
      ],
      [
        "Hanashi kawaru n da kedo.",
        "はなしかわるんだけど。",
      ],
      [
        "Moto ni modoru to…",
        "もとにもどると…",
      ],
      [
        "Sakki no tsuzuki da kedo.",
        "さっきのつづきだけど。",
      ],
      [
        "Gomen. Karioki de.",
        "ごめん。かりおきで。",
      ],
    ],
    quiz: [
      [
        "ところで means:",
        [
          "congratulations",
          "by the way",
          "never",
          "discount",
        ],
        1,
        "Pivot.",
      ],
      [
        "そういえば feels like:",
        [
          "random attack",
          "association reminder",
          "keigo only",
          "phone close",
        ],
        1,
        "That reminds me.",
      ],
      [
        "もとにもどると is for:",
        [
          "leaving forever",
          "returning to prior topic",
          "ordering ramen",
          "sleeping",
        ],
        1,
        "Back on topic.",
      ],
      [
        "Best softener before a pivot:",
        [
          "うるさい",
          "ごめん、はなしかわるんだけど",
          "ばか",
          "きれ",
        ],
        1,
        "Meta announce.",
      ],
    ],
    production: [
      [
        "By the way, free this weekend?",
        "ところで + しゅうまつあいてる",
        "Tokorode sa, shūmatsu aiteru?",
        "ところでさ、しゅうまつあいてる？",
      ],
      [
        "Come to think of it, I want to see a movie.",
        "そういえば + えいがみたい",
        "Sō ieba, eiga mitai.",
        "そういえば、えいがみたい。",
      ],
      [
        "Changing the subject…",
        "はなしかわるんだけど",
        "Hanashi kawaru n da kedo.",
        "はなしかわるんだけど。",
      ],
    ],
  },
  {
    id: "sp-20-4",
    unit: 20,
    unitTitle: "Fluency Capstone",
    order: 4,
    title: "いいきりしない — よはくのかいわ",
    subtitle: "Master unfinished sentences natives actually use",
    scenario:
      "Negotiating weekend plans, you practice trailing けど… / なんか… / だったら… so partners can finish with you.",
    durationMin: 36,
    objectives: [
      "End turns with けど… / て… / が… leaving space",
      "Use なんか… to soft-open feelings",
      "Offer だったら… hypotheticals without locking",
      "Hear implied meaning in others' unfinished lines",
      "Avoid over-explaining what the trailing edge meant",
    ],
    dialogue: [
      [
        "Friend",
        "Konshū, izakaya…",
        "こんしゅう、いざかや…",
        "This week, izakaya…",
      ],
      [
        "You",
        "Un, ikitai n da kedo…",
        "うん、いきたいんだけど…",
        "Yeah, I want to go, but…",
      ],
      [
        "Friend",
        "Tsukarete ru?",
        "つかれてる？",
        "Tired?",
      ],
      [
        "You",
        "Nanka… asa ga hayakute.",
        "なんか…あさがはやくて。",
        "Kinda… mornings have been early.",
      ],
      [
        "Friend",
        "Jā, hiru no kāfe dattara…?",
        "じゃあ、ひるのカフェだったら…？",
        "Then, if it were a daytime café…?",
      ],
      [
        "You",
        "Sore nara, ari ka mo.",
        "それなら、ありかも。",
        "That might work.",
      ],
      [
        "Friend",
        "Yotei, kataku nai hō ga…",
        "よてい、かたくないほうが…",
        "Plans that aren't rigid would be…",
      ],
      [
        "You",
        "Wakaru. Mawari michi de ii yo.",
        "わかる。まわりみちでいいよ。",
        "Got it. Scenic route is fine.",
      ],
      [
        "Mentor",
        "Iikiru to, aite no basho ga kieru.",
        "いいきると、あいてのばしょがきえる。",
        "If you finish every sentence hard, the other person has no room.",
      ],
      [
        "You",
        "Yohaku wa, kyōryoku no shingō.",
        "よはくは、きょうりょくのしんごう。",
        "Blank space is a cooperation signal.",
      ],
    ],
    patterns: [
      {
        chunk: "〜んだけど…",
        romaji: "~ n da kedo…",
        hiragana: "〜んだけど…",
        meaning: "I …, but… (invite response)",
        whenToUse:
          "Soft preference / soft refusal leaving a door open.",
        examples: [
          [
            "いきたいんだけど…",
            "ikitai n da kedo…",
            "I want to go, but…",
          ],
          [
            "きょうはむりなんだけど…",
            "kyō wa muri na n da kedo…",
            "Today's impossible, but…",
          ],
          [
            "たのしいとはおもうんだけど…",
            "tanoshii to wa omou n da kedo…",
            "I think it'd be fun, but…",
          ],
        ],
      },
      {
        chunk: "なんか…",
        romaji: "nanka…",
        hiragana: "なんか…",
        meaning: "Kinda… / like… (soft feel opener)",
        whenToUse:
          "When feelings are fuzzy; don't force precision.",
        examples: [
          [
            "なんかつかれてて…",
            "nanka tsukarete te…",
            "I'm kinda tired…",
          ],
          [
            "なんかしっくりこなくて…",
            "nanka shikkuri konakute…",
            "It just doesn't sit right…",
          ],
          [
            "なんかちがうんだよね…",
            "nanka chigau n da yo ne…",
            "It's just… off, you know…",
          ],
        ],
      },
      {
        chunk: "〜だったら…",
        romaji: "~ dattara…",
        hiragana: "〜だったら…",
        meaning: "If it were… / in that case…",
        whenToUse:
          "Offer a conditional alternative without demanding.",
        examples: [
          [
            "ひるだったら…",
            "hiru dattara…",
            "If it were daytime…",
          ],
          [
            "やすかったら、かんがえるけど…",
            "yasukattara, kangaeru kedo…",
            "If it were cheap, I'd consider…",
          ],
          [
            "ふたりだったら、いけるかも",
            "futari dattara, ikeru kamo",
            "If it were just us two, maybe.",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "Implication is content",
        "The unfinished part often IS the message: busy, unsure, hoping they'll adjust.",
      ],
      [
        "Don't over-complete",
        "Finishing their けど… for them can feel pushy — offer options instead.",
      ],
      [
        "Rising softness",
        "Trailing intonation matters as much as the words.",
      ],
    ],
    culturalNote: [
      "Leave room to co-author",
      "Japanese conversation often designs silence and unfinished edges so both people build the next line together. Fluency includes not monopolizing the ending.",
    ],
    shadowing: [
      [
        "Ikitai n da kedo…",
        "いきたいんだけど…",
      ],
      [
        "Nanka… asa ga hayakute.",
        "なんか…あさがはやくて。",
      ],
      [
        "Hiru no kāfe dattara…?",
        "ひるのカフェだったら…？",
      ],
      [
        "Kyō wa muri na n da kedo…",
        "きょうはむりなんだけど…",
      ],
      [
        "Nanka shikkuri konakute…",
        "なんかしっくりこなくて…",
      ],
      [
        "Futari dattara, ikeru kamo.",
        "ふたりだったら、いけるかも。",
      ],
    ],
    quiz: [
      [
        "〜んだけど… often invites:",
        [
          "a courtroom verdict",
          "the listener to adjust/respond",
          "immediate hang-up",
          "keigo only",
        ],
        1,
        "Open door.",
      ],
      [
        "なんか… marks:",
        [
          "precise data",
          "fuzzy feeling",
          "train numbers",
          "passwords",
        ],
        1,
        "Soft feel.",
      ],
      [
        "だったら… offers:",
        [
          "a locked order",
          "a conditional alternative",
          "an insult",
          "a resignation",
        ],
        1,
        "If-case.",
      ],
      [
        "Always finishing every sentence hard can:",
        [
          "give partners no room",
          "improve keigo automatically",
          "end gravity",
          "fix trains",
        ],
        0,
        "No co-author space.",
      ],
    ],
    production: [
      [
        "I want to go, but…",
        "いきたいんだけど…",
        "Ikitai n da kedo…",
        "いきたいんだけど…",
      ],
      [
        "I'm kinda tired…",
        "なんかつかれてて…",
        "Nanka tsukarete te…",
        "なんかつかれてて…",
      ],
      [
        "If it were daytime…?",
        "ひるだったら…",
        "Hiru dattara…?",
        "ひるだったら…？",
      ],
    ],
  },
  {
    id: "sp-20-5",
    unit: 20,
    unitTitle: "Fluency Capstone",
    order: 5,
    title: "いちにちモンタージュ",
    subtitle: "String morning → lunch → evening into one fluent day",
    scenario:
      "Walk through a compressed day: shop, meeting summary, friend pivot, unfinished plans — switching tools you already learned.",
    durationMin: 40,
    objectives: [
      "Chain register switches across three scenes",
      "Reuse けつろんからいうと and まとめると under time pressure",
      "Pivot with そういえば without losing the thread",
      "Close scenes with ここまで / では",
      "Self-correct mid-turn without freezing",
    ],
    dialogue: [
      [
        "Clerk",
        "Irasshaimase. Fukuro wa irimasu ka?",
        "いらっしゃいませ。ふくろはいりますか？",
        "Welcome. Need a bag?",
      ],
      [
        "You",
        "Ie, daijōbu desu. Dōmo.",
        "いえ、だいじょうぶです。どうも。",
        "No, I'm fine. Thanks.",
      ],
      [
        "Boss",
        "Status, mijikaku.",
        "ステータス、みじかく。",
        "Status, short.",
      ],
      [
        "You",
        "Ketsuron kara iu to, hiru mae ni kansei. Riyū wa bug shūryō desu.",
        "けつろんからいうと、ひるまえにかんせい。りゆうはバグしゅうりょうです。",
        "Bottom line: done before noon. Reason: bug finished.",
      ],
      [
        "Boss",
        "Yosh.",
        "よし。",
        "Good.",
      ],
      [
        "Friend",
        "Hirugohan…",
        "ひるごはん…",
        "Lunch…",
      ],
      [
        "You",
        "Ikitai n da kedo… ichijikan dake nara.",
        "いきたいんだけど…いちじかんだけなら。",
        "I want to, but… only if it's just an hour.",
      ],
      [
        "Friend",
        "Sō ieba, kinō no banter, yokatta yo.",
        "そういえば、きのうのバンター、よかったよ。",
        "Come to think of it, yesterday's banter was good.",
      ],
      [
        "You",
        "Otagai-sama. Ja, matomeru to: ramen, rokujū-pun.",
        "おたがいさま。じゃ、まとめると：ラーメン、ろくじゅうふん。",
        "We're even. So, to sum up: ramen, sixty minutes.",
      ],
      [
        "You",
        "Koko made. Ato wa chat de.",
        "ここまで。あとはチャットで。",
        "That's it. Rest on chat.",
      ],
    ],
    patterns: [
      {
        chunk: "みじかく / けつろんからいうと",
        romaji: "mijikaku / ketsuron kara iu to",
        hiragana: "みじかく / けつろんからいうと",
        meaning: "Keep it short / bottom line",
        whenToUse:
          "Compressed updates across a busy day.",
        examples: [
          [
            "みじかくいいます",
            "mijikaku iimasu",
            "I'll keep it short.",
          ],
          [
            "けつろんからいうと、まにあう",
            "ketsuron kara iu to, maniau",
            "Bottom line: we'll make it.",
          ],
          [
            "さんぶんでまとめます",
            "sanpun de matomemasu",
            "I'll wrap it in three minutes.",
          ],
        ],
      },
      {
        chunk: "いきたいんだけど…〜なら",
        romaji: "ikitai n da kedo… ~ nara",
        hiragana: "いきたいんだけど…〜なら",
        meaning: "I want to, but… if X…",
        whenToUse:
          "Conditional yes with unfinished softness.",
        examples: [
          [
            "いきたいんだけど、いちじかんなら",
            "ikitai n da kedo, ichijikan nara",
            "I want to, if it's an hour.",
          ],
          [
            "いけるけど、ちかくなら",
            "ikeru kedo, chikaku nara",
            "I can, if it's nearby.",
          ],
          [
            "さんかしたいんだけど、やすみのひなら",
            "sanka shitai n da kedo, yasumi no hi nara",
            "I'd join, if it's a day off.",
          ],
        ],
      },
      {
        chunk: "まとめると：A、B",
        romaji: "matomeru to: A, B",
        hiragana: "まとめると：A、B",
        meaning: "To sum up: A, B",
        whenToUse:
          "End-of-scene compression among friends or teams.",
        examples: [
          [
            "まとめると：ラーメン、ろくじゅうふん",
            "matomeru to: rāmen, rokujū-fun",
            "Sum up: ramen, 60 minutes.",
          ],
          [
            "まとめると：きょうはここまで",
            "matomeru to: kyō wa koko made",
            "Sum up: that's all for today.",
          ],
          [
            "ようするに、あしたはなそう",
            "yōsuru ni, ashita hanasō",
            "In short, let's talk tomorrow.",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "Montage fluency",
        "Real days remix patterns; practice switching, not memorizing one dialogue.",
      ],
      [
        "Self-repair",
        "If you start casual with a boss, restart: あ、けつろんからいうと…",
      ],
      [
        "Timeboxes travel",
        "いちじかんなら works for friends and meetings alike.",
      ],
    ],
    culturalNote: [
      "One mouth, many doorways",
      "A fluent day in Japan is a sequence of micro-cultures: shop, desk, friends. Capstone skill is changing height without changing warmth.",
    ],
    shadowing: [
      [
        "Ketsuron kara iu to, hiru mae ni kansei.",
        "けつろんからいうと、ひるまえにかんせい。",
      ],
      [
        "Ikitai n da kedo… ichijikan dake nara.",
        "いきたいんだけど…いちじかんだけなら。",
      ],
      [
        "Matomeru to: rāmen, rokujū-fun.",
        "まとめると：ラーメン、ろくじゅうふん。",
      ],
      [
        "Mijikaku iimasu.",
        "みじかくいいます。",
      ],
      [
        "Koko made. Ato wa chat de.",
        "ここまで。あとはチャットで。",
      ],
      [
        "Otagai-sama.",
        "おたがいさま。",
      ],
    ],
    quiz: [
      [
        "Boss wants short status — open with:",
        [
          "すべった",
          "けつろんからいうと",
          "なんでやねん",
          "またそれ",
        ],
        1,
        "Conclusion first.",
      ],
      [
        "いきたいんだけど…いちじかんなら is:",
        [
          "hard no",
          "conditional soft yes",
          "keigo insult",
          "phone close",
        ],
        1,
        "If-time yes.",
      ],
      [
        "まとめると compresses:",
        [
          "only passwords",
          "decisions/plans into one line",
          "only dialect",
          "only songs",
        ],
        1,
        "Sum-up.",
      ],
      [
        "Capstone day skill:",
        [
          "one register forever",
          "switch by doorway",
          "never summarize",
          "never pivot",
        ],
        1,
        "Context switching.",
      ],
    ],
    production: [
      [
        "Bottom line: done before noon.",
        "けつろんからいうと + ひるまえにかんせい",
        "Ketsuron kara iu to, hiru mae ni kansei.",
        "けつろんからいうと、ひるまえにかんせい。",
      ],
      [
        "I want to, but… only if it's an hour.",
        "いきたいんだけど…いちじかんなら",
        "Ikitai n da kedo… ichijikan dake nara.",
        "いきたいんだけど…いちじかんだけなら。",
      ],
      [
        "To sum up: ramen, sixty minutes.",
        "まとめると：ラーメン、ろくじゅうふん",
        "Matomeru to: rāmen, rokujū-fun.",
        "まとめると：ラーメン、ろくじゅうふん。",
      ],
    ],
  },
  {
    id: "sp-20-6",
    unit: 20,
    unitTitle: "Fluency Capstone",
    order: 6,
    title: "キャップストーン — みっつのかお",
    subtitle: "Friend, boss, and stranger in one stretch",
    scenario:
      "A final mixed scene: soft disagreement with a friend, a crisp meeting close, and a polite stranger assist — proving the whole toolkit.",
    durationMin: 40,
    objectives: [
      "Disagree softly with そうともいえるけど",
      "Close a meeting point with そういうわけで + いじょうです",
      "Help a stranger with calm です/ます",
      "Pivot and unfinished-sentence tools on demand",
      "Leave each interaction with the right goodbye height",
    ],
    dialogue: [
      [
        "Friend",
        "Kon'ya wa kurabu ikō ze.",
        "こんやはクラブいこうぜ。",
        "Club tonight, let's go.",
      ],
      [
        "You",
        "Sō to mo ieru kedo… kyō wa chotto.",
        "そうともいえるけど…きょうはちょっと。",
        "You could say that, but… today's a bit…",
      ],
      [
        "Friend",
        "Jā kāfe?",
        "じゃあカフェ？",
        "Café then?",
      ],
      [
        "You",
        "Un. Sore nara.",
        "うん。それなら。",
        "Yeah. That works.",
      ],
      [
        "Boss",
        "Kettei wa?",
        "けっていは？",
        "Decision?",
      ],
      [
        "You",
        "Sō iu wake de, raishū ni enki. Watashi kara wa ijō desu.",
        "そういうわけで、らいしゅうにえんき。わたしからはいじょうです。",
        "For that reason, postpone to next week. That's all from me.",
      ],
      [
        "Stranger",
        "Sumimasen, eki wa dochira desu ka?",
        "すみません、えきはどちらですか？",
        "Excuse me, which way is the station?",
      ],
      [
        "You",
        "Massugu itte, hidari desu yo.",
        "まっすぐいって、ひだりですよ。",
        "Go straight, then left.",
      ],
      [
        "Stranger",
        "Arigatō gozaimasu.",
        "ありがとうございます。",
        "Thank you very much.",
      ],
      [
        "You",
        "Iie. …Tokorode, jibun ni mo ie: regisutā, mamoreta.",
        "いいえ。…ところで、じぶんにもいえ：レジスター、まもれた。",
        "No problem. …By the way, note to self: registers held.",
      ],
    ],
    patterns: [
      {
        chunk: "そうともいえるけど…ちょっと",
        romaji: "sō to mo ieru kedo… chotto",
        hiragana: "そうともいえるけど…ちょっと",
        meaning: "Fair, but… it's a bit…",
        whenToUse:
          "Soft no with friends; leave alternative space.",
        examples: [
          [
            "そうともいえるけど、きょうはちょっと",
            "sō to mo ieru kedo, kyō wa chotto",
            "Fair, but today's a bit…",
          ],
          [
            "みりょくてきだけど、じかんが…",
            "miryokuteki da kedo, jikan ga…",
            "Tempting, but time…",
          ],
          [
            "たのしそうだけど、あしたはやおくて",
            "tanoshisō da kedo, ashita hayaokute",
            "Sounds fun, but early tomorrow…",
          ],
        ],
      },
      {
        chunk: "そういうわけで → いじょうです",
        romaji: "sō iu wake de → ijō desu",
        hiragana: "そういうわけで → いじょうです",
        meaning: "Therefore… that's all",
        whenToUse:
          "Meeting close arc in one breath pair.",
        examples: [
          [
            "そういうわけで、えんきします。いじょうです",
            "sō iu wake de, enki shimasu. Ijō desu",
            "Therefore we'll postpone. That's all.",
          ],
          [
            "そういうわけで、すいせんします",
            "sō iu wake de, suisen shimasu",
            "For that reason, I recommend it.",
          ],
          [
            "わたしからはいじょうです",
            "watashi kara wa ijō desu",
            "That's all from me.",
          ],
        ],
      },
      {
        chunk: "すみません、〜はどちらですか",
        romaji: "sumimasen, ~ wa dochira desu ka",
        hiragana: "すみません、〜はどちらですか",
        meaning: "Excuse me, which way is…?",
        whenToUse:
          "Stranger polite; answer with clear ですよ directions.",
        examples: [
          [
            "すみません、えきはどちらですか",
            "sumimasen, eki wa dochira desu ka",
            "Excuse me, which way is the station?",
          ],
          [
            "まっすぐいって、ひだりですよ",
            "massugu itte, hidari desu yo",
            "Go straight, then left.",
          ],
          [
            "このみちをさんぷんです",
            "kono michi o sanpun desu",
            "Three minutes down this street.",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "Three faces, one speaker",
        "Capstone isn't new grammar — it's choosing the right known tool in under a second.",
      ],
      [
        "Height map",
        "Friend: soft trail-offs. Boss: wake→close. Stranger: clean です/ます.",
      ],
      [
        "Self-check",
        "After mixed scenes, ask: did any register leak?",
      ],
    ],
    culturalNote: [
      "Fluency is social navigation",
      "Near-native Japanese isn't a bigger dictionary — it's arriving in each micro-situation with the expected height, pacing, and exit. Units 17–20 were the last gears for that map.",
    ],
    shadowing: [
      [
        "Sō to mo ieru kedo… kyō wa chotto.",
        "そうともいえるけど…きょうはちょっと。",
      ],
      [
        "Sō iu wake de, raishū ni enki. Watashi kara wa ijō desu.",
        "そういうわけで、らいしゅうにえんき。わたしからはいじょうです。",
      ],
      [
        "Massugu itte, hidari desu yo.",
        "まっすぐいって、ひだりですよ。",
      ],
      [
        "Sumimasen, eki wa dochira desu ka?",
        "すみません、えきはどちらですか？",
      ],
      [
        "Un. Sore nara.",
        "うん。それなら。",
      ],
      [
        "Iie.",
        "いいえ。",
      ],
    ],
    quiz: [
      [
        "Soft friend no:",
        [
          "そうともいえるけど…ちょっと",
          "うるさいバカ",
          "せざるをえないだけ",
          "ごしつもんは",
        ],
        0,
        "Soft disagreement.",
      ],
      [
        "Meeting close pair:",
        [
          "そういうわけで + いじょうです",
          "なんでやねん + すべった",
          "またそれ + おたがいさま",
          "もしもし only",
        ],
        0,
        "Wake then handoff.",
      ],
      [
        "Stranger ask pattern:",
        [
          "すみません、〜はどちらですか",
          "おい、どこ",
          "てめえ",
          "っすかのみ",
        ],
        0,
        "Polite direction ask.",
      ],
      [
        "Capstone proves:",
        [
          "one joke forever",
          "register switching under pressure",
          "never summarizing",
          "avoiding phones",
        ],
        1,
        "Mixed-height fluency.",
      ],
    ],
    production: [
      [
        "Fair, but today's a bit…",
        "そうともいえるけど…ちょっと",
        "Sō to mo ieru kedo… kyō wa chotto.",
        "そうともいえるけど…きょうはちょっと。",
      ],
      [
        "For that reason, postpone. That's all from me.",
        "そういうわけで + いじょうです",
        "Sō iu wake de, enki. Watashi kara wa ijō desu.",
        "そういうわけで、えんき。わたしからはいじょうです。",
      ],
      [
        "Go straight, then left.",
        "まっすぐいって、ひだりですよ",
        "Massugu itte, hidari desu yo.",
        "まっすぐいって、ひだりですよ。",
      ],
    ],
  }
];

export const speakingLessons1720 = compact.map(expandSpeaking);
