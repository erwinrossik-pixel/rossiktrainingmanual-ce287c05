import { Language } from '@/contexts/LanguageContext';
import { introTranslations } from './chapters/intro';
import { mindsetTranslations } from './chapters/mindset';
import { softskillsTranslations } from './chapters/softskills';
import { workflowTranslations } from './chapters/workflow';
import { vehicleTranslations } from './chapters/vehicle';
import { loadingTranslations } from './chapters/loading';

// Chapter translations type
type ChapterTranslations = Record<string, Record<string, string>>;

// All chapter translations
const allTranslations: Record<string, ChapterTranslations> = {
  intro: introTranslations,
  mindset: mindsetTranslations,
  'soft-skills': softskillsTranslations,
  workflow: workflowTranslations,
  vehicle: vehicleTranslations,
  loading: loadingTranslations,
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
