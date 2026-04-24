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
    if (!activeChapter || typeof window === "undefined") return;
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
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    let handle: number;
    let usingIdle = false;
    if (typeof w.requestIdleCallback === "function") {
      handle = w.requestIdleCallback(run, { timeout: 2000 });
      usingIdle = true;
    } else {
      handle = window.setTimeout(run, 800);
    }

    return () => {
      cancelled = true;
      if (usingIdle && typeof w.cancelIdleCallback === "function") {
        w.cancelIdleCallback(handle);
      } else {
        window.clearTimeout(handle);
      }
    };
  }, [activeChapter, language]);
}
