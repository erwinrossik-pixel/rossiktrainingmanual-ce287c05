import { Language } from '@/contexts/LanguageContext';
import { introTranslations } from './chapters/intro';

// Chapter translations type
type ChapterTranslations = Record<string, Record<string, string>>;

// All chapter translations
const allTranslations: Record<string, ChapterTranslations> = {
  intro: introTranslations,
};

// Hook to get chapter translations
export function getChapterTranslation(chapterId: string, key: string, language: Language): string {
  const chapterTranslations = allTranslations[chapterId];
  if (!chapterTranslations) {
    return key;
  }
  
  const languageTranslations = chapterTranslations[language];
  if (!languageTranslations) {
    // Fallback to English
    return chapterTranslations.en?.[key] || key;
  }
  
  return languageTranslations[key] || chapterTranslations.en?.[key] || key;
}

// Export all translations for direct access
export { introTranslations };
