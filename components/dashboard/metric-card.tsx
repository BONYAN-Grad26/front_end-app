import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string | number;
  unit?: string;
  icon: LucideIcon;
  trend?: { value: number; direction: 'up' | 'down' };
  variant?: 'health' | 'nutrition' | 'workout' | 'default';
  progress?: number;
}

const variantStyles = {
  health: 'bg-gradient-health',
  nutrition: 'bg-gradient-nutrition',
  workout: 'bg-gradient-workout',
  default: 'bg-gradient-to-br from-primary to-secondary',
};

export function MetricCard({
  label,
  value,
  unit,
  icon: Icon,
  trend,
  variant = 'default',
  progress,
}: MetricCardProps) {
  return (
    <div className="glass rounded-2xl p-6 space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-foreground/60 mb-1">{label}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-foreground">{value}</span>
            {unit && <span className="text-sm text-foreground/60">{unit}</span>}
          </div>
        </div>
        <div className={`${variantStyles[variant]} rounded-lg p-3 flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Progress Bar */}
      {progress !== undefined && (
        <div className="space-y-2">
          <div className="w-full h-2 bg-border rounded-full overflow-hidden">
            <div
              className={`h-full ${variantStyles[variant]} transition-all duration-500`}
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <p className="text-xs text-foreground/60">{progress}% of daily goal</p>
        </div>
      )}

      {/* Trend */}
      {trend && (
        <div className="flex items-center gap-2 text-sm">
          <span className={trend.direction === 'up' ? 'text-green-600' : 'text-red-600'}>
            {trend.direction === 'up' ? '↑' : '↓'} {Math.abs(trend.value)}%
          </span>
          <span className="text-foreground/60">from yesterday</span>
        </div>
      )}
    </div>
  );
}
