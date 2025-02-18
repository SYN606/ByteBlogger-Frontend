import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";

export default function RenderBlog() {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogData = () => {
            setLoading(true);
            try {
                const foundBlog = data.find((b) => b.slug === slug);
                if (foundBlog) {
                    setBlog(foundBlog);
                } else {
                    setError("Blog not found.");
                }
            } catch (err) {
                setError("Failed to load blog.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogData();
    }, [slug]);

    if (loading) {
        return <p className="text-center text-gray-500">Loading...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    if (!blog) {
        return <p className="text-center text-gray-500">Blog not found or missing data.</p>;
    }

    return (
        <>
            <div className="p-6 bg-gray-100 min-h-screen flex justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>
                    <div className="flex justify-between items-center text-gray-500 text-sm mb-4">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                            {blog.category}
                        </span>
                        <p>By {blog.author} • {new Date(blog.publishedDate).toLocaleDateString()}</p>
                    </div>
                    {blog.image && (
                        <img
                            src={blog.image}
                            alt="Blog Cover"
                            className="w-full h-64 object-cover rounded-lg mb-6"
                        />
                    )}
                    <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
                </div>
            </div>
            
        </>
    );
}
