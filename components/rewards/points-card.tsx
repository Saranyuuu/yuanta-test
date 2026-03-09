'use client';

import Image from 'next/image';
import { TierBadge } from '@/components/shared/tier-badge';
import { PointsDisplay } from '@/components/shared/points-display';
import { cn } from '@/lib/utils';
import { ExchangeCard } from './exchange-card';
import { ChevronRight, Gift, ShoppingCart } from 'lucide-react';


export function PointsCard({
  points,
  expiryDate,
  tier,
  onClick,
  className,
}: PointsCardProps) {
  return (

    <div>
      <div className="flex xl:hidden items-center justify-between mb-4 xl:mb-5 mt-10">
        <h2 className="text-[var(--text-primary)] font-bold text-[16px]">
          Yuanta Points ของคุณ
        </h2>
        <TierBadge tier={tier} />
      </div>
      <div
        className={cn(
          'bg-white rounded-2xl p-4 xl:p-6 xl:py-4 shadow-sm border border-[var(--border)]',
          className
        )}
      >
        <div className="hidden xl:flex items-center justify-between mb-4 xl:mb-5">
          <h2 className="text-[var(--text-primary)] font-bold text-[16px]">
            Yuanta Points ของคุณ
          </h2>
          <TierBadge tier={tier} />
        </div>

        {/* Points Display Card - Clickable */}
        <div
          onClick={onClick}
          className={cn(
            'bg-[#FFF3ED] rounded-xl p-4 sm:p-6',
            'transition-all duration-200',
            onClick && 'cursor-pointer hover:shadow-md hover:scale-[1.01] active:scale-[0.99]'
          )}
        >
          <p className="text-center text-[#101828] text-[12px] mb-2">
            คะแนนที่ใช้ได้
          </p>
          <PointsDisplay points={points} size="lg" />
          <p className="text-center text-[var(--text-tertiary)] text-[9px] mt-2">
            ใช้คะแนนได้ถึง {expiryDate}
          </p>
        </div>
        {/* Exchange Points Section */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-[var(--yuanta-primary)]" />
              <h2 className="text-[#4A5565] font-bold text-[14px]">
                แลกคะแนน
              </h2>
            </div>
            <button className="flex items-center gap-1 text-[var(--text-secondary)] text-sm hover:text-[var(--yuanta-primary)] transition-colors">
              ประวัติคะแนน
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <ExchangeCard
              icon={
                <Image
                  src="/badge/points-fill.png"
                  alt="Points fill"
                  width={40}
                  height={40}
                  className="w-full h-full"
                />
              }
              label="หยวนต้า มาร์เก็ตเพลส"
            />
            <ExchangeCard
              icon={<ShoppingCart className="w-full h-full" />}
              label="ร้านค้าพันธมิตร"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
