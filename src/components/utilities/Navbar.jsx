import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'About us', href: '/about' },
    { name: 'Something more', href: '/something-more' },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Mobile menu button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? (
                                <FaTimes className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <FaBars className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>

                    {/* Logo and desktop nav */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <div className="h-8 w-auto rounded-md flex items-center justify-center text-white font-bold text-sm">
                                ByteBloggers
                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.href}
                                        className={({ isActive }) =>
                                            classNames(
                                                isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'rounded-md px-3 py-2 text-sm font-medium'
                                            )
                                        }
                                        activeclassname="bg-gray-900 text-white" // Optional: Tailwind applies it automatically
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Login button in place of profile and notification */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <NavLink
                            to="/sign_in"
                            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            Log In
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* Mobile nav */}
            {mobileMenuOpen && (
                <div className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                className={({ isActive }) =>
                                    classNames(
                                        isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
