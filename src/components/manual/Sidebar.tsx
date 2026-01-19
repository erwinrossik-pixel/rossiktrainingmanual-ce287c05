import { 
  BookOpen, Users, Truck, Package, Shield, Calculator, 
  Building2, Route, Clock, Laptop, GraduationCap, AlertTriangle, 
  ClipboardList, Target, Menu, X, Phone, MessageSquare, Scale,
  FileText, Flame, Book, Lightbulb, CheckCircle2, BarChart3, Award, Lock,
  Brain, Leaf, BadgeCheck, Cpu, Globe, Zap, Gem, Train, Network, TrendingUp, Crown,
  Gamepad2, Trophy, Star
} from "lucide-react";
import rossikLogo from "@/assets/rossik-logo.jpg";
import { cn } from "@/lib/utils";
import { useState, useEffect, useMemo, useRef } from "react";
import { useProgressContext } from "@/contexts/ProgressContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { usePremiumChapters } from "@/hooks/usePremiumChapters";
import { useGamification } from "@/hooks/useGamification";
import { GlobalSearch } from "./GlobalSearch";
import { LanguageSelector } from "./LanguageSelector";
import { CompactDailyTracker } from "./CompactDailyTracker";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";

interface SidebarProps {
  activeChapter: string;
  onChapterChange: (chapter: string) => void;
  onShowDashboard: () => void;
  onShowSimulations?: () => void;
}

const getSections = (t: (key: string) => string) => [
  {
    title: t('section.foundation'),
    chapters: [
      { id: "intro", labelKey: "chapter.intro", icon: BookOpen, isIntro: true },
      { id: "mindset", labelKey: "chapter.mindset", icon: Target, isIntro: false },
      { id: "soft-skills", labelKey: "chapter.soft-skills", icon: Users, isIntro: false },
      { id: "stress-management", labelKey: "chapter.stress-management", icon: Brain, isIntro: false },
      { id: "workflow", labelKey: "chapter.workflow", icon: Route, isIntro: false },
    ]
  },
  {
    title: t('section.equipment'),
    chapters: [
      { id: "vehicle", labelKey: "chapter.vehicle", icon: Truck, isIntro: false },
      { id: "loading", labelKey: "chapter.loading", icon: Package, isIntro: false },
      { id: "reefer", labelKey: "chapter.reefer", icon: Package, isIntro: false },
      { id: "express-transport", labelKey: "chapter.express-transport", icon: Zap, isIntro: false },
      { id: "intermodal", labelKey: "chapter.intermodal", icon: Train, isIntro: false },
      { id: "warehouse", labelKey: "chapter.warehouse", icon: Package, isIntro: false },
      { id: "adr", labelKey: "chapter.adr", icon: Flame, isIntro: false },
    ]
  },
  {
    title: t('section.documents'),
    chapters: [
      { id: "documents", labelKey: "chapter.documents", icon: FileText, isIntro: false },
      { id: "incoterms", labelKey: "chapter.incoterms", icon: Book, isIntro: false },
      { id: "customs", labelKey: "chapter.customs", icon: Shield, isIntro: false },
      { id: "authorities", labelKey: "chapter.authorities", icon: BadgeCheck, isIntro: false },
      { id: "compliance", labelKey: "chapter.compliance", icon: Clock, isIntro: false },
      { id: "driving-time", labelKey: "chapter.driving-time", icon: Clock, isIntro: false },
      { id: "licenses-oversize", labelKey: "chapter.licenses-oversize", icon: Award, isIntro: false },
    ]
  },
  {
    title: t('section.geography'),
    chapters: [
      { id: "europe-zones", labelKey: "chapter.europe-zones", icon: Route, isIntro: false },
      { id: "european-countries", labelKey: "chapter.european-countries", icon: Globe, isIntro: false },
      { id: "environment", labelKey: "chapter.environment", icon: Target, isIntro: false },
      { id: "sustainability", labelKey: "chapter.sustainability", icon: Leaf, isIntro: false },
      { id: "supply-chain", labelKey: "chapter.supply-chain", icon: Route, isIntro: false },
    ]
  },
  {
    title: t('section.commercial'),
    chapters: [
      { id: "pricing", labelKey: "chapter.pricing", icon: Calculator, isIntro: false },
      { id: "commercial", labelKey: "chapter.commercial", icon: Target, isIntro: false },
      { id: "negotiation", labelKey: "chapter.negotiation", icon: Users, isIntro: false },
      { id: "clients", labelKey: "chapter.clients", icon: Building2, isIntro: false },
      { id: "carrier-management", labelKey: "chapter.carrier-management", icon: Users, isIntro: false },
      { id: "exchanges", labelKey: "chapter.exchanges", icon: Users, isIntro: false },
      { id: "communication", labelKey: "chapter.communication", icon: MessageSquare, isIntro: false },
      { id: "networking", labelKey: "chapter.networking", icon: Network, isIntro: false },
      { id: "kpi", labelKey: "chapter.kpi", icon: BarChart3, isIntro: false },
    ]
  },
  {
    title: t('section.technology'),
    chapters: [
      { id: "translogica", labelKey: "chapter.translogica", icon: Laptop, isIntro: false },
      { id: "fleet", labelKey: "chapter.fleet", icon: Truck, isIntro: false },
      { id: "technology", labelKey: "chapter.technology", icon: Laptop, isIntro: false },
      { id: "digitalization", labelKey: "chapter.digitalization", icon: Cpu, isIntro: false },
    ]
  },
  {
    title: t('section.finance'),
    chapters: [
      { id: "risk-management", labelKey: "chapter.risk-management", icon: Shield, isIntro: false },
      { id: "insurance", labelKey: "chapter.insurance", icon: Shield, isIntro: false },
      { id: "high-value-goods", labelKey: "chapter.high-value-goods", icon: Gem, isIntro: false },
      { id: "claims", labelKey: "chapter.claims", icon: Scale, isIntro: false },
      { id: "payment", labelKey: "chapter.payment", icon: Calculator, isIntro: false },
      { id: "accounting", labelKey: "chapter.accounting", icon: Calculator, isIntro: false },
    ]
  },
  {
    title: t('section.practical'),
    chapters: [
      { id: "training", labelKey: "chapter.training", icon: GraduationCap, isIntro: false },
      { id: "professional-development", labelKey: "chapter.professional-development", icon: TrendingUp, isIntro: false },
      { id: "case-studies", labelKey: "chapter.case-studies", icon: Lightbulb, isIntro: false },
      { id: "emergency", labelKey: "chapter.emergency", icon: Phone, isIntro: false },
      { id: "red-flags", labelKey: "chapter.red-flags", icon: AlertTriangle, isIntro: false },
      { id: "checklists", labelKey: "chapter.checklists", icon: ClipboardList, isIntro: false },
      { id: "glossary", labelKey: "chapter.glossary", icon: Book, isIntro: false },
    ]
  },
];

export function Sidebar({ activeChapter, onChapterChange, onShowDashboard, onShowSimulations }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { progress, getOverallProgress, getChapterProgress } = useProgressContext();
  const { t } = useLanguage();
  const { user, isAdmin } = useAuth();
  const { 
    progress: dbProgress, 
    getChapterStatus, 
    getBestScore,
    initializeUserProgress 
  } = useChapterProgress();
  const { isChapterLocked: isPremiumLocked, getChapterMinPlan } = usePremiumChapters();
  const { gamification, calculateLevel } = useGamification();

  const overallProgress = getOverallProgress();
  const sections = getSections(t);
  const userLevel = gamification ? calculateLevel(gamification.total_xp) : 1;

  // Memoize chapter IDs to prevent unnecessary recalculations
  const allChapterIds = useMemo(() => 
    sections.flatMap(s => s.chapters.map(c => c.id)), 
    [sections]
  );

  // Track if initialization has been attempted
  const hasInitialized = useRef(false);

  // Initialize user progress when logged in (only once)
  useEffect(() => {
    if (user && allChapterIds.length > 0 && !hasInitialized.current) {
      hasInitialized.current = true;
      initializeUserProgress(allChapterIds);
    }
  }, [user?.id, allChapterIds.length]); // Stable dependencies

  // Calculate chapter numbers based on order in sections
  const getChapterNumber = (chapterId: string): number => {
    let number = 0;
    for (const section of sections) {
      for (const chapter of section.chapters) {
        number++;
        if (chapter.id === chapterId) {
          return number;
        }
      }
    }
    return 0;
  };

  // Check if chapter is accessible
  const isChapterAccessible = (chapterId: string, chapterIndex: number, isIntro: boolean): boolean => {
    // If not logged in, all chapters accessible (no gating for guests)
    if (!user) return true;
    
    // Admins have access to all chapters
    if (isAdmin) return true;
    
    // Intro chapter always accessible
    if (isIntro) return true;
    
    // Check database status
    const status = getChapterStatus(chapterId);
    if (status === 'unlocked' || status === 'in_progress' || status === 'completed') {
      return true;
    }
    
    // Check if previous chapter is completed
    if (chapterIndex > 0) {
      const prevChapterId = allChapterIds[chapterIndex - 1];
      const prevStatus = getChapterStatus(prevChapterId);
      return prevStatus === 'completed';
    }
    
    return chapterIndex === 0;
  };

  const totalChapters = sections.reduce((sum, section) => sum + section.chapters.length, 0);
  
  // Count completed chapters from DB
  const completedCount = user 
    ? Object.values(dbProgress).filter(p => p.status === 'completed').length
    : progress.totalCompleted;

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden bg-card p-2.5 rounded-lg shadow-md border border-border transition-transform duration-150 hover:scale-105 active:scale-95"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? "Închide meniul" : "Deschide meniul"}
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? (
          <X className="w-5 h-5 text-foreground" aria-hidden="true" />
        ) : (
          <Menu className="w-5 h-5 text-foreground" aria-hidden="true" />
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
      <aside 
        data-tour="sidebar"
        className={cn(
        "fixed left-0 top-0 h-full w-72 bg-card border-r border-border z-40 flex flex-col transition-transform duration-300 ease-out",
        "lg:translate-x-0",
        mobileOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Compact Header with Logo */}
        <div className="p-3 border-b border-border">
          <div className="flex items-center gap-3">
            <img 
              src={rossikLogo} 
              alt="Rossik" 
              width={48}
              height={48}
              className="w-12 h-12 object-contain rounded-lg flex-shrink-0"
              loading="eager"
              decoding="async"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">Training Manual</p>
              <p className="text-[11px] text-muted-foreground">{t('sidebar.edition')}</p>
            </div>
            <LanguageSelector />
          </div>
        </div>

        {/* Search */}
        <div className="px-3 py-2 border-b border-border">
          <GlobalSearch onNavigate={(chapterId) => {
            onChapterChange(chapterId);
            setMobileOpen(false);
          }} />
        </div>

        {/* Progress Bar - Compact */}
        <div className="px-3 py-2 border-b border-border bg-muted/30">
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">{t('sidebar.progress')}</span>
                <span className="text-[10px] font-bold text-primary">
                  {user ? completedCount : progress.totalCompleted}/{totalChapters}
                </span>
              </div>
              <div className="relative w-full h-1 bg-muted rounded-full overflow-hidden">
                <div 
                  className="absolute left-0 top-0 h-full bg-primary rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${user ? (completedCount / totalChapters) * 100 : overallProgress}%` }}
                />
              </div>
            </div>
            <button
              data-tour="progress-button"
              onClick={() => {
                onShowDashboard();
                setMobileOpen(false);
              }}
              className="p-1.5 rounded-md hover:bg-muted transition-colors"
              title={t('sidebar.details')}
            >
              <BarChart3 className="w-4 h-4 text-muted-foreground hover:text-primary" />
            </button>
          </div>
        </div>

        {/* Navigation - Now takes most space */}
        <nav className="flex-1 overflow-y-auto py-2 px-2 scrollbar-thin">
          {sections.map((section, sectionIndex) => (
            <div key={section.title} className={cn(sectionIndex > 0 && "mt-3")}>
              {/* Section Header */}
              <div className="px-2 py-1 mb-0.5 sticky top-0 bg-card/95 backdrop-blur-sm z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  {section.title}
                </span>
              </div>
              
              {/* Section Chapters */}
              <ul className="space-y-px">
                {section.chapters.map((chapter) => {
                  const Icon = chapter.icon;
                  const isActive = activeChapter === chapter.id;
                  const chapterProgress = getChapterProgress(chapter.id);
                  const chapterNumber = getChapterNumber(chapter.id);
                  const globalIndex = allChapterIds.indexOf(chapter.id);
                  
                  // Check if chapter is accessible (for logged in users)
                  const isAccessible = isChapterAccessible(chapter.id, globalIndex, chapter.isIntro);
                  const isProgressLocked = user && !isAccessible;
                  
                  // Check if chapter is premium locked
                  const isPremium = isPremiumLocked(chapter.id);
                  const minPlan = getChapterMinPlan(chapter.id);
                  const isLocked = isProgressLocked || isPremium;
                  
                  // Get status from DB for logged in users
                  const dbStatus = user ? getChapterStatus(chapter.id) : null;
                  const isCompleted = user ? dbStatus === 'completed' : chapterProgress?.completed;
                  const bestScore = user ? getBestScore(chapter.id) : chapterProgress?.quizScore;
                  const hasQuizScore = bestScore !== undefined && bestScore > 0;
                  
                  const button = (
                    <button
                      onClick={() => {
                        if (!isLocked) {
                          onChapterChange(chapter.id);
                          setMobileOpen(false);
                        }
                      }}
                      disabled={isLocked}
                      className={cn(
                        "w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-left transition-all duration-150",
                        "hover:bg-muted/80",
                        isActive && "bg-primary/10 text-primary border-l-2 border-primary -ml-px pl-[7px]",
                        isLocked && "opacity-50 cursor-not-allowed",
                        isPremium && "border-l-2 border-amber-400/50 -ml-px pl-[7px]"
                      )}
                    >
                      <div className="relative flex-shrink-0">
                        {isPremium ? (
                          <Crown className="w-3.5 h-3.5 text-amber-500" />
                        ) : isProgressLocked ? (
                          <Lock className="w-3.5 h-3.5 text-muted-foreground" />
                        ) : (
                          <Icon className={cn(
                            "w-3.5 h-3.5 transition-colors",
                            isActive ? "text-primary" : "text-muted-foreground"
                          )} />
                        )}
                        {isCompleted && !isLocked && (
                          <CheckCircle2 className="w-2 h-2 text-success absolute -top-0.5 -right-0.5" />
                        )}
                      </div>
                      <span className={cn(
                        "flex-1 truncate text-[12px] leading-tight",
                        isActive ? "text-primary font-medium" : "text-foreground/80",
                        isLocked && "text-muted-foreground"
                      )}>
                        <span className="text-muted-foreground mr-1">{chapterNumber}.</span>
                        {t(chapter.labelKey)}
                      </span>
                      {/* Status badges - smaller */}
                      {isPremium && minPlan ? (
                        <span className="text-[8px] px-1 py-0.5 rounded font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                          PRO
                        </span>
                      ) : hasQuizScore && !isLocked ? (
                        <span className={cn(
                          "text-[9px] px-1 py-0.5 rounded font-bold",
                          bestScore >= 9
                            ? "bg-success/15 text-success"
                            : bestScore >= 7
                              ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                              : "bg-destructive/15 text-destructive"
                        )}>
                          {bestScore}/10
                        </span>
                      ) : null}
                    </button>
                  );
                  
                  return (
                    <li key={chapter.id}>
                      {isLocked ? (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            {button}
                          </TooltipTrigger>
                          <TooltipContent side="right">
                            <p className="text-xs">{t('sidebar.locked') || 'Completează capitolul anterior'}</p>
                          </TooltipContent>
                        </Tooltip>
                      ) : (
                        button
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Footer - Compact with gamification & actions */}
        <div className="border-t border-border">
          {/* Gamification Stats - Compact row */}
          {user && gamification && (
            <div className="px-3 py-2 flex items-center gap-2 bg-gradient-to-r from-violet-500/5 to-purple-500/5">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 text-white font-bold text-[10px]">
                {userLevel}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-medium text-foreground">{gamification.total_xp} XP</div>
                <Progress value={(gamification.total_xp % 100)} className="h-1" />
              </div>
              {gamification.streak_days > 0 && (
                <div className="flex items-center gap-0.5 text-orange-500">
                  <Star className="w-3 h-3 fill-current" />
                  <span className="text-[10px] font-bold">{gamification.streak_days}</span>
                </div>
              )}
              <div className="flex items-center gap-0.5 text-amber-500">
                <Trophy className="w-3 h-3" />
                <span className="text-[10px] font-medium">{gamification.simulations_completed}</span>
              </div>
            </div>
          )}
          
          {/* Action buttons row */}
          <div className="px-3 py-2 flex items-center gap-2">
            {onShowSimulations && (
              <button
                data-tour="simulation-button"
                onClick={() => {
                  onShowSimulations();
                  setMobileOpen(false);
                }}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-gradient-to-r from-violet-600/20 to-purple-600/20 border border-violet-500/30 hover:border-violet-500/50 transition-all text-xs font-medium"
              >
                <Gamepad2 className="w-3.5 h-3.5 text-violet-500" />
                <span>{t('sidebar.simulations') || 'Simulări'}</span>
              </button>
            )}
            <CompactDailyTracker />
          </div>
        </div>
      </aside>
    </>
  );
}