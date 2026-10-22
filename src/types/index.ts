// Create an AlertBox component that can display different types of alerts (success, error, warning, info) with customizable messages.

export type AlertType = 'success' | 'error' | 'warning' | 'info';

export interface AlertBoxProps {
    type: AlertType;
    message: string;
    onClose?: () => void;
    children?: React.ReactNode;
}

// Create a UserProfileCard component that displays user information with optional sections.

export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    avatarUrl?: string;
}

export interface UserProfileCardProps {
    user: User;
    showEmail?: boolean;
    showRole?: boolean;
    onEdit?: (userId: string) => void;
    children?: React.ReactNode;
}