import { useState } from "react";
import PasswordField from "../utilities/PasswordField";
import { Title } from "react-head";

const ChangePassword = ({ onSubmit }) => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [passwordStrength, setPasswordStrength] = useState("");

    const validatePassword = (password) => {
        const minLength = password.length >= 8;
        const hasUpper = /[A-Z]/.test(password);
        const hasLower = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (!minLength) return "Password must be at least 8 characters long.";
        if (!hasUpper) return "Must include at least one uppercase letter.";
        if (!hasLower) return "Must include at least one lowercase letter.";
        if (!hasNumber) return "Must include at least one number.";
        if (!hasSpecial) return "Must include at least one special character.";

        return "";
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
        setPasswordStrength(validatePassword(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (passwordStrength) {
            setError("New password does not meet the requirements!");
            return;
        }

        if (newPassword !== confirmPassword) {
            setError("New passwords do not match!");
            return;
        }

        setError(""); // Clear errors on success
        onSubmit({ oldPassword, newPassword });
    };

    return (
        <>
        <Title>Change your password</Title>
            <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 sm:p-8"
                >
                    <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">Change Password</h2>

                    <PasswordField
                        label="Old Password"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        required
                    />

                    <PasswordField
                        label="New Password"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                        required
                    />

                    {passwordStrength && (
                        <p className="text-sm text-red-500 mt-1">{passwordStrength}</p>
                    )}

                    <PasswordField
                        label="Confirm New Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}

                    <button
                        type="submit"
                        className={`w-full mt-4 px-4 py-3 text-white font-medium rounded-md transition-all duration-300 
                    ${newPassword && newPassword === confirmPassword && !passwordStrength
                                ? "bg-indigo-600 hover:bg-indigo-700 shadow-md"
                                : "bg-gray-400 cursor-not-allowed"}`}
                        disabled={!newPassword || newPassword !== confirmPassword || passwordStrength}
                    >
                        Change Password
                    </button>
                </form>
            </div>
        </>
    );
};

export default ChangePassword;
