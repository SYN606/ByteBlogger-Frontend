import { Link } from 'react-router-dom'

const featuredArticles = [
    {
        title: 'Top Cybersecurity Trends to Watch in 2025',
        href: '/cybersecurity-trends',
        description:
            'Stay ahead of emerging cyber threats and explore the latest innovations in cybersecurity.',
        image:
            'https://images.unsplash.com/photo-1556740772-1a741367b93e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGN5YmVyc2VjdXJpdHl8ZW58MHx8fHwxNjg4ODI4OTQ4&ixlib=rb-1.2.1&q=80&w=400',
    },
    {
        title: 'How to Build a Secure Home Network',
        href: '/secure-home-network',
        description:
            'Learn the essential steps to secure your home network and protect your devices from attacks.',
        image:
            'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGN5YmVyc2VjdXJpdHl8ZW58MHx8fHwxNjg4ODI4OTYz&ixlib=rb-1.2.1&q=80&w=400',
    },
]

export default function FeaturedArcticle() {
    return (
        <section className="py-16">
            <h2 className="text-center text-3xl font-bold text-white">Featured Articles</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 px-4 lg:px-8">
                {featuredArticles.map((article) => (
                    <Link
                        key={article.title}
                        to={article.href}
                        className="group block rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-sm hover:shadow-lg"
                    >
                        <img
                            src={article.image}
                            alt={article.title}
                            className="h-48 w-full rounded-md object-cover"
                        />
                        <div className="mt-4">
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
