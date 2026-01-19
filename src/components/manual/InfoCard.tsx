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
    default: "bg-card border-border",
    highlight: "bg-accent border-primary/10",
    warning: "bg-warning/5 border-warning/20",
    success: "bg-success/5 border-success/20",
    info: "bg-info/5 border-info/20",
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
    highlight: "bg-primary/10",
    warning: "bg-warning/10",
    success: "bg-success/10",
    info: "bg-info/10",
  };

  return (
    <div className={cn(
      "rounded-xl p-4 sm:p-5 border transition-all duration-200 hover:shadow-sm h-full",
      variants[variant],
      className
    )}>
      <div className="flex items-start gap-3">
        {Icon && (
          <div className={cn(
            "w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center flex-shrink-0",
            iconBg[variant]
          )}>
            <Icon className={cn("w-4 h-4", iconColors[variant])} />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground mb-1.5 sm:mb-2 text-sm sm:text-base leading-tight">{title}</h3>
          <div className="text-xs sm:text-sm text-muted-foreground space-y-1.5 sm:space-y-2 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}