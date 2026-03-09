import { cn } from '@/lib/utils';

interface PointsDisplayProps {
  points: number;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  className?: string;
}

export function PointsDisplay({
  points,
  size = 'md',
  showIcon = true,
  className,
}: PointsDisplayProps) {

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7 sm:w-8 sm:h-8',
    lg: 'w-9 h-9 sm:w-10 sm:h-10',
  };

  return (
    <div className={cn('flex items-center justify-center gap-2', className)}>
      {showIcon && (
        <div className={cn('text-[var(--yuanta-primary)]', iconSizes[size])}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <circle cx="12" cy="12" r="10" fillOpacity="0.2" />
            <path d="M8 12L12 8L16 12L12 16Z" />
          </svg>
        </div>
      )}
      <span
        className={cn(
          'font-bold text-[24px] text-[#8C4F34]',
        )}
      >
        {points.toLocaleString()}
      </span>
    </div>
  );
}
