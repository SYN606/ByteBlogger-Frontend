import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// all footer links
const footerLinks = {
    menu: [
        { name: "Shop All", path: "/collections/all" },
        { name: "About Us", path: "/pages/about-us" },
        { name: "Community", path: "/blogs/community" },
        { name: "Vibes", path: "/vibes" },
    ],
    support: [
        { name: "Shipping & Returns", path: "/pages/shipping-returns" },
        { name: "Help & FAQ", path: "/pages/help" },
        { name: "Terms & Conditions", path: "/pages/terms-conditions" },
        { name: "Privacy Policy", path: "/pages/privacy-policy" },
        { name: "Contact", path: "/pages/contact" },
        { name: "Login", path: "/account/login" },
    ],
};

const Footer = () => {
    return (
        <footer className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Newsletter Section */}
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-light mb-4">
                            Get updates on fun stuff you probably want to know about in your inbox.
                        </h3>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="border border-gray-300 rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring focus:ring-gray-200"
                            />
                            <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 transition">
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Menu Section */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Menu</h4>
                        <ul className="space-y-2">
                            {footerLinks.menu.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-600 hover:text-black transition"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Support</h4>
                        <ul className="space-y-2">
                            {footerLinks.support.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-600 hover:text-black transition"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="mt-8 flex justify-center space-x-4">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition"
                    >
                        <FaFacebookF size={20} />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition"
                    >
                        <FaTwitter size={20} />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition"
                    >
                        <FaInstagram size={20} />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition"
                    >
                        <FaLinkedinIn size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
