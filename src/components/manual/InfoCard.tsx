import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: "default" | "highlight" | "warning" | "success" | "info";
  className?: string;
}

export function InfoCard({ title, children, icon: Icon, variant = "default", className }: InfoCardProps) {
  const variants = {
    default: "bg-card border-border/50",
    highlight: "bg-gradient-to-br from-accent to-accent/50 border-primary/20",
    warning: "bg-gradient-to-br from-warning/5 to-warning/10 border-warning/20",
    success: "bg-gradient-to-br from-success/5 to-success/10 border-success/20",
    info: "bg-gradient-to-br from-info/5 to-info/10 border-info/20",
  };

  const iconColors = {
    default: "text-primary",
    highlight: "text-primary",
    warning: "text-warning",
    success: "text-success",
    info: "text-info",
  };

  const iconBg = {
    default: "bg-primary/10",
    highlight: "bg-primary/15",
    warning: "bg-warning/15",
    success: "bg-success/15",
    info: "bg-info/15",
  };

  return (
    <div className={cn(
      "rounded-2xl p-6 border shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5",
      variants[variant],
      className
    )}>
      <div className="flex items-start gap-4">
        {Icon && (
          <div className={cn(
            "w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm",
            iconBg[variant]
          )}>
            <Icon className={cn("w-5 h-5", iconColors[variant])} />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground mb-3 font-display text-lg tracking-tight">{title}</h3>
          <div className="text-sm text-muted-foreground space-y-2 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
