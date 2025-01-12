import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';

const NotificationMenu = () => {
    const [notificationMenuOpen, setNotificationMenuOpen] = useState(false);

    return (
        <div className="relative ml-3">
            <button
                onClick={() => setNotificationMenuOpen(!notificationMenuOpen)}
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
                <span className="sr-only">View notifications</span>
                <FaBell className="h-6 w-6" aria-hidden="true" />
            </button>

            {notificationMenuOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Notification 1
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Notification 2
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Notification 3
                    </a>
                </div>
            )}
        </div>
    );
};

export default NotificationMenu;
