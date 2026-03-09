import { cn } from '@/lib/utils';

interface TierBadgeProps {
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  variant?: 'default' | 'light';
  className?: string;
}


export function TierBadge({ tier, variant = 'default', className }: TierBadgeProps) {
  return (
    <div
      className="w-[84px] h-[24px] flex items-center justify-center gap-1.5 rounded-full bg-[#8C4F34] border border-[#FDDDD0] text-[14px] text-[#FFECE5]/90 font-bold"

    >
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <circle cx="12" cy="12" r="10" fillOpacity="0.2" />
        <path d="M8 12L12 8L16 12L12 16Z" />
      </svg>
      {tier}
    </div>
  );
}
