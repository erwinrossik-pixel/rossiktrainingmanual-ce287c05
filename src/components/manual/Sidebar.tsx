import { 
  BookOpen, Users, Truck, Package, Shield, Calculator, 
  Building2, Route, Clock, Laptop, GraduationCap, AlertTriangle, 
  ClipboardList, Target, Menu, X, Phone, MessageSquare, Scale,
  FileText, Flame, Book, Lightbulb, CheckCircle2, RotateCcw, BarChart3
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
      { id: "intro", label: "1. Introduction", icon: BookOpen },
      { id: "mindset", label: "2. Role & Mindset", icon: Target },
      { id: "soft-skills", label: "3. Soft Skills", icon: Users },
      { id: "workflow", label: "4. Operational Workflow", icon: Route },
    ]
  },
  {
    title: "Equipment & Handling",
    chapters: [
      { id: "vehicle", label: "5. Vehicle Reference", icon: Truck },
      { id: "loading", label: "6. Loading & Securing", icon: Package },
      { id: "reefer", label: "7. Temperature Transport", icon: Package },
      { id: "warehouse", label: "8. Warehouse & Cross-Dock", icon: Package },
      { id: "adr", label: "9. ADR Dangerous Goods", icon: Flame },
      { id: "documents", label: "10. Transport Documents", icon: FileText },
    ]
  },
  {
    title: "Trade & Regulations",
    chapters: [
      { id: "incoterms", label: "11. Incoterms & Trade", icon: Book },
      { id: "compliance", label: "12. Drivers' Hours", icon: Clock },
      { id: "driving-time", label: "13. Shift vs Driving Time", icon: Shield },
      { id: "customs", label: "14. Customs & Borders", icon: Shield },
      { id: "europe-zones", label: "15. European Zones", icon: Route },
      { id: "environment", label: "16. Environmental", icon: Target },
      { id: "supply-chain", label: "17. Supply Chain", icon: Route },
    ]
  },
  {
    title: "Commercial Skills",
    chapters: [
      { id: "pricing", label: "18. Pricing & Tolls", icon: Calculator },
      { id: "commercial", label: "19. Commercial Skills", icon: Target },
      { id: "negotiation", label: "20. Negotiation", icon: Users },
      { id: "clients", label: "21. Finding Clients", icon: Building2 },
      { id: "carrier-management", label: "22. Carrier Management", icon: Users },
      { id: "exchanges", label: "23. Freight Exchanges", icon: Users },
      { id: "communication", label: "24. Communication", icon: MessageSquare },
      { id: "kpi", label: "25. KPIs & Performance", icon: Target },
    ]
  },
  {
    title: "Systems & Technology",
    chapters: [
      { id: "translogica", label: "26. Translogica TMS", icon: Laptop },
      { id: "fleet", label: "27. Fleet & GPS", icon: Truck },
      { id: "technology", label: "28. Technology & Digital", icon: Laptop },
    ]
  },
  {
    title: "Risk & Finance",
    chapters: [
      { id: "risk-management", label: "29. Risk Management", icon: Shield },
      { id: "insurance", label: "30. Transport Insurance", icon: Shield },
      { id: "claims", label: "31. Claims & Disputes", icon: Scale },
      { id: "payment", label: "32. Payment & Invoicing", icon: Calculator },
      { id: "accounting", label: "33. Accounting & Finance", icon: Calculator },
    ]
  },
  {
    title: "Practical Application",
    chapters: [
      { id: "emergency", label: "34. Emergency Procedures", icon: Phone },
      { id: "case-studies", label: "35. Case Studies", icon: Lightbulb },
      { id: "training", label: "36. Training Exercises", icon: GraduationCap },
      { id: "red-flags", label: "37. Red Flags & Tips", icon: AlertTriangle },
      { id: "glossary", label: "38. Glossary", icon: Book },
      { id: "checklists", label: "39. Checklists", icon: ClipboardList },
    ]
  },
];

export function Sidebar({ activeChapter, onChapterChange, onShowDashboard }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { progress, getOverallProgress, resetProgress, getChapterProgress } = useProgressContext();

  const overallProgress = getOverallProgress();

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden bg-sidebar p-2 rounded-lg shadow-elevated"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? (
          <X className="w-6 h-6 text-sidebar-foreground" />
        ) : (
          <Menu className="w-6 h-6 text-sidebar-foreground" />
        )}
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-foreground/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 h-full w-72 bg-sidebar z-40 flex flex-col transition-transform duration-300",
        "lg:translate-x-0",
        mobileOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Logo */}
        <div className="p-6 border-b border-sidebar-border bg-white rounded-b-lg">
          <img 
            src={rossikLogo} 
            alt="Rossik Transport & Logistic" 
            className="h-14 object-contain"
          />
          <p className="text-sidebar-background/70 text-xs mt-2 font-sans font-medium">
            Freight Forwarding Training Manual
          </p>
        </div>

        {/* Progress Overview */}
        <div className="px-4 py-3 border-b border-sidebar-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-sidebar-foreground/70">Progress</span>
            <span className="text-xs font-bold text-primary">{overallProgress}%</span>
          </div>
          <div className="w-full bg-sidebar-border rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-sidebar-foreground/50">
              {progress.totalCompleted}/{progress.totalChapters} chapters
            </span>
            <button
              onClick={() => {
                onShowDashboard();
                setMobileOpen(false);
              }}
              className="text-xs text-primary hover:text-primary/80 flex items-center gap-1 font-medium"
              title="View detailed progress"
            >
              <BarChart3 className="w-3 h-3" />
              Details
            </button>
          </div>
        </div>

        {/* Global Search */}
        <div className="px-3 py-3 border-b border-sidebar-border">
          <GlobalSearch onNavigate={(chapterId) => {
            onChapterChange(chapterId);
            setMobileOpen(false);
          }} />
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          {sections.map((section, sectionIndex) => (
            <div key={section.title} className={cn(sectionIndex > 0 && "mt-4")}>
              {/* Section Header */}
              <div className="flex items-center gap-2 px-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sidebar-foreground/50">
                  {section.title}
                </span>
                <div className="flex-1 h-px bg-sidebar-border" />
              </div>
              
              {/* Section Chapters */}
              <ul className="space-y-1">
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
                          "nav-item w-full text-left group relative",
                          isActive && "nav-item-active"
                        )}
                      >
                        <div className="relative">
                          <Icon className="w-4 h-4 flex-shrink-0" />
                          {isCompleted && (
                            <CheckCircle2 className="w-3 h-3 text-success absolute -top-1 -right-1" />
                          )}
                        </div>
                        <span className="flex-1">{chapter.label}</span>
                        {hasQuizScore && (
                          <span className={cn(
                            "text-xs px-1.5 py-0.5 rounded-full",
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
        <div className="p-4 border-t border-sidebar-border">
          <p className="text-sidebar-foreground/40 text-xs text-center font-sans">
            Version 2025 • Complete Edition
          </p>
        </div>
      </aside>
    </>
  );
}
