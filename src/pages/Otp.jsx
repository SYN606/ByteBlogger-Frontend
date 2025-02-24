import { useState } from "react";
import { FaLock } from "react-icons/fa";

export default function Otp() {
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const [resendDisabled, setResendDisabled] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (otp.length !== 6) {
            setError("OTP must be 6 digits.");
            return;
        }
        setError("");
        console.log("OTP Submitted:", otp);
    };

    const handleResend = () => {
        setResendDisabled(true);
        setTimeout(() => setResendDisabled(false), 30000); 
        console.log("OTP Resent");
    };

    return (
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
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg">Submit</button>
                </form>
                <div className="text-center mt-4">
                    <button
                        onClick={handleResend}
                        disabled={resendDisabled}
                        className="text-blue-400 hover:underline disabled:text-gray-500"
                    >
                        {resendDisabled ? "Resend in 30s" : "Resend OTP"}
                    </button>
                </div>
            </div>
        </div>
    );
}
