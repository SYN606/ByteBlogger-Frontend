import { useState } from 'react';
import { FaBars, FaTimes, FaUser, FaBlog } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { NotificationMenu, ProfileMenu, SearchBar } from '../';

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
    const isLoggedIn = localStorage.getItem("authToken") || false;

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
                    <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center justify-center sm:justify-start w-full sm:w-auto">
                            <div className="h-8 w-auto rounded-md flex items-center justify-center text-white font-bold text-sm sm:text-xl">
                                {/* Logo changes based on screen size */}
                                <span className="sm:hidden text-2xl">BB</span>
                                <span className="hidden sm:block">ByteBloggers</span>
                            </div>
                        </div>
                        <DesktopNav />
                    </div>

                    {/* Search Bar */}
                    <div className="w-full sm:w-1/3 px-4 sm:px-0 flex items-center justify-end">
                        <SearchBar />
                    </div>

                    {/* Person Icon: Logged In or Not */}
                    <div className="flex items-center">
                        {isLoggedIn ?
                            <>
                                <NotificationMenu /> <ProfileMenu />
                            </>
                            :
                            <NavLink
                                to='/sign_in'
                                className="inline-flex items-center justify-center rounded-md text-white"
                            >
                                <FaUser className="h-6 w-6" />
                            </NavLink>
                        }
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="sm:hidden bg-gray-800 rounded-md mt-2 p-4">
                    <div className="space-y-1">
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

// Desktop Navigation
const DesktopNav = () => (
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
                >
                    {item.name}
                </NavLink>
            ))}
        </div>
    </div>
);
