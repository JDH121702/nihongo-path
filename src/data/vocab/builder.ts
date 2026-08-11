import type { VocabWord } from "@/lib/types";

/** Compact row: [romaji, kana, english, pos, exKana, exRomaji, exEnglish, frequency?] */
export type CompactVocab = [
  romaji: string,
  kana: string,
  english: string,
  pos: VocabWord["pos"],
  exampleKana: string,
  exampleRomaji: string,
  exampleEnglish: string,
  frequency?: VocabWord["frequency"],
];

function isTemplateExample(exKana: string, kana: string) {
  const t = exKana.trim();
  if (/がだいじ[。.]?$/.test(t)) return true;
  if (new RegExp(`^${escapeReg(kana)}よ[。.]?$`).test(t)) return true;
  if (new RegExp(`^これ${escapeReg(kana)}それ[。.]?$`).test(t)) return true;
  if (/^とても/.test(t) && t.length <= kana.length + 6) return true;
  if (t.length <= kana.length + 3) return true;
  return false;
}

function escapeReg(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Build a short natural spoken example from POS + headword. */
export function naturalExample(
  kana: string,
  romaji: string,
  english: string,
  pos: VocabWord["pos"],
): Pick<VocabWord, "exampleKana" | "exampleRomaji" | "exampleEnglish"> {
  const gloss = english.split(/[;/]/)[0]?.trim() || english;
  switch (pos) {
    case "verb":
      return {
        exampleKana: `ちょっと${kana}ね。`,
        exampleRomaji: `Chotto ${romaji} ne.`,
        exampleEnglish: `I'll ${gloss} for a bit. / Gonna ${gloss}.`,
      };
    case "noun":
      return {
        exampleKana: `この${kana}、どう？`,
        exampleRomaji: `Kono ${romaji}, dou?`,
        exampleEnglish: `What about this ${gloss}?`,
      };
    case "adj":
      return {
        exampleKana: `きょうはちょっと${kana}。`,
        exampleRomaji: `Kyou wa chotto ${romaji}.`,
        exampleEnglish: `Today's a bit ${gloss}.`,
      };
    case "adv":
      return {
        exampleKana: `${kana}やってみよう。`,
        exampleRomaji: `${romaji} yatte miyou.`,
        exampleEnglish: `Let's try it ${gloss}.`,
      };
    case "phrase":
      return {
        exampleKana: `${kana}`,
        exampleRomaji: `${romaji}`,
        exampleEnglish: gloss,
      };
    case "particle":
      return {
        exampleKana: `これ${kana}それ。`,
        exampleRomaji: `Kore ${romaji} sore.`,
        exampleEnglish: `This ${gloss} that.`,
      };
    case "counter":
      return {
        exampleKana: `${kana}ください。`,
        exampleRomaji: `${romaji} kudasai.`,
        exampleEnglish: `${gloss}, please.`,
      };
    default:
      return {
        exampleKana: `${kana}って知ってる？`,
        exampleRomaji: `${romaji} tte shitteru?`,
        exampleEnglish: `Do you know “${gloss}”?`,
      };
  }
}

function polishRow(row: CompactVocab): CompactVocab {
  const [romaji, kana, english, pos, exKana, exRomaji, exEnglish, frequency] =
    row;
  if (!isTemplateExample(exKana, kana)) {
    return row;
  }
  const next = naturalExample(kana, romaji, english, pos);
  return [
    romaji,
    kana,
    english,
    pos,
    next.exampleKana,
    next.exampleRomaji,
    next.exampleEnglish,
    frequency,
  ];
}

export function expandVocab(
  unit: number,
  rows: CompactVocab[],
  startIndex = 1,
): VocabWord[] {
  return rows.map((raw, i) => {
    const row = polishRow(raw);
    const [
      romaji,
      kana,
      english,
      pos,
      exampleKana,
      exampleRomaji,
      exampleEnglish,
      frequency = "high",
    ] = row;
    return {
      id: `v-${unit}-${String(startIndex + i).padStart(3, "0")}`,
      unit,
      romaji,
      kana,
      english,
      pos,
      exampleKana,
      exampleRomaji,
      exampleEnglish,
      frequency,
    };
  });
}
