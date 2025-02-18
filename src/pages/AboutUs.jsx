import React from 'react';
import { FaRocket, FaUsers, FaCode, FaClipboardList, FaLock, FaDesktop, FaLaptop } from 'react-icons/fa';

// Data for services
const services = [
    {
        id: 1,
        icon: <FaCode className="text-6xl text-blue-500" />,
        title: 'Tech Tutorials',
        description:
            'Dive deep into coding, web development, software reviews, and how-to guides to grow your online presence.',
    },
    {
        id: 2,
        icon: <FaClipboardList className="text-6xl text-green-500" />,
        title: 'Blogging Tips',
        description:
            'Learn the latest blogging trends, SEO strategies, content creation hacks, and monetization methods to build a successful blog.',
    },
    {
        id: 3,
        icon: <FaRocket className="text-6xl text-yellow-500" />,
        title: 'Industry Insights',
        description:
            'Stay up-to-date with news and trends in the tech and blogging communities, from emerging technologies to platform updates.',
    },
    {
        id: 4,
        icon: <FaUsers className="text-6xl text-purple-500" />,
        title: 'Product Reviews',
        description:
            'We test and review tech gadgets, software tools, and blogging essentials to help you make informed decisions.',
    },
    {
        id: 5,
        icon: <FaDesktop className="text-6xl text-teal-500" />,
        title: 'Hardware Analysis',
        description:
            'Comprehensive reviews and deep dives into computer hardware, from GPUs to CPUs, offering valuable insights for tech enthusiasts and gamers alike.',
    },
    {
        id: 6,
        icon: <FaLock className="text-6xl text-red-500" />,
        title: 'Cybersecurity',
        description:
            'Learn about cybersecurity best practices, stay updated on security threats, and keep your digital life safe with our expert advice.',
    },
    {
        id: 7,
        icon: <FaLaptop className="text-6xl text-gray-600" />,
        title: 'Linux Tutorials',
        description:
            'Master the Linux operating system with our easy-to-follow tutorials, tips, and tricks for both beginners and seasoned sysadmins.',
    },
    {
        id: 8,
        icon: <FaRocket className="text-6xl text-pink-500" />,
        title: 'Nerdy Things',
        description:
            'From space exploration to AI advancements and sci-fi technology, we dive into the coolest and most exciting “nerdy” topics that everyone should know about!',
    },
];

// Data for team members
const teamMembers = [
    {
        name: 'John Doe',
        role: 'Founder & Lead Writer',
        avatarUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHair&hairColor=Brown&facialHairType=BeardMedium&clotheType=Hoodie&clotheColor=Blue',
    },
    {
        name: 'Jane Smith',
        role: 'Content Strategist',
        avatarUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHair&hairColor=Blonde&facialHairType=BeardMedium&clotheType=Hoodie&clotheColor=Red',
    },
    {
        name: 'Michael Lee',
        role: 'Tech Reviewer & Writer',
        avatarUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&hairColor=Black&facialHairType=BeardLight&clotheType=ShirtCrewNeck&clotheColor=Purple',
    },
    {
        name: 'Samantha Clark',
        role: 'Community Manager',
        avatarUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&hairColor=Brown&facialHairType=BeardLight&clotheType=ShirtCrewNeck&clotheColor=Gray',
    },
];

const AboutUs = () => {
    return (
        <div className="max-w-7xl mx-auto p-8 md:p-16">
            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Welcome to ByteBloggers!</h1>

            {/* What We Do Section */}
            <section className="text-gray-700 mb-12">
                <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">What We Do</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center"
                        >
                            <div className="mb-6 p-4 bg-gradient-to-r from-blue-100 via-green-100 to-yellow-100 rounded-full shadow-md flex items-center justify-center">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                            <p className="text-gray-600 text-center">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mission Section */}
            <section className="text-gray-700 mb-12">
                <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Mission</h2>
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-200">
                    <p className="text-lg md:text-xl leading-relaxed">
                        Our mission is to provide insightful, informative, and engaging content for readers who want to keep up with
                        the fast-evolving world of technology, digital marketing, blogging strategies, and much more. ByteBloggers strives
                        to create a platform where technology meets creativity, and where bloggers of all backgrounds can find tips,
                        tutorials, reviews, and inspiration.
                    </p>
                </div>
            </section>

            {/* Meet the Team Section */}
            <section className="text-gray-700 mb-12">
                <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Meet the Team</h2>
                <div className="space-y-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex items-center space-x-6 bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-200">
                            <div className="w-20 h-20 bg-gray-300 rounded-full">
                                <img src={member.avatarUrl} alt={member.name} className="w-full h-full rounded-full" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-xl text-gray-800">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why ByteBloggers Section */}
            <section className="text-center text-gray-700 mb-12">
                <h2 className="text-3xl font-semibold mb-6 text-gray-800">Why ByteBloggers?</h2>
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200">
                    <ul className="list-inside list-disc space-y-4 text-lg text-gray-600">
                        <li>Expertise: We bring you content from experienced professionals in the tech and blogging world.</li>
                        <li>Fresh Ideas: We stay ahead of the curve, providing innovative perspectives and updates on emerging trends.</li>
                        <li>Community-Focused: ByteBloggers is more than just a blog; it’s a space where writers, creators, and tech enthusiasts can connect, share, and grow together.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
