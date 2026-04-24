import { useCallback, useEffect, useState } from "react";
import { AlertTriangle, Loader2, RefreshCcw } from "lucide-react";
import {
  hasChapterTranslations,
  loadChapterTranslations,
} from "@/data/translations";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

interface TranslationLoadingBannerProps {
  chapterId: string;
}

const messages = {
  ro: {
    loading: "Se încarcă conținutul capitolului…",
    error: "Nu am putut încărca conținutul tradus.",
    retry: "Reîncearcă",
  },
  en: {
    loading: "Loading chapter content…",
    error: "We couldn’t load the translated content.",
    retry: "Retry",
  },
  de: {
    loading: "Kapitelinhalt wird geladen…",
    error: "Übersetzte Inhalte konnten nicht geladen werden.",
    retry: "Erneut versuchen",
  },
} as const;

type Status = "idle" | "loading" | "error";

/**
 * Subtle status banner shown at the top of a chapter:
 *   - while its translation chunk is being fetched (with spinner)
 *   - if the fetch ultimately fails (with retry button)
 *
 * Hidden once the translations are cached in memory.
 */
export function TranslationLoadingBanner({ chapterId }: TranslationLoadingBannerProps) {
  const { language } = useLanguage();
  const [status, setStatus] = useState<Status>(() =>
    hasChapterTranslations(chapterId) ? "idle" : "loading"
  );

  const copy =
    messages[language as keyof typeof messages] ?? messages.en;

  const start = useCallback(
    (forceReload: boolean) => {
      let cancelled = false;
      setStatus("loading");
      loadChapterTranslations(chapterId, language, { forceReload })
        .then((result) => {
          if (cancelled) return;
          setStatus(result ? "idle" : "error");
        })
        .catch(() => {
          if (!cancelled) setStatus("error");
        });
      return () => {
        cancelled = true;
      };
    },
    [chapterId, language]
  );

  useEffect(() => {
    if (hasChapterTranslations(chapterId)) {
      setStatus("idle");
      return;
    }
    return start(false);
  }, [chapterId, start]);

  if (status === "idle") return null;

  if (status === "error") {
    return (
      <div
        role="alert"
        aria-live="assertive"
        className="flex items-center justify-between gap-3 rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive animate-fade-in"
      >
        <div className="flex items-center gap-2 min-w-0">
          <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="truncate">{copy.error}</span>
        </div>
        <Button
          size="sm"
          variant="outline"
          className="h-7 px-2 border-destructive/40 text-destructive hover:bg-destructive/20"
          onClick={() => start(true)}
        >
          <RefreshCcw className="h-3.5 w-3.5 mr-1" aria-hidden="true" />
          {copy.retry}
        </Button>
      </div>
    );
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="flex items-center gap-2 rounded-md border border-border bg-muted/40 px-3 py-2 text-sm text-muted-foreground animate-fade-in"
    >
      <Loader2 className="h-4 w-4 animate-spin text-primary" aria-hidden="true" />
      <span>{copy.loading}</span>
    </div>
  );
}
