// Types for Yuanta Rewards

export interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  badge?: string;
}

export interface PointsData {
  available: number;
  expiryDate: string;
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
}

export interface DealItem {
  id: string;
  image: string;
  title: string;
  points: number;
  category: string;
  dateRange?: string;
  isUnlimited?: boolean;
}

export interface MenuItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  subtitle?: string;
  rightElement?: React.ReactNode;
  onClick?: () => void;
}

export interface ExchangeOption {
  id: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}
