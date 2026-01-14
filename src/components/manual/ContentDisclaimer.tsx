import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { InfoIcon, AlertTriangle, ShieldAlert } from 'lucide-react';
import { ContentLevel } from './ContentLevelBadge';
import { useLanguage } from '@/contexts/LanguageContext';

interface ContentDisclaimerProps {
  level: ContentLevel;
  className?: string;
}

const disclaimerContent = {
  operational: {
    ro: {
      title: 'Conținut Operațional',
      description: 'Acest conținut are caracter educațional și descrie proceduri operaționale. Verifică întotdeauna sursele oficiale și procedurile interne ale companiei înainte de aplicare operațională.',
    },
    de: {
      title: 'Betrieblicher Inhalt',
      description: 'Dieser Inhalt hat pädagogischen Charakter und beschreibt betriebliche Verfahren. Überprüfen Sie immer die offiziellen Quellen und internen Unternehmensverfahren vor der betrieblichen Anwendung.',
    },
    en: {
      title: 'Operational Content',
      description: 'This content is educational and describes operational procedures. Always verify official sources and internal company procedures before operational application.',
    },
  },
  critical: {
    ro: {
      title: '⚠️ Conținut Critic / Compliance',
      description: 'ATENȚIE: Acest conținut conține informații referitoare la legislație, reglementări vamale, sancțiuni sau restricții legale. Informațiile pot fi modificate de autoritățile competente. Verifică OBLIGATORIU sursele oficiale actualizate înainte de orice aplicare operațională. Compania nu își asumă responsabilitatea pentru decizii bazate exclusiv pe acest material educațional.',
    },
    de: {
      title: '⚠️ Kritischer Inhalt / Compliance',
      description: 'ACHTUNG: Dieser Inhalt enthält Informationen zu Gesetzgebung, Zollvorschriften, Sanktionen oder gesetzlichen Beschränkungen. Die Informationen können von den zuständigen Behörden geändert werden. Überprüfen Sie UNBEDINGT die aktuellen offiziellen Quellen vor jeder betrieblichen Anwendung. Das Unternehmen übernimmt keine Verantwortung für Entscheidungen, die ausschließlich auf diesem Schulungsmaterial basieren.',
    },
    en: {
      title: '⚠️ Critical Content / Compliance',
      description: 'WARNING: This content contains information regarding legislation, customs regulations, sanctions, or legal restrictions. Information may be modified by competent authorities. You MUST verify updated official sources before any operational application. The company assumes no responsibility for decisions based solely on this educational material.',
    },
  },
};

export function ContentDisclaimer({ level, className }: ContentDisclaimerProps) {
  const { language } = useLanguage();
  
  // No disclaimer for informational content
  if (level === 'informational') {
    return null;
  }

  const content = disclaimerContent[level][language as 'ro' | 'de' | 'en'] || disclaimerContent[level].en;
  const isCritical = level === 'critical';

  return (
    <Alert 
      variant={isCritical ? 'destructive' : 'default'}
      className={`${isCritical ? 'border-red-500 bg-red-50 dark:bg-red-950/20' : 'border-amber-500 bg-amber-50 dark:bg-amber-950/20'} ${className}`}
    >
      {isCritical ? (
        <ShieldAlert className="h-5 w-5 text-red-600" />
      ) : (
        <InfoIcon className="h-5 w-5 text-amber-600" />
      )}
      <AlertTitle className={isCritical ? 'text-red-800 dark:text-red-200' : 'text-amber-800 dark:text-amber-200'}>
        {content.title}
      </AlertTitle>
      <AlertDescription className={`mt-2 text-sm ${isCritical ? 'text-red-700 dark:text-red-300' : 'text-amber-700 dark:text-amber-300'}`}>
        {content.description}
      </AlertDescription>
    </Alert>
  );
}
