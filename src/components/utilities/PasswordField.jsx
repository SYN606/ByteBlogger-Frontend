import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

const PasswordField = ({ label = "Password", value, onChange, required = false }) => {
    const [isClose, setIsClose] = useState(true);
    const uniqueId = `${label.toLowerCase().replace(/\s+/g, "-")}-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div className="mb-2">
            <label htmlFor={uniqueId} className="block text-sm font-medium text-gray-900">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative mt-2 flex justify-end items-center">
                <input
                    type={isClose ? "password" : "text"}
                    id={uniqueId}
                    value={value}
                    onChange={onChange}
                    className="block w-full px-4 py-2 pr-10 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    required={required}
                />
                <span
                    className="absolute right-2 cursor-pointer"
                    onClick={() => setIsClose(!isClose)}
                >
                    {isClose ? <LuEyeOff size={24} /> : <LuEye size={24} />}
                </span>
            </div>
        </div>
    );
};

export default PasswordField;
