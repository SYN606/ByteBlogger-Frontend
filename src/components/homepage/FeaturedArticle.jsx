import { Link } from 'react-router-dom';

const featuredArticles = [
    {
        title: 'Top Cybersecurity Trends to Watch in 2025',
        href: '/cybersecurity-trends',
        description:
            'Stay ahead of emerging cyber threats and explore the latest innovations in cybersecurity.',
    },
    {
        title: 'How to Build a Secure Home Network',
        href: '/secure-home-network',
        description:
            'Learn the essential steps to secure your home network and protect your devices from attacks.',
    },
    {
        title: 'Best Practices for Password Management',
        href: '/password-management',
        description:
            'Discover the best ways to create, store, and manage strong passwords securely.',
    },
    {
        title: 'Understanding Phishing Attacks and How to Prevent Them',
        href: '/phishing-prevention',
        description:
            'Learn how to identify phishing attempts and safeguard your personal and professional data.',
    },
];

export default function FeaturedArticle() {
    return (
        <section className="py-16">
            <h2 className="text-center text-3xl font-bold text-white">Featured Articles</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 px-4 lg:px-8">
                {featuredArticles.map((article) => (
                    <Link
                        key={article.title}
                        to={article.href}
                        className="group block rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-sm hover:shadow-lg"
                    >
                        <div>
                            <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400">
                                {article.title}
                            </h3>
                            <p className="mt-2 text-sm text-gray-400">{article.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}