import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "./data.json";
import { Title } from "react-head";

const mockBlogs = data;

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredBlogs, setFilteredBlogs] = useState(mockBlogs); // State for filtered blogs
    const blogsPerPage = 20;

    useEffect(() => {
        setBlogs(mockBlogs);
        setFilteredBlogs(mockBlogs); // Initialize with all blogs
    }, []);

    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
    const displayedBlogs = filteredBlogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);

    // Handle category filter
    const categories = ['Tech', 'Lifestyle', 'Health', 'Business']; // Example categories

    const handleCategoryFilter = (category) => {
        if (category === 'All') {
            setFilteredBlogs(mockBlogs);
        } else {
            const filtered = mockBlogs.filter(blog => blog.category === category);
            setFilteredBlogs(filtered);
        }
        setCurrentPage(1); // Reset to the first page after filtering
    };

    // Handle empty blogs state
    if (!filteredBlogs.length) {
        return (
            <div className="p-6 text-center">
                <h2 className="text-xl font-semibold text-gray-600">No Blogs Available</h2>
            </div>
        );
    }

    return (
        <>
            <Title>ByteBlogger - All Blogs</Title>
            <div className="p-6 bg-gradient-to-b from-blue-50 to-indigo-100 min-h-screen">
                <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Latest Blogs</h1>

                {/* Category filter */}
                <div className="mb-6 flex justify-center space-x-4">
                    <button
                        onClick={() => handleCategoryFilter('All')}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        All
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryFilter(category)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Displaying blogs */}
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
                    <button
                        onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-lg transition ${currentPage === 1 ? 'bg-gray-300 text-gray-500' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                    >
                        Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-4 py-2 rounded-lg transition ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded-lg transition ${currentPage === totalPages ? 'bg-gray-300 text-gray-500' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
}
