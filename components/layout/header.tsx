'use client';

import { Search, MessageSquare, Bell, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  showIcons?: boolean;
  showCloseButton?: boolean;
  onClose?: () => void;
  className?: string;
}

export function Header({ showIcons = false, showCloseButton = false, onClose, className }: HeaderProps) {
  return (
    <header className={cn('bg-white border-b border-[var(--border)]', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="/Logo/Logo yuanta.png"
                alt="Yuanta Securities"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Icons */}
          {showIcons && (
            <div className="flex items-center gap-3 sm:gap-4">
              <button className="p-2 hover:bg-[var(--bg-secondary)] rounded-full transition-colors">
                <Search className="w-5 h-5 text-[var(--text-secondary)]" />
              </button>
              <button className="p-2 hover:bg-[var(--bg-secondary)] rounded-full transition-colors">
                <MessageSquare className="w-5 h-5 text-[var(--text-secondary)]" />
              </button>
              <button className="p-2 hover:bg-[var(--bg-secondary)] rounded-full transition-colors relative">
                <Bell className="w-5 h-5 text-[var(--text-secondary)]" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[var(--accent-red)] rounded-full" />
              </button>
              <button className="w-9 h-9 bg-[var(--yuanta-primary)] rounded-full flex items-center justify-center text-white font-medium">
                J
              </button>
            </div>
          )}

          {/* Close Button */}
          {showCloseButton && onClose && (
            <button
              onClick={onClose}
              className="p-2 hover:bg-[var(--bg-secondary)] rounded-full transition-colors"
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
