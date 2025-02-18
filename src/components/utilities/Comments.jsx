import React, { useState } from 'react';
import { Editor } from 'jodit-react';

// Mock data for comments (this could be fetched from an API in a real application)
const initialComments = [
    {
        id: 1,
        user: 'John Doe',
        date: '2025-02-18',
        content: 'This is a great post! I love learning about tech and blogging.',
    },
    {
        id: 2,
        user: 'Jane Smith',
        date: '2025-02-17',
        content: 'Very informative! Thanks for sharing these tips on blogging.',
    },
    {
        id: 3,
        user: 'Michael Lee',
        date: '2025-02-16',
        content: 'Great insights, I’ll try out some of your suggestions on SEO.',
    },
];

const Comments = () => {
    const [comments, setComments] = useState(initialComments); // State to hold comments
    const [newComment, setNewComment] = useState(''); // State for the new comment
    const [editorContent, setEditorContent] = useState(''); // Content of the editor

    const handleEditorChange = (newContent) => {
        setEditorContent(newContent);
    };

    const handleCommentSubmit = () => {
        if (editorContent.trim()) {
            const newCommentObj = {
                id: comments.length + 1,
                user: 'Anonymous', // This could be dynamic if you have a login system
                date: new Date().toLocaleDateString(),
                content: editorContent,
            };
            setComments([newCommentObj, ...comments]); // Add the new comment to the beginning of the list
            setEditorContent(''); // Clear the editor after submission
        }
    };

    return (
        <div className="comments-section max-w-3xl mx-auto p-6">
            <h2 className="text-3xl font-semibold mb-6">Comments</h2>

            {/* Displaying existing comments */}
            <div className="comments-list mb-6">
                {comments.map((comment) => (
                    <div key={comment.id} className="comment mb-4 p-4 bg-gray-100 rounded-lg shadow-md">
                        <p className="font-semibold text-lg">{comment.user}</p>
                        <p className="text-sm text-gray-500">{comment.date}</p>
                        <p className="mt-2 text-gray-700">{comment.content}</p>
                    </div>
                ))}
            </div>

            {/* New Comment Section with Jodit Editor */}
            <div className="new-comment p-4 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Add a Comment</h3>
                <Editor
                    value={editorContent}
                    onChange={handleEditorChange}
                    config={{
                        readonly: false, // Allow editing
                        toolbarSticky: false, // Show toolbar on scroll
                        buttons: ['bold', 'italic', 'underline', 'strikethrough', 'font', 'fontsize', 'paragraph', 'link'],
                        placeholder: 'Write your comment here...',
                        minHeight: 150,
                    }}
                    className="mb-4"
                />
                <button
                    onClick={handleCommentSubmit}
                    className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Submit Comment
                </button>
            </div>
        </div>
    );
};

export default Comments;
