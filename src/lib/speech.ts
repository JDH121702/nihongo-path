export function speakJapanese(text: string, rate = 0.85) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;

  const speak = () => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    utterance.rate = rate;
    const voices = window.speechSynthesis.getVoices();
    const japaneseVoice =
      voices.find((v) => v.lang.toLowerCase().startsWith("ja")) ??
      voices.find((v) => v.lang.toLowerCase().includes("japan"));
    if (japaneseVoice) utterance.voice = japaneseVoice;
    window.speechSynthesis.speak(utterance);
  };

  const voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    speak();
    return;
  }

  // Chrome often loads voices asynchronously
  const onVoices = () => {
    window.speechSynthesis.removeEventListener("voiceschanged", onVoices);
    speak();
  };
  window.speechSynthesis.addEventListener("voiceschanged", onVoices);
  // Fallback if event never fires
  window.setTimeout(() => {
    window.speechSynthesis.removeEventListener("voiceschanged", onVoices);
    speak();
  }, 250);
}

export function renderWithFurigana(
  text: string,
  furigana: Record<string, string>,
): { kanji: string; reading?: string }[] {
  const result: { kanji: string; reading?: string }[] = [];
  let i = 0;
  while (i < text.length) {
    let matched = false;
    for (const [kanji, reading] of Object.entries(furigana)) {
      if (text.slice(i, i + kanji.length) === kanji) {
        result.push({ kanji, reading });
        i += kanji.length;
        matched = true;
        break;
      }
    }
    if (!matched) {
      result.push({ kanji: text[i] });
      i += 1;
    }
  }
  return result;
}
