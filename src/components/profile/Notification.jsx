import React, { useState, useEffect, useRef } from 'react';
import { FaBell } from 'react-icons/fa';

const NotificationMenu = () => {
    const [notificationMenuOpen, setNotificationMenuOpen] = useState(false);
    const [notifications, setNotifications] = useState([
        { id: 1, message: 'Notification 1', read: false },
        { id: 2, message: 'Notification 2', read: false },
        { id: 3, message: 'Notification 3', read: false }
    ]);

    const notificationMenuRef = useRef(null);

    // Close the notification menu if clicked outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (notificationMenuRef.current && !notificationMenuRef.current.contains(e.target)) {
                setNotificationMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const unreadNotifications = notifications.filter((notification) => !notification.read).length;

    // Mark all notifications as read
    const markAllAsRead = () => {
        setNotifications((prevNotifications) =>
            prevNotifications.map((notification) => ({
                ...notification,
                read: true
            }))
        );
    };

    return (
        <div className="relative ml-3" ref={notificationMenuRef}>
            <button
                onClick={() => setNotificationMenuOpen(!notificationMenuOpen)}
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white"
            >
                <span className="sr-only">View notifications</span>
                <FaBell className="h-6 w-6" aria-hidden="true" />
                {unreadNotifications > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white w-5 h-5">
                        {unreadNotifications}
                    </span>
                )}
            </button>

            {notificationMenuOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                    {notifications.length === 0 ? (
                        <span className="block px-4 py-2 text-sm text-gray-700">No notifications</span>
                    ) : (
                        <>
                            <div className="px-4 py-2 text-sm text-gray-700">
                                <button
                                    onClick={markAllAsRead}
                                    className="w-full text-left text-xs text-indigo-600 hover:text-indigo-500"
                                >
                                    <strong>Mark all as read</strong>
                                </button>
                            </div>
                            <hr />
                            <div>
                                {notifications.map((notification) => (
                                    <div key={notification.id} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        <p>{notification.message}</p>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default NotificationMenu;
