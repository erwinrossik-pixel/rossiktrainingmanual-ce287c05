import { Badge } from '@/components/ui/badge';
import { Shield, BookOpen, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ContentLevel = 'informational' | 'operational' | 'critical';

interface ContentLevelBadgeProps {
  level: ContentLevel;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const levelConfig = {
  informational: {
    icon: BookOpen,
    label: 'Informațional',
    labelEn: 'Informational',
    description: 'Conținut educațional general',
    color: 'bg-blue-100 text-blue-800 border-blue-300',
    iconColor: 'text-blue-600',
  },
  operational: {
    icon: Shield,
    label: 'Operațional',
    labelEn: 'Operational',
    description: 'Proceduri și fluxuri de lucru',
    color: 'bg-amber-100 text-amber-800 border-amber-300',
    iconColor: 'text-amber-600',
  },
  critical: {
    icon: AlertTriangle,
    label: 'Critic / Compliance',
    labelEn: 'Critical / Compliance',
    description: 'Legislație și reglementări oficiale',
    color: 'bg-red-100 text-red-800 border-red-300',
    iconColor: 'text-red-600',
  },
};

export function ContentLevelBadge({ 
  level, 
  showLabel = true, 
  size = 'md',
  className 
}: ContentLevelBadgeProps) {
  const config = levelConfig[level];
  const Icon = config.icon;

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5',
  };

  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  return (
    <Badge 
      variant="outline"
      className={cn(
        'font-medium border gap-1.5 inline-flex items-center',
        config.color,
        sizeClasses[size],
        className
      )}
      title={config.description}
    >
      <Icon className={cn(iconSizes[size], config.iconColor)} />
      {showLabel && <span>Level {level === 'informational' ? '1' : level === 'operational' ? '2' : '3'}: {config.label}</span>}
    </Badge>
  );
}

export function getContentLevelNumber(level: ContentLevel): number {
  switch (level) {
    case 'informational': return 1;
    case 'operational': return 2;
    case 'critical': return 3;
    default: return 1;
  }
}
