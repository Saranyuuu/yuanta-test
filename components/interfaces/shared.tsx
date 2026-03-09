interface PointsDisplayProps {
    points: number;
    size?: 'sm' | 'md' | 'lg';
    showIcon?: boolean;
    className?: string;
}

interface TierBadgeProps {
    tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
    variant?: 'default' | 'light';
    className?: string;
}