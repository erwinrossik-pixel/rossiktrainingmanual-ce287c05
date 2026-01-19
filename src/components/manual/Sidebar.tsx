import { 
  BookOpen, Users, Truck, Package, Shield, Calculator, 
  Building2, Route, Clock, Laptop, GraduationCap, AlertTriangle, 
  ClipboardList, Target, Menu, X, Phone, MessageSquare, Scale,
  FileText, Flame, Book, Lightbulb, CheckCircle2, BarChart3, Award, Lock,
  Brain, Leaf, BadgeCheck, Cpu, Globe, Zap, Gem, Train, Network, TrendingUp, Crown,
  Gamepad2, Trophy, Star, Calendar
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
import { useAppMetadata } from "@/hooks/useAppMetadata";
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
  const { publishDate, version } = useAppMetadata();

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
              width={255}
              height={51}
              className="w-full h-auto object-contain rounded-xl"
              loading="eager"
              decoding="async"
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

        {/* Daily Tracker */}
        <div className="px-4 py-3 border-b border-border">
          <CompactDailyTracker />
        </div>

        {/* Progress Overview */}
        <div className="px-5 py-4 border-b border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-muted-foreground">{t('sidebar.progress')}</span>
            <span className="text-xs font-bold text-primary">
              {user ? Math.round((completedCount / totalChapters) * 100) : overallProgress}%
            </span>
          </div>
          <div className="relative w-full h-1.5 bg-muted rounded-full overflow-hidden">
            <div 
              className="absolute left-0 top-0 h-full bg-primary rounded-full transition-all duration-500 ease-out"
              style={{ width: `${user ? (completedCount / totalChapters) * 100 : overallProgress}%` }}
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-muted-foreground">
              {user ? completedCount : progress.totalCompleted} / {totalChapters} {t('sidebar.chapters')}
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

        {/* Gamification Stats */}
        {user && gamification && (
          <div className="px-4 py-3 border-b border-border">
            <div className="flex items-center gap-3 p-2 rounded-lg bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 text-white font-bold text-sm">
                {userLevel}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-foreground">{gamification.total_xp} XP</span>
                  <div className="flex items-center gap-1">
                    <Trophy className="w-3 h-3 text-amber-500" />
                    <span className="text-xs text-muted-foreground">{gamification.simulations_completed}</span>
                  </div>
                </div>
                <Progress value={(gamification.total_xp % 100)} className="h-1.5" />
              </div>
              {gamification.streak_days > 0 && (
                <div className="flex items-center gap-1 text-orange-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-xs font-bold">{gamification.streak_days}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Simulations Button */}
        {onShowSimulations && (
          <div className="px-4 py-3 border-b border-border">
            <button
              onClick={() => {
                onShowSimulations();
                setMobileOpen(false);
              }}
              className="w-full flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-violet-600/20 to-purple-600/20 border border-violet-500/30 hover:border-violet-500/50 hover:from-violet-600/30 hover:to-purple-600/30 transition-all group"
            >
              <div className="p-2 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600">
                <Gamepad2 className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 text-left">
                <span className="text-sm font-medium text-foreground group-hover:text-violet-400 transition-colors">
                  {t('sidebar.simulations') || 'Simulări Operaționale'}
                </span>
                <p className="text-[10px] text-muted-foreground">
                  {t('sidebar.simulationsDesc') || 'Învață prin practică'}
                </p>
              </div>
              <Zap className="w-4 h-4 text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        )}

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
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {section.title}
                </span>
              </div>
              
              {/* Section Chapters */}
              <ul className="space-y-0.5">
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
                        "nav-item w-full text-left group",
                        isActive && "nav-item-active",
                        isLocked && "opacity-50 cursor-not-allowed",
                        isPremium && "border-l-2 border-amber-400/50"
                      )}
                    >
                      <div className="relative flex-shrink-0">
                        {isPremium ? (
                          <Crown className="w-4 h-4 text-amber-500" />
                        ) : isProgressLocked ? (
                          <Lock className="w-4 h-4 text-muted-foreground" />
                        ) : (
                          <Icon className={cn(
                            "w-4 h-4 transition-colors",
                            isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                          )} />
                        )}
                        {isCompleted && !isLocked && (
                          <CheckCircle2 className="w-2.5 h-2.5 text-success absolute -top-0.5 -right-1" />
                        )}
                      </div>
                      <span className={cn(
                        "flex-1 truncate text-[13px]",
                        isActive ? "text-primary" : "text-foreground/80 group-hover:text-foreground",
                        isLocked && "text-muted-foreground"
                      )}>
                        <span className="font-medium text-muted-foreground mr-1.5">{chapterNumber}.</span>
                        {t(chapter.labelKey)}
                      </span>
                      {/* Show premium badge for premium chapters */}
                      {isPremium && minPlan ? (
                        <span className="text-[9px] px-1.5 py-0.5 rounded font-semibold bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 dark:from-amber-900/30 dark:to-orange-900/30 dark:text-amber-400 whitespace-nowrap border border-amber-200 dark:border-amber-800">
                          {minPlan.charAt(0).toUpperCase() + minPlan.slice(1)}
                        </span>
                      ) : chapter.isIntro ? (
                        !isCompleted && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded font-semibold bg-blue-600/15 text-blue-700 dark:text-blue-300 whitespace-nowrap">
                            Intro
                          </span>
                        )
                      ) : hasQuizScore && !isLocked ? (
                        <span className={cn(
                          "text-[10px] px-1.5 py-0.5 rounded font-semibold",
                          bestScore >= 9
                            ? "bg-success/15 text-success"
                            : bestScore >= 7
                              ? "bg-amber-600/15 text-amber-700 dark:text-amber-300"
                              : "bg-destructive/15 text-destructive"
                        )}>
                          {bestScore}/10
                        </span>
                      ) : !isLocked && !isCompleted && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded font-semibold bg-amber-600/15 text-amber-700 dark:text-amber-300 whitespace-nowrap">
                          Quiz
                        </span>
                      )}
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
                            <p>{t('sidebar.locked') || 'Completează capitolul anterior cu scor ≥9/10'}</p>
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

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <span className="text-[11px] font-medium">
              {publishDate ? `Publicat: ${publishDate}` : t('sidebar.version')}
            </span>
            <span className="w-1 h-1 rounded-full bg-current" aria-hidden="true" />
            <span className="text-[11px] font-medium">v{version}</span>
          </div>
        </div>
      </aside>
    </>
  );
}