import type { UserProfileCardProps } from '../../types';

export const UserProfileCard = ({
    user,
    showEmail = false,
    showRole = false,
    onEdit,
    children,
}: UserProfileCardProps) => {

    return (
        <div className="p-4 border rounded shadow flex flex-col items-center gap-2">
            {user.avatarUrl && (
                <img
                    src={user.avatarUrl}
                    alt={`user.name}'s avatar`}
                    className="w-20 h-20 rounded-full object-cover"
                />
            )}

            <h3 className="text-x1 font-bold">{user.name}</h3>

            {showEmail && <p className="text-gray-600">{user.email}</p>}
            {showRole && <p className="text-gray-500">{user.role}</p>}

            {onEdit && (
                <button
                    onClick={() => onEdit(user.id)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                > 
                    Edit Profile 
                </button>
            )}

            {children}
        </div>
    );
};