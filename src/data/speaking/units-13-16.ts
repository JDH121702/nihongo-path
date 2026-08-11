import { expandSpeaking, type CompactSpeaking } from "./builder";

const compact: CompactSpeaking[] = [
  {
    id: "sp-13-1",
    unit: 13,
    unitTitle: "Keigo & Institutions",
    order: 1,
    title: "そんけいご vs けんじょうご",
    subtitle: "Raise them, lower yourself — never mix the directions",
    scenario:
      "A mentor walks you through the two engines of keigo before you face a client.",
    durationMin: 26,
    objectives: [
      "Tell そんけいご (raise the other) from けんじょうご (humble yourself)",
      "Use いらっしゃる for their movement and まいる / おる for yours",
      "Catch the mistake of humbling a superior",
    ],
    dialogue: [
      [
        "Mentor",
        "Keigo ni wa, sonkeigo to kenjōgo ga arimasu.",
        "けいごには、そんけいごとけんじょうごがあります。",
        "Keigo has two sides: honorific and humble.",
      ],
      [
        "You",
        "Aite o ageru no ga sonkeigo, jibun o sageru no ga kenjōgo, desu ne.",
        "あいてをあげるのがそんけいご、じぶんをさげるのがけんじょうご、ですね。",
        "Raise the other person with sonkeigo, lower yourself with kenjōgo, right?",
      ],
      [
        "Mentor",
        "Sō desu. Shachō wa irasshaimasu. Watashi wa mairimasu.",
        "そうです。しゃちょうはいらっしゃいます。わたしはまいります。",
        "Exactly. The president irasshaimasu. I mairimasu.",
      ],
      [
        "You",
        "Ja, orimasu mo jibun-yō desu ka?",
        "じゃあ、「おります」もじぶんようですか。",
        "So orimasu is also for talking about myself?",
      ],
      [
        "Mentor",
        "Hai. Aite ni wa irassharu. Jibun ni wa oru. Gyaku ni suru to, shitsurei desu.",
        "はい。あいてにはいらっしゃる。じぶんにはおる。ぎゃくにすると、しつれいです。",
        "Yes. Irassharu for them, oru for you. Flip it and it's rude.",
      ],
      [
        "Nurse",
        "Shōshō omachi kudasai.",
        "しょうしょうおまちください。",
        "Please wait a moment.",
      ],
    ],
    patterns: [
      {
        chunk: "いらっしゃる / おいでになる",
        romaji: "irassharu / oide ni naru",
        hiragana: "いらっしゃる / おいでになる",
        meaning: "Honorific come / go / be",
        whenToUse:
          "When a customer, boss, or guest moves or is present. Never about yourself.",
        examples: [
          [
            "しゃちょうはいまいらっしゃいますか",
            "shachō wa ima irasshaimasu ka",
            "Is the president in right now?",
          ],
          [
            "おきゃくさまがおいでになりました",
            "okyakusama ga oide ni narimashita",
            "The guest has arrived.",
          ],
        ],
      },
      {
        chunk: "まいる / おる",
        romaji: "mairu / oru",
        hiragana: "まいる / おる",
        meaning: "Humble go/come, and humble be",
        whenToUse:
          "Your side's movement (まいる) and existence (おる). Client-facing and めうえ talk.",
        examples: [
          [
            "あしたまいります",
            "ashita mairimasu",
            "I'll come by tomorrow. (humble)",
          ],
          [
            "じむしょにおります",
            "jimusho ni orimasu",
            "I'm at the office. (humble)",
          ],
        ],
      },
      {
        chunk: "うけつけで",
        romaji: "uketsuke de",
        hiragana: "うけつけで",
        meaning: "at reception",
        whenToUse:
          "Hospital/clinic navigation.",
        examples: [
          [
            "うけつけでなまえをいってください",
            "uketsuke de namae o itte kudasai",
            "Please give your name at reception",
          ],
          [
            "ほけんしょうはありますか",
            "hoken-shō wa arimasu ka",
            "Do you have your insurance card?",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "Direction, not decoration",
        "そんけいご lifts the listener or their in-group. けんじょうご lowers you and your in-group. Saying しゃちょうがおります humbles the president — a classic learner crash.",
      ],
      [
        "One layer is enough",
        "いらっしゃられます and おいでになられる stack honorific on honorific (にじゅうけいご). Natives hear it as nervous, not extra polite. Pick one form.",
      ],
    ],
    culturalNote: [
      "Keigo is a map of groups",
      "In front of a client, your own しゃちょう gets けんじょうご (おる / まいる), because they are your side. Alone with that same しゃちょう, you switch to そんけいご. The grammar follows who is in the room.",
    ],
    shadowing: [
      [
        "Shachō wa ima irasshaimasu ka?",
        "しゃちょうはいまいらっしゃいますか？",
      ],
      ["Ashita mairimasu.", "あしたまいります。"],
    ],
    quiz: [
      [
        "The president is in the office. You tell a visitor:",
        [
          "しゃちょうはおります",
          "しゃちょうはいらっしゃいます",
          "しゃちょうはまいります",
          "しゃちょうはいたします",
        ],
        1,
        "いらっしゃる raises the president. おる / まいる would humble him.",
      ],
      [
        "まいる is used for:",
        [
          "The client's arrival",
          "Your boss's trip",
          "Your own going or coming",
          "Anyone's existence",
        ],
        2,
        "まいる is humble movement — your side only.",
      ],
      [
        "しょうしょうおまちください means:",
        [
          "Please wait a moment",
          "Leave now",
          "Pay cash",
          "Speak English",
        ],
        0,
        "Standard wait request.",
      ],
    ],
    production: [
      [
        "Is the president here now? (honorific)",
        "しゃちょう + いらっしゃいますか",
        "Shachō wa ima irasshaimasu ka?",
        "しゃちょうはいまいらっしゃいますか？",
      ],
      [
        "Please wait a moment",
        "しょうしょう + おまちください",
        "Shōshō omachi kudasai.",
        "しょうしょうおまちください。",
      ],
    ],
  },
  {
    id: "sp-13-2",
    unit: 13,
    unitTitle: "Keigo & Institutions",
    order: 2,
    title: "びょういんうけつけ",
    subtitle: "Check-in, symptoms, and the waiting-room script",
    scenario:
      "You walk into a clinic with a fever. Reception runs the same five questions every time.",
    durationMin: 26,
    objectives: [
      "Answer しょしん / さいしん and hand over ほけんしょう",
      "Describe symptoms with 〜がします / ねつがあります",
      "Sit through しょうしょうおまちください without panicking",
    ],
    dialogue: [
      [
        "Reception",
        "Konnichiwa. Shoshin desu ka, saishin desu ka?",
        "こんにちは。しょしんですか、さいしんですか。",
        "Hello. First visit, or a return visit?",
      ],
      [
        "You",
        "Shoshin desu. Kesa kara netsu ga arimasu.",
        "しょしんです。けさからねつがあります。",
        "First visit. I've had a fever since this morning.",
      ],
      [
        "Reception",
        "Hokenshō wa omochi desu ka?",
        "ほけんしょうはおもちですか。",
        "Do you have your insurance card with you?",
      ],
      [
        "You",
        "Hai, kochira desu. Atama mo itai desu.",
        "はい、こちらです。あたまもいたいです。",
        "Yes, here it is. My head hurts too.",
      ],
      [
        "Reception",
        "Shōshō omachi kudasai. Onamae o oyobi shimasu.",
        "しょうしょうおまちください。おなまえをおよびします。",
        "Please wait a moment. We'll call your name.",
      ],
      [
        "Clerk",
        "Kochira ni sain o onegai shimasu.",
        "こちらにサインをおねがいします。",
        "Please sign here.",
      ],
    ],
    patterns: [
      {
        chunk: "〜がします",
        romaji: "~ ga shimasu",
        hiragana: "〜がします",
        meaning: "I feel / I have (a sensation)",
        whenToUse:
          "Body sensations that aren't a simple いたい: めまい, はきけ, さむけ, おと.",
        examples: [
          [
            "ちょっとめまいがします",
            "chotto memai ga shimasu",
            "I feel a bit dizzy.",
          ],
          [
            "みみにへんなおとがします",
            "mimi ni hen na oto ga shimasu",
            "I hear a strange sound in my ear.",
          ],
        ],
      },
      {
        chunk: "おもちですか / おまちください",
        romaji: "omochi desu ka / omachi kudasai",
        hiragana: "おもちですか / おまちください",
        meaning: "Do you have ___? / Please wait",
        whenToUse:
          "Counter お＋stem keigo. Staff use it on you; you answer in plain です/ます, not matching full keigo.",
        examples: [
          [
            "カードはおもちですか",
            "kādo wa omochi desu ka",
            "Do you have your card?",
          ],
          [
            "こちらでおまちください",
            "kochira de omachi kudasai",
            "Please wait over here.",
          ],
        ],
      },
      {
        chunk: "てつづき",
        romaji: "tetsuzuki",
        hiragana: "てつづき",
        meaning: "procedure / paperwork",
        whenToUse:
          "City hall counters; ask what documents you need.",
        examples: [
          [
            "てつづきをしたいです",
            "tetsuzuki o shitai desu",
            "I'd like to do the procedure",
          ],
          [
            "なにがひつようですか",
            "nani ga hitsuyō desu ka",
            "What do I need?",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "ねつがあります vs あたまがいたい",
        "Fever and similar states take あります. Localized pain often takes いたい. Both show up in the same もんしんひょう.",
      ],
      [
        "Don't keigo the receptionist back",
        "You are the patient, not the staff. しょしんです and はい、こちらです is the right height. まいる here sounds theatrical.",
      ],
    ],
    culturalNote: [
      "ほけんしょう is the ticket",
      "Without it you can still be seen, but you may pay 10わり and claim later. Reception will also ask アレルギー and おくすり. Bring both cards if you have a おくすりてちょう.",
    ],
    shadowing: [
      [
        "Kesa kara netsu ga arimasu.",
        "けさからねつがあります。",
      ],
      [
        "Hokenshō wa omochi desu ka?",
        "ほけんしょうはおもちですか？",
      ],
    ],
    quiz: [
      [
        "Reception asks if this is your first visit. You say:",
        [
          "はじめましてです",
          "しょしんです",
          "さいしょします",
          "おいしゃさんです",
        ],
        1,
        "しょしん = first visit. さいしん = you've been here before.",
      ],
      [
        "A natural way to report dizziness:",
        [
          "めまいをたべます",
          "めまいがいます",
          "めまいがします",
          "めまいでございます",
        ],
        2,
        "Sensations take がします.",
      ],
      [
        "てつづき is:",
        [
          "Procedure/paperwork",
          "Noodles",
          "A joke",
          "A train",
        ],
        0,
        "てつづき = procedures.",
      ],
    ],
    production: [
      [
        "I've had a fever since this morning.",
        "けさから + ねつがあります",
        "Kesa kara netsu ga arimasu.",
        "けさからねつがあります。",
      ],
      [
        "I'd like to complete the paperwork",
        "てつづき + したい",
        "Tetsuzuki o shitai desu.",
        "てつづきをしたいです。",
      ],
    ],
  },
  {
    id: "sp-13-3",
    unit: 13,
    unitTitle: "Keigo & Institutions",
    order: 3,
    title: "しやくしょ",
    subtitle: "State your business, hand over IDs, wait for the number",
    scenario:
      "You take a ticket at city hall to register your address. The counter talk is slow, formal, and reusable.",
    durationMin: 26,
    objectives: [
      "Open with どのようなごようけんでしょうか and answer 〜したいんですが",
      "Confirm which IDs and forms you need",
      "Follow ごきにゅうのうえ、あのでんまで",
    ],
    dialogue: [
      [
        "Clerk",
        "Irasshaimase. Donoyōna goyōken deshō ka?",
        "いらっしゃいませ。どのようなごようけんでしょうか。",
        "Welcome. What business can we help you with?",
      ],
      [
        "You",
        "Jūmin tōroku o shitai n desu ga.",
        "じゅうみんとうろくをしたいんですが。",
        "I'd like to do resident registration...",
      ],
      [
        "Clerk",
        "Pasupōto to zairyū kādo wa omochi desu ka?",
        "パスポートとざいりゅうカードはおもちですか。",
        "Do you have your passport and residence card?",
      ],
      [
        "You",
        "Hai. Kono shorui de tarimasu ka?",
        "はい。このしょるいでたりますか。",
        "Yes. Are these documents enough?",
      ],
      [
        "Clerk",
        "Hai. Kochira ni gokinyū no ue, ano madoguchi de omachi kudasai.",
        "はい。こちらにごきにゅうのうえ、あのでんまでおまちください。",
        "Yes. Fill this in, then wait at that window.",
      ],
      [
        "Teller",
        "Otsugi no kata dōzo.",
        "おつぎのかたどうぞ。",
        "Next person, please.",
      ],
    ],
    patterns: [
      {
        chunk: "どのようなごようけんでしょうか",
        romaji: "donoyōna goyōken deshō ka",
        hiragana: "どのようなごようけんでしょうか",
        meaning: "What can we help you with? / What is your business?",
        whenToUse:
          "City hall, ward office, ward がいこくじん window — the clerk's opener. Answer with the procedure, not your life story.",
        examples: [
          [
            "てんにゅうとどけでしょうか",
            "tennyū todoke deshō ka",
            "Is it a move-in notification?",
          ],
          [
            "ごじゅうしょのへんこうでしょうか",
            "gojūsho no henkō deshō ka",
            "Is it a change of address?",
          ],
        ],
      },
      {
        chunk: "〜したいんですが",
        romaji: "~ shitai n desu ga",
        hiragana: "〜したいんですが",
        meaning: "I'd like to ___ (soft purpose)",
        whenToUse:
          "Counters. The が leaves the request open so they can tell you the next step.",
        examples: [
          [
            "いんかんとうろくをしたいんですが",
            "inkan tōroku o shitai n desu ga",
            "I'd like to register a personal seal...",
          ],
          [
            "じゅうみんひょうがほしいんですが",
            "jūminhyō ga hoshii n desu ga",
            "I'd like a resident record...",
          ],
        ],
      },
      {
        chunk: "ふりこみ",
        romaji: "furikomi",
        hiragana: "ふりこみ",
        meaning: "bank transfer",
        whenToUse:
          "Bank counter or ATM help desk.",
        examples: [
          [
            "ふりこみをしたいです",
            "furikomi o shitai desu",
            "I'd like to make a transfer",
          ],
          [
            "こうざばんごうをおねがいします",
            "kōza bangō o onegai shimasu",
            "Account number, please",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "んですが is the counter particle",
        "したいです is complete and a bit blunt at a window. したいんですが invites them to take over the procedure.",
      ],
      [
        "ご on Sino-Japanese nouns",
        "ごようけん, ごじゅうしょ, ごきにゅう. Same respect as お on native words. You don't put ご on your own ようけん when stating it — just name the procedure.",
      ],
    ],
    culturalNote: [
      "Take a number and do not hover",
      "Most しやくしょ run on はっけんき tickets. Staff will not rush you, and they will not skip the checklist. Some procedures still want いんかん. Foreign-resident desks are often labeled がいこくじん / こくせき.",
    ],
    shadowing: [
      [
        "Donoyōna goyōken deshō ka?",
        "どのようなごようけんでしょうか？",
      ],
      [
        "Jūmin tōroku o shitai n desu ga.",
        "じゅうみんとうろくをしたいんですが。",
      ],
    ],
    quiz: [
      [
        "Best way to state your purpose at a counter:",
        [
          "とうろくしろ",
          "とうろくしたいんですが",
          "とうろくいたしましたか",
          "とうろくいらっしゃい",
        ],
        1,
        "〜したいんですが is the soft, standard counter opener.",
      ],
      [
        "ごようけん means:",
        [
          "Your family register",
          "The matter you came about",
          "A parking ticket",
          "Office hours",
        ],
        1,
        "ようけん = the business at hand. ご is the honorific wrapper.",
      ],
      [
        "ふりこみ is:",
        [
          "Bank transfer",
          "Greeting",
          "Dessert",
          "Umbrella",
        ],
        0,
        "ふりこみ = transfer.",
      ],
    ],
    production: [
      [
        "I'd like to do resident registration...",
        "じゅうみんとうろく + したいんですが",
        "Jūmin tōroku o shitai n desu ga.",
        "じゅうみんとうろくをしたいんですが。",
      ],
      [
        "I'd like to make a transfer",
        "ふりこみ + したい",
        "Furikomi o shitai desu.",
        "ふりこみをしたいです。",
      ],
    ],
  },
  {
    id: "sp-13-4",
    unit: 13,
    unitTitle: "Keigo & Institutions",
    order: 4,
    title: "ぎんこう",
    subtitle: "Transfers, ID checks, and bank-counter keigo",
    scenario:
      "You need to send a ふりこみ. The teller will confirm who you are before they touch the money.",
    durationMin: 26,
    objectives: [
      "Request a ふりこみ without casual shortcuts",
      "Recognize させていただく and かしこまりました",
      "Hand over つうちょう / キャッシュカード and read back the こうざばんごう",
    ],
    dialogue: [
      [
        "Teller",
        "Ohayō gozaimasu. Donoyōna otetsuzuki deshō ka?",
        "おはようございます。どのようなおてつづきでしょうか。",
        "Good morning. What procedure can we help with?",
      ],
      [
        "You",
        "Furikomi o onegai shitai n desu ga.",
        "ふりこみをおねがいしたいんですが。",
        "I'd like to make a transfer...",
      ],
      [
        "Teller",
        "Kashikomarimashita. Gohonnin kakunin o sasete itadakimasu.",
        "かしこまりました。ごほんにんかくにんをさせていただきます。",
        "Certainly. I'll need to verify your identity.",
      ],
      [
        "You",
        "Tsūchō to kyasshu kādo o motte mairimashita.",
        "つうちょうとキャッシュカードをもってまいりました。",
        "I brought my passbook and cash card.",
      ],
      [
        "Teller",
        "Arigatō gozaimasu. Furikomisaki no kōza bangō o onegai shimasu.",
        "ありがとうございます。ふりこみさきのこうざばんごうをおねがいします。",
        "Thank you. The destination account number, please.",
      ],
      [
        "Interviewer",
        "Shitsumon wa arimasu ka?",
        "しつもんはありますか？",
        "Do you have any questions?",
      ],
    ],
    patterns: [
      {
        chunk: "〜させていただく",
        romaji: "~ sasete itadaku",
        hiragana: "〜させていただく",
        meaning: "I will humbly take the liberty of ___ / please allow me to ___",
        whenToUse:
          "Bank, clinic, and formal business when you (or they) perform an action that touches the other person's affairs.",
        examples: [
          [
            "かくにんをさせていただきます",
            "kakunin o sasete itadakimasu",
            "I'll go ahead and confirm that.",
          ],
          [
            "ごあんないさせていただきます",
            "goannai sasete itadakimasu",
            "Allow me to show you the way.",
          ],
        ],
      },
      {
        chunk: "かしこまりました",
        romaji: "kashikomarimashita",
        hiragana: "かしこまりました",
        meaning: "Certainly / I understand (service register)",
        whenToUse:
          "Staff accepting a request. You can use it at work when a superior asks; it is heavy for friends.",
        examples: [
          [
            "かしこまりました。しょうしょうおまちください",
            "kashikomarimashita. shōshō omachi kudasai",
            "Certainly. Please wait a moment.",
          ],
          [
            "かしこまりました。ただちにてつづきします",
            "kashikomarimashita. tadachi ni tetsuzuki shimasu",
            "Certainly. I'll process that right away.",
          ],
        ],
      },
      {
        chunk: "しごとをさがしています",
        romaji: "shigoto o sagashite imasu",
        hiragana: "しごとをさがしています",
        meaning: "I'm looking for work",
        whenToUse:
          "Interviews and networking intros.",
        examples: [
          [
            "えいぎょうにきょうみがあります",
            "eigyō ni kyōmi ga arimasu",
            "I'm interested in sales",
          ],
          [
            "どうぞよろしくおねがいします",
            "dōzo yoroshiku onegai shimasu",
            "Thank you for your consideration",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "させていただく is humble permission",
        "It frames the action as received from the listener. Banks overuse it; you still need to hear it as 'we will now do X to/for you,' not as empty padding.",
      ],
      [
        "もってまいりました",
        "じさん in speech: もってくる humble-upgraded to もってまいる. Natural at a bank, odd at a convenience store.",
      ],
    ],
    culturalNote: [
      "Counters are slow on purpose",
      "Identity checks, stamps, and read-backs are the product, not the delay. Casual ためぐち at a ぎんこう window sounds sloppy. Many branches still like はんこ; ATMs hide the English — the human line does not.",
    ],
    shadowing: [
      [
        "Furikomi o onegai shitai n desu ga.",
        "ふりこみをおねがいしたいんですが。",
      ],
      [
        "Gohonnin kakunin o sasete itadakimasu.",
        "ごほんにんかくにんをさせていただきます。",
      ],
    ],
    quiz: [
      [
        "A teller accepting your request is most likely to say:",
        ["うん、いいよ", "わかった", "かしこまりました", "どうぞよろしく"],
        2,
        "かしこまりました is the service-register 'certainly.'",
      ],
      [
        "ごほんにんかくにん is:",
        [
          "A credit check on a friend",
          "Confirming you are the account holder",
          "A password reset email",
          "Opening a second account",
        ],
        1,
        "ほんにん = the person themselves. Banks must see that you are you.",
      ],
      [
        "きょうみがあります means:",
        [
          "I'm interested",
          "I'm leaving",
          "I'm lost",
          "I'm full",
        ],
        0,
        "きょうみ = interest.",
      ],
    ],
    production: [
      [
        "I'd like to make a transfer...",
        "ふりこみ + おねがいしたいんですが",
        "Furikomi o onegai shitai n desu ga.",
        "ふりこみをおねがいしたいんですが。",
      ],
      [
        "I'm interested in this role",
        "このしごとに + きょうみ",
        "Kono shigoto ni kyōmi ga arimasu.",
        "このしごとにきょうみがあります。",
      ],
    ],
  },
  {
    id: "sp-13-5",
    unit: 13,
    unitTitle: "Keigo & Institutions",
    order: 5,
    title: "めんせつ",
    subtitle: "Humble the self, raise the company, then stop talking",
    scenario:
      "A first-round interview. They want clean けんじょうご about you and おんしゃ for them — not a speech.",
    durationMin: 26,
    objectives: [
      "Introduce yourself with ともうします and しております",
      "Say おんしゃ (their company) and おうぼいたしました",
      "Close without overselling",
    ],
    dialogue: [
      [
        "Interviewer",
        "Sore dewa, jiko shōkai o onegai shimasu.",
        "それでは、じこしょうかいをおねがいします。",
        "Well then, please introduce yourself.",
      ],
      [
        "You",
        "Jasutin to mōshimasu. Zenshoku dewa, gaikoku okyakusama no taiō o tantō shite orimashita.",
        "ジャスティンともうします。ぜんしょくでは、がいこくおきゃくさまのたいおうをたんとうしておりました。",
        "My name is Justin. At my last job I handled foreign customers.",
      ],
      [
        "Interviewer",
        "Tōsha o shibō sareta riyū o okikase kudasai.",
        "とうしゃをしぼうされたりゆうをおきかせください。",
        "Please tell us why you applied to our company.",
      ],
      [
        "You",
        "Onsha nara, sono keiken o ikaseru no de wa nai ka to zonji, ōbo itashimashita.",
        "おんしゃなら、そのけいけんをいかせるのではないかとぞんじ、おうぼいたしました。",
        "I felt I could put that experience to use here, so I applied.",
      ],
      [
        "Interviewer",
        "Wakarimashita. Kekka wa mēru de gorenraku shimasu.",
        "わかりました。けっかはメールでごれんらくします。",
        "Understood. We'll contact you by email with the result.",
      ],
      [
        "Staff",
        "Ukagaimashita. Kakunin itashimasu.",
        "うかがいました。かくにんいたします。",
        "Understood. I'll confirm.",
      ],
    ],
    patterns: [
      {
        chunk: "〜ております",
        romaji: "~ te orimasu",
        hiragana: "〜ております",
        meaning: "Humble ongoing ている",
        whenToUse:
          "Your duties, studies, and current state in interviews and client meetings. Not for the interviewer's actions.",
        examples: [
          [
            "えいぎょうをたんとうしております",
            "eigyō o tantō shite orimasu",
            "I am in charge of sales.",
          ],
          [
            "いまもにほんごをべんきょうしております",
            "ima mo nihongo o benkyō shite orimasu",
            "I am still studying Japanese.",
          ],
        ],
      },
      {
        chunk: "〜いたす / おうぼいたしました",
        romaji: "~ itasu / ōbo itashimashita",
        hiragana: "〜いたす / おうぼいたしました",
        meaning: "Humble する; I applied",
        whenToUse:
          "Replace します about your own formal acts: おくりいたす, さんかいたす, おうぼいたす.",
        examples: [
          [
            "しりょうをおくりいたしました",
            "shiryō o okuri itashimashita",
            "I sent the materials. (humble)",
          ],
          [
            "かいぎにさんかいたしました",
            "kaigi ni sanka itashimashita",
            "I attended the meeting. (humble)",
          ],
        ],
      },
      {
        chunk: "いたします",
        romaji: "itashimasu",
        hiragana: "いたします",
        meaning: "humble 'do'",
        whenToUse:
          "Keigo when you act for a customer or superior.",
        examples: [
          [
            "かくにんいたします",
            "kakunin itashimasu",
            "I'll confirm (humble)",
          ],
          [
            "おまちしております",
            "omachi shite orimasu",
            "We look forward to seeing you",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "おんしゃ vs とうしゃ",
        "You say おんしゃ for their company. They say とうしゃ (or へいしゃ) for themselves. Never call your own workplace おんしゃ.",
      ],
      [
        "ぞんじる is humble おもう / しる",
        "いかせるかとぞんじ = I humbly thought I might be able to contribute. Don't ぞんじる the interviewer's opinions.",
      ],
    ],
    culturalNote: [
      "Short and humble beats a TED talk",
      "めんせつ rewards clean structure: who you are, what you did, why this company. Big claims without けんじょうご feel pushy. A slight bow when you sit and when you leave does more than an extra adjective.",
    ],
    shadowing: [
      [
        "Jasutin to mōshimasu.",
        "ジャスティンともうします。",
      ],
      [
        "Ōbo itashimashita.",
        "おうぼいたしました。",
      ],
    ],
    quiz: [
      [
        "Talking to the interviewer about their company, you say:",
        ["へいしゃ", "うちのかいしゃ", "おんしゃ", "おまえのかいしゃ"],
        2,
        "おんしゃ raises their company. へいしゃ is for your own.",
      ],
      [
        "Humble ongoing 'I handle sales' is:",
        [
          "えいぎょうをたんとうしていらっしゃいます",
          "えいぎょうをたんとうしております",
          "えいぎょうをたんとうなさいます",
          "えいぎょうをたんとうだ",
        ],
        1,
        "ております humbles your own ongoing work. いらっしゃる / なさる would raise you — wrong direction.",
      ],
      [
        "いたします is:",
        [
          "Humble 'do'",
          "Casual slang only",
          "A food",
          "A station",
        ],
        0,
        "Humble verb for your actions.",
      ],
    ],
    production: [
      [
        "My name is Justin. (humble interview intro)",
        "なまえ + ともうします",
        "Jasutin to mōshimasu.",
        "ジャスティンともうします。",
      ],
      [
        "I'll confirm (humble)",
        "かくにん + いたします",
        "Kakunin itashimasu.",
        "かくにんいたします。",
      ],
    ],
  },
  {
    id: "sp-13-6",
    unit: 13,
    unitTitle: "Keigo & Institutions",
    order: 6,
    title: "めうえには、ためぐちをあわせない",
    subtitle: "They go casual. You stay up.",
    scenario:
      "Your ぶちょう drops into plain form about a client reply. Matching that register would be the mistake.",
    durationMin: 26,
    objectives: [
      "Use はいけんする for documents you looked at",
      "Offer a view with 〜かとぞんじます",
      "Stay in です/ます even when the boss is casual",
    ],
    dialogue: [
      [
        "Boss",
        "Kinō no shiryō, mō mita kai.",
        "きのうのしりょう、もうみたかい。",
        "Did you already look at yesterday's materials?",
      ],
      [
        "You",
        "Hai, haiken itashimashita. Totemo sankō ni narimashita.",
        "はい、はいけんいたしました。とてもさんこうになりました。",
        "Yes, I looked them over. They were very helpful.",
      ],
      [
        "Boss",
        "Kyakusaki e no henji wa, dō suru.",
        "きゃくさきへのへんじは、どうする。",
        "What are we doing about the reply to the client?",
      ],
      [
        "You",
        "Kyōjū ni ookuri shita hō ga yoroshii ka to zonjimasu.",
        "きょうじゅうにおおくりしたほうがよろしいかとぞんじます。",
        "I believe it would be best to send it today.",
      ],
      [
        "Boss",
        "Un, ja tanomu yo.",
        "うん、じゃあたのむよ。",
        "Yeah, I'll leave it to you then.",
      ],
      [
        "You",
        "Arigatō gozaimashita. Shitsurei shimasu.",
        "ありがとうございました。しつれいします。",
        "Thank you. Excuse me (leaving).",
      ],
    ],
    patterns: [
      {
        chunk: "はいけんする",
        romaji: "haiken suru",
        hiragana: "はいけんする",
        meaning: "Humble 'look at / read' (their thing)",
        whenToUse:
          "Email, slides, a superior's work. The honorific pair is ごらんになる — never はいけん the boss's action.",
        examples: [
          [
            "メールをはいけんしました",
            "mēru o haiken shimashita",
            "I read the email. (humble)",
          ],
          [
            "ホームページをはいけんいたしました",
            "hōmupēji o haiken itashimashita",
            "I looked at the website. (humble)",
          ],
        ],
      },
      {
        chunk: "〜かとぞんじます",
        romaji: "~ ka to zonjimasu",
        hiragana: "〜かとぞんじます",
        meaning: "I humbly think perhaps ___",
        whenToUse:
          "Advice upward. Softer than とおもいます and much softer than すべきです.",
        examples: [
          [
            "このほうがよろしいかとぞんじます",
            "kono hō ga yoroshii ka to zonjimasu",
            "I believe this way would be better.",
          ],
          [
            "もんだいないかとぞんじます",
            "mondai nai ka to zonjimasu",
            "I don't believe there is a problem.",
          ],
        ],
      },
      {
        chunk: "しつれいします",
        romaji: "shitsurei shimasu",
        hiragana: "しつれいします",
        meaning: "Excuse me (entering/leaving)",
        whenToUse:
          "Enter/leave offices, interviews, formal rooms.",
        examples: [
          [
            "しつれいします",
            "shitsurei shimasu",
            "Excuse me",
          ],
          [
            "しつれいいたしました",
            "shitsurei itashimashita",
            "Excuse me (past/closing)",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "ぞんじます ≠ fancy です",
        "It is humble おもう. Stick it on a proposal, not on facts like the time of day.",
      ],
      [
        "Asymmetry is the point",
        "めうえ often drop keigo toward juniors. You do not drop with them. The gap is respect, not unfairness.",
      ],
    ],
    culturalNote: [
      "Don't chase the boss into ためぐち",
      "A friendly ぶちょう saying たのむよ is warmth, not an invitation to reply おっけー、まかしとけ. Stay one step above until they explicitly say ためぐちでいいよ — and even then, many workplaces never fully drop it.",
    ],
    shadowing: [
      [
        "Haiken itashimashita.",
        "はいけんいたしました。",
      ],
      [
        "Yoroshii ka to zonjimasu.",
        "よろしいかとぞんじます。",
      ],
    ],
    quiz: [
      [
        "You looked at the boss's file. You say:",
        [
          "みました",
          "ごらんになりました",
          "はいけんいたしました",
          "みてやりました",
        ],
        2,
        "はいけん humbles your looking. ごらんになる would describe their looking.",
      ],
      [
        "Boss speaks casually. You should:",
        [
          "Match their ためぐち immediately",
          "Stay polite; the asymmetry is normal",
          "Switch to そんけいご about yourself",
          "Stop answering",
        ],
        1,
        "Juniors stay up. Matching down is the social error.",
      ],
      [
        "しつれいします is used when:",
        [
          "Entering/leaving politely",
          "Ordering beer only",
          "Deleting mail",
          "Sleeping",
        ],
        0,
        "しつれいします = excuse me (enter/leave).",
      ],
    ],
    production: [
      [
        "I believe it would be best to send it today.",
        "きょうじゅうに + おおくりしたほうがよろしいかとぞんじます",
        "Kyōjū ni ookuri shita hō ga yoroshii ka to zonjimasu.",
        "きょうじゅうにおおくりしたほうがよろしいかとぞんじます。",
      ],
      [
        "Excuse me (as you leave)",
        "しつれいします",
        "Shitsurei shimasu.",
        "しつれいします。",
      ],
    ],
  },
  {
    id: "sp-14-1",
    unit: 14,
    unitTitle: "Conflict & Bureaucracy",
    order: 1,
    title: "くじょうを、そうだんとしてだす",
    subtitle: "Complain without starting a fight",
    scenario:
      "A gadget you bought two days ago will not turn on. You go back to the shop.",
    durationMin: 26,
    objectives: [
      "Open a complaint as ごそうだんしたいんですが",
      "State the fault with facts, then こまっています",
      "Accept かくにんさせていただいてもよろしいでしょうか",
    ],
    dialogue: [
      [
        "Staff",
        "Irasshaimase. Ikaga itashimashō ka?",
        "いらっしゃいませ。いかがいたしましょうか。",
        "Welcome. How may I help you?",
      ],
      [
        "You",
        "Ototoi kattekita seihin ni tsuite, gosōdan shitai n desu ga.",
        "おとといかってきたせいひんについて、ごそうだんしたいんですが。",
        "I'd like to ask about a product I bought the day before yesterday...",
      ],
      [
        "Staff",
        "Hai. Donoyōna jōkyō deshō ka?",
        "はい。どのようなじょうきょうでしょうか。",
        "Of course. What seems to be the situation?",
      ],
      [
        "You",
        "Suitchi o irete mo, ugokanai n desu. Komatte imasu.",
        "スイッチをいれても、うごかないんです。こまっています。",
        "Even when I flip the switch, it doesn't work. I'm stuck.",
      ],
      [
        "Staff",
        "Sore wa shitsurei itashimashita. Mise de kakunin sasete itadaite mo yoroshii deshō ka?",
        "それはしつれいいたしました。みせでかくにんさせていただいてもよろしいでしょうか。",
        "I'm very sorry. May we check it here in the store?",
      ],
      [
        "Clerk",
        "Hai, reshiito mo omochi shimasu.",
        "はい、レシートもおもちします。",
        "Yes, I'll bring the receipt too.",
      ],
    ],
    patterns: [
      {
        chunk: "ごそうだんしたいんですが",
        romaji: "gosōdan shitai n desu ga",
        hiragana: "ごそうだんしたいんですが",
        meaning: "I'd like to consult you about ___ (soft complaint opener)",
        whenToUse:
          "Retail, hotels, city hall. You are not yelling くじょう; you are inviting them to solve it.",
        examples: [
          [
            "よやくについてごそうだんしたいんですが",
            "yoyaku ni tsuite gosōdan shitai n desu ga",
            "I'd like to ask about a reservation...",
          ],
          [
            "せいきゅうについてごそうだんしたいんですが",
            "seikyū ni tsuite gosōdan shitai n desu ga",
            "I'd like to ask about a bill...",
          ],
        ],
      },
      {
        chunk: "〜てこまっています",
        romaji: "~ te komatte imasu",
        hiragana: "〜てこまっています",
        meaning: "I'm in a bind because ___",
        whenToUse:
          "After the facts. It asks for help without blaming a person.",
        examples: [
          [
            "おとがしなくてこまっています",
            "oto ga shinakute komatte imasu",
            "There's no sound, so I'm stuck.",
          ],
          [
            "れんらくがとれなくてこまっています",
            "renraku ga torenakute komatte imasu",
            "I can't get in touch, so I'm in a bind.",
          ],
        ],
      },
      {
        chunk: "へんぴんしたいです",
        romaji: "henpin shitai desu",
        hiragana: "へんぴんしたいです",
        meaning: "I'd like to return this",
        whenToUse:
          "Store returns; have receipt ready.",
        examples: [
          [
            "これをへんぴんしたいです",
            "kore o henpin shitai desu",
            "I'd like to return this",
          ],
          [
            "レシートありますか",
            "reshīto arimasu ka",
            "Do you have the receipt?",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "Frame it as そうだん, not くじょう",
        "くじょうをいいたいんです is legal and harsh. ごそうだんしたいんですが gets the same desk with less armor on the other side.",
      ],
      [
        "しつれいいたしました takes the store's blame",
        "Staff apologize for the situation, not only for their personal mistake. You don't need to say きにしないでください — let them fix it.",
      ],
    ],
    culturalNote: [
      "Facts, then trouble, then a request",
      "Raising your voice marks you as the problem. A calm timeline (when bought, what happens, what you already tried) is what the てんちょ can act on. They will often apologize before they even know the cause.",
    ],
    shadowing: [
      [
        "Gosōdan shitai n desu ga.",
        "ごそうだんしたいんですが。",
      ],
      [
        "Suitchi o irete mo, ugokanai n desu.",
        "スイッチをいれても、うごかないんです。",
      ],
    ],
    quiz: [
      [
        "Softest way to start a shop complaint:",
        [
          "くじょうがある",
          "これはさいてい",
          "ごそうだんしたいんですが",
          "べんしょうしろ",
        ],
        2,
        "ごそうだんしたいんですが opens the door without an attack.",
      ],
      [
        "こまっています adds:",
        [
          "A threat to sue",
          "Your inconvenience, so they can help",
          "A joke",
          "Praise for the product",
        ],
        1,
        "It shows impact. Staff can move from apology to action.",
      ],
      [
        "へんぴんしたいです means:",
        [
          "I'd like to return this",
          "I'd like two more",
          "I'd like to sing",
          "I'd like to quit Japan",
        ],
        0,
        "へんぴん = return goods.",
      ],
    ],
    production: [
      [
        "I'd like to consult you about this product...",
        "せいひんについて + ごそうだんしたいんですが",
        "Kono seihin ni tsuite, gosōdan shitai n desu ga.",
        "このせいひんについて、ごそうだんしたいんですが。",
      ],
      [
        "I'd like to return this",
        "へんぴん + したい",
        "Kore o henpin shitai desu.",
        "これをへんぴんしたいです。",
      ],
    ],
  },
  {
    id: "sp-14-2",
    unit: 14,
    unitTitle: "Conflict & Bureaucracy",
    order: 2,
    title: "へんぴんとこうかん",
    subtitle: "Receipt, tags on, and the こうかん vs へんきん fork",
    scenario:
      "A shirt in the wrong size. You have the receipt and the tags are still attached.",
    durationMin: 26,
    objectives: [
      "Ask for へんぴん / こうかん with したいんですが",
      "Offer レシート and the reason (サイズがあわない)",
      "Answer どちらがなさいますか",
    ],
    dialogue: [
      [
        "Staff",
        "Irasshaimase.",
        "いらっしゃいませ。",
        "Welcome.",
      ],
      [
        "You",
        "Kore, henpin shitai n desu ga. Tagu mo tsuketa mama desu.",
        "これ、へんぴんしたいんですが。タグもつけたままです。",
        "I'd like to return this. The tags are still on.",
      ],
      [
        "Staff",
        "Reshīto wa omochi desu ka?",
        "レシートはおもちですか。",
        "Do you have the receipt?",
      ],
      [
        "You",
        "Hai, kochira desu. Saizu ga aimasen deshita.",
        "はい、こちらです。サイズがあいませんでした。",
        "Yes, here. The size didn't work.",
      ],
      [
        "Staff",
        "Kashikomarimashita. Kōkan to henkin, dochira ga nasaimasu ka?",
        "かしこまりました。こうかんとへんきん、どちらがなさいますか。",
        "Certainly. Exchange or refund — which will you do?",
      ],
      [
        "Agent",
        "Gorenraku shimasu. Shōshō omachi kudasai.",
        "ごれんらくします。しょうしょうおまちください。",
        "I'll contact you. Please wait a moment.",
      ],
    ],
    patterns: [
      {
        chunk: "へんぴんしたいんですが",
        romaji: "henpin shitai n desu ga",
        hiragana: "へんぴんしたいんですが",
        meaning: "I'd like to return this...",
        whenToUse:
          "Retail returns. Add unused / tags-on if true — that is often the real policy.",
        examples: [
          [
            "きのうかったふくをへんぴんしたいんですが",
            "kinō katta fuku o henpin shitai n desu ga",
            "I'd like to return clothes I bought yesterday...",
          ],
          [
            "いろをこうかんしたいんですが",
            "iro o kōkan shitai n desu ga",
            "I'd like to exchange the color...",
          ],
        ],
      },
      {
        chunk: "どちらがなさいますか",
        romaji: "dochira ga nasaimasu ka",
        hiragana: "どちらがなさいますか",
        meaning: "Which will you do? (honorific する)",
        whenToUse:
          "Staff offering a choice. Answer with the noun + でおねがいします.",
        examples: [
          [
            "こうかんになさいますか",
            "kōkan ni nasaimasu ka",
            "Will you exchange it?",
          ],
          [
            "こうかんでおねがいします",
            "kōkan de onegai shimasu",
            "An exchange, please.",
          ],
        ],
      },
      {
        chunk: "けいやく",
        romaji: "keiyaku",
        hiragana: "けいやく",
        meaning: "contract",
        whenToUse:
          "Phone, rent, gym — ask before signing.",
        examples: [
          [
            "けいやくないようをかくにんしたいです",
            "keiyaku naiyō o kakunin shitai desu",
            "I'd like to confirm the contract details",
          ],
          [
            "かいやくできますか",
            "kaiyaku dekimasu ka",
            "Can I cancel?",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "なさる is honorific する",
        "どちらがなさいますか = which will you do? Don't なさる your own return.",
      ],
      [
        "みしよう・タグつき",
        "Policy Japanese: unused, tags attached, within N days, receipt present. Food from デパチカ is usually へんぴんふか.",
      ],
    ],
    culturalNote: [
      "こうかん is easier than へんきん",
      "Many chains will swap a size on the spot and fight a cash refund. Uniqlo-style shops are loose; boutiques and sale racks are not. Don't wear it, wash it, or cut the tags if you might bring it back.",
    ],
    shadowing: [
      [
        "Henpin shitai n desu ga.",
        "へんぴんしたいんですが。",
      ],
      [
        "Kōkan de onegai shimasu.",
        "こうかんでおねがいします。",
      ],
    ],
    quiz: [
      [
        "Staff asks こうかんとへんきん、どちらがなさいますか. You want a swap:",
        [
          "へんきんでおねがいします",
          "こうかんでおねがいします",
          "なさいます",
          "タグください",
        ],
        1,
        "こうかん = exchange. へんきん = money back.",
      ],
      [
        "なさいますか is honorific for:",
        ["くる", "みる", "する", "まつ"],
        2,
        "なさる replaces する when raising the customer.",
      ],
      [
        "けいやく is:",
        [
          "Contract",
          "Coffee",
          "Cousin",
          "Platform",
        ],
        0,
        "けいやく = contract.",
      ],
    ],
    production: [
      [
        "I'd like to return this. The tags are still on.",
        "へんぴんしたいんですが + タグもつけたまま",
        "Kore, henpin shitai n desu ga. Tagu mo tsuketa mama desu.",
        "これ、へんぴんしたいんですが。タグもつけたままです。",
      ],
      [
        "I'd like to confirm the contract",
        "けいやく + かくにん",
        "Keiyaku naiyō o kakunin shitai desu.",
        "けいやくないようをかくにんしたいです。",
      ],
    ],
  },
  {
    id: "sp-14-3",
    unit: 14,
    unitTitle: "Conflict & Bureaucracy",
    order: 3,
    title: "けいやくのばしょで、うごかない",
    subtitle: "Ask about cancellation before you stamp",
    scenario:
      "A salesperson walks you through a two-year contract. You slow the room down.",
    durationMin: 26,
    objectives: [
      "Ask what happens if you かいやく mid-way",
      "Demand the terms on paper",
      "Use ごそうだんのうえ、ごけっていください as a pause, not a yes",
    ],
    dialogue: [
      [
        "Agent",
        "Keiyaku kikan wa ninen ni narimasu.",
        "けいやくきかんはにねんになります。",
        "The contract term is two years.",
      ],
      [
        "You",
        "Chūto de kaiyaku suru baai wa dō narimasu ka?",
        "ちゅうとでかいやくするばあいはどうなりますか。",
        "What happens if I cancel partway through?",
      ],
      [
        "Agent",
        "Iyakukin ga kakaru baai ga gozaimasu.",
        "いやくきんがかかるばあいがございます。",
        "There are cases where a penalty fee applies.",
      ],
      [
        "You",
        "Sono jōken o, kami de mo itadakemasu ka?",
        "そのじょうけんを、かみでもいただけますか。",
        "Could I have those conditions on paper as well?",
      ],
      [
        "Agent",
        "Hai. Gokazoku to mo gosōdan no ue, gokentō kudasai.",
        "はい。ごかぞくともごそうだんのうえ、ごけっていください。",
        "Yes. Please discuss with your family and consider it.",
      ],
      [
        "Other",
        "Wakari mashita. Middoru de.",
        "わかりました。ミドルで。",
        "Understood. Middle ground then.",
      ],
    ],
    patterns: [
      {
        chunk: "〜ばあいがございます",
        romaji: "~ baai ga gozaimasu",
        hiragana: "〜ばあいがございます",
        meaning: "There are cases where ___",
        whenToUse:
          "Contract-speak for 'sometimes yes, and we are not promising it won't happen.' Ask for the actual trigger.",
        examples: [
          [
            "てすうりょうがかかるばあいがございます",
            "tesūryō ga kakaru baai ga gozaimasu",
            "There may be a handling fee.",
          ],
          [
            "へんこうできないばあいがございます",
            "henkō dekinai baai ga gozaimasu",
            "In some cases it cannot be changed.",
          ],
        ],
      },
      {
        chunk: "ごそうだんのうえ、ごけっていください",
        romaji: "gosōdan no ue, gokentō kudasai",
        hiragana: "ごそうだんのうえ、ごけっていください",
        meaning: "Please discuss, then consider",
        whenToUse:
          "Their polite pause — and your exit. Take the papers home. うえ = after doing that.",
        examples: [
          [
            "おじかんのあるうえで、ごへんじください",
            "ojikan no aru ue de, gohenji kudasai",
            "Please reply after you've had time.",
          ],
          [
            "ごかぞくとごそうだんのうえ",
            "gokazoku to gosōdan no ue",
            "After talking it over with your family",
          ],
        ],
      },
      {
        chunk: "〜ではどうですか",
        romaji: "~ de wa dō desu ka",
        hiragana: "〜ではどうですか",
        meaning: "How about ___?",
        whenToUse:
          "Propose a compromise without demanding.",
        examples: [
          [
            "きんようびではどうですか",
            "kin'yōbi de wa dō desu ka",
            "How about Friday?",
          ],
          [
            "もうすこしやすくできますか",
            "mō sukoshi yasuku dekimasu ka",
            "Can you go a bit cheaper?",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "ございます elevates あります",
        "Contracts and sales talk prefer ございます. Hear ばあいがございます as a yellow light, not a no.",
      ],
      [
        "〜したうえで",
        "After doing X. そうだんしたうえでけっていする = decide after consulting. Use it to refuse same-day stamping.",
      ],
    ],
    culturalNote: [
      "はんこ is a decision, not a souvenir",
      "Door-to-door internet, gym, and newspaper sales live on same-day signatures. Taking the けいやくしょ home is normal. Some doorstep contracts have クーリングオフ — ask クーリングオフはありますか before you leave.",
    ],
    shadowing: [
      [
        "Chūto de kaiyaku suru baai wa dō narimasu ka?",
        "ちゅうとでかいやくするばあいはどうなりますか？",
      ],
      [
        "Kami de mo itadakemasu ka?",
        "かみでもいただけますか？",
      ],
    ],
    quiz: [
      [
        "いやくきん is:",
        [
          "A thank-you gift",
          "A cancellation / breach penalty",
          "The monthly fee",
          "A security deposit refund",
        ],
        1,
        "いやくきん — money you may owe if you break the term.",
      ],
      [
        "ごけっていください in a sales pitch usually means:",
        [
          "Sign now",
          "Think it over (you can leave)",
          "The deal is gone tomorrow",
          "Call your lawyer",
        ],
        1,
        "Treat it as permission to walk out with the papers.",
      ],
      [
        "〜ではどうですか proposes:",
        [
          "A compromise/option",
          "A threat",
          "Silence",
          "A fine",
        ],
        0,
        "Soft proposal pattern.",
      ],
    ],
    production: [
      [
        "What happens if I cancel partway through?",
        "ちゅうとで + かいやくするばあい",
        "Chūto de kaiyaku suru baai wa dō narimasu ka?",
        "ちゅうとでかいやくするばあいはどうなりますか？",
      ],
      [
        "How about Friday?",
        "きんようび + どうですか",
        "Kin'yōbi de wa dō desu ka?",
        "きんようびではどうですか？",
      ],
    ],
  },
  {
    id: "sp-14-4",
    unit: 14,
    unitTitle: "Conflict & Bureaucracy",
    order: 4,
    title: "こうしょうは、おちどころをさがす",
    subtitle: "Ask for a rethink, then meet in the middle",
    scenario:
      "A vendor's quote is high. You do not say 'too expensive.' You ask them to ごけんとう the long game.",
    durationMin: 26,
    objectives: [
      "Request a concession with ていただけないでしょうか",
      "Put ながいおつきあい in front of the number",
      "Lock a ごぶん compromise out loud",
    ],
    dialogue: [
      [
        "You",
        "Yosan-teki ni, mō sukoshi onesage itadakenai deshō ka?",
        "よさんてきに、もうすこしおねさげいただけないでしょうか。",
        "Budget-wise, could we get the price down a little?",
      ],
      [
        "Partner",
        "Sō desu ne... ichiwari wa muzukashii kamo shiremasen.",
        "そうですね…いちわりはむずかしいかもしれません。",
        "Hmm... ten percent may be difficult.",
      ],
      [
        "You",
        "Dewa, nagaku otsukiai suru koto o zentei ni, gokentō itadakemasu ka?",
        "では、ながくおつきあいすることをぜんていに、ごけんとういただけますか。",
        "Then, on the premise of a long relationship, could you consider it?",
      ],
      [
        "Partner",
        "Gobun nara, nantoka.",
        "ごぶんなら、なんとか。",
        "Halfway... we might be able to manage that.",
      ],
      [
        "You",
        "Arigatō gozaimasu. Sore dewa gobun de onegai dekimasu ka?",
        "ありがとうございます。それではごぶんでおねがいできますか。",
        "Thank you. So we can go with that halfway point?",
      ],
      [
        "Manager",
        "Korekara ki o tsukemasu.",
        "これからきをつけます。",
        "We'll be more careful from now on.",
      ],
    ],
    patterns: [
      {
        chunk: "〜ていただけないでしょうか",
        romaji: "~ te itadakenai deshō ka",
        hiragana: "〜ていただけないでしょうか",
        meaning: "Could I perhaps have you ___?",
        whenToUse:
          "The softest everyday request for a concession. Softer than ください, softer than もらえますか.",
        examples: [
          [
            "きげんをのばしていただけないでしょうか",
            "kigen o nobashite itadakenai deshō ka",
            "Could you possibly extend the deadline?",
          ],
          [
            "ねだんをみなおしていただけないでしょうか",
            "nedan o minaoshite itadakenai deshō ka",
            "Could you take another look at the price?",
          ],
        ],
      },
      {
        chunk: "ごけんとういただけますか",
        romaji: "gokentō itadakemasu ka",
        hiragana: "ごけんとういただけますか",
        meaning: "Could you consider it?",
        whenToUse:
          "After you give them a reason (budget, volume, ながいつきあい). Don't fire it with no ぜんてい.",
        examples: [
          [
            "いちどごけんとういただけますか",
            "ichido gokentō itadakemasu ka",
            "Could you consider it once?",
          ],
          [
            "ほうしんをごけんとうください",
            "hōshin o gokentō kudasai",
            "Please consider the approach.",
          ],
        ],
      },
      {
        chunk: "もうしわけございません",
        romaji: "mōshiwake gozaimasen",
        hiragana: "もうしわけございません",
        meaning: "We are deeply sorry",
        whenToUse:
          "Staged apologies; match severity to the mistake.",
        examples: [
          [
            "もうしわけございません",
            "mōshiwake gozaimasen",
            "We're deeply sorry",
          ],
          [
            "今後きをつけます",
            "kongo ki o tsukemasu",
            "We'll be careful going forward",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "〜をぜんていに",
        "On the premise of ___. You are trading a future (repeat business) for a present number.",
      ],
      [
        "ごぶん is a number without a number",
        "ごぶん = the midpoint, not 'five minutes.' Pair it with なんとか when the other side is yielding.",
      ],
    ],
    culturalNote: [
      "Stores rarely haggle; companies do — sideways",
      "Don't bargain at コンビニ. In B2B, attacking the price as たかい is clumsy. Talk よさん, ボリューム, and こんご. Silence after an offer is often thinking, not a no. Confirm the おちどころ in a sentence before you shake hands.",
    ],
    shadowing: [
      [
        "Mō sukoshi onesage itadakenai deshō ka?",
        "もうすこしおねさげいただけないでしょうか？",
      ],
      [
        "Gokentō itadakemasu ka?",
        "ごけんとういただけますか？",
      ],
    ],
    quiz: [
      [
        "Softest ask for a lower price:",
        [
          "やすくしろ",
          "たかすぎ",
          "おねさげいただけないでしょうか",
          "ただにして",
        ],
        2,
        "ていただけないでしょうか leaves them room to move.",
      ],
      [
        "ごぶんなら、なんとか means:",
        [
          "Give me five minutes",
          "Meeting halfway might be possible",
          "The deal is dead",
          "Pay in five installments",
        ],
        1,
        "ごぶん = split the difference. なんとか = we'll make it work.",
      ],
      [
        "もうしわけございません is:",
        [
          "Deep apology",
          "Casual hi",
          "Train slang",
          "Food order",
        ],
        0,
        "Very formal apology.",
      ],
    ],
    production: [
      [
        "Could you come down on the price a little?",
        "もうすこし + おねさげいただけないでしょうか",
        "Mō sukoshi onesage itadakenai deshō ka?",
        "もうすこしおねさげいただけないでしょうか？",
      ],
      [
        "We're deeply sorry",
        "もうしわけ + ございません",
        "Mōshiwake gozaimasen.",
        "もうしわけございません。",
      ],
    ],
  },
  {
    id: "sp-14-5",
    unit: 14,
    unitTitle: "Conflict & Bureaucracy",
    order: 5,
    title: "ごかいを、だれのせいにしない",
    subtitle: "Unpack the words before the relationship cracks",
    scenario:
      "A coworker thought your email was a no. You thought you were buying time.",
    durationMin: 26,
    objectives: [
      "Flag ごかいだったかもしれません without blaming them",
      "Gloss your own phrase: 〜っていみでした",
      "Re-align on the next action",
    ],
    dialogue: [
      [
        "Colleague",
        "Kinō no mēru, kotowarareta to omotteta.",
        "きのうのメール、ことわられたとおもってた。",
        "I thought yesterday's email was you turning us down.",
      ],
      [
        "You",
        "A, sore wa gokai datta kamo shiremasen. Kotowaru imi ja nakatta n desu.",
        "あ、それはごかいだったかもしれません。ことわるいみじゃなかったんです。",
        "Ah — that may have been a misunderstanding. I didn't mean to refuse.",
      ],
      [
        "Colleague",
        "E, sō na no.",
        "え、そうなの。",
        "Oh, really?",
      ],
      [
        "You",
        "「Chotto kangaemasu」 wa, jikan ga hoshii tte imi deshita.",
        "「ちょっとかんがえます」は、じかんがほしいっていみでした。",
        "'I'll think about it a bit' meant I needed time.",
      ],
      [
        "Colleague",
        "Naruhodo. Jā, susumete daijōbu da ne.",
        "なるほど。じゃあ、すすめてだいじょうぶだね。",
        "Got it. So it's okay to go ahead, then.",
      ],
      [
        "You",
        "Ryōkai desu. Share suru made matte kudasai.",
        "りょうかいです。シェアするまでまってください。",
        "Understood. Please wait until I share it.",
      ],
    ],
    patterns: [
      {
        chunk: "ごかいだったかもしれません",
        romaji: "gokai datta kamo shiremasen",
        hiragana: "ごかいだったかもしれません",
        meaning: "There may have been a misunderstanding",
        whenToUse:
          "When meanings split. Shared ごかい, not あなたがごかいした.",
        examples: [
          [
            "それはごかいです",
            "sore wa gokai desu",
            "That's a misunderstanding.",
          ],
          [
            "ごかいをまねいてしまったかもしれません",
            "gokai o maneite shimatta kamo shiremasen",
            "I may have invited a misunderstanding.",
          ],
        ],
      },
      {
        chunk: "〜っていみでした / といういみです",
        romaji: "~ tte imi deshita / to iu imi desu",
        hiragana: "〜っていみでした / といういみです",
        meaning: "What I meant was ___",
        whenToUse:
          "After you quote the line that landed wrong. Casual って, polite という.",
        examples: [
          [
            "やめるっていみじゃありません",
            "yameru tte imi ja arimasen",
            "I don't mean quit.",
          ],
          [
            "えんきするといういみです",
            "enki suru to iu imi desu",
            "I mean postpone it.",
          ],
        ],
      },
      {
        chunk: "まってください",
        romaji: "matte kudasai",
        hiragana: "まってください",
        meaning: "Please wait",
        whenToUse:
          "Buying time in conflict without agreeing yet.",
        examples: [
          [
            "すこしまってください",
            "sukoshi matte kudasai",
            "Please wait a bit",
          ],
          [
            "かくにんしますので",
            "kakunin shimasu node",
            "I'll check, so…",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "かもしれません keeps their face",
        "The misunderstanding 'maybe existed.' You are not putting a sticker on them that says まちがい.",
      ],
      [
        "って is spoken という",
        "Quote + っていみでした is how natives unpack a phrase in the moment.",
      ],
    ],
    culturalNote: [
      "ちょっとかんがえます is often a soft no",
      "If you use it as a real pause, say so. Cross-cultural teams especially need the gloss. Don't say あなたがかんちがいした — say the words drifted.",
    ],
    shadowing: [
      [
        "Sore wa gokai datta kamo shiremasen.",
        "それはごかいだったかもしれません。",
      ],
      [
        "Jikan ga hoshii tte imi deshita.",
        "じかんがほしいっていみでした。",
      ],
    ],
    quiz: [
      [
        "Least blaming repair:",
        [
          "あなたがごかいしてる",
          "まちがえてるよ",
          "ごかいだったかもしれません",
          "きいてなかったでしょ",
        ],
        2,
        "Shared ごかい + かもしれません leaves the relationship intact.",
      ],
      [
        "「ちょっとかんがえます」 often functions as:",
        [
          "An enthusiastic yes",
          "A request for the check",
          "A hedge that can mean no or 'give me time'",
          "A greeting",
        ],
        2,
        "Context decides. If you mean 'wait,' say that out loud.",
      ],
      [
        "すこしまってください buys:",
        [
          "Time",
          "A car",
          "Silence forever",
          "A house",
        ],
        0,
        "Please wait a bit.",
      ],
    ],
    production: [
      [
        "That may have been a misunderstanding.",
        "ごかいだったかもしれません",
        "Sore wa gokai datta kamo shiremasen.",
        "それはごかいだったかもしれません。",
      ],
      [
        "Please wait a moment",
        "すこし + まってください",
        "Sukoshi matte kudasai.",
        "すこしまってください。",
      ],
    ],
  },
  {
    id: "sp-14-6",
    unit: 14,
    unitTitle: "Conflict & Bureaucracy",
    order: 6,
    title: "しゃざいのだんかい",
    subtitle: "Match the weight, then name the fix",
    scenario:
      "A mistake reached the client. Your ぶちょう wants the apology first and the cause second.",
    durationMin: 26,
    objectives: [
      "Climb ごめん → すみません → もうしわけありません → もうしわけございません",
      "Lead with このたびは, not a story",
      "Add こんごは〜します so the apology has a floor",
    ],
    dialogue: [
      [
        "Boss",
        "Konkai no misu, okyakusama ni mo meiwaku ga itta.",
        "こんかいのミス、おきゃくさまにもめいわくがいった。",
        "This mistake caused trouble for the client too.",
      ],
      [
        "You",
        "Kono tabi wa, hontō ni mōshiwake gozaimasen deshita.",
        "このたびは、ほんとうにもうしわけございませんでした。",
        "I am truly sorry for this.",
      ],
      [
        "Boss",
        "Gen'in wa wakatteru no ka.",
        "げんいんはわかってるのか。",
        "Do you understand the cause?",
      ],
      [
        "You",
        "Hai. Kakunin busoku deshita. Kongo wa daburu chekku o tettei shimasu.",
        "はい。かくにんぶそくでした。こんごはダブルチェックをてっていします。",
        "Yes. It was a lack of checking. From now on I'll enforce a double-check.",
      ],
      [
        "Boss",
        "Wakatta. Ayamaru no wa hayakute ii. Tsugi ni ikase.",
        "わかった。あやまるのははやくていい。つぎにいかせ。",
        "Alright. Apologizing fast is good. Put it to use next time.",
      ],
      [
        "Other",
        "Kochira koso. Mata yoroshiku.",
        "こちらこそ。またよろしく。",
        "Likewise. Looking forward to working again.",
      ],
    ],
    patterns: [
      {
        chunk: "もうしわけございません",
        romaji: "mōshiwake gozaimasen",
        hiragana: "もうしわけございません",
        meaning: "I have no excuse / I am deeply sorry",
        whenToUse:
          "Client harm, missed deadlines, anything that left めいわく. でした makes it a completed formal bow.",
        examples: [
          [
            "おくれてもうしわけございません",
            "okurete mōshiwake gozaimasen",
            "I'm very sorry for the delay.",
          ],
          [
            "ごめいわくをおかけしてもうしわけございません",
            "gomeiwaku o okake shite mōshiwake gozaimasen",
            "I'm very sorry for the trouble.",
          ],
        ],
      },
      {
        chunk: "こんごは〜します",
        romaji: "kongo wa ~ shimasu",
        hiragana: "こんごは〜します",
        meaning: "From now on I will ___",
        whenToUse:
          "Right after a serious apology. Words without たいさく sound empty.",
        examples: [
          [
            "こんごはきをつけます",
            "kongo wa ki o tsukemasu",
            "I'll be more careful from now on.",
          ],
          [
            "こんごこのようなことがないよう、ちゅういします",
            "kongo kono yōna koto ga nai yō, chūi shimasu",
            "I'll take care that this doesn't happen again.",
          ],
        ],
      },
      {
        chunk: "こちらこそ",
        romaji: "kochira koso",
        hiragana: "こちらこそ",
        meaning: "Likewise / the pleasure is mine",
        whenToUse:
          "Return thanks or apology without one-upping.",
        examples: [
          [
            "こちらこそすみません",
            "kochira koso sumimasen",
            "I'm the one who should apologize",
          ],
          [
            "こちらこそありがとう",
            "kochira koso arigatō",
            "Thank you as well",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "The apology ladder",
        "ごめん (friends) < すみません (everyday) < もうしわけありません (serious) < もうしわけございません (client / deep). Overshooting a spilled drink sounds fake; undershooting a client miss sounds cold.",
      ],
      [
        "このたびは opens the bow",
        "It marks 'this incident' as the topic so you are not apologizing for your entire existence. Then stop. Explanations come when they ask げんいん.",
      ],
    ],
    culturalNote: [
      "Apology first, story second",
      "A long じじょう before ごめんなさい sounds like you are dodging. Fast もうしわけございません plus a concrete たいさく is what a ぶちょう can take to the client. Tiny mistakes at the コンビニ still only need すみません.",
    ],
    shadowing: [
      [
        "Hontō ni mōshiwake gozaimasen deshita.",
        "ほんとうにもうしわけございませんでした。",
      ],
      [
        "Kongo wa daburu chekku o tettei shimasu.",
        "こんごはダブルチェックをてっていします。",
      ],
    ],
    quiz: [
      [
        "A client was harmed. The right weight is:",
        [
          "ごめん",
          "まぁいいか",
          "もうしわけございませんでした",
          "わるくないけど",
        ],
        2,
        "Client めいわく takes the top of the ladder, usually in the past でした.",
      ],
      [
        "After a serious apology you should add:",
        [
          "A joke",
          "Someone else's name",
          "What you will do こんご",
          "Nothing — leave the room",
        ],
        2,
        "たいさく makes the apology usable.",
      ],
      [
        "こちらこそ returns:",
        [
          "Thanks/apology",
          "Anger",
          "Tickets",
          "Passwords",
        ],
        0,
        "こちらこそ = likewise.",
      ],
    ],
    production: [
      [
        "I am truly sorry for this. (formal)",
        "このたびは + もうしわけございませんでした",
        "Kono tabi wa, hontō ni mōshiwake gozaimasen deshita.",
        "このたびは、ほんとうにもうしわけございませんでした。",
      ],
      [
        "Likewise — thank you",
        "こちらこそ + ありがとう",
        "Kochira koso arigatō.",
        "こちらこそありがとう。",
      ],
    ],
  },
  {
    id: "sp-15-1",
    unit: 15,
    unitTitle: "Abstract & Culture",
    order: 1,
    title: "はず・わけ・のに",
    subtitle: "Expectation, logic, and the frustrated 'even though'",
    scenario:
      "Tanaka still isn't here. You and a friend sort what should be true from what is.",
    durationMin: 26,
    objectives: [
      "Use はず for a reasoned expectation",
      "Use わけ / わけない for logic and 'no way'",
      "Fire のに when reality refuses to match",
    ],
    dialogue: [
      [
        "Friend",
        "Tanaka-san, mada konai ne.",
        "たなかさん、まだこないね。",
        "Tanaka still isn't here, huh.",
      ],
      [
        "You",
        "Densha de kuru hazu nan da kedo.",
        "でんしゃでくるはずなんだけど。",
        "He's supposed to be coming by train, though.",
      ],
      [
        "Friend",
        "Renraku mo nai wake?",
        "れんらくもないわけ？",
        "So there's no message either, or what?",
      ],
      [
        "You",
        "Konai wake nai n da kedo... denwa ga tsunagaranai n da.",
        "こないわけないんだけど…でんわがつながらないんだ。",
        "It's not like he just wouldn't come... but the phone won't connect.",
      ],
      [
        "Friend",
        "Yakusoku shita noni, komaru ne.",
        "やくそくしたのに、こまるね。",
        "He promised, and still — this is a problem.",
      ],
      [
        "Friend",
        "Un, hazu nan da kedo ne.",
        "うん、はずなんだけどね。",
        "Yeah, it's supposed to be, but…",
      ],
    ],
    patterns: [
      {
        chunk: "〜はずだ",
        romaji: "~ hazu da",
        hiragana: "〜はずだ",
        meaning: "It ought to be that ___ / I have reason to expect ___",
        whenToUse:
          "When your information says X is true. Not advice (that's ほうがいい) and not a guess with no basis (that's かも).",
        examples: [
          [
            "きょうはやすみのはずです",
            "kyō wa yasumi no hazu desu",
            "Today should be their day off. (that's what I know)",
          ],
          [
            "もうついているはずなのに",
            "mō tsuite iru hazu na noni",
            "They should have arrived by now, and yet...",
          ],
        ],
      },
      {
        chunk: "〜わけだ / わけない",
        romaji: "~ wake da / wake nai",
        hiragana: "〜わけだ / わけない",
        meaning: "So that explains it / there's no way",
        whenToUse:
          "わけだ clicks a reason into place. わけない rejects a conclusion. わけではない gently denies a full interpretation.",
        examples: [
          [
            "できないわけないよ",
            "dekinai wake nai yo",
            "There's no way you can't do it.",
          ],
          [
            "そういうわけだったんだ",
            "sō iu wake datta n da",
            "So that's what was going on.",
          ],
        ],
      },
      {
        chunk: "〜はず",
        romaji: "~ hazu",
        hiragana: "〜はず",
        meaning: "should be / expected to be",
        whenToUse:
          "Expectation based on evidence; soft certainty.",
        examples: [
          [
            "かれはくるはず",
            "kare wa kuru hazu",
            "He should be coming",
          ],
          [
            "きょうはやすみのはず",
            "kyō wa yasumi no hazu",
            "Today should be a day off",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "のに carries heat",
        "Contrast with feeling: frustration, disappointment, surprise. けど can contrast calmly. やくそくしたのに blames the gap.",
      ],
      [
        "はず is not べき",
        "べき is moral 'ought.' はず is 'given what I know, this is the expected world.' Mixing them makes you sound preachy.",
      ],
    ],
    culturalNote: [
      "はず lets you wait without accusing",
      "くるはずなんだけど holds the person innocent a little longer. Jumping to わざとこない sounds personal. Natives often live in that はず space until the れんらく arrives.",
    ],
    shadowing: [
      [
        "Densha de kuru hazu nan da kedo.",
        "でんしゃでくるはずなんだけど。",
      ],
      [
        "Konai wake nai n da kedo.",
        "こないわけないんだけど。",
      ],
    ],
    quiz: [
      [
        "You have a reason to expect they're off today:",
        [
          "やすみべきです",
          "やすみのはずです",
          "やすみわけない",
          "やすみなさい",
        ],
        1,
        "はず = expected reality from known info.",
      ],
      [
        "やくそくしたのに adds:",
        [
          "A calm extra fact",
          "Frustration that reality didn't match",
          "A humble apology",
          "A future plan",
        ],
        1,
        "のに is contrast with feeling.",
      ],
      [
        "〜はず means:",
        [
          "Expected/should be",
          "Must never",
          "Only past tense slang",
          "A food",
        ],
        0,
        "はず = expectation.",
      ],
    ],
    production: [
      [
        "He's supposed to be coming by train, though.",
        "でんしゃでくる + はずなんだけど",
        "Densha de kuru hazu nan da kedo.",
        "でんしゃでくるはずなんだけど。",
      ],
      [
        "He should be coming",
        "くる + はず",
        "Kare wa kuru hazu.",
        "かれはくるはず。",
      ],
    ],
  },
  {
    id: "sp-15-2",
    unit: 15,
    unitTitle: "Abstract & Culture",
    order: 2,
    title: "かりに、というまくら",
    subtitle: "Float a what-if without making it a plan",
    scenario:
      "A friend starts a かりに about living in Japan long-term. You play — and you keep it hypothetical.",
    durationMin: 26,
    objectives: [
      "Open a what-if with かりに〜としたら",
      "Answer with かりにえらぶなら",
      "Close the bubble with あくまでかりのはなし",
    ],
    dialogue: [
      [
        "Friend",
        "Kari ni, Nihon de zutto kurasu to shitara, doko ga ii?",
        "かりに、にほんでずっとくらすとしたら、どこがいい？",
        "Hypothetically, if you lived in Japan for good, where would be good?",
      ],
      [
        "You",
        "Kari ni erabu nara, Kyōto ka na.",
        "かりにえらぶなら、きょうとかかな。",
        "If I had to pick, maybe Kyoto.",
      ],
      [
        "Friend",
        "Dōshite.",
        "どうして。",
        "Why?",
      ],
      [
        "You",
        "Moshi seikatsuhi o osaeru nara, Tōkyō yori raku da to omou.",
        "もしせいかつひをおさえるなら、とうきょうよりらくだとおもう。",
        "If you were keeping living costs down, I think it'd be easier than Tokyo.",
      ],
      [
        "Friend",
        "Aku made kari no hanashi ne. Omoshiroi.",
        "あくまでかりのはなしね。おもしろい。",
        "Strictly a hypothetical, yeah. Interesting.",
      ],
      [
        "You",
        "Wakaru. Demo hito ni yoru yo ne.",
        "わかる。でもひとによるよね。",
        "I get it. But it depends on the person.",
      ],
    ],
    patterns: [
      {
        chunk: "かりに〜としたら",
        romaji: "kari ni ~ to shitara",
        hiragana: "かりに〜としたら",
        meaning: "If we suppose that ___",
        whenToUse:
          "Thought experiments, negotiations, and 'don't quote me' opinions. Flags that no one just committed.",
        examples: [
          [
            "かりにやすみがとれるとしたら",
            "kari ni yasumi ga toreru to shitara",
            "Supposing you could get time off...",
          ],
          [
            "かりにうまくいかなかったら",
            "kari ni umaku ikanakattara",
            "Supposing it didn't go well...",
          ],
        ],
      },
      {
        chunk: "あくまで〜",
        romaji: "aku made ~",
        hiragana: "あくまで〜",
        meaning: "Only / strictly as ___ (nothing more)",
        whenToUse:
          "To keep a かりに from hardening into a decision or an insult.",
        examples: [
          [
            "あくまでれいです",
            "aku made rei desu",
            "This is only an example.",
          ],
          [
            "あくまでこじんてきなけんです",
            "aku made kojjinteki na ken desu",
            "This is only a personal opinion.",
          ],
        ],
      },
      {
        chunk: "〜わけ",
        romaji: "~ wake",
        hiragana: "〜わけ",
        meaning: "the reason is / it doesn't mean",
        whenToUse:
          "Explain logic or reject a wrong conclusion: わけではない.",
        examples: [
          [
            "そういうわけ",
            "sō iu wake",
            "That's the reason",
          ],
          [
            "きらいなわけじゃない",
            "kirai na wake ja nai",
            "It's not that I dislike it",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "としたら / とすれば",
        "Treat the clause as a supposed fact and then reason. なら is lighter and often enough after かりにえらぶ.",
      ],
      [
        "もし vs かりに",
        "もし is a regular if. かりに stamps 'we are pretending.' Use かりに when the content could be taken as a real proposal.",
      ],
    ],
    culturalNote: [
      "Hypotheticals are how people test the air",
      "Friends and bosses float かりに to see your face before anyone spends money or pride. If you answer like you just signed, the room gets heavy. Mirror with あくまで and you can think out loud safely.",
    ],
    shadowing: [
      [
        "Kari ni erabu nara, Kyōto ka na.",
        "かりにえらぶなら、きょうとかかな。",
      ],
      [
        "Aku made kari no hanashi ne.",
        "あくまでかりのはなしね。",
      ],
    ],
    quiz: [
      [
        "かりに signals:",
        [
          "A signed decision",
          "A past habit",
          "A hypothetical, not a commitment",
          "An order",
        ],
        2,
        "かりに keeps the content in the sandbox.",
      ],
      [
        "あくまでかりのはなし means:",
        [
          "Do this by the end of the day",
          "This stays hypothetical",
          "I already booked it",
          "Never speak of this",
        ],
        1,
        "あくまで = nothing beyond that framing.",
      ],
      [
        "わけじゃない denies:",
        [
          "A wrong conclusion",
          "Grammar forever",
          "Trains",
          "Rain",
        ],
        0,
        "わけじゃない = it's not that…",
      ],
    ],
    production: [
      [
        "Hypothetically, if you lived in Japan for good, where would be good?",
        "かりに + としたら",
        "Kari ni, Nihon de zutto kurasu to shitara, doko ga ii?",
        "かりに、にほんでずっとくらすとしたら、どこがいい？",
      ],
      [
        "It's not that I dislike it",
        "きらいな + わけじゃない",
        "Kirai na wake ja nai.",
        "きらいなわけじゃない。",
      ],
    ],
  },
  {
    id: "sp-15-3",
    unit: 15,
    unitTitle: "Abstract & Culture",
    order: 3,
    title: "かちかんを、くらべない",
    subtitle: "Name what you treasure — then let それぞれ stand",
    scenario:
      "After work, a friend asks whether career or private time matters more. You answer without ranking their life.",
    durationMin: 26,
    objectives: [
      "Say 〜をたいせつにしている",
      "Name a かちかん difference without a winner",
      "Close with それぞれ / どっちがただしいってことじゃない",
    ],
    dialogue: [
      [
        "Friend",
        "Shigoto to puraibēto, docchi ga taisetsu?",
        "しごととプライベート、どっちがたいせつ？",
        "Work or private life — which matters more?",
      ],
      [
        "You",
        "Watashi wa jikan no yutori o taisetsu ni shiteru ka na.",
        "わたしはじかんのゆとりをたいせつにしてるかな。",
        "I guess I value having some time to breathe.",
      ],
      [
        "Friend",
        "Boku wa, yarigai no hō ka na. Kachikan chigau ne.",
        "ぼくは、やりがいのほうかな。かちかんちがうね。",
        "For me it's more about fulfillment. Different values, huh.",
      ],
      [
        "You",
        "Un, sorezore da yo ne. Docchi ga tadashii tte koto ja nai shi.",
        "うん、それぞれだよね。どっちがただしいってことじゃないし。",
        "Yeah, to each their own. It's not about which is correct.",
      ],
      [
        "Friend",
        "Sō iu hanashi, dekiru no arigatai wa.",
        "そういうはなし、できるのありがたいわ。",
        "I'm glad we can talk like this.",
      ],
      [
        "Friend",
        "Yappari ne. Noni ne…",
        "やっぱりね。のにね…",
        "Figures. And yet…",
      ],
    ],
    patterns: [
      {
        chunk: "〜をたいせつにしている",
        romaji: "~ o taisetsu ni shite iru",
        hiragana: "〜をたいせつにしている",
        meaning: "I make a point of valuing ___",
        whenToUse:
          "Values talk. Softer and more native than がだいすき for abstract things like しょうじきさ or ゆとり.",
        examples: [
          [
            "かぞくをたいせつにしています",
            "kazoku o taisetsu ni shite imasu",
            "I value my family.",
          ],
          [
            "しょうじきさをたいせつにしている",
            "shōjikisa o taisetsu ni shite iru",
            "I value honesty.",
          ],
        ],
      },
      {
        chunk: "それぞれだよね / かちかん",
        romaji: "sorezore da yo ne / kachikan",
        hiragana: "それぞれだよね / かちかん",
        meaning: "To each their own / values",
        whenToUse:
          "When two good lives disagree. Ends the ranking game.",
        examples: [
          [
            "かちかんはひとそれぞれです",
            "kachikan wa hito sorezore desu",
            "Values differ from person to person.",
          ],
          [
            "かんがえかたはそれぞれだよね",
            "kangaekata wa sorezore da yo ne",
            "People think differently, you know.",
          ],
        ],
      },
      {
        chunk: "〜のに",
        romaji: "~ noni",
        hiragana: "〜のに",
        meaning: "even though ___",
        whenToUse:
          "Frustration or surprise at a contrast.",
        examples: [
          [
            "べんきょうしたのにおちた",
            "benkyō shita noni ochita",
            "I studied but still failed",
          ],
          [
            "やすみのにあめ",
            "yasumi no ni ame",
            "Day off and it's raining",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "かな softens a self-portrait",
        "たいせつにしてるかな leaves a door open. A bald たいせつです can sound like a manifesto.",
      ],
      [
        "ただしい is the trap word",
        "Once someone asks which life is ただしい, friendship thins. Deny the frame: どっちがただしいってことじゃない.",
      ],
    ],
    culturalNote: [
      "それぞれ is a peace treaty",
      "Japanese small-group talk often refuses to crown a lifestyle. You can still be honest about ゆとり or やりがい. What breaks the mood is converting your value into their homework.",
    ],
    shadowing: [
      [
        "Jikan no yutori o taisetsu ni shiteru ka na.",
        "じかんのゆとりをたいせつにしてるかな。",
      ],
      [
        "Sorezore da yo ne.",
        "それぞれだよね。",
      ],
    ],
    quiz: [
      [
        "A native way to state a value:",
        [
          "ゆとりがただしい",
          "ゆとりをたいせつにしている",
          "ゆとりしろ",
          "ゆとりわけない",
        ],
        1,
        "たいせつにしている describes your stance without grading theirs.",
      ],
      [
        "それぞれだよね is used to:",
        [
          "Pick a winner",
          "End the ranking and keep the friendship",
          "Change the meeting time",
          "Apologize to a client",
        ],
        1,
        "It lets both values stay standing.",
      ],
      [
        "〜のに means:",
        [
          "Even though",
          "Only if",
          "Because of praise",
          "Inside a bag",
        ],
        0,
        "のに = even though.",
      ],
    ],
    production: [
      [
        "I guess I value having some time to breathe.",
        "じかんのゆとり + たいせつにしてるかな",
        "Jikan no yutori o taisetsu ni shiteru ka na.",
        "じかんのゆとりをたいせつにしてるかな。",
      ],
      [
        "Even though I studied…",
        "べんきょうした + のに",
        "Benkyō shita noni…",
        "べんきょうしたのに…",
      ],
    ],
  },
  {
    id: "sp-15-4",
    unit: 15,
    unitTitle: "Abstract & Culture",
    order: 4,
    title: "せいじを、すっとかわす",
    subtitle: "Deflect, don't debate, at the first のみかい",
    scenario:
      "Someone you barely know asks what you think of the news. You keep the table intact.",
    durationMin: 26,
    objectives: [
      "Park the topic with むずかしいもんだいですね",
      "State a personal policy: あまりはなさないようにしてる",
      "Accept their recovery without lecturing",
    ],
    dialogue: [
      [
        "Acquaintance",
        "Saikin no seiji, dō omou.",
        "さいきんのせいじ、どうおもう。",
        "What do you think of politics lately?",
      ],
      [
        "You",
        "Muzukashii mondai desu ne. Yoku wakaranai tokoro mo atte.",
        "むずかしいもんだいですね。よくわからないところもあって。",
        "It's a difficult issue. There are parts I don't really get.",
      ],
      [
        "Acquaintance",
        "Demo, ichiō iken wa aru desho.",
        "でも、いちおういけんはあるでしょ。",
        "But you have some opinion, right?",
      ],
      [
        "You",
        "Shigotoba dewa, amari hanasanai yō ni shiteru n desu.",
        "しごとばでは、あまりはなさないようにしてるんです。",
        "At work I try not to talk about it much.",
      ],
      [
        "Acquaintance",
        "Ā, warukatta. Betsu no hanashi ni shiyō ka.",
        "ああ、わるかった。べつのはなしにしようか。",
        "Ah, my bad. Want to talk about something else?",
      ],
      [
        "Elder",
        "Obon wa ie ni kaeru hito ga ōi yo.",
        "おぼんはいえにかえるひとがおおいよ。",
        "For Obon, lots of people go home.",
      ],
    ],
    patterns: [
      {
        chunk: "むずかしいもんだいですね",
        romaji: "muzukashii mondai desu ne",
        hiragana: "むずかしいもんだいですね",
        meaning: "That's a tough one, isn't it",
        whenToUse:
          "Politics, religion, and any bait you will not pick up. Pair with いちがいにはいえないですね.",
        examples: [
          [
            "それはむずかしいもんだいですね",
            "sore wa muzukashii mondai desu ne",
            "That's a difficult question.",
          ],
          [
            "いちがいにはいえないですね",
            "ichigai ni wa ienai desu ne",
            "It's hard to say in one sweep.",
          ],
        ],
      },
      {
        chunk: "あまり〜ないようにしている",
        romaji: "amari ~ nai yō ni shite iru",
        hiragana: "あまり〜ないようにしている",
        meaning: "I make it a rule not to ___ much",
        whenToUse:
          "A policy about yourself — harder to argue with than a take on the news.",
        examples: [
          [
            "あまりたちいったはなしはしないようにしてます",
            "amari tachiitta hanashi wa shinai yō ni shitemasu",
            "I try not to get into that kind of talk.",
          ],
          [
            "しゅうきょうのことはさけるようにしてる",
            "shūkyō no koto wa sakeru yō ni shiteru",
            "I try to steer around religion.",
          ],
        ],
      },
      {
        chunk: "おぼん",
        romaji: "obon",
        hiragana: "おぼん",
        meaning: "Obon (mid-August memorial period)",
        whenToUse:
          "Travel and family plans in mid-August.",
        examples: [
          [
            "おぼんやすみ",
            "obon yasumi",
            "Obon holiday",
          ],
          [
            "おぼんはみせがやすみ",
            "obon wa mise ga yasumi",
            "Shops close for Obon",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "いちがいにはいえない",
        "You refuse a single label for a messy world. It is a complete answer, not a stall you must fill.",
      ],
      [
        "ようにしている = standing policy",
        "Not a one-time mood. Useful when they push いちおういけんはあるでしょ.",
      ],
    ],
    culturalNote: [
      "せいじ・しんこう・しゅうにゅう are first-meeting mines",
      "A のみかい with mixed ranks is the wrong room for a campaign speech. Deflection is manners, not cowardice. If a senior keeps pushing, stay foggy — winning the argument can still cost the table.",
    ],
    shadowing: [
      [
        "Muzukashii mondai desu ne.",
        "むずかしいもんだいですね。",
      ],
      [
        "Amari hanasanai yō ni shiteru n desu.",
        "あまりはなさないようにしてるんです。",
      ],
    ],
    quiz: [
      [
        "Classic deflection when politics comes up:",
        [
          "おまえはまちがってる",
          "むずかしいもんだいですね",
          "せんきょにいけ",
          "しらないわけない",
        ],
        1,
        "むずかしいもんだいですね is the standard soft wall.",
      ],
      [
        "あまりはなさないようにしてるんです works because:",
        [
          "It insults their party",
          "It states your policy, not a counter-take",
          "It agrees with them",
          "It changes the law",
        ],
        1,
        "A personal rule is hard to debate.",
      ],
      [
        "おぼん is:",
        [
          "Mid-August memorial period",
          "A breakfast set",
          "A boss title",
          "A shoe",
        ],
        0,
        "おぼん period.",
      ],
    ],
    production: [
      [
        "It's a difficult issue. There are parts I don't really get.",
        "むずかしいもんだいですね + わからないところもあって",
        "Muzukashii mondai desu ne. Yoku wakaranai tokoro mo atte.",
        "むずかしいもんだいですね。よくわからないところもあって。",
      ],
      [
        "Are you going home for Obon?",
        "おぼん + かえる",
        "Obon wa ie ni kaeru?",
        "おぼんはいえにかえる？",
      ],
    ],
  },
  {
    id: "sp-15-5",
    unit: 15,
    unitTitle: "Abstract & Culture",
    order: 5,
    title: "おぼんとは、ぎょうじのばなし",
    subtitle: "Ask about custom, not creed",
    scenario:
      "Mid-August plans come up at the office. Your coworker talks graves and ancestors without preaching.",
    durationMin: 26,
    objectives: [
      "Talk おぼん, おはか, and おはまいり with the お of respect",
      "Reframe with 〜っていうより",
      "Ask curious questions without 'but do you really believe?'",
    ],
    dialogue: [
      [
        "Colleague",
        "Obon wa kuni ni kaeru no?",
        "おぼんはくににかえるの？",
        "Are you going back home for Obon?",
      ],
      [
        "You",
        "Hai. Omairi ni ikimasu.",
        "はい。おまいりにいきます。",
        "Yes. I'll go pay my respects.",
      ],
      [
        "Colleague",
        "Uchi mo ohaka o sōji shite, senzo o mukaeru yo.",
        "うちもおはかをそうじして、せんぞをむかえるよ。",
        "We clean the grave too and welcome the ancestors.",
      ],
      [
        "You",
        "Senzo ga kaette kuru tte iu hanashi, desu yo ne.",
        "せんぞがかえってくるっていうはなし、ですよね。",
        "That's the idea that the ancestors come back, right?",
      ],
      [
        "Colleague",
        "Sō. Shūkyō tte iu yori, kazoku no gyōji da ne.",
        "そう。しゅうきょうっていうより、かぞくのぎょうじだね。",
        "Yeah. It's less religion than a family observance.",
      ],
      [
        "Friend",
        "Un, kotowaza tte iu yatsu da ne.",
        "うん、ことわざっていうやつだね。",
        "Yeah, that's the proverb thing.",
      ],
    ],
    patterns: [
      {
        chunk: "おまいり / おはか",
        romaji: "omairi / ohaka",
        hiragana: "おまいり / おはか",
        meaning: "Paying respects / the grave (respectful)",
        whenToUse:
          "Obon, おひがん, funerals. The お is not optional decoration here.",
        examples: [
          [
            "おはかにいきます",
            "ohaka ni ikimasu",
            "I'm going to the grave.",
          ],
          [
            "せんぞにおまいりします",
            "senzo ni omairi shimasu",
            "I'll pay respects to the ancestors.",
          ],
        ],
      },
      {
        chunk: "〜っていうより",
        romaji: "~ tte iu yori",
        hiragana: "〜っていうより",
        meaning: "Rather than ___, it's more ___",
        whenToUse:
          "Reframe without 'you're wrong.' Religion → custom, work → habit, etc.",
        examples: [
          [
            "しゅうきょうっていうよりしゅうかんです",
            "shūkyō tte iu yori shūkan desu",
            "It's more custom than religion.",
          ],
          [
            "ぎしきっていうより、かぞくのじかんです",
            "gishiki tte iu yori, kazoku no jikan desu",
            "It's less a rite than family time.",
          ],
        ],
      },
      {
        chunk: "いそがばまわれ",
        romaji: "isogaba maware",
        hiragana: "いそがばまわれ",
        meaning: "More haste, less speed",
        whenToUse:
          "Light wisdom in conversation; not a lecture.",
        examples: [
          [
            "いそがばまわれだよ",
            "isogaba maware da yo",
            "Haste makes waste",
          ],
          [
            "なるようになる",
            "naru yō ni naru",
            "It'll work out",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "お on はか / ぼん / まいり",
        "Dropping it can sound cold or textbook. These are set respectful forms, like おゆうしょく more than grammar math.",
      ],
      [
        "っていうはなし",
        "Soft report of a tradition: 'the story goes that...' Lets you check the custom without a theology exam.",
      ],
    ],
    culturalNote: [
      "Many people 'do' Obon without 'being' religious",
      "はつもうで, funerals, and おぼん sit in the same drawer: family ぎょうじ. Asking なにをしんじてるの is sharper than asking くににかえるの. Don't debate whether spirits 'really' return.",
    ],
    shadowing: [
      [
        "Omairi ni ikimasu.",
        "おまいりにいきます。",
      ],
      [
        "Shūkyō tte iu yori, kazoku no gyōji da ne.",
        "しゅうきょうっていうより、かぞくのぎょうじだね。",
      ],
    ],
    quiz: [
      [
        "Respectful way to say you're visiting the grave:",
        [
          "はかにいく",
          "おはかにいきます",
          "はかをたべる",
          "ぼんをけす",
        ],
        1,
        "おはか / おまいり carry the respectful お.",
      ],
      [
        "しゅうきょうっていうより、ぎょうじだね means:",
        [
          "They are converting you",
          "They frame it as family custom, not creed",
          "Obon is cancelled",
          "You must join a temple",
        ],
        1,
        "っていうより reframes. Meet them on ぎょうじ ground.",
      ],
      [
        "いそがばまわれ means:",
        [
          "More haste, less speed",
          "Run faster always",
          "Never move",
          "Buy tickets",
        ],
        0,
        "Classic proverb-in-speech.",
      ],
    ],
    production: [
      [
        "It's less religion than a family observance.",
        "しゅうきょうっていうより + かぞくのぎょうじ",
        "Shūkyō tte iu yori, kazoku no gyōji da ne.",
        "しゅうきょうっていうより、かぞくのぎょうじだね。",
      ],
      [
        "Haste makes waste",
        "いそがばまわれ",
        "Isogaba maware da yo.",
        "いそがばまわれだよ。",
      ],
    ],
  },
  {
    id: "sp-15-6",
    unit: 15,
    unitTitle: "Abstract & Culture",
    order: 6,
    title: "ことわざは、いっぱつ",
    subtitle: "One proverb lands. Three become a lecture.",
    scenario:
      "A friend just failed at something. You comfort with a proverb — then you stop.",
    durationMin: 26,
    objectives: [
      "Drop しっぱいはせいこうのもと as comfort, not a slogan",
      "Add いそがばまわれ when they want to rush the fix",
      "Hear the tease when you sound like someone's おじいちゃん",
    ],
    dialogue: [
      [
        "Friend",
        "Mata shippai shita...",
        "またしっぱいした…。",
        "I failed again...",
      ],
      [
        "You",
        "Shippai wa seikō no moto, da yo.",
        "しっぱいはせいこうのもと、だよ。",
        "Failure is the foundation of success, you know.",
      ],
      [
        "Friend",
        "Wakatteru kedo sa.",
        "わかってるけどさ。",
        "I know, but still.",
      ],
      [
        "You",
        "Isogaba maware, demo aru shi. Chotto yasundara.",
        "いそがばまわれ、でもあるし。ちょっとやすんだら。",
        "There's also 'hurry by taking the long way.' Maybe rest a bit.",
      ],
      [
        "Friend",
        "Kotowaza de nagusameru no, nanka ojiichan mitai.",
        "ことわざでなぐさめるの、なんかおじいちゃんみたい。",
        "Comforting me with proverbs... you sound kind of like a grandpa.",
      ],
      [
        "You",
        "Naruhodo. Sukoshi zutsu de ii n da.",
        "なるほど。すこしずつでいいんだ。",
        "I see. Bit by bit is fine.",
      ],
    ],
    patterns: [
      {
        chunk: "しっぱいはせいこうのもと",
        romaji: "shippai wa seikō no moto",
        hiragana: "しっぱいはせいこうのもと",
        meaning: "Failure is the foundation of success",
        whenToUse:
          "After a real attempt, to destigmatize the miss. Not when they were careless with someone else's money.",
        examples: [
          [
            "さるもきからおちる",
            "saru mo ki kara ochiru",
            "Even monkeys fall from trees. (experts slip)",
          ],
          [
            "なるようになる",
            "naru yō ni naru",
            "It'll work out as it will.",
          ],
        ],
      },
      {
        chunk: "いそがばまわれ",
        romaji: "isogaba maware",
        hiragana: "いそがばまわれ",
        meaning: "If you're in a hurry, take the long way around",
        whenToUse:
          "When rushing will break the thing. Softer than あわてるな.",
        examples: [
          [
            "いわぬがはな、ってこともある",
            "iwanu ga hana, tte koto mo aru",
            "There's also 'some things are better left unsaid.'",
          ],
          [
            "にどあることはさんどある",
            "nido aru koto wa sando aru",
            "What happens twice happens three times.",
          ],
        ],
      },
      {
        chunk: "すこしずつ",
        romaji: "sukoshi zutsu",
        hiragana: "すこしずつ",
        meaning: "little by little",
        whenToUse:
          "Encourage progress without perfectionism.",
        examples: [
          [
            "すこしずつじょうずになる",
            "sukoshi zutsu jōzu ni naru",
            "Get better little by little",
          ],
          [
            "まいにちすこしずつ",
            "mainichi sukoshi zutsu",
            "A little every day",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "Proverbs arrive as whole utterances",
        "Often だよ / ってね / ってこともある, not conjugated like normal verbs. You quote a chunk of shared wisdom instead of scolding.",
      ],
      [
        "ってこともある softens the quote",
        "You're offering one available saying, not the law. Essential if you don't want to sound like a poster.",
      ],
    ],
    culturalNote: [
      "One well-timed ことわざ is wit",
      "Stacking them is a lecture, or an おじいちゃん bit — your friend already called it. Use them to oil disagreement (いわぬがはな) more than to win. If no one at the table knows the proverb, just say the meaning.",
    ],
    shadowing: [
      [
        "Shippai wa seikō no moto, da yo.",
        "しっぱいはせいこうのもと、だよ。",
      ],
      [
        "Isogaba maware, demo aru shi.",
        "いそがばまわれ、でもあるし。",
      ],
    ],
    quiz: [
      [
        "しっぱいはせいこうのもと is for:",
        [
          "Celebrating a client disaster",
          "Reframing a genuine attempt that missed",
          "Ordering ramen",
          "Ending a meeting",
        ],
        1,
        "Comfort after effort — not sarcasm after negligence.",
      ],
      [
        "いそがばまわれ advises:",
        [
          "Sprint blindly",
          "Skip the work",
          "Slow down and take the safer path",
          "Quit the job",
        ],
        2,
        "The long way can be the fast way if the short way breaks.",
      ],
      [
        "すこしずつ means:",
        [
          "Little by little",
          "All at once",
          "Never",
          "Yesterday only",
        ],
        0,
        "すこしずつ = gradually.",
      ],
    ],
    production: [
      [
        "Failure is the foundation of success.",
        "しっぱいはせいこうのもと",
        "Shippai wa seikō no moto da yo.",
        "しっぱいはせいこうのもとだよ。",
      ],
      [
        "Little by little is fine",
        "すこしずつ + でいい",
        "Sukoshi zutsu de ii.",
        "すこしずつでいい。",
      ],
    ],
  },
  {
    id: "sp-16-1",
    unit: 16,
    unitTitle: "Near-native Fluency",
    order: 1,
    title: "いいさし — ぶんをとじない",
    subtitle: "The unfinished sentence is the request",
    scenario:
      "A coworker needs today's materials. Neither of you says the hard clause out loud.",
    durationMin: 26,
    objectives: [
      "Start bad news with それが、ちょっと…",
      "Hear 〜だけど… as a request, not a dead end",
      "Leave が / けど / は hanging on purpose",
    ],
    dialogue: [
      [
        "Colleague",
        "Ashita no shiryō, dekiteru?",
        "あしたのしりょう、できてる？",
        "Are tomorrow's materials done?",
      ],
      [
        "You",
        "Sore ga, chotto mada de...",
        "それが、ちょっとまだで…。",
        "Thing is, they're still a bit...",
      ],
      [
        "Colleague",
        "Kyōjū da to, tasukaru n da kedo...",
        "きょうじゅうだと、たすかるんだけど…。",
        "If it could be today, that would really help, but...",
      ],
      [
        "You",
        "Narubeku. Tada, dēta ga sorottete nakute...",
        "なるべく。ただ、データがそろってなくて…。",
        "I'll do what I can. Only, the data isn't all in, so...",
      ],
      [
        "Colleague",
        "Wakatta. Dekiru toko made de ii yo.",
        "わかった。できるとこまででいいよ。",
        "Got it. As far as you can get is fine.",
      ],
      [
        "Friend",
        "Un, iwanakute mo wakaru.",
        "うん、いわなくてもわかる。",
        "Yeah, I get it without you saying it.",
      ],
    ],
    patterns: [
      {
        chunk: "それが、ちょっと…",
        romaji: "sore ga, chotto...",
        hiragana: "それが、ちょっと…",
        meaning: "Thing is... it's a bit... (bad news incoming)",
        whenToUse:
          "Before a no, a delay, or a problem. The trail-off is the cushion.",
        examples: [
          [
            "それが、ちょっとよていが…",
            "sore ga, chotto yotei ga...",
            "Thing is, I kind of have plans...",
          ],
          [
            "できなくはないんですが…",
            "dekinaku wa nai n desu ga...",
            "It's not that I can't, but...",
          ],
        ],
      },
      {
        chunk: "〜だけど…",
        romaji: "~ da kedo...",
        hiragana: "〜だけど…",
        meaning: "It's that ___, but... (implied ask)",
        whenToUse:
          "The listener is supposed to hear the request or offer a path. Finishing it for them can feel pushy.",
        examples: [
          [
            "できればきょうじゅうだとありがたいんだけど…",
            "dekireba kyōjū da to arigatai n da kedo...",
            "If it could be today I'd be grateful, but...",
          ],
          [
            "わたしはべつにいいんだけど…",
            "watashi wa betsu ni ii n da kedo...",
            "I don't mind either way, but... (someone else might)",
          ],
        ],
      },
      {
        chunk: "〜くて / trailing て",
        romaji: "trailing te-form",
        hiragana: "〜て…",
        meaning: "Unfinished sentence — implication",
        whenToUse:
          "Leave the ending hanging; natives fill it in.",
        examples: [
          [
            "それが…",
            "sore ga…",
            "About that…",
          ],
          [
            "ちょっとむずかしくて…",
            "chotto muzukashikute…",
            "It's a bit hard, so…",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "いいさし outsources the sharp part",
        "You stop before the face-threatening clause. They complete 'so can you wait?' or 'so I'll take a partial.' That is cooperation, not vagueness.",
      ],
      [
        "それが is a weather vane",
        "それが almost always turns the answer away from the hoped-for yes. Hear it and brace.",
      ],
    ],
    culturalNote: [
      "Closing every sentence can sound foreign",
      "Textbook completeness is clear — and blunt. Leaving けど in the air invites the other person to offer the おちどころ. If they don't pick it up, then you may finish the ask.",
    ],
    shadowing: [
      [
        "Sore ga, chotto mada de...",
        "それが、ちょっとまだで…。",
      ],
      [
        "Tasukaru n da kedo...",
        "たすかるんだけど…。",
      ],
    ],
    quiz: [
      [
        "それが、ちょっと… usually previews:",
        [
          "Great news",
          "A problem or a soft no",
          "A toast",
          "The check",
        ],
        1,
        "それが turns the answer off the hoped-for track.",
      ],
      [
        "きょうじゅうだと、たすかるんだけど… is mainly:",
        [
          "Idle chatting",
          "A request dressed as a trailing thought",
          "A firing",
          "A proverb",
        ],
        1,
        "The けど… is where 'please' lives.",
      ],
      [
        "Trailing て… often:",
        [
          "Leaves implication unfinished",
          "Ends with a period always",
          "Is only for writing essays",
          "Means goodbye forever",
        ],
        0,
        "Unfinished sentences imply the rest.",
      ],
    ],
    production: [
      [
        "Thing is, they're still a bit... (not done)",
        "それが、ちょっとまだで…",
        "Sore ga, chotto mada de...",
        "それが、ちょっとまだで…。",
      ],
      [
        "It's a bit hard, so…",
        "むずかしくて…",
        "Chotto muzukashikute…",
        "ちょっとむずかしくて…",
      ],
    ],
  },
  {
    id: "sp-16-2",
    unit: 16,
    unitTitle: "Near-native Fluency",
    order: 2,
    title: "ぎょうかんをよむ",
    subtitle: "The words say stay. The air may say go.",
    scenario:
      "A host tells you ごゆっくり. You offer an exit. They finally admit tomorrow is early.",
    durationMin: 26,
    objectives: [
      "Offer おきづかいなく / そろそろしつれい as an exit ramp",
      "Hear だいじょうぶだよ as possible endurance, not desire",
      "Use じつは when the ほんね is safe to show",
    ],
    dialogue: [
      [
        "Host",
        "Mada yoru wa nagai yo. Dōzo goyukkuri.",
        "まだよるはながいよ。どうぞごゆっくり。",
        "The night is still young. Please, take your time.",
      ],
      [
        "You",
        "Demo, saishū densha ga...",
        "でも、さいしゅうでんしゃが…。",
        "But the last train is...",
      ],
      [
        "Host",
        "Takushī demo daijōbu da kara.",
        "タクシーでもだいじょうぶだから。",
        "A taxi is fine, so don't worry.",
      ],
      [
        "You",
        "Okizukai naku. Hontō wa sorosoro shitsurei ka na to.",
        "おきづかいなく。ほんとうはそろそろしつれいかなと。",
        "Please don't go to any trouble. Honestly I should probably take my leave.",
      ],
      [
        "Host",
        "Warui ne, jitsu wa ashita hayakute. Okutteku.",
        "わるいね、じつはあしたはやくて。おくってく。",
        "Sorry — truth is I've got an early morning. I'll walk you out.",
      ],
      [
        "Coworker",
        "A, demo ne… yappa muzukashii kana.",
        "あ、でもね…やっぱむずかしいかな。",
        "Ah, but… maybe it's tough after all.",
      ],
    ],
    patterns: [
      {
        chunk: "おきづかいなく",
        romaji: "okizukai naku",
        hiragana: "おきづかいなく",
        meaning: "Please don't trouble yourself",
        whenToUse:
          "When their kindness may be たてまえ. Lets both of you step down.",
        examples: [
          [
            "おきづかいなく、そろそろしつれいします",
            "okizukai naku, sorosoro shitsurei shimasu",
            "Please don't trouble yourself — I should get going.",
          ],
          [
            "どうかおきづかいなく",
            "dōka okizukai naku",
            "Please, don't go out of your way.",
          ],
        ],
      },
      {
        chunk: "じつは〜",
        romaji: "jitsu wa ~",
        hiragana: "じつは〜",
        meaning: "Actually / the truth is ___",
        whenToUse:
          "When you finally put the ほんね next to the たてまえ. Often after the other person opens a door.",
        examples: [
          [
            "じつは、もうよやくがあって",
            "jitsu wa, mō yoyaku ga atte",
            "Truth is, I already have another appointment.",
          ],
          [
            "じつは、あまりじかんがなくて",
            "jitsu wa, amari jikan ga nakute",
            "Truth is, I don't have much time.",
          ],
        ],
      },
      {
        chunk: "やっぱ / やっぱり",
        romaji: "yappa / yappari",
        hiragana: "やっぱ / やっぱり",
        meaning: "as expected / after all",
        whenToUse:
          "Casual reconsideration; very frequent in speech.",
        examples: [
          [
            "やっぱやめとく",
            "yappa yametoku",
            "I'll pass after all",
          ],
          [
            "やっぱりすき",
            "yappari suki",
            "I do like it after all",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "Surface vs ほんね",
        "どうぞごゆっくり can be real, or it can be the host's job. Specific follow-through (I'll call a taxi and walk you) is a stronger yes than the slogan.",
      ],
      [
        "かなと leaves the exit half-open",
        "しつれいかなと is softer than かえります. They can still insist once — then you read whether the insist has details.",
      ],
    ],
    culturalNote: [
      "くうきをよむ is a guest skill too",
      "Take every まだいてよ literally and you will overstay. Offer an exit twice. If they only repeat だいじょうぶ without a plan, leave gracefully. If they name a taxi and put on shoes, it may be genuine.",
    ],
    shadowing: [
      [
        "Okizukai naku. Sorosoro shitsurei shimasu.",
        "おきづかいなく。そろそろしつれいします。",
      ],
      [
        "Jitsu wa ashita hayakute.",
        "じつはあしたはやくて。",
      ],
    ],
    quiz: [
      [
        "おきづかいなく is for:",
        [
          "Ordering more drinks",
          "Releasing the host from extra kindness",
          "Starting a meeting",
          "Asking the price",
        ],
        1,
        "It declines the extra trouble — often the hidden request.",
      ],
      [
        "じつはあしたはやくて reveals:",
        [
          "The たてまえ invitation was covering a real constraint",
          "The trains stopped forever",
          "They want a third guest",
          "The food was bad",
        ],
        0,
        "じつは is the ほんね after the polite surface.",
      ],
      [
        "やっぱ / やっぱり means:",
        [
          "After all / as expected",
          "Never",
          "Please pay",
          "Platform 9",
        ],
        0,
        "Casual reconsideration.",
      ],
    ],
    production: [
      [
        "Please don't trouble yourself. I should get going.",
        "おきづかいなく + そろそろしつれいします",
        "Okizukai naku. Sorosoro shitsurei shimasu.",
        "おきづかいなく。そろそろしつれいします。",
      ],
      [
        "I'll pass after all",
        "やっぱ + やめとく",
        "Yappa yametoku.",
        "やっぱやめとく。",
      ],
    ],
  },
  {
    id: "sp-16-3",
    unit: 16,
    unitTitle: "Near-native Fluency",
    order: 3,
    title: "つっこみは、ゆうじょうのリズム",
    subtitle: "Repeat the absurd bit. Don't lecture めうえ.",
    scenario:
      "A friend claims they ate curry four times. If you only say 'wow,' the joke dies.",
    durationMin: 26,
    objectives: [
      "Play light つっこみ by echoing the weird number or claim",
      "Use りゆうになってない / どういうこと",
      "Keep いじり inside friendship — never upward",
    ],
    dialogue: [
      [
        "Friend",
        "Kinō, karē o yonhai tabeta.",
        "きのう、カレーをよんはいたべた。",
        "Yesterday I ate four bowls of curry.",
      ],
      [
        "You",
        "Yonhai? Imi wakannai n da kedo.",
        "よんはい？ いみわかんないんだけど。",
        "Four bowls? That doesn't even make sense.",
      ],
      [
        "Friend",
        "Oishikatta kara.",
        "おいしかったから。",
        "Because it was good.",
      ],
      [
        "You",
        "Riyū ni natte nai kara. Onaka itaku naranai no.",
        "りゆうになってないから。おなかいたくならないの。",
        "That's not a reason. Your stomach didn't revolt?",
      ],
      [
        "Friend",
        "Kibishii na, tsukkomi.",
        "きびしいな、つっこみ。",
        "Harsh tsukkomi.",
      ],
      [
        "Friend",
        "Uwā, sore wa kiku.",
        "うわあ、それはきく。",
        "Whoa, that lands (that's funny/hits).",
      ],
    ],
    patterns: [
      {
        chunk: "〜って、どういうこと",
        romaji: "~ tte, dō iu koto",
        hiragana: "〜って、どういうこと",
        meaning: "___? What is that supposed to mean?",
        whenToUse:
          "First beat of つっこみ: hold up the strange piece and stare at it.",
        examples: [
          [
            "いまの、どういうこと",
            "ima no, dō iu koto",
            "What was that just now?",
          ],
          [
            "それ、まじでいってる",
            "sore, maji de itteru",
            "Are you seriously saying that?",
          ],
        ],
      },
      {
        chunk: "りゆうになってない",
        romaji: "riyū ni natte nai",
        hiragana: "りゆうになってない",
        meaning: "That doesn't count as a reason",
        whenToUse:
          "When their explanation is a ぼけ. Friends only. Smile in the voice.",
        examples: [
          [
            "せつめいになってない",
            "setsumei ni natte nai",
            "That doesn't count as an explanation.",
          ],
          [
            "はなしがとんでる",
            "hanashi ga tonderu",
            "That skipped a whole flight of logic.",
          ],
        ],
      },
      {
        chunk: "じょうだん",
        romaji: "jōdan",
        hiragana: "じょうだん",
        meaning: "joke",
        whenToUse:
          "Flag humor so it doesn't land as rudeness.",
        examples: [
          [
            "じょうだんじょうだん",
            "jōdan jōdan",
            "Just kidding",
          ],
          [
            "まじめなはなし？",
            "majime na hanashi?",
            "Are you serious?",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "つっこみ often repeats the noun",
        "よんはい？ is the whole move. You put their word in a spotlight instead of adding new information.",
      ],
      [
        "Register lock",
        "This is ためぐち machinery. Doing it to a client or ぶちょう is not 'being funny' — it is しつれい.",
      ],
    ],
    culturalNote: [
      "まんざい rhythm is everywhere",
      "Someone ぼけ's (says something dumb, often on purpose). A flat へー kills it. A short つっこみ is intimacy. Watch their face: if they weren't joking, you just became the mean one — switch to え、ほんと？ and drop the blade.",
    ],
    shadowing: [
      [
        "Yonhai? Imi wakannai n da kedo.",
        "よんはい？ いみわかんないんだけど。",
      ],
      [
        "Riyū ni natte nai kara.",
        "りゆうになってないから。",
      ],
    ],
    quiz: [
      [
        "A friend says something absurd on purpose. You:",
        [
          "Ignore them completely",
          "Give a long moral speech",
          "Echo the weird bit and poke it",
          "Switch to もうしわけございません",
        ],
        2,
        "A short つっこみ completes the joke.",
      ],
      [
        "Use つっこみ with:",
        [
          "A client you just met",
          "Close friends who are ぼけing",
          "A judge",
          "City hall",
        ],
        1,
        "Humor like this is in-group only.",
      ],
      [
        "じょうだんじょうだん flags:",
        [
          "A joke",
          "A contract",
          "A funeral",
          "A tax form",
        ],
        0,
        "Marks humor.",
      ],
    ],
    production: [
      [
        "That's not a reason.",
        "りゆうになってない",
        "Riyū ni natte nai kara.",
        "りゆうになってないから。",
      ],
      [
        "Just kidding",
        "じょうだん",
        "Jōdan jōdan.",
        "じょうだんじょうだん。",
      ],
    ],
  },
  {
    id: "sp-16-4",
    unit: 16,
    unitTitle: "Near-native Fluency",
    order: 4,
    title: "ほうげんは、まずみみ",
    subtitle: "Hear や / ねん / ええ. Don't do a bit.",
    scenario:
      "An Osaka friend thinks you're on the wrong street. You understand the dialect without performing it.",
    durationMin: 26,
    objectives: [
      "Map や・ねん・ええ・あかん onto standard Japanese",
      "Respond in ひょうじゅんご without freezing",
      "Know when imitation reads as mockery",
    ],
    dialogue: [
      [
        "Osaka friend",
        "Nanka hen yan na.",
        "なんかへんやんな。",
        "Something's off, isn't it. (Kansai)",
      ],
      [
        "You",
        "Hen, tte.",
        "へん、って。",
        "Off, how?",
      ],
      [
        "Osaka friend",
        "Kono michi, mae to chigau nen.",
        "このみち、まえとちがうねん。",
        "This street isn't the same as before.",
      ],
      [
        "You",
        "Machigaetan ka na. Modorō ka.",
        "まちがえたんかな。もどろうか。",
        "Maybe we messed up. Want to go back?",
      ],
      [
        "Osaka friend",
        "Un, modotta hō ga ee wa.",
        "うん、もどったほうがええわ。",
        "Yeah, better to go back.",
      ],
      [
        "Local",
        "Ōkini. Mata kite ya.",
        "おきに。またきてや。",
        "Thanks (Kansai). Come again.",
      ],
    ],
    patterns: [
      {
        chunk: "〜や / 〜やんな",
        romaji: "~ ya / ~ yan na",
        hiragana: "〜や / 〜やんな",
        meaning: "Kansai copula (だ / だよね)",
        whenToUse:
          "Recognition first. そうやねん ≈ そうなんだよ. Produce it only if you live there and friends invite it.",
        examples: [
          [
            "そうやねん",
            "sō ya nen",
            "That's right / that's the thing. (Kansai)",
          ],
          [
            "ちがうやろ",
            "chigau yaro",
            "That's not it, right? (Kansai だろ)",
          ],
        ],
      },
      {
        chunk: "〜ねん / ほうがええ / あかん",
        romaji: "~ nen / hō ga ee / akan",
        hiragana: "〜ねん / ほうがええ / あかん",
        meaning: "Explanatory んだ; いい; だめ",
        whenToUse:
          "Listening vocabulary for Kansai. ええ = いい, あかん = だめ / no good.",
        examples: [
          [
            "みたほうがええで",
            "mita hō ga ee de",
            "You'd better look. (Kansai)",
          ],
          [
            "あかんわ",
            "akan wa",
            "That's no good. (Kansai)",
          ],
        ],
      },
      {
        chunk: "おおきに",
        romaji: "ōkini",
        hiragana: "おおきに",
        meaning: "Thanks (Kansai)",
        whenToUse:
          "Recognize Kansai gratitude; reply with a smile, not a lecture.",
        examples: [
          [
            "おおきに",
            "ōkini",
            "Thanks",
          ],
          [
            "またきてな",
            "mata kite na",
            "Come again (Kansai)",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "だ → や, んだ → ねん, いい → ええ",
        "A small conversion table unlocks a huge amount of TV and street talk. You do not need the whole かんさいべん textbook to follow a friend.",
      ],
      [
        "ひょうじゅんご is never rude",
        "Answering もどろうか in standard Japanese is clean. Forcing なんでやねん as a foreigner bit is what gets awkward.",
      ],
    ],
    culturalNote: [
      "Mimicry can feel like a joke at them",
      "Friends who like you may lend you a word. Take it slowly. Other regions (はっきたま, なごや, ひろしま) have their own music — same rule: understand first, perform never, unless you're invited into the chorus.",
    ],
    shadowing: [
      [
        "Kono michi, mae to chigau nen.",
        "このみち、まえとちがうねん。",
      ],
      [
        "Modotta hō ga ee wa.",
        "もどったほうがええわ。",
      ],
    ],
    quiz: [
      [
        "ほうがええ maps to standard:",
        ["ほうがわるい", "ほうがいい", "ほうがながい", "ほうがない"],
        1,
        "ええ = いい.",
      ],
      [
        "Best first response to dialect you don't speak:",
        [
          "Full comic imitation",
          "Understand and answer in standard Japanese",
          "Pretend you didn't hear",
          "Correct their Japanese",
        ],
        1,
        "Comprehension plus ひょうじゅんご is respectful and clear.",
      ],
      [
        "おおきに is:",
        [
          "Kansai thanks",
          "Tokyo goodbye",
          "A size only",
          "A threat",
        ],
        0,
        "Kansai gratitude.",
      ],
    ],
    production: [
      [
        "Maybe we messed up. Want to go back? (standard)",
        "まちがえたんかな + もどろうか",
        "Machigaetan ka na. Modorō ka.",
        "まちがえたんかな。もどろうか。",
      ],
      [
        "Thanks (Kansai-style)",
        "おおきに",
        "Ōkini.",
        "おおきに。",
      ],
    ],
  },
  {
    id: "sp-16-5",
    unit: 16,
    unitTitle: "Near-native Fluency",
    order: 5,
    title: "かいぎで、いったんせいりする",
    subtitle: "Interrupt as かくにん, then hand the floor back",
    scenario:
      "A colleague is looping on budget and deadline. You cut in — politely — and make the choice visible.",
    durationMin: 26,
    objectives: [
      "Break in with すみません、すこしよろしいですか",
      "Summarize with せいりしますと / つまり〜ということです",
      "Ask the next fork: どちらをゆうせんしますか",
    ],
    dialogue: [
      [
        "Colleague",
        "Sore de, yosan ga tarinakute, shikamo nōki ga...",
        "それで、よさんがたりなくて、しかものうきが…。",
        "So the budget isn't enough, and on top of that the deadline is...",
      ],
      [
        "You",
        "Sumimasen, sukoshi yoroshii desu ka. Koko made o seiri shimasu to, yosan to nōki, ryōhō kitsui, to iu rikai desu.",
        "すみません、すこしよろしいですか。ここまでをせいりしますと、よさんとのうき、りょうほうきつい、というりかいです。",
        "Sorry — may I? If I sort what we have so far: both budget and deadline are tight. Is that the reading?",
      ],
      [
        "Colleague",
        "Sō, sō iu koto desu.",
        "そう、そういうことです。",
        "Yes, that's it.",
      ],
      [
        "You",
        "Dewa, dochira o yūsen shimasu ka?",
        "では、どちらをゆうせんしますか。",
        "Then which do we prioritize?",
      ],
      [
        "Boss",
        "Nōki o mamoru hō de ikō.",
        "のうきをまもるほうでいこう。",
        "Let's go with protecting the deadline.",
      ],
      [
        "Manager",
        "Dewa, sore de onegai shimasu.",
        "では、それでおねがいします。",
        "Well then, please proceed with that.",
      ],
    ],
    patterns: [
      {
        chunk: "すみません、よろしいですか",
        romaji: "sumimasen, yoroshii desu ka",
        hiragana: "すみません、よろしいですか",
        meaning: "Sorry — may I? (polite interrupt)",
        whenToUse:
          "Meetings. Without this wrapper, a summary feels like さえぎり.",
        examples: [
          [
            "ちょっとよろしいでしょうか",
            "chotto yoroshii deshō ka",
            "May I, for a moment?",
          ],
          [
            "いちどよろしいですか",
            "ichido yoroshii desu ka",
            "May I jump in once?",
          ],
        ],
      },
      {
        chunk: "せいりしますと / つまり〜ということです",
        romaji: "seiri shimasu to / tsumari ~ to iu koto desu",
        hiragana: "せいりしますと / つまり〜ということです",
        meaning: "To sort this / in other words, it means ___",
        whenToUse:
          "After you interrupt. Frame as りかい / かくにん, not as a verdict.",
        examples: [
          [
            "つまり、きげんをのばす、ということですね",
            "tsumari, kigen o nobasu, to iu koto desu ne",
            "In other words, we're extending the deadline, yes?",
          ],
          [
            "まとめると、こんかいはみおくる、ということです",
            "matomeru to, konkai wa miokuru, to iu koto desu",
            "To sum up, we're sitting this one out.",
          ],
        ],
      },
      {
        chunk: "それでは",
        romaji: "sore dewa",
        hiragana: "それでは",
        meaning: "Well then / in that case",
        whenToUse:
          "Close mixed-register meetings politely.",
        examples: [
          [
            "それではおねがいします",
            "sore dewa onegai shimasu",
            "Well then, please",
          ],
          [
            "それではつぎ",
            "sore dewa tsugi",
            "Well then, next",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "というりかいです checks, it doesn't crown you",
        "You offer a reading they can correct. つまり〜ですよ can sound like you took the gavel.",
      ],
      [
        "では、 is the next scene",
        "After a confirmed summary, では、 opens the decision. Without it, the room slides back into fog.",
      ],
    ],
    culturalNote: [
      "Summarizing is allowed — showing off is not",
      "Juniors who せいり as かくにん are useful. Juniors who せいり to prove they were smarter than the speaker get iced out. Interrupt once, confirm, ask. Then shut up and let ぶちょう pick.",
    ],
    shadowing: [
      [
        "Sumimasen, sukoshi yoroshii desu ka.",
        "すみません、すこしよろしいですか。",
      ],
      [
        "Tsumari, ryōhō kitsui, to iu koto desu ne.",
        "つまり、りょうほうきつい、ということですね。",
      ],
    ],
    quiz: [
      [
        "Polite way to cut in:",
        [
          "ちょっと、だまれ",
          "すみません、よろしいですか",
          "おれがいう",
          "はなしがながい",
        ],
        1,
        "すみません＋よろしいですか is the meeting turn signal.",
      ],
      [
        "というりかいです is useful because:",
        [
          "It fires the colleague",
          "It offers a checkable summary, not a command",
          "It changes the budget",
          "It ends the company",
        ],
        1,
        "They can say そう or fix you. That's the point.",
      ],
      [
        "それでは closes:",
        [
          "A meeting politely",
          "A fridge",
          "A passport permanently",
          "A joke only",
        ],
        0,
        "それでは = well then.",
      ],
    ],
    production: [
      [
        "Sorry — may I? If I sort what we have so far...",
        "すみません、よろしいですか + せいりしますと",
        "Sumimasen, yoroshii desu ka. Koko made o seiri shimasu to...",
        "すみません、よろしいですか。ここまでをせいりしますと…。",
      ],
      [
        "Well then, please handle it",
        "それでは + おねがいします",
        "Sore dewa onegai shimasu.",
        "それではおねがいします。",
      ],
    ],
  },
  {
    id: "sp-16-6",
    unit: 16,
    unitTitle: "Near-native Fluency",
    order: 6,
    title: "Capstone: レジスターをいっしゅんでかえる",
    subtitle: "Friend, staff, boss — three faces in one café",
    scenario:
      "You're making evening plans. The order is wrong. Your ぶちょう calls. Fluency is the switch, not a single polite voice.",
    durationMin: 26,
    objectives: [
      "Stay in ためぐち with a friend while you are mid-keigo with staff",
      "Take a boss call with かしこまりました / ごれんらくします",
      "Laugh when they tease your しごとがお — that tease is intimacy",
    ],
    dialogue: [
      [
        "Friend",
        "Konban, mada aiteru?",
        "こんばん、まだあいてる？",
        "You still free tonight?",
      ],
      [
        "You",
        "Un, daijōbu. A, sumimasen, kore aisu de onegai shita n desu kedo.",
        "うん、だいじょうぶ。あっ、すみません、これアイスでおねがいしたんですけど。",
        "Yeah, I'm free. — Ah, excuse me, I had asked for this iced, though.",
      ],
      [
        "Staff",
        "Taihen shitsurei itashimashita. Sugu ni tsukurinaoshimasu.",
        "たいへんしつれいいたしました。すぐにつくりなおします。",
        "I'm terribly sorry. I'll remake it right away.",
      ],
      [
        "You",
        "Moshi moshi, buchō desu ka. Hai, kashikomarimashita. Nochihodo gorenraku shimasu.",
        "もしもし、ぶちょうですか。はい、かしこまりました。のちほどごれんらくします。",
        "Hello, chief? Yes, certainly. I'll contact you shortly.",
      ],
      [
        "Friend",
        "Haha, kao ga shigoto-gao ni natta. Daijōbu?",
        "はは、かおがしごとがおになった。だいじょうぶ？",
        "Haha, your work face just came on. You okay?",
      ],
      [
        "Mentor",
        "Yoku dekimashita. Kore kara mo ganbatte.",
        "よくできました。これからもがんばって。",
        "Well done. Keep it up going forward.",
      ],
    ],
    patterns: [
      {
        chunk: "うん / かしこまりました (switch)",
        romaji: "un / kashikomarimashita",
        hiragana: "うん / かしこまりました",
        meaning: "Casual yes vs service/boss 'certainly'",
        whenToUse:
          "Same minute, different faces. The skill is latency — under a second.",
        examples: [
          [
            "うん、だいじょぶ",
            "un, daijōbu",
            "Yeah, I'm fine. (friend)",
          ],
          [
            "かしこまりました。のちほどごれんらくします",
            "kashikomarimashita. nochihodo gorenraku shimasu",
            "Certainly. I'll be in touch later. (boss)",
          ],
        ],
      },
      {
        chunk: "〜んですけど (soft correction)",
        romaji: "~ n desu kedo",
        hiragana: "〜んですけど",
        meaning: "I had ___'d, though... (staff-facing nudge)",
        whenToUse:
          "Wrong order, wrong size, missing item. The けど invites them to fix it.",
        examples: [
          [
            "ホットでおねがいしたんですけど",
            "hotto de onegai shita n desu kedo",
            "I had asked for it hot, though...",
          ],
          [
            "ちょっとでてもよろしいでしょうか",
            "chotto dete mo yoroshii deshō ka",
            "May I step out for a moment?",
          ],
        ],
      },
      {
        chunk: "これから",
        romaji: "kore kara",
        hiragana: "これから",
        meaning: "from now on",
        whenToUse:
          "Capstone closings; future commitment.",
        examples: [
          [
            "これからもよろしく",
            "kore kara mo yoroshiku",
            "Looking forward to going forward",
          ],
          [
            "これからべんきょうする",
            "kore kara benkyō suru",
            "I'll study from now on",
          ],
        ],
      },
    ],
    grammarNotes: [
      [
        "Near-native is a switch, not a setting",
        "Always-keigo with friends is distant. Always-casual with staff is sloppy. The capstone is changing height without changing who you are.",
      ],
      [
        "んですけど to staff is enough",
        "You don't need けんじょうご to get a drink remade. Clear fact + けど. Save もうしわけございません for when you caused the mess.",
      ],
    ],
    culturalNote: [
      "Friends will roast your work face",
      "かおがしごとがおになった is affection. Near-native speakers let that joke land, hang up, and drop back to うん without explaining keigo theory. If the call is grim, say ちょっとしごと — they'll get it.",
    ],
    shadowing: [
      [
        "Kore aisu de onegai shita n desu kedo.",
        "これアイスでおねがいしたんですけど。",
      ],
      [
        "Hai, kashikomarimashita. Nochihodo gorenraku shimasu.",
        "はい、かしこまりました。のちほどごれんらくします。",
      ],
    ],
    quiz: [
      [
        "Wrong iced/hot order. You say to staff:",
        [
          "まちがいだ、ばか",
          "アイスでおねがいしたんですけど",
          "おうぼいたしました",
          "へんやんな",
        ],
        1,
        "Fact + んですけど is the café correction.",
      ],
      [
        "A friend teases your しごとがお. You:",
        [
          "Lecture them on そんけいご",
          "Stay in かしこまりました with them",
          "Laugh and drop back to casual",
          "Leave without a word",
        ],
        2,
        "The tease is closeness. Switch back down.",
      ],
      [
        "これからもよろしく looks:",
        [
          "Forward",
          "Backward only",
          "Angry",
          "Lost",
        ],
        0,
        "Future goodwill closer.",
      ],
    ],
    production: [
      [
        "Yes, certainly. I'll contact you later. (to a boss)",
        "かしこまりました + のちほどごれんらくします",
        "Hai, kashikomarimashita. Nochihodo gorenraku shimasu.",
        "はい、かしこまりました。のちほどごれんらくします。",
      ],
      [
        "Looking forward to working together going forward",
        "これからも + よろしく",
        "Kore kara mo yoroshiku.",
        "これからもよろしく。",
      ],
    ],
  },
];

export const speakingLessons1316 = compact.map(expandSpeaking);
