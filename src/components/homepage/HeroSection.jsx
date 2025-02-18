import { Link } from 'react-router-dom';

export default function HeroSection() {
    return (
        <div className="relative">
            {/* Hero Section */}
            <main className="pt-12 lg:px-8 relative">
                <div className="mx-auto max-w-4xl text-center py-20 px-5 sm:px-0 sm:py-32 lg:py-40">
                    <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
                        Dive Into the Future of Tech and Cybersecurity
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        Explore the latest breakthroughs in technology, protect your data with cutting-edge
                        cybersecurity tips, and master the world of computers with our in-depth tutorials.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-x-6">
                        <Link
                            to="/blogs"
                            className="rounded-md bg-cyan-500 px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-cyan-400"
                        >
                            Explore Articles
                        </Link>
                        <Link
                            to="/learn-more"
                            className="text-sm font-semibold text-gray-300 hover:text-cyan-400"
                        >
                            Learn More <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
