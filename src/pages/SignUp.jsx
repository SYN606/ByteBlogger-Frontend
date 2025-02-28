import React, { useState } from "react";
import { Title } from "react-head";
import { InputField, PasswordField } from "../components";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    // Function to check if username or email is already taken
    const checkUsernameEmail = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/user/check-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Username or email validation failed.");
            }

            return data.available; // true if available, false if taken
        } catch (error) {
            setError(error.message);
            return false;
        }
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            setLoading(false);
            return;
        }

        // Check if username or email exists
        const isAvailable = await checkUsernameEmail();
        if (!isAvailable) {
            setLoading(false);
            return; // Stop registration if username/email is taken
        }

        const userData = {
            first_name: firstName,
            last_name: lastName,
            username,
            email,
            password,
        };

        try {
            const response = await fetch("http://127.0.0.1:8000/api/user/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok && data.response === true) {
                localStorage.setItem("user_id", data.user_id);
                navigate("/submit_otp");
            } else {
                setError(data.message || "Registration failed. Try again.");
            }
        } catch (error) {
            setError("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Title>ByteBlogger - Create your account.</Title>

            <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-10 text-center text-3xl font-extrabold text-indigo-600">
                        Create your account
                    </h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md bg-white p-8 shadow-lg rounded-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <InputField
                                label="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                            <InputField
                                label="Last Name (Optional)"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>

                        <InputField
                            label="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />

                        <InputField
                            label="Email Address"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <PasswordField
                                label="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <PasswordField
                                label="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        {loading && <div className="w-full h-1 bg-indigo-600 animate-pulse"></div>}

                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-semibold shadow-sm hover:bg-indigo-500"
                            disabled={loading}
                        >
                            {loading ? "Processing..." : "Sign up"}
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-500">
                        Already have an account?{" "}
                        <Link to='/sign_in' className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
