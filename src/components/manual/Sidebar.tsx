import { 
  BookOpen, Users, Truck, Package, Shield, Calculator, 
  Building2, Route, Clock, Laptop, GraduationCap, AlertTriangle, 
  ClipboardList, Target, Menu, X, Phone, MessageSquare, Scale,
  FileText, Flame, Book, Lightbulb, CheckCircle2, BarChart3, Award
} from "lucide-react";
import rossikLogo from "@/assets/rossik-logo.jpg";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useProgressContext } from "@/contexts/ProgressContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { GlobalSearch } from "./GlobalSearch";
import { LanguageSelector } from "./LanguageSelector";

interface SidebarProps {
  activeChapter: string;
  onChapterChange: (chapter: string) => void;
  onShowDashboard: () => void;
}

const getSections = (t: (key: string) => string) => [
  {
    title: t('section.foundation'),
    chapters: [
      { id: "intro", labelKey: "chapter.intro", icon: BookOpen },
      { id: "mindset", labelKey: "chapter.mindset", icon: Target },
      { id: "soft-skills", labelKey: "chapter.soft-skills", icon: Users },
      { id: "workflow", labelKey: "chapter.workflow", icon: Route },
    ]
  },
  {
    title: t('section.equipment'),
    chapters: [
      { id: "vehicle", labelKey: "chapter.vehicle", icon: Truck },
      { id: "loading", labelKey: "chapter.loading", icon: Package },
      { id: "reefer", labelKey: "chapter.reefer", icon: Package },
      { id: "warehouse", labelKey: "chapter.warehouse", icon: Package },
      { id: "adr", labelKey: "chapter.adr", icon: Flame },
      { id: "documents", labelKey: "chapter.documents", icon: FileText },
    ]
  },
  {
    title: t('section.trade'),
    chapters: [
      { id: "incoterms", labelKey: "chapter.incoterms", icon: Book },
      { id: "compliance", labelKey: "chapter.compliance", icon: Clock },
      { id: "driving-time", labelKey: "chapter.driving-time", icon: Shield },
      { id: "customs", labelKey: "chapter.customs", icon: Shield },
      { id: "europe-zones", labelKey: "chapter.europe-zones", icon: Route },
      { id: "environment", labelKey: "chapter.environment", icon: Target },
      { id: "supply-chain", labelKey: "chapter.supply-chain", icon: Route },
      { id: "licenses-oversize", labelKey: "chapter.licenses-oversize", icon: Award },
    ]
  },
  {
    title: t('section.commercial'),
    chapters: [
      { id: "pricing", labelKey: "chapter.pricing", icon: Calculator },
      { id: "commercial", labelKey: "chapter.commercial", icon: Target },
      { id: "negotiation", labelKey: "chapter.negotiation", icon: Users },
      { id: "clients", labelKey: "chapter.clients", icon: Building2 },
      { id: "carrier-management", labelKey: "chapter.carrier-management", icon: Users },
      { id: "exchanges", labelKey: "chapter.exchanges", icon: Users },
      { id: "communication", labelKey: "chapter.communication", icon: MessageSquare },
      { id: "kpi", labelKey: "chapter.kpi", icon: Target },
    ]
  },
  {
    title: t('section.technology'),
    chapters: [
      { id: "translogica", labelKey: "chapter.translogica", icon: Laptop },
      { id: "fleet", labelKey: "chapter.fleet", icon: Truck },
      { id: "technology", labelKey: "chapter.technology", icon: Laptop },
    ]
  },
  {
    title: t('section.finance'),
    chapters: [
      { id: "risk-management", labelKey: "chapter.risk-management", icon: Shield },
      { id: "insurance", labelKey: "chapter.insurance", icon: Shield },
      { id: "claims", labelKey: "chapter.claims", icon: Scale },
      { id: "payment", labelKey: "chapter.payment", icon: Calculator },
      { id: "accounting", labelKey: "chapter.accounting", icon: Calculator },
    ]
  },
  {
    title: t('section.practical'),
    chapters: [
      { id: "emergency", labelKey: "chapter.emergency", icon: Phone },
      { id: "case-studies", labelKey: "chapter.case-studies", icon: Lightbulb },
      { id: "training", labelKey: "chapter.training", icon: GraduationCap },
      { id: "red-flags", labelKey: "chapter.red-flags", icon: AlertTriangle },
      { id: "glossary", labelKey: "chapter.glossary", icon: Book },
      { id: "checklists", labelKey: "chapter.checklists", icon: ClipboardList },
    ]
  },
];

export function Sidebar({ activeChapter, onChapterChange, onShowDashboard }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { progress, getOverallProgress, getChapterProgress } = useProgressContext();
  const { t } = useLanguage();

  const overallProgress = getOverallProgress();
  const sections = getSections(t);

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden bg-card p-2.5 rounded-lg shadow-md border border-border transition-transform duration-150 hover:scale-105 active:scale-95"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? (
          <X className="w-5 h-5 text-foreground" />
        ) : (
          <Menu className="w-5 h-5 text-foreground" />
        )}
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 h-full w-72 bg-card border-r border-border z-40 flex flex-col transition-transform duration-300 ease-out",
        "lg:translate-x-0",
        mobileOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Logo Header */}
        <div className="p-4 border-b border-border">
          <div className="flex flex-col items-center text-center gap-3">
            <img 
              src={rossikLogo} 
              alt="Rossik Transport & Logistic" 
              className="w-full h-auto object-contain rounded-xl"
            />
            <p className="text-sm font-medium text-muted-foreground">
              {t('sidebar.title')}
            </p>
          </div>
        </div>

        {/* Language Selector */}
        <div className="px-4 py-3 border-b border-border flex justify-center">
          <LanguageSelector />
        </div>

        {/* Progress Overview */}
        <div className="px-5 py-4 border-b border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-muted-foreground">{t('sidebar.progress')}</span>
            <span className="text-xs font-bold text-primary">{overallProgress}%</span>
          </div>
          <div className="relative w-full h-1.5 bg-muted rounded-full overflow-hidden">
            <div 
              className="absolute left-0 top-0 h-full bg-primary rounded-full transition-all duration-500 ease-out"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-muted-foreground">
              {progress.totalCompleted} / 40 {t('sidebar.chapters')}
            </span>
            <button
              onClick={() => {
                onShowDashboard();
                setMobileOpen(false);
              }}
              className="text-xs text-primary hover:text-primary/80 flex items-center gap-1 font-medium transition-colors"
            >
              <BarChart3 className="w-3 h-3" />
              {t('sidebar.details')}
            </button>
          </div>
        </div>

        {/* Global Search */}
        <div className="px-4 py-3 border-b border-border">
          <GlobalSearch onNavigate={(chapterId) => {
            onChapterChange(chapterId);
            setMobileOpen(false);
          }} />
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-3 px-3 scrollbar-thin">
          {sections.map((section, sectionIndex) => (
            <div key={section.title} className={cn(sectionIndex > 0 && "mt-5")}>
              {/* Section Header */}
              <div className="px-2 mb-1.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/70">
                  {section.title}
                </span>
              </div>
              
              {/* Section Chapters */}
              <ul className="space-y-0.5">
                {section.chapters.map((chapter) => {
                  const Icon = chapter.icon;
                  const isActive = activeChapter === chapter.id;
                  const chapterProgress = getChapterProgress(chapter.id);
                  const isCompleted = chapterProgress?.completed;
                  const hasQuizScore = chapterProgress?.quizScore !== undefined;
                  
                  return (
                    <li key={chapter.id}>
                      <button
                        onClick={() => {
                          onChapterChange(chapter.id);
                          setMobileOpen(false);
                        }}
                        className={cn(
                          "nav-item w-full text-left group",
                          isActive && "nav-item-active"
                        )}
                      >
                        <div className="relative flex-shrink-0">
                          <Icon className={cn(
                            "w-4 h-4 transition-colors",
                            isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                          )} />
                          {isCompleted && (
                            <CheckCircle2 className="w-2.5 h-2.5 text-success absolute -top-0.5 -right-1" />
                          )}
                        </div>
                        <span className={cn(
                          "flex-1 truncate text-[13px]",
                          isActive ? "text-primary" : "text-foreground/80 group-hover:text-foreground"
                        )}>
                          {t(chapter.labelKey)}
                        </span>
                        {hasQuizScore && (
                          <span className={cn(
                            "text-[10px] px-1.5 py-0.5 rounded font-medium",
                            chapterProgress.quizScore! >= (chapterProgress.quizTotal! * 0.7)
                              ? "bg-success/10 text-success"
                              : "bg-warning/10 text-warning"
                          )}>
                            {chapterProgress.quizScore}/{chapterProgress.quizTotal}
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center justify-center gap-2 text-muted-foreground/50">
            <span className="text-[10px] font-medium">{t('sidebar.version')}</span>
            <span className="w-1 h-1 rounded-full bg-current" />
            <span className="text-[10px] font-medium">{t('sidebar.edition')}</span>
          </div>
        </div>
      </aside>
    </>
  );
}
