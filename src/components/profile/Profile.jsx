import React, { useState, useEffect, useRef } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const ProfileMenu = () => {
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const menuRef = useRef(null); // Reference to the profile menu
    const buttonRef = useRef(null); // Reference to the button that opens the menu

    // Function to close the profile menu if clicked outside
    const handleClickOutside = (e) => {
        // Check if the click was outside both the menu and the button
        if (menuRef.current && !menuRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) {
            setProfileMenuOpen(false);
        }
    };

    // Set up event listener for clicks outside
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative ml-3">
            <button
                ref={buttonRef}
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className="relative flex rounded-full text-sm"
            >
                <span className="sr-only">Open user menu</span>
                <FaUserAlt className="h-6 w-6 text-white" />
            </button>

            {profileMenuOpen && (
                <div
                    ref={menuRef}
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
                >
                    <NavLink
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        activeClassName="bg-gray-100"
                    >
                        Your Profile
                    </NavLink>
                    <NavLink
                        to="/settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        activeClassName="bg-gray-100"
                    >
                        Settings
                    </NavLink>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Sign out
                    </a>
                </div>
            )}
        </div>
    );
};

export default ProfileMenu;
