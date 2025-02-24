import React, { useState } from "react";
import { Title } from "react-head";
import { PasswordField, InputField } from "../components";
import { Link } from "react-router-dom";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:8000/api/user/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Login successful:", data);
                localStorage.setItem("access_token", data.access);
                localStorage.setItem("refresh_token", data.refresh);
            } else {
                console.error("Login failed:", data);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <Title>ByteBlogger - Sign In</Title>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <InputField
                            type="email"
                            label="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <PasswordField
                            label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 flex items-center justify-between">
                        <Link
                            to="/forgot_password"
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            Forgot your password?
                        </Link>
                    </div>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Don’t have an account?{" "}
                        <Link to="/sign_up" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Sign Up now
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
