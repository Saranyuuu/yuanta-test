import Image from 'next/image';
import { cn } from '@/lib/utils';

export function PointsDisplay({
  points,
  showIcon = true,
  className,
}: PointsDisplayProps) {

  return (
    <div className={cn('flex items-center justify-center gap-2', className)}>
      {showIcon && (
        <div className="text-[var(--yuanta-primary)]">
          <Image
            src="/Badge/yuanta-icon.png"
            alt="Yuanta icon"
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
          />
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
