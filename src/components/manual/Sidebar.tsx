import { 
  BookOpen, Users, Truck, Package, Shield, Calculator, 
  Building2, Route, Clock, Laptop, GraduationCap, AlertTriangle, 
  ClipboardList, Target, Menu, X
} from "lucide-react";
import rossikLogo from "@/assets/rossik-logo.jpg";
import { cn } from "@/lib/utils";
import { useState } from "react";

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
  { id: "compliance", label: "Drivers' Hours", icon: Clock },
  { id: "driving-time", label: "Shift vs Driving Time", icon: Shield },
  { id: "pricing", label: "Pricing & Tolls", icon: Calculator },
  { id: "clients", label: "Finding Clients", icon: Building2 },
  { id: "exchanges", label: "Freight Exchanges", icon: Users },
  { id: "translogica", label: "Translogica TMS", icon: Laptop },
  { id: "training", label: "Training Exercises", icon: GraduationCap },
  { id: "red-flags", label: "Red Flags & Tips", icon: AlertTriangle },
  { id: "checklists", label: "Checklists", icon: ClipboardList },
];

export function Sidebar({ activeChapter, onChapterChange }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

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

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <ul className="space-y-1">
            {chapters.map((chapter) => {
              const Icon = chapter.icon;
              const isActive = activeChapter === chapter.id;
              return (
                <li key={chapter.id}>
                  <button
                    onClick={() => {
                      onChapterChange(chapter.id);
                      setMobileOpen(false);
                    }}
                    className={cn(
                      "nav-item w-full text-left",
                      isActive && "nav-item-active"
                    )}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span>{chapter.label}</span>
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
