import React, { useState } from "react";
import { Title } from "react-head";
import { FaEdit, FaTrash, FaPlus, FaCommentDots, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const initialBlogs = [
    { id: 1, title: "Understanding React Hooks", author: "John Doe", date: "2024-02-12", comments: 10, readers: 120 },
    { id: 2, title: "Advanced State Management with Redux", author: "Jane Smith", date: "2024-02-10", comments: 5, readers: 95 },
    { id: 3, title: "Optimizing Performance in React Apps", author: "Mike Johnson", date: "2024-02-08", comments: 8, readers: 110 },
];

export default function BlogManagement() {
    const [blogs, setBlogs] = useState(initialBlogs);

    const deleteBlog = (id) => {
        setBlogs(blogs.filter(blog => blog.id !== id));
    };

    const totalComments = blogs.reduce((sum, blog) => sum + blog.comments, 0);
    const totalReaders = blogs.reduce((sum, blog) => sum + blog.readers, 0);

    return (
        <>
            <Title>ByteBloggers - Blogs management page.</Title>
            <div className="p-8 bg-gray-100 min-h-screen">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Blog Management</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-around">
                        <div>
                            <FaCommentDots className="w-12 h-12 text-blue-600" />
                            <h2 className="text-xl font-semibold text-gray-700">Total Comments</h2>
                            <p className="text-4xl font-bold text-blue-600">{totalComments}</p>
                        </div>
                        <div>
                            <FaUsers className="w-12 h-12 text-green-600" />
                            <h2 className="text-xl font-semibold text-gray-700">Total Readers</h2>
                            <p className="text-4xl font-bold text-green-600">{totalReaders}</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Comments Analytics</h2>
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={blogs}>
                                <XAxis dataKey="title" stroke="#888888" tick={{ fontSize: 12 }} />
                                <YAxis stroke="#888888" />
                                <Tooltip />
                                <Bar dataKey="comments" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-gray-700">All Blogs</h2>
                        <Link to="create_new_blog"
                            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                            <FaPlus className="mr-2" /> Add New Blog
                        </Link>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                            <thead>
                                <tr className="bg-gray-200 text-gray-700">
                                    <th className="p-4 text-left">Title</th>
                                    <th className="p-4 text-left">Author</th>
                                    <th className="p-4 text-left">Date</th>
                                    <th className="p-4 text-center">Comments</th>
                                    <th className="p-4 text-center">Readers</th>
                                    <th className="p-4 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blogs.map(blog => (
                                    <tr key={blog.id} className="border-t hover:bg-gray-100 transition">
                                        <td className="p-4">{blog.title}</td>
                                        <td className="p-4">{blog.author}</td>
                                        <td className="p-4">{blog.date}</td>
                                        <td className="p-4 text-center">{blog.comments}</td>
                                        <td className="p-4 text-center">{blog.readers}</td>
                                        <td className="p-4 flex justify-center space-x-4">
                                            <button className="text-green-600 hover:text-green-800 transition">
                                                <FaEdit /></button>

                                            <button className="text-red-600 hover:text-red-800 transition"
                                                onClick={() => deleteBlog(blog.id)}>

                                                <FaTrash /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
