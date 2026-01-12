import { useLanguage, Language } from '@/contexts/LanguageContext';
import { getChapterTranslation } from '@/data/translations';

export function useChapterTranslation(chapterId: string) {
  const { language } = useLanguage();
  
  const ct = (key: string): string => {
    return getChapterTranslation(chapterId, key, language);
  };
  
  return { ct, language };
}
