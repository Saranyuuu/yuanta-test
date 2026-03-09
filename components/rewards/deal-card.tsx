'use client';

import Image from 'next/image';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DealCardProps {
  image: string;
  title: string;
  points: number;
  category: string;
  dateRange?: string;
  isUnlimited?: boolean;
  onClick?: () => void;
  className?: string;
}

const categoryColors: Record<string, string> = {
  'กิจกรรม': 'text-[var(--yuanta-primary)]',
  'คลังความรู้': 'text-[var(--yuanta-primary)]',
  'สินค้าพรีเมียม': 'text-[var(--yuanta-primary)]',
  'ไลฟ์สไตล์': 'text-[var(--yuanta-primary)]',
};

export function DealCard({
  image,
  title,
  points,
  category,
  dateRange,
  isUnlimited,
  onClick,
  className,
}: DealCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'bg-white rounded-xl overflow-hidden border border-[var(--border)]',
        'hover:shadow-md transition-all duration-200',
        'text-left w-full max-w-[186px] h-auto',
        className
      )}
    >
      {/* Image */}
      <div className="max-h-[103px] relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-2">
        <h3 className="text-[#101828] font-medium text-[12px] line-clamp-2 mb-2 min-h-[2.5rem]">
          {title}
        </h3>

        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-[var(--yuanta-primary)]" fill="currentColor">
              <circle cx="12" cy="12" r="10" fillOpacity="0.2" />
              <path d="M8 12L12 8L16 12L12 16Z" />
            </svg>
            <span className="text-[var(--yuanta-primary-accent)] font-semibold text-[12px]">
              {points} Points
            </span>
          </div>
          <span className={cn('w-auto h-auto flex items-center justify-center text-[9px] font-medium bg-[#F3F8FE] rounded-[4px] px-[4px] py-[2px]', categoryColors[category] || 'text-[#095EC4]')}>
            {category}
          </span>
        </div>

        <div className="flex items-center gap-[4px] text-[#4A5565]">
          <Calendar className="w-3.5 h-3.5" />
          <span className="text-[12px]">
            {isUnlimited ? 'ไม่จำกัดช่วงเวลา' : dateRange}
          </span>
        </div>
      </div>
    </button>
  );
}
