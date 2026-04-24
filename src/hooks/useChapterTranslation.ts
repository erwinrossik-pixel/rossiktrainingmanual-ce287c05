import { useLanguage } from '@/contexts/LanguageContext';
import {
  getChapterTranslation,
  loadChapterTranslations,
  hasChapterTranslations,
} from '@/data/translations';
import { useTranslationOverrides } from './useTranslationOverrides';
import { useEffect, useMemo, useState } from 'react';

export function useChapterTranslation(chapterId: string) {
  const { language } = useLanguage();
  const { data: overrides = [] } = useTranslationOverrides(chapterId, language);

  // Re-render when async chapter translations finish loading
  const [loaded, setLoaded] = useState<boolean>(() => hasChapterTranslations(chapterId));

  useEffect(() => {
    let cancelled = false;
    if (hasChapterTranslations(chapterId)) {
      setLoaded(true);
      return;
    }
    setLoaded(false);
    loadChapterTranslations(chapterId, language).then(() => {
      if (!cancelled) setLoaded(true);
    });
    return () => {
      cancelled = true;
    };
  }, [chapterId, language]);

  // Create a map of overrides for fast lookup
  const overrideMap = useMemo(() => {
    const map: Record<string, string> = {};
    for (const override of overrides) {
      if (override.is_active && override.corrected_value) {
        const keyParts = override.translation_key.split('.');
        const simpleKey = keyParts[keyParts.length - 1];
        map[simpleKey] = override.corrected_value;
        map[override.translation_key] = override.corrected_value;
      }
    }
    return map;
  }, [overrides]);

  const ct = (key: string): string => {
    // First check if we have an override from DB
    if (overrideMap[key]) {
      return overrideMap[key];
    }

    // Check full key format (chapterId.key)
    const fullKey = `${chapterId}.${key}`;
    if (overrideMap[fullKey]) {
      return overrideMap[fullKey];
    }

    // Fallback to static file translations (cache-backed; returns key if not yet loaded)
    return getChapterTranslation(chapterId, key, language);
  };

  return { ct, language, hasOverrides: overrides.length > 0, isLoaded: loaded };
}
