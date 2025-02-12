import React from "react";

export default function RenderBlog({ blog }) {
    if (!blog) return <p className="text-center text-gray-500">No blog data available.</p>;

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
                {/* Blog Title */}
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>

                {/* Blog Meta (Category, Author, Date) */}
                <div className="flex justify-between items-center text-gray-500 text-sm mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {blog.category}
                    </span>
                    <p>By {blog.author} • {new Date(blog.date).toLocaleDateString()}</p>
                </div>

                {/* Blog Image */}
                {blog.image && (
                    <img
                        src={blog.image}
                        alt="Blog Cover"
                        className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                )}

                {/* Blog Content */}
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
            </div>
        </div>
    );
}
