'use client';

import { TierBadge } from '@/components/shared/tier-badge';
import { cn } from '@/lib/utils';

export function ProfilePointsCard({
  points,
  expiryDate,
  tier,
  onExchange,
  className,
}: ProfilePointsCardProps) {
  return (
    <div
      onClick={onExchange}
      role={onExchange ? 'button' : undefined}
      tabIndex={onExchange ? 0 : undefined}
      onKeyDown={(e) => {
        if (onExchange && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onExchange();
        }
      }}
      className={cn(
        'relative overflow-hidden bg-gradient-to-r from-[#FFE6DC] to-[#C78C72] rounded-[12px] p-4 px-4 md:px-3 text-white',
        'shadow-lg',
        onExchange && 'cursor-pointer hover:shadow-xl transition-shadow',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[url('/bg-point.jpg')] bg-cover bg-center opacity-30" />
      <div className="relative z-10 flex items-start justify-between mb-3">
        <div>
          <p className="text-[20px] text-black/60 font-bold">
            {points.toLocaleString()} <span className="text-[20px] font-bold">คะแนน</span>
          </p>
          <p className="text-black/60 text-[9px]">
            ใช้คะแนนได้ถึง: {expiryDate}
          </p>
        </div>
        <TierBadge tier={tier} variant="default" className="bg-white/20 text-white" />
      </div>
      <div className="relative z-10">
        <button
          className="w-full h-[28px] bg-white text-[var(--yuanta-primary-accent)] font-semibold rounded-md hover:bg-white/90 border border-black/10 transition-colors text-[14px]"
        >
          แลกคะแนน
        </button>
      </div>
    </div>
  );
}
