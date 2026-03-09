'use client';

import { ArrowRight, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';


export function ProfileMenuItem({
  icon,
  label,
  subtitle,
  rightElement,
  showArrow = true,
  onClick,
  className,
}: ProfileMenuItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-3 sm:gap-4 max-w-[434px] h-[56px] p-3 px-5 md:p-4',
        'bg-white rounded-[8px] md:border border-black/10',
        'hover:border-[var(--yuanta-primary-light)] hover:shadow-sm',
        'transition-all duration-200 text-left text-[var(--text-secondary)] cursor-pointer',
        className
      )}
    >
      <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <span className="font-bold text-[14px] block">
          {label}
        </span>
        {subtitle && (
          <span className=" text-[var(--text-tertiary)] text-[9px] block">
            {subtitle}
          </span>
        )}
      </div>
      {rightElement && (
        <div className="w-[64px] h-[32px] flex items-center justify-center gap-2 rounded-full bg-[#F9FAFB]">
          {rightElement}
        </div>
      )}
      {showArrow && !rightElement && (
        <>
          <ChevronRight className="block md:hidden w-6 h-6 text-[var(--yuanta-primary-tertiary)] flex-shrink-0" />
          <ArrowRight className="hidden md:block w-5 h-5 text-[var(--yuanta-primary-accent)] flex-shrink-0" />
        </>
      )}
    </button>
  );
}
