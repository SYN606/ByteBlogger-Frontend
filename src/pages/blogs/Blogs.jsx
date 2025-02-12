import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "./data.json";
import { Title } from "react-head";

const mockBlogs = data;

export default function BlogHomepage() {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 20;

    useEffect(() => {
        setBlogs(mockBlogs);
    }, []);

    const totalPages = Math.ceil(blogs.length / blogsPerPage);
    const displayedBlogs = blogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);

    return (
        <>
            <Title>ByteBlogger - All Blogs</Title>
            <div className="p-6 bg-gradient-to-b from-blue-50 to-indigo-100 min-h-screen">
                <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Latest Blogs</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedBlogs.map(blog => (
                        <Link key={blog.id} to={`${blog.slug}`} className="transform transition duration-300 hover:scale-105">
                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl cursor-pointer">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">{blog.title}</h2>
                                <p className="text-gray-600 mb-3">{blog.description.length > 100 ? blog.description.slice(0, 100) + "..." : blog.description}</p>
                                <div className="text-sm text-gray-500 flex justify-between items-center">
                                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">{blog.category}</span>
                                    <span>By <strong>{blog.author}</strong></span>
                                    <span>{blog.publishedDate}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-8 flex justify-center space-x-2">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-4 py-2 rounded-lg transition ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}
