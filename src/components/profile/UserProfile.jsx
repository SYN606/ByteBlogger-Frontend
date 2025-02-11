import React, { useState } from "react";

const Profile = () => {
    const [fullName, setFullName] = useState("Edogaru");
    const [username, setUsername] = useState("edogaru123");
    const [email, setEmail] = useState("edogaru@mail.com.my");

    const handleChange = (e, field) => {
        if (field === "fullName") setFullName(e.target.value);
        if (field === "username") setUsername(e.target.value);
        if (field === "email") setEmail(e.target.value);
    };

    const handleSave = () => {
        console.log("Changes saved!");
        console.log("Full Name:", fullName);
        console.log("Username:", username);
        console.log("Email:", email);
    };

    return (
        <div className="container mx-auto p-6 bg-white rounded-xl shadow-xl mt-5 max-w-4xl">
            {/* Avatar Section */}
            <div className="flex justify-center items-center mb-6">
                <div className="relative">
                    <img
                        className="rounded-full w-40 h-40 object-cover"
                        src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                        alt="Avatar"
                    />
                    <div className="absolute bottom-0 right-0 bg-purple-600 p-2 rounded-full cursor-pointer hover:bg-purple-700 transition duration-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 11l-7 7-7-7"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="space-y-6">
                <div>
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                        value={fullName}
                        onChange={(e) => handleChange(e, "fullName")}
                        placeholder="Full Name"
                    />
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700">Username</label>
                    <input
                        type="text"
                        className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                        value={username}
                        onChange={(e) => handleChange(e, "username")}
                        placeholder="Username"
                    />
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                        value={email}
                        onChange={(e) => handleChange(e, "email")}
                        placeholder="Email Address"
                    />
                </div>
            </div>

            {/* Save Button */}
            <div className="mt-6 flex justify-center">
                <button
                    onClick={handleSave}
                    className="bg-purple-800 text-white py-2 px-8 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default Profile;
