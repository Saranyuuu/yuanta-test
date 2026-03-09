'use client';

import Image from 'next/image';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';


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
            <Image
              src="/badge/yuanta-icon-base.png"
              alt="Yuanta icon"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span className="text-[var(--yuanta-primary-accent)] font-semibold text-[12px]">
              {points} Points
            </span>
          </div>
          <span className={cn('w-auto h-auto flex items-center justify-center text-[9px] font-medium bg-[#F3F8FE] rounded-[4px] px-[4px] py-[2px] text-[var(--yuanta-primary)]')}>
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
