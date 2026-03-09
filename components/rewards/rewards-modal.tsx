'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Gift, ShoppingCart, ChevronRight, Ticket, X } from 'lucide-react';
import { ExchangeCard } from './exchange-card';
import { DealCard } from './deal-card';
import { PromoBanner } from './promo-banner';
import { PointsCard } from './points-card';
import { Header } from '@/components/layout/header';
import { mockDeals } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

interface RewardsModalProps {
  isOpen: boolean;
  onClose: () => void;
  points: number;
  expiryDate: string;
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
}

export function RewardsModal({
  isOpen,
  onClose,
  points,
  expiryDate,
  tier,
}: RewardsModalProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShouldRender(false);
      onClose();
    }, 300);
  };

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className={cn(
          'absolute inset-0 bg-black/50 transition-opacity duration-300',
          isClosing ? 'opacity-0' : 'opacity-100'
        )}
        onClick={handleClose}
      />

      {/* Fullscreen Modal Content */}
      <div
        className={cn(
          'relative w-full h-full overflow-y-auto',
          'bg-white',
          'transition-transform duration-300 ease-out',
          isClosing ? 'translate-y-full' : 'translate-y-0 animate-in slide-in-from-bottom duration-300'
        )}
      >
        {/* Header with Close Button (desktop only) */}
        <Header
          showIcons={false}
          showCloseButton
          onClose={handleClose}
          className="sticky top-0 z-20 hidden lg:block"
        />

        {/* Hero Section */}
        <div className="bg-gradient-to-b from-[#f5d4c0] via-[#ffe6dc] to-[#ffffff] pt-0 pb-10 sm:pt-0 sm:pb-14 lg:pt-6">
          {/* Page Header (same style as main page) - mobile & tablet only */}
          <div className="bg-background xl:bg-background/70 border-b border-[var(--border)]/60 lg:hidden">
            <div className="relative flex items-center h-12 max-w-[792px] mx-auto px-4">
              <h1 className="flex-1 text-center text-[var(--text-primary)] text-[16px] font-bold">
                Yuanta Rewards
              </h1>
              <button
                onClick={handleClose}
                className="absolute right-4 p-2 -mr-2 hover:bg-[var(--bg-secondary)] rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6 text-[var(--text-secondary)]" />
              </button>
            </div>
          </div>

          {/* Points Card */}
          <div className="max-w-[792px] mx-auto mt-5 px-6 md:px-[64px] xl:px-0">
            <PointsCard points={points} expiryDate={expiryDate} tier={tier} />
          </div>
          {/* My Rewards Button */}
          <Button className="w-[343px] h-[40px] mx-auto flex items-center justify-center gap-2 bg-white border border-black/10 rounded-[8px] hover:border-[var(--yuanta-primary-light)] hover:shadow-sm transition-all mt-3">
            <Ticket className="w-5 h-5 text-[#0A6EE7]" />
            <span className="text-[var(--text-primary)] font-medium">รีวอร์ดของฉัน</span>
          </Button>
          <div className="max-w-[792px] mx-auto mt-8 px-6 md:px-[64px] xl:px-0">
            {/* Promo Banner */}
            <PromoBanner
              title="เติมสุข ทุกการเทรด"
              description="เปลี่ยนค่าธรรมเนียมของคุณ เป็นคะแนนสะสม เพื่อแลกรับ Yuanta Rewards ได้ตั้งแต่บาทแรก*"
              linkText="ดูรายละเอียดเพิ่มเติม"
              className="mb-2 sm:mb-4"
            />
          </div>
        </div>

        {/* Highlight Deals Section */}
        <div className="w-full mx-auto bg-[var(--bg-secondary)] pt-6 pb-10 px-6">
          <div className="max-w-[792px] mx-auto flex items-center justify-between mb-4 sm:mb-6">
            <div className="flex items-center gap-2">
              <Image
                src="/Badge/yuanta-icon-dark.png"
                alt="Yuanta icon"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <h2 className="text-black/75% font-bold text-[16px]">
                Highlight Deals
              </h2>
            </div>
            <Button variant="link" className="text-[var(--yuanta-primary-accent)] font-semibold text-[14px] hover:underline">
              ดูเพิ่มเติม
            </Button>
          </div>

          {/* Deals Grid */}
          <div className="md:max-w-[720px] xl:max-w-[792px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {mockDeals.map((deal) => (
              <DealCard
                key={deal.id}
                image={deal.image}
                title={deal.title}
                points={deal.points}
                category={deal.category}
                dateRange={deal.dateRange}
                isUnlimited={deal.isUnlimited}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

  );
}