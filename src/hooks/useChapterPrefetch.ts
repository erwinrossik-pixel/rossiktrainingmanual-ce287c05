import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { loadChapterTranslations } from "@/data/translations";
import { getAdjacentChapters } from "@/data/chapterOrder";

/**
 * Warms the translation chunks for the previous and next chapters
 * relative to the active one, so navigating with the arrows feels
 * instantaneous. Runs during browser idle time to avoid competing
 * with the active chapter's own load.
 */
export function useChapterPrefetch(activeChapter: string) {
  const { language } = useLanguage();

  useEffect(() => {
    if (!activeChapter) return;
    const { prev, next } = getAdjacentChapters(activeChapter);
    const targets = [prev, next].filter((id): id is string => Boolean(id));
    if (targets.length === 0) return;

    let cancelled = false;
    const run = () => {
      if (cancelled) return;
      for (const id of targets) {
        // Fire-and-forget; loadChapterTranslations dedupes & caches internally
        loadChapterTranslations(id, language);
      }
    };

    // Defer to idle time so the active chapter takes priority
    const ric: number =
      typeof window !== "undefined" && "requestIdleCallback" in window
        ? (window as any).requestIdleCallback(run, { timeout: 2000 })
        : (window.setTimeout(run, 800) as unknown as number);

    return () => {
      cancelled = true;
      if (typeof window !== "undefined" && "cancelIdleCallback" in window) {
        (window as any).cancelIdleCallback(ric);
      } else {
        window.clearTimeout(ric);
      }
    };
  }, [activeChapter, language]);
}
