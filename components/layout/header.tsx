'use client';

import { Search, MessageSquare, Bell, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  showIcons?: boolean;
  showCloseButton?: boolean;
  onClose?: () => void;
  className?: string;
}

export function Header({ showIcons = true, showCloseButton = false, onClose, className }: HeaderProps) {
  return (
    <header className={cn('bg-white border-b border-[var(--border)]', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="/logo/logo yuanta.png"
                alt="Yuanta Securities"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Icons */}
          {showIcons && (
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 p-2 hover:bg-[var(--bg-secondary)] rounded-full transition-colors">
                <Search className="w-6 h-6 text-[var(--yuanta-primary-accent)]" />
              </div>
              <div className="w-9 h-9 p-2 hover:bg-[var(--bg-secondary)] rounded-full transition-colors">
                <MessageSquare className="w-6 h-6 text-[var(--yuanta-primary-accent)]" />
              </div>
              <div className="w-9 h-9 p-2 hover:bg-[var(--bg-secondary)] rounded-full transition-colors relative">
                <Bell className="w-6 h-6 fill-[var(--yuanta-primary-accent)] text-[var(--yuanta-primary-accent)]" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[var(--accent-red)] rounded-full" />
              </div>
              <div className="w-[32px] h-[32px] bg-gradient-to-r from-[#B5D3F8] to-[#E6F6FB] border border-black/8 rounded-full flex items-center justify-center text-[16px] text-[#00A2D9] font-bold">
                J
              </div>
            </div>
          )}

          {/* Close Button */}
          {showCloseButton && onClose && (
            <button
              onClick={onClose}
              className="p-2 hover:bg-[var(--bg-secondary)] rounded-full transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-[var(--text-secondary)]" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
