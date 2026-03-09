'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
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
  ArrowLeft,
  ChevronLeft,
} from 'lucide-react';
import { Header } from '@/components/layout';
import { RewardsModal } from '@/components/rewards';
import { ProfileMenuItem } from '@/components/profile/profile-menu-item';
import { ProfilePointsCard } from '@/components/profile/profile-points-card';
import { mockUser, mockPoints } from '@/lib/mock-data';
import { Button } from '../ui/button';

export function RewardsPage() {
  const [isRewardsOpen, setIsRewardsOpen] = useState(false);

  const handlePointsCardClick = () => {
    setIsRewardsOpen(true);
  };

  const mainMenuItems = [
    {
      icon: User,
      label: 'การจัดการข้อมูลส่วนตัว',
      subtitle: 'รอบทบทวน KYC: dd/mm/yyyy',
    },
    {
      icon: FileText,
      label: 'แบบฟอร์มสำคัญ',
    },
    {
      icon: Bell,
      label: 'ตั้งค่าแจ้งเตือน',
    },
    {
      icon: CreditCard,
      label: 'การจัดการบัญชีลงทุน',
    },
    {
      icon: Settings,
      label: 'ตั้งค่าทั่วไป',
    },
    {
      icon: Shield,
      label: 'ตั้งค่าความปลอดภัย',
    },
    {
      icon: Globe,
      label: 'ภาษา',
      showArrow: false,
      rightElement: (
        <div className="flex items-center gap-2">
          <Image
            src="/Badge/TH.png"
            alt="Thai language"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <span className="text-[var(--text-secondary)] text-[16px] font-bold">TH</span>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background xl:bg-[var(--bg-secondary)] pb-6 sm:pb-20">
      <div className="hidden xl:block">
        <Header />
      </div>

      {/* Page Header */}
      <div className="bg-background border-b border-[var(--border)] lg:bg-secondary lg:border-b-0 lg:px-4 lg:py-6 lg:pt-10">
        <div className="relative flex items-center h-12 max-w-[996px] mx-auto px-4 lg:h-auto lg:gap-[12px] lg:px-4">
          <button className="absolute left-4 lg:static lg:left-auto flex items-center">
            <ChevronLeft className="block lg:hidden w-6 h-6 text-[var(--text-primary)] flex-shrink-0" />
            <ArrowLeft className="hidden lg:block w-5 h-5 text-[var(--yuanta-primary-accent)] flex-shrink-0" />
          </button>
          <h1 className="flex-1 text-center lg:flex-none lg:text-left text-[var(--text-primary)] text-[16px] lg:text-[18px] font-bold">
            โปรไฟล์ของฉัน
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[10px] bg-background max-w-[996px] mx-auto py-6 px-4 rounded-none sm:py-[32px] sm:px-[40px] sm:rounded-[12px] mt-4 xl:mt-0">
        {/* User Info Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 xl:gap-6 mb-6">
          {/* Avatar & Info */}
          <div className="w-full flex items-center gap-4">
            <div className="w-[48px] md:w-[80px] h-[48px] md:h-[80px] flex items-center justify-center rounded-full bg-gradient-to-tr from-[#B5D3F8] to-[#E6F6FB] border border-black/10 text-[32px] md:text-[48px] leading-none text-[#0092B8] font-bold flex-shrink-0">
              {mockUser.name.charAt(0)}
            </div>
            <div className='w-full flex flex-row justify-between items-start md:flex-col md:gap-[12px] xl:gap-[6px]'>
              <div>
                <h3 className="text-text-primary font-bold text-[20px] leading-[30px]">
                  Hello, {mockUser.name}
                </h3>
                <p className="text-text-tertiary text-[14px] leading-[21px]">
                  {mockUser.email}
                </p>
              </div>
              <div>
                {mockUser.badge && (
                  <span className="w-[66px] h-[24px] flex items-center justify-center gap-[2px] xl:mt-2 bg-[#F7EDE2] rounded-[4px] text-[12px] text-[#D35533] font-medium">
                    <Image
                      src="/Badge/badge%20icon.png"
                      alt="User badge"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    {mockUser.badge}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Points Card - Clickable */}
          <ProfilePointsCard
            points={mockPoints.available}
            expiryDate="DD/MM/YYYY"
            tier={mockPoints.tier}
            onExchange={handlePointsCardClick}
            className="w-full xl:w-[544px] h-auto cursor-pointer hover:shadow-xl transition-shadow"
          />
        </div>

        <div className='flex flex-col gap-[4px] md:gap-[8px]'>
          {/* Menu Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {mainMenuItems.map((item) => (
              <ProfileMenuItem
                key={item.label}
                icon={<item.icon className="w-full h-full" />}
                label={item.label}
                subtitle={item.subtitle}
                showArrow={item.showArrow}
                rightElement={item.rightElement}
              />
            ))}
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
          <Button variant="destructive" className="w-full md:w-[343px] h-[40px] flex items-center justify-center bg-transparent border border-black/10 text-[14px] font-semibold text-[var(--accent-red)] rounded-[8px] hover:bg-[var(--accent-red)]/5 transition-colors font-medium">
            ออกจากระบบ
          </Button>
        </div>
      </div>

      {/* Rewards Fullscreen Modal */}
      <RewardsModal
        isOpen={isRewardsOpen}
        onClose={() => setIsRewardsOpen(false)}
        points={mockPoints.available}
        expiryDate={mockPoints.expiryDate}
        tier={mockPoints.tier}
      />
    </div>
  );
}