import React, { useState } from "react";
import JoditEditor from "jodit-react";
import "tailwindcss/tailwind.css";
import { Title } from "react-head";

export default function CreateBlog() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);
    const [content, setContent] = useState("");

    const editorConfig = {
        buttons: "bold,italic,underline,|,ul,ol,|,font,fontsize,|,align,undo,redo,|,hr,|,source",
        removeButtons: "file,video,print,about",
        height: 400,
        style: {
            body: {
                fontSize: "16px",
                lineHeight: "1.6",
                fontFamily: "Arial, sans-serif"
            }
        }
    };

    const handleImageChange = (e) => {
        if (e.target.files.length > 0) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBlog = { title, description, category, image, content };
        console.log("Blog Submitted:", newBlog);
    };

    const categories = ["Technology", "Health", "Business", "Education", "Entertainment", "Travel"];

    return (
        <>
            <Title>ByteBloggers - Create a Blog.</Title>
            <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen">
                <h1 className="text-4xl font-extrabold mb-8 text-gray-800 text-center">Create a New Blog</h1>
                <form className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-6xl mx-auto" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
                        <div>
                            <label className="block font-semibold text-lg mb-2">Title (max 50 characters)</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value.slice(0, 50))}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-lg mb-2">Category</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                                required
                            >
                                <option value="" disabled>Select a category</option>
                                {categories.map((cat, index) => (
                                    <option key={index} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block font-semibold text-lg mb-2">Short Description (max 250 characters, optional)</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value.slice(0, 250))}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                        ></textarea>
                    </div>
                    <div className="mt-6">
                        <label className="block font-semibold text-lg mb-2">Upload Image (optional)</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        {image && <img src={image} alt="Preview" className="mt-4 w-full max-w-md object-cover rounded-lg shadow-md" />}
                    </div>
                    <div className="mt-6">
                        <label className="block font-semibold text-lg mb-2">Content</label>
                        <JoditEditor
                            value={content}
                            onChange={setContent}
                            config={editorConfig}
                            className="border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="mt-6 text-center">
                        <button
                            type="submit"
                            className="w-full md:w-1/2 bg-blue-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition"
                        >
                            Publish Blog
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
