'use client'

import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Tech News', href: '#' },
    { name: 'Tutorials', href: '#' },
    { name: 'About', href: '#' },
]

const featuredArticles = [
    {
        title: 'Top Cybersecurity Trends to Watch in 2025',
        href: '#',
        description:
            'Stay ahead of emerging cyber threats and explore the latest innovations in cybersecurity.',
        image:
            'https://images.unsplash.com/photo-1556740772-1a741367b93e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGN5YmVyc2VjdXJpdHl8ZW58MHx8fHwxNjg4ODI4OTQ4&ixlib=rb-1.2.1&q=80&w=400',
    },
    {
        title: 'How to Build a Secure Home Network',
        href: '#',
        description:
            'Learn the essential steps to secure your home network and protect your devices from attacks.',
        image:
            'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGN5YmVyc2VjdXJpdHl8ZW58MHx8fHwxNjg4ODI4OTYz&ixlib=rb-1.2.1&q=80&w=400',
    },
]

export default function TechHeroSection() {
    return (
        <div className="bg-gray-900 pb-10">
            <main className="pt-12 lg:px-8">
                <div className="mx-auto max-w-4xl text-center py-20 sm:py-32 lg:py-40">
                    <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
                        Dive Into the Future of Tech and Cybersecurity
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        Explore the latest breakthroughs in technology, protect your data with cutting-edge
                        cybersecurity tips, and master the world of computers with our in-depth tutorials.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-cyan-500 px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-cyan-400"
                        >
                            Explore Articles
                        </a>
                        <a
                            href="#"
                            className="text-sm font-semibold text-gray-300 hover:text-cyan-400"
                        >
                            Learn More <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>

                {/* Featured Articles */}
                <section className="mt-16">
                    <h2 className="text-center text-3xl font-bold text-white">Featured Articles</h2>
                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 px-4 lg:px-8">
                        {featuredArticles.map((article) => (
                            <a
                                key={article.title}
                                href={article.href}
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
                            </a>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}
