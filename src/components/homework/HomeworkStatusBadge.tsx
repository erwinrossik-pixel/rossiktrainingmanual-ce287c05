import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useHomeworkT } from "@/lib/homework/i18n";
import type { HomeworkDisplayStatus } from "@/lib/homework/types";

const STYLES: Record<HomeworkDisplayStatus, string> = {
  none: "bg-muted text-muted-foreground border-border",
  draft: "bg-warning/10 text-warning border-warning/30",
  submitted: "bg-info/10 text-info border-info/30",
  graded: "bg-success/10 text-success border-success/30",
};

const ICONS: Record<HomeworkDisplayStatus, string> = { none: "○", draft: "✎", submitted: "➤", graded: "✓" };

export function HomeworkStatusBadge({ status, className }: { status: HomeworkDisplayStatus; className?: string }) {
  const { t } = useHomeworkT();
  return (
    <Badge variant="outline" className={cn("gap-1 font-medium", STYLES[status], className)}>
      <span aria-hidden="true">{ICONS[status]}</span>
      {t(`status.${status}`)}
    </Badge>
  );
}
