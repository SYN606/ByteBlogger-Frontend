import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaMedium } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const socialLinks = [
        { icon: <FaFacebook size={24} />, link: "#", alt: "Facebook" },
        { icon: <FaInstagram size={24} />, link: "#", alt: "Instagram" },
        { icon: <FaTwitter size={24} />, link: "#", alt: "Twitter" },
        { icon: <FaGithub size={24} />, link: "#", alt: "Github" },
        { icon: <FaMedium size={24} />, link: "#", alt: "Medium" },
    ];

    return (
        <footer className="bg-gray-800 text-white lg:grid lg:grid-cols-5">
            <div className="relative block h-32 lg:col-span-2 lg:h-full">
                <img
                    src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68"
                    alt="Blog Background"
                    className="absolute inset-0 h-full w-full object-cover opacity-50"
                />
            </div>

            <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-100">About the Blog</h2>
                        <p className="mt-4 text-gray-400">
                            Welcome to our blog! Here, we share insightful articles, tips, and guides to help you stay updated on the latest trends in the world of technology, programming, and more. Whether you're a beginner or an expert, there's something for everyone.
                        </p>

                        <ul className="mt-8 flex gap-6">
                            {socialLinks.map((social, index) => (
                                <li key={index}>
                                    <Link
                                        to={social.link}
                                        className="text-gray-300 transition hover:opacity-75"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {social.icon}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <p className="font-medium text-gray-100">Quick Links</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <Link to="/categories" className="text-gray-300 transition hover:opacity-75"> Categories </Link>
                                </li>

                                <li>
                                    <Link to="/about" className="text-gray-300 transition hover:opacity-75"> About Us </Link>
                                </li>

                                <li>
                                    <Link to="/contact" className="text-gray-300 transition hover:opacity-75"> Contact </Link>
                                </li>

                                <li>
                                    <Link to="/privacy" className="text-gray-300 transition hover:opacity-75"> Privacy Policy </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-100">Recent Posts</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <Link to="/post/1" className="text-gray-300 transition hover:opacity-75"> Understanding React Hooks </Link>
                                </li>

                                <li>
                                    <Link to="/post/2" className="text-gray-300 transition hover:opacity-75"> Getting Started with Node.js </Link>
                                </li>

                                <li>
                                    <Link to="/post/3" className="text-gray-300 transition hover:opacity-75"> Top 5 JavaScript Frameworks in 2025 </Link>
                                </li>

                                <li>
                                    <Link to="/post/4" className="text-gray-300 transition hover:opacity-75"> Tips for Optimizing Web Performance </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-12">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <ul className="flex flex-wrap gap-4 text-xs">
                            <li>
                                <Link to="/terms" className="text-gray-400 transition hover:opacity-75"> Terms & Conditions </Link>
                            </li>

                            <li>
                                <Link to="/privacy" className="text-gray-400 transition hover:opacity-75"> Privacy Policy </Link>
                            </li>

                            <li>
                                <Link to="/cookies" className="text-gray-400 transition hover:opacity-75"> Cookies </Link>
                            </li>
                        </ul>

                        <p className="mt-8 text-xs text-gray-400 sm:mt-0">
                            &copy; 2025 ByteBlogger. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
