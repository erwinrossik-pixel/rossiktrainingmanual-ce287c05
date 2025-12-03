import { 
  BookOpen, Users, Truck, Package, Shield, Calculator, 
  Building2, Route, Clock, Laptop, GraduationCap, AlertTriangle, 
  ClipboardList, Target, Menu, X, Phone, MessageSquare, Scale,
  FileText, Flame, Book, Lightbulb, CheckCircle2, RotateCcw
} from "lucide-react";
import rossikLogo from "@/assets/rossik-logo.jpg";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useProgressContext } from "@/contexts/ProgressContext";
import { GlobalSearch } from "./GlobalSearch";

interface SidebarProps {
  activeChapter: string;
  onChapterChange: (chapter: string) => void;
}

const chapters = [
  { id: "intro", label: "Introduction", icon: BookOpen },
  { id: "mindset", label: "Role & Mindset", icon: Target },
  { id: "workflow", label: "Operational Workflow", icon: Route },
  { id: "vehicle", label: "Vehicle Reference", icon: Truck },
  { id: "loading", label: "Loading & Securing", icon: Package },
  { id: "reefer", label: "Temperature Transport", icon: Package },
  { id: "compliance", label: "Drivers' Hours", icon: Clock },
  { id: "driving-time", label: "Shift vs Driving Time", icon: Shield },
  { id: "pricing", label: "Pricing & Tolls", icon: Calculator },
  { id: "payment", label: "Payment & Invoicing", icon: Calculator },
  { id: "clients", label: "Finding Clients", icon: Building2 },
  { id: "exchanges", label: "Freight Exchanges", icon: Users },
  { id: "translogica", label: "Translogica TMS", icon: Laptop },
  { id: "fleet", label: "Fleet & GPS", icon: Truck },
  { id: "customs", label: "Customs & Borders", icon: Shield },
  { id: "emergency", label: "Emergency Procedures", icon: Phone },
  { id: "communication", label: "Client Communication", icon: MessageSquare },
  { id: "claims", label: "Claims & Disputes", icon: Scale },
  { id: "insurance", label: "Transport Insurance", icon: Shield },
  { id: "adr", label: "ADR Dangerous Goods", icon: Flame },
  { id: "documents", label: "Transport Documents", icon: FileText },
  { id: "environment", label: "Environmental Compliance", icon: Target },
  { id: "case-studies", label: "Case Studies", icon: Lightbulb },
  { id: "glossary", label: "Glossary", icon: Book },
  { id: "training", label: "Training Exercises", icon: GraduationCap },
  { id: "red-flags", label: "Red Flags & Tips", icon: AlertTriangle },
  { id: "checklists", label: "Checklists", icon: ClipboardList },
];

export function Sidebar({ activeChapter, onChapterChange }: SidebarProps) {
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
            {progress.totalCompleted > 0 && (
              <button
                onClick={resetProgress}
                className="text-xs text-sidebar-foreground/50 hover:text-sidebar-foreground flex items-center gap-1"
                title="Reset progress"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            )}
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
          <ul className="space-y-1">
            {chapters.map((chapter) => {
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
