'use client';

import { useEffect } from 'react';
import {
  ArrowLeft,
  User,
  FileText,
  Bell,
  Settings,
  Shield,
  Globe,
  Headphones,
  BookOpen,
  LogOut,
  CreditCard,
} from 'lucide-react';
import { ProfileMenuItem } from './profile-menu-item';
import { ProfilePointsCard } from './profile-points-card';
import { cn } from '@/lib/utils';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  userData: {
    name: string;
    email: string;
    badge?: string;
    points: number;
    tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
    expiryDate: string;
  };
}

export function ProfileModal({ isOpen, onClose, userData }: ProfileModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={cn(
          'relative w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-3xl sm:mt-8 sm:mx-4',
          'bg-[var(--bg-secondary)] overflow-y-auto',
          'sm:rounded-2xl'
        )}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-[var(--border)] px-4 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 -ml-2 hover:bg-[var(--bg-secondary)] rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-[var(--yuanta-primary)]" />
            </button>
            <h2 className="text-[var(--text-primary)] font-semibold text-lg">
              โปรไฟล์ของฉัน
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {/* User Info Section */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6">
            {/* Avatar & Info */}
            <div className="flex items-center gap-4 flex-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[var(--bg-cyan)] to-[var(--yuanta-primary-light)] flex items-center justify-center text-[var(--yuanta-primary)] text-2xl sm:text-3xl font-bold flex-shrink-0">
                {userData.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-[var(--text-primary)] font-semibold text-lg sm:text-xl">
                  Hello, {userData.name}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  {userData.email}
                </p>
                {userData.badge && (
                  <span className="inline-flex items-center gap-1 mt-2 px-2.5 py-1 bg-[var(--accent-red)]/10 text-[var(--accent-red)] rounded-full text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-red)]" />
                    {userData.badge}
                  </span>
                )}
              </div>
            </div>

            {/* Points Card */}
            <ProfilePointsCard
              points={userData.points}
              expiryDate={userData.expiryDate}
              tier={userData.tier}
              className="w-full sm:w-72"
            />
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <ProfileMenuItem
              icon={<User className="w-full h-full" />}
              label="การจัดการข้อมูลส่วนตัว"
              subtitle="รอบทบทวน KYC: dd/mm/yyyy"
            />
            <ProfileMenuItem
              icon={<FileText className="w-full h-full" />}
              label="แบบฟอร์มสำคัญ"
            />
            <ProfileMenuItem
              icon={<Bell className="w-full h-full" />}
              label="ตั้งค่าแจ้งเตือน"
            />
            <ProfileMenuItem
              icon={<CreditCard className="w-full h-full" />}
              label="การจัดการบัญชีลงทุน"
            />
            <ProfileMenuItem
              icon={<Settings className="w-full h-full" />}
              label="ตั้งค่าทั่วไป"
            />
            <ProfileMenuItem
              icon={<Shield className="w-full h-full" />}
              label="ตั้งค่าความปลอดภัย"
            />
            <ProfileMenuItem
              icon={<Globe className="w-full h-full" />}
              label="ภาษา"
              showArrow={false}
              rightElement={
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇹🇭</span>
                  <span className="text-[var(--text-primary)] font-medium">TH</span>
                </div>
              }
            />
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-[var(--border)]" />

          {/* Support Menu Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <ProfileMenuItem
              icon={<Headphones className="w-full h-full" />}
              label="ศูนย์บริการลูกค้า"
            />
            <ProfileMenuItem
              icon={<BookOpen className="w-full h-full" />}
              label="ข้อกำหนดและเงื่อนไข"
            />
          </div>

          {/* Logout Button */}
          <button className="w-full sm:w-auto sm:min-w-[200px] flex items-center justify-center gap-2 px-6 py-3 border border-[var(--accent-red)] text-[var(--accent-red)] rounded-xl hover:bg-[var(--accent-red)]/5 transition-colors font-medium">
            <LogOut className="w-5 h-5" />
            ออกจากระบบ
          </button>
        </div>
      </div>
    </div>
  );
}
