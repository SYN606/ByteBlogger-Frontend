import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProfileMenu = () => {
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);

    return (
        <div className="relative ml-3">
            <button
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
                <span className="sr-only">Open user menu</span>
                <FaUserAlt className="h-8 w-8 text-white" />
            </button>

            {profileMenuOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Your Profile
                    </Link>
                    <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Settings
                    </Link>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Sign out
                    </a>
                </div>
            )}
        </div>
    );
};

export default ProfileMenu;
