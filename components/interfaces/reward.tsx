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

interface ExchangeCardProps {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
    className?: string;
}

interface PointsCardProps {
    points: number;
    expiryDate: string;
    tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
    onClick?: () => void;
    className?: string;
}

interface PromoBannerProps {
    title: string;
    description: string;
    linkText: string;
    onLinkClick?: () => void;
    className?: string;
}

interface RewardsModalProps {
    isOpen: boolean;
    onClose: () => void;
    points: number;
    expiryDate: string;
    tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
}
