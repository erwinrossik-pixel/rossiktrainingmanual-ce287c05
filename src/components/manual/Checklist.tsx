import { Check } from "lucide-react";

interface ChecklistProps {
  items: string[];
  title?: string;
}

export function Checklist({ items, title }: ChecklistProps) {
  return (
    <div className="bg-card rounded-xl p-6 border border-border shadow-card">
      {title && (
        <h3 className="font-semibold text-foreground mb-4 font-serif">{title}</h3>
      )}
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i} className="checklist-item">
            <span className="checklist-check">
              <Check className="w-3 h-3" />
            </span>
            <span className="text-sm text-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
