'use client';

import { cn } from '@/lib/utils';


export function PromoBanner({
  title,
  description,
  linkText,
  onLinkClick,
  className,
}: PromoBannerProps) {
  return (
    <div
      className={cn(
        'relative bg-white rounded-[8px] px-[16px] py-[6px]',
        className
      )}
    >
      <div className="relative z-10 pr-20 sm:pr-32">
        <h3 className="text-[var(--yuanta-primary)] font-bold text-[18px] mb-2">
          {title}
        </h3>
        <p className="max-w-[190px] md:max-w-[430px] xl:max-w-full text-[var(--text-secondary)] text-[14px] mb-1">
          {description}
        </p>
        <button
          onClick={onLinkClick}
          className="text-[#0A6EE7] font-bold text-sm hover:underline"
        >
          {linkText}
        </button>
      </div>

      {/* Decorative Icon */}
      <div className="pointer-events-none absolute -top-6 -right-0 xl:-top-8 w-[120px] h-[120px] drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]">
        <img
          src="/Point/Yuanta Points Logo.png"
          alt="Yuanta Points Logo"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
