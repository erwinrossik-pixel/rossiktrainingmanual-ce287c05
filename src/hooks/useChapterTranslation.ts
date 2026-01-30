import { useLanguage, Language } from '@/contexts/LanguageContext';
import { getChapterTranslation } from '@/data/translations';
import { useTranslationOverrides } from './useTranslationOverrides';
import { useMemo } from 'react';

export function useChapterTranslation(chapterId: string) {
  const { language } = useLanguage();
  const { data: overrides = [] } = useTranslationOverrides(chapterId, language);
  
  // Create a map of overrides for fast lookup
  const overrideMap = useMemo(() => {
    const map: Record<string, string> = {};
    for (const override of overrides) {
      if (override.is_active && override.corrected_value) {
        // Store by the simple key (last part of translation_key)
        const keyParts = override.translation_key.split('.');
        const simpleKey = keyParts[keyParts.length - 1];
        map[simpleKey] = override.corrected_value;
        
        // Also store full key
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
    
    // Fallback to static file translations
    return getChapterTranslation(chapterId, key, language);
  };
  
  return { ct, language, hasOverrides: overrides.length > 0 };
}
