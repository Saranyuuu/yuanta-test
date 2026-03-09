import Image from 'next/image';

export function TierBadge({ tier }: TierBadgeProps) {
  return (
    <div
      className="w-auto h-[24px] flex items-center justify-center gap-1.5 pl-0.5 pr-2 rounded-full bg-[#8C4F34] border border-[#FDDDD0] text-[14px] text-[#FFECE5]/90 font-bold"
    >
      <Image
        src="/Badge/tier-badge.png"
        alt={`${tier} tier`}
        width={16}
        height={16}
        className="w-[20px] h-[20px]"
      />
      {tier}
    </div>
  );
}
