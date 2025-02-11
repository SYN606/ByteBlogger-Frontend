import React, { useState, useEffect, useRef } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const ProfileMenu = () => {
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    // Retrieve `IsAdmin` value from localStorage
    const isAdmin = JSON.parse(localStorage.getItem("IsAdmin")) || false; // Ensures boolean value

    const handleClickOutside = (e) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(e.target) &&
            !buttonRef.current.contains(e.target)
        ) {
            setProfileMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        console.log("User logged out");
        localStorage.removeItem("IsAdmin");
    };

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
                        className={({ isActive }) =>
                            `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${isActive ? "bg-gray-100" : ""
                            }`
                        }
                    >
                        Your Profile
                    </NavLink>

                    <NavLink
                        to="/change_your_password"
                        className={({ isActive }) =>
                            `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${isActive ? "bg-gray-100" : ""
                            }`
                        }
                    >
                        Change Password
                    </NavLink>



                    <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Sign out
                    </button>

                    {isAdmin && (
                        <>
                            <hr />
                            <NavLink
                                to="/admin"
                                className={({ isActive }) =>
                                    `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${isActive ? "bg-gray-100" : ""
                                    }`
                                }
                            >
                                Admin Panel
                            </NavLink>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProfileMenu;
