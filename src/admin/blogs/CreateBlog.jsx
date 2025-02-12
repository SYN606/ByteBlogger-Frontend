import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "tailwindcss/tailwind.css";

export default function CreateBlog() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [content, setContent] = useState("");

    const handleImageChange = (e) => {
        if (e.target.files.length > 0) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBlog = { title, description, image, content };
        console.log("Blog Submitted:", newBlog);
    };

    return (
        <div className="p-10 bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen flex flex-col items-center">
            <h1 className="text-4xl font-extrabold mb-8 text-gray-800">Create a New Blog</h1>
            <form className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-3xl" onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label className="block font-semibold text-lg mb-2">Title (max 50 characters)</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value.slice(0, 50))}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block font-semibold text-lg mb-2">Short Description (max 250 characters, optional)</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value.slice(0, 250))}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                    ></textarea>
                </div>
                <div className="mb-6">
                    <label className="block font-semibold text-lg mb-2">Upload Image (optional)</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                    {image && <img src={image} alt="Preview" className="mt-4 w-40 h-40 object-cover rounded-lg shadow-md" />}
                </div>
                <div className="mb-6">
                    <label className="block font-semibold text-lg mb-2">Content</label>
                    <Editor
                        apiKey="your-tinymce-api-key"
                        value={content}
                        init={{
                            height: 300,
                            menubar: false,
                            plugins: [
                                "advlist autolink lists link image charmap print preview anchor",
                                "searchreplace visualblocks code fullscreen",
                                "insertdatetime media table paste code help wordcount"
                            ],
                            toolbar:
                                "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify |       bullist numlist outdent indent | removeformat | help"
                        }}
                        onEditorChange={(content) => setContent(content)}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition"
                >
                    Publish Blog
                </button>
            </form>
        </div>
    );
}
