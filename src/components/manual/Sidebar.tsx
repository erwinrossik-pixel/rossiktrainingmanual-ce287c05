import { 
  BookOpen, Users, Truck, Package, Shield, Calculator, 
  Building2, Route, Clock, Laptop, GraduationCap, AlertTriangle, 
  ClipboardList, Target, Menu, X, Phone, MessageSquare, Scale,
  FileText, Flame, Book, Lightbulb, CheckCircle2, BarChart3, Sparkles, Award
} from "lucide-react";
import rossikLogo from "@/assets/rossik-logo.jpg";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useProgressContext } from "@/contexts/ProgressContext";
import { GlobalSearch } from "./GlobalSearch";

interface SidebarProps {
  activeChapter: string;
  onChapterChange: (chapter: string) => void;
  onShowDashboard: () => void;
}

const sections = [
  {
    title: "Foundation",
    chapters: [
      { id: "intro", label: "Introduction", icon: BookOpen },
      { id: "mindset", label: "Role & Mindset", icon: Target },
      { id: "soft-skills", label: "Soft Skills", icon: Users },
      { id: "workflow", label: "Operational Workflow", icon: Route },
    ]
  },
  {
    title: "Equipment & Handling",
    chapters: [
      { id: "vehicle", label: "Vehicle Reference", icon: Truck },
      { id: "loading", label: "Loading & Securing", icon: Package },
      { id: "reefer", label: "Temperature Transport", icon: Package },
      { id: "warehouse", label: "Warehouse & Cross-Dock", icon: Package },
      { id: "adr", label: "ADR Dangerous Goods", icon: Flame },
      { id: "documents", label: "Transport Documents", icon: FileText },
    ]
  },
  {
    title: "Trade & Regulations",
    chapters: [
      { id: "incoterms", label: "Incoterms & Trade", icon: Book },
      { id: "compliance", label: "Drivers' Hours", icon: Clock },
      { id: "driving-time", label: "Shift vs Driving Time", icon: Shield },
      { id: "customs", label: "Customs & Borders", icon: Shield },
      { id: "europe-zones", label: "European Zones", icon: Route },
      { id: "environment", label: "Environmental", icon: Target },
      { id: "supply-chain", label: "Supply Chain", icon: Route },
    ]
  },
  {
    title: "Commercial Skills",
    chapters: [
      { id: "pricing", label: "Pricing & Tolls", icon: Calculator },
      { id: "commercial", label: "Commercial Skills", icon: Target },
      { id: "negotiation", label: "Negotiation", icon: Users },
      { id: "clients", label: "Finding Clients", icon: Building2 },
      { id: "carrier-management", label: "Carrier Management", icon: Users },
      { id: "exchanges", label: "Freight Exchanges", icon: Users },
      { id: "communication", label: "Communication", icon: MessageSquare },
      { id: "kpi", label: "KPIs & Performance", icon: Target },
    ]
  },
  {
    title: "Systems & Technology",
    chapters: [
      { id: "translogica", label: "Translogica TMS", icon: Laptop },
      { id: "fleet", label: "Fleet & GPS", icon: Truck },
      { id: "technology", label: "Technology & Digital", icon: Laptop },
    ]
  },
  {
    title: "Risk & Finance",
    chapters: [
      { id: "risk-management", label: "Risk Management", icon: Shield },
      { id: "insurance", label: "Transport Insurance", icon: Shield },
      { id: "claims", label: "Claims & Disputes", icon: Scale },
      { id: "payment", label: "Payment & Invoicing", icon: Calculator },
      { id: "accounting", label: "Accounting & Finance", icon: Calculator },
    ]
  },
  {
    title: "Practical Application",
    chapters: [
      { id: "emergency", label: "Emergency Procedures", icon: Phone },
      { id: "case-studies", label: "Case Studies", icon: Lightbulb },
      { id: "training", label: "Training Exercises", icon: GraduationCap },
      { id: "red-flags", label: "Red Flags & Tips", icon: AlertTriangle },
      { id: "glossary", label: "Glossary", icon: Book },
      { id: "checklists", label: "Checklists", icon: ClipboardList },
      { id: "licenses-oversize", label: "Licențe & Agabaritic", icon: Award },
    ]
  },
];

export function Sidebar({ activeChapter, onChapterChange, onShowDashboard }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { progress, getOverallProgress, getChapterProgress } = useProgressContext();

  const overallProgress = getOverallProgress();

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden bg-sidebar p-3 rounded-xl shadow-elevated transition-transform duration-200 hover:scale-105 active:scale-95"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? (
          <X className="w-5 h-5 text-sidebar-foreground" />
        ) : (
          <Menu className="w-5 h-5 text-sidebar-foreground" />
        )}
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 h-full w-80 bg-gradient-sidebar z-40 flex flex-col transition-transform duration-300 ease-out shadow-2xl",
        "lg:translate-x-0",
        mobileOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Logo Header */}
        <div className="p-6 border-b border-sidebar-border/50">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src={rossikLogo} 
                alt="Rossik Transport & Logistic" 
                className="h-12 w-12 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-sidebar" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-sidebar-foreground tracking-tight font-sans">
                Rossik Training
              </h1>
              <p className="text-xs text-sidebar-foreground/50 font-medium">
                Freight Forwarding Manual
              </p>
            </div>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="px-6 py-5 border-b border-sidebar-border/50">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-sidebar-foreground">Progress</span>
            </div>
            <span className="text-sm font-bold text-primary">{overallProgress}%</span>
          </div>
          <div className="relative w-full h-2 bg-sidebar-accent rounded-full overflow-hidden">
            <div 
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-sidebar-foreground/50">
              {progress.totalCompleted} of {progress.totalChapters} chapters
            </span>
            <button
              onClick={() => {
                onShowDashboard();
                setMobileOpen(false);
              }}
              className="text-xs text-primary hover:text-primary/80 flex items-center gap-1.5 font-semibold transition-colors"
              title="View detailed progress"
            >
              <BarChart3 className="w-3.5 h-3.5" />
              View Details
            </button>
          </div>
        </div>

        {/* Global Search */}
        <div className="px-4 py-4 border-b border-sidebar-border/50">
          <GlobalSearch onNavigate={(chapterId) => {
            onChapterChange(chapterId);
            setMobileOpen(false);
          }} />
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 scrollbar-thin">
          {sections.map((section, sectionIndex) => (
            <div key={section.title} className={cn(sectionIndex > 0 && "mt-6")}>
              {/* Section Header */}
              <div className="flex items-center gap-3 px-3 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-sidebar-foreground/40">
                  {section.title}
                </span>
                <div className="flex-1 h-px bg-sidebar-border/50" />
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
                            isActive ? "text-primary" : "text-sidebar-foreground/50 group-hover:text-sidebar-foreground/70"
                          )} />
                          {isCompleted && (
                            <CheckCircle2 className="w-3 h-3 text-success absolute -top-1 -right-1.5" />
                          )}
                        </div>
                        <span className={cn(
                          "flex-1 truncate transition-colors",
                          isActive ? "text-sidebar-foreground" : "text-sidebar-foreground/70 group-hover:text-sidebar-foreground"
                        )}>
                          {chapter.label}
                        </span>
                        {hasQuizScore && (
                          <span className={cn(
                            "text-[10px] px-2 py-0.5 rounded-full font-bold",
                            chapterProgress.quizScore! >= (chapterProgress.quizTotal! * 0.7)
                              ? "bg-success/20 text-success"
                              : "bg-warning/20 text-warning"
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
        <div className="p-4 border-t border-sidebar-border/50">
          <div className="flex items-center justify-center gap-2 text-sidebar-foreground/30">
            <span className="text-xs font-medium">Version 2025</span>
            <span className="w-1 h-1 rounded-full bg-sidebar-foreground/30" />
            <span className="text-xs font-medium">Complete Edition</span>
          </div>
        </div>
      </aside>
    </>
  );
}
