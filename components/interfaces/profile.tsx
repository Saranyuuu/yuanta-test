interface ProfileCardProps {
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

interface ProfileMenuItemProps {
    icon: React.ReactNode;
    label: string;
    subtitle?: string;
    rightElement?: React.ReactNode;
    showArrow?: boolean;
    onClick?: () => void;
    className?: string;
}

interface ProfilePointsCardProps {
    points: number;
    expiryDate: string;
    tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
    onExchange?: () => void;
    className?: string;
}
