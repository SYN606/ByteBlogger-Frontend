import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // React Router for navigation
import { FaLock } from "react-icons/fa";
import { Title } from "react-head";

export default function Otp() {
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const [resendDisabled, setResendDisabled] = useState(true);
    const [timer, setTimer] = useState(300); // 5 minutes countdown
    const navigate = useNavigate();

    // Start countdown timer
    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else {
            setResendDisabled(false);
        }
    }, [timer]);

    // Convert timer to MM:SS format
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (otp.length !== 6) {
            setError("OTP must be 6 digits.");
            return;
        }

        setError("");
        const user_id = localStorage.getItem("user_id"); // Get user ID from localStorage

        try {
            const response = await fetch("http://127.0.0.1:8000/api/user/verify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ otp, user_id }),
            });

            const data = await response.json();

            if (response.ok) {
                navigate("/sign_in"); // Redirect on success
            } else {
                setError(data.message || "Invalid OTP. Please try again.");
            }
        } catch (error) {
            setError("Network error. Please try again.");
        }
    };

    const handleResend = async () => {
        setResendDisabled(true);
        setTimer(300); // Restart 5 min timer

        try {
            const response = await fetch("http://127.0.0.1:8000/api/user/resend-otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ user_id: localStorage.getItem("user_id") }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Failed to resend OTP.");
                setResendDisabled(false);
            }
        } catch (error) {
            setError("Network error while resending OTP.");
            setResendDisabled(false);
        }
    };

    return (
        <>
            <Title>ByteBloggers - Submit otp</Title>
            <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
                <div className="w-full max-w-md p-6 bg-gray-800 shadow-lg rounded-2xl">
                    <div className="text-center mb-4">
                        <FaLock className="text-4xl mx-auto text-blue-400" />
                        <h2 className="text-xl font-semibold mt-2">Enter OTP</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Enter 6-digit OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            maxLength={6}
                            className="w-full p-3 text-center text-lg bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg"
                        >
                            Submit
                        </button>
                    </form>
                    <div className="text-center mt-4">
                        <button
                            onClick={handleResend}
                            disabled={resendDisabled}
                            className="text-blue-400 hover:underline disabled:text-gray-500"
                        >
                            {resendDisabled ? `Resend in ${formatTime(timer)}` : "Resend OTP"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
