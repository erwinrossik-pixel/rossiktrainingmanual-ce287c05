import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import {
  hasChapterTranslations,
  loadChapterTranslations,
} from "@/data/translations";
import { useLanguage } from "@/contexts/LanguageContext";

interface TranslationLoadingBannerProps {
  chapterId: string;
}

const messages = {
  ro: "Se încarcă conținutul capitolului…",
  en: "Loading chapter content…",
  de: "Kapitelinhalt wird geladen…",
} as const;

/**
 * Shows a subtle loading banner at the top of a chapter while its
 * translation chunk is being fetched. Disappears as soon as the
 * translations are cached in memory.
 */
export function TranslationLoadingBanner({ chapterId }: TranslationLoadingBannerProps) {
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = useState<boolean>(
    () => !hasChapterTranslations(chapterId)
  );

  useEffect(() => {
    let cancelled = false;

    if (hasChapterTranslations(chapterId)) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    loadChapterTranslations(chapterId).finally(() => {
      if (!cancelled) setIsLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [chapterId]);

  if (!isLoading) return null;

  const label =
    messages[language as keyof typeof messages] ?? messages.en;

  return (
    <div
      role="status"
      aria-live="polite"
      className="flex items-center gap-2 rounded-md border border-border bg-muted/40 px-3 py-2 text-sm text-muted-foreground animate-fade-in"
    >
      <Loader2 className="h-4 w-4 animate-spin text-primary" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
