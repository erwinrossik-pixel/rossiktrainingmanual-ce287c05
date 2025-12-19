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
import { GlobalSearch } from "./GlobalSearch";

interface SidebarProps {
  activeChapter: string;
  onChapterChange: (chapter: string) => void;
  onShowDashboard: () => void;
}

const sections = [
  {
    title: "Fundament",
    chapters: [
      { id: "intro", label: "Introducere", icon: BookOpen },
      { id: "mindset", label: "Rol & Mentalitate", icon: Target },
      { id: "soft-skills", label: "Soft Skills", icon: Users },
      { id: "workflow", label: "Flux Operațional", icon: Route },
    ]
  },
  {
    title: "Echipamente",
    chapters: [
      { id: "vehicle", label: "Referință Vehicule", icon: Truck },
      { id: "loading", label: "Încărcare & Fixare", icon: Package },
      { id: "reefer", label: "Transport Frigorific", icon: Package },
      { id: "warehouse", label: "Depozit & Cross-Dock", icon: Package },
      { id: "adr", label: "ADR Mărfuri Periculoase", icon: Flame },
      { id: "documents", label: "Documente Transport", icon: FileText },
    ]
  },
  {
    title: "Comerț & Reglementări",
    chapters: [
      { id: "incoterms", label: "Incoterms & Comerț", icon: Book },
      { id: "compliance", label: "Ore de Condus", icon: Clock },
      { id: "driving-time", label: "Schimb vs Condus", icon: Shield },
      { id: "customs", label: "Vamă & Frontiere", icon: Shield },
      { id: "europe-zones", label: "Zone Europene", icon: Route },
      { id: "environment", label: "Mediu", icon: Target },
      { id: "supply-chain", label: "Lanț Aprovizionare", icon: Route },
    ]
  },
  {
    title: "Abilități Comerciale",
    chapters: [
      { id: "pricing", label: "Prețuri & Taxe", icon: Calculator },
      { id: "commercial", label: "Abilități Comerciale", icon: Target },
      { id: "negotiation", label: "Negociere", icon: Users },
      { id: "clients", label: "Găsirea Clienților", icon: Building2 },
      { id: "carrier-management", label: "Gestiune Transportatori", icon: Users },
      { id: "exchanges", label: "Burse de Marfă", icon: Users },
      { id: "communication", label: "Comunicare", icon: MessageSquare },
      { id: "kpi", label: "KPI & Performanță", icon: Target },
    ]
  },
  {
    title: "Sisteme & Tehnologie",
    chapters: [
      { id: "translogica", label: "Translogica TMS", icon: Laptop },
      { id: "fleet", label: "Flotă & GPS", icon: Truck },
      { id: "technology", label: "Tehnologie & Digital", icon: Laptop },
    ]
  },
  {
    title: "Risc & Finanțe",
    chapters: [
      { id: "risk-management", label: "Managementul Riscului", icon: Shield },
      { id: "insurance", label: "Asigurări Transport", icon: Shield },
      { id: "claims", label: "Daune & Dispute", icon: Scale },
      { id: "payment", label: "Plăți & Facturare", icon: Calculator },
      { id: "accounting", label: "Contabilitate", icon: Calculator },
    ]
  },
  {
    title: "Aplicare Practică",
    chapters: [
      { id: "emergency", label: "Proceduri Urgență", icon: Phone },
      { id: "case-studies", label: "Studii de Caz", icon: Lightbulb },
      { id: "training", label: "Exerciții Training", icon: GraduationCap },
      { id: "red-flags", label: "Red Flags & Sfaturi", icon: AlertTriangle },
      { id: "glossary", label: "Glosar", icon: Book },
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
        <div className="p-6 border-b border-border">
          <div className="flex flex-col items-center text-center gap-4">
            <img 
              src={rossikLogo} 
              alt="Rossik Transport & Logistic" 
              className="h-28 w-28 object-contain rounded-2xl shadow-sm"
            />
            <p className="text-sm font-medium text-muted-foreground">
              Manual Freight Forwarding
            </p>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="px-5 py-4 border-b border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-muted-foreground">Progres General</span>
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
              {progress.totalCompleted} / 40 capitole
            </span>
            <button
              onClick={() => {
                onShowDashboard();
                setMobileOpen(false);
              }}
              className="text-xs text-primary hover:text-primary/80 flex items-center gap-1 font-medium transition-colors"
            >
              <BarChart3 className="w-3 h-3" />
              Detalii
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
                          {chapter.label}
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
            <span className="text-[10px] font-medium">Versiunea 2025</span>
            <span className="w-1 h-1 rounded-full bg-current" />
            <span className="text-[10px] font-medium">Ediție Completă</span>
          </div>
        </div>
      </aside>
    </>
  );
}