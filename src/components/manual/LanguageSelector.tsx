import { useLanguage, Language } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'ro', label: 'RO', flag: '🇷🇴' },
  { code: 'de', label: 'DE', flag: '🇩🇪' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
];

interface LanguageSelectorProps {
  variant?: 'light' | 'dark';
}

export function LanguageSelector({ variant = 'light' }: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();

  const isDark = variant === 'dark';

  return (
    <div className={cn(
      "flex items-center gap-1 p-1 rounded-lg",
      isDark ? "bg-sidebar-muted/30" : "bg-muted/50"
    )}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all",
            language === lang.code
              ? isDark 
                ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                : "bg-primary text-primary-foreground shadow-sm"
              : isDark
                ? "hover:bg-sidebar-accent text-sidebar-foreground/60 hover:text-sidebar-foreground"
                : "hover:bg-muted text-muted-foreground hover:text-foreground"
          )}
        >
          <span className="text-base">{lang.flag}</span>
          <span>{lang.label}</span>
        </button>
      ))}
    </div>
  );
}
