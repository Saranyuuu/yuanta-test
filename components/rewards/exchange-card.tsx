'use client';

import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

export function ExchangeCard({ icon, label, onClick, className }: ExchangeCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex flex-col items-center justify-center gap-[6px]',
        'bg-white rounded-xl border border-[var(--border)]',
        'hover:border-[var(--yuanta-primary)] hover:shadow-sm',
        'transition-all duration-200',
        'w-full h-[70px]',
        className
      )}
    >
      <div className="text-[var(--yuanta-primary)] w-6 h-6">
        {icon}
      </div>
      <span className="text-[#4A5565] text-[12px] font-medium text-center">
        {label}
      </span>
    </button>
  );
}
