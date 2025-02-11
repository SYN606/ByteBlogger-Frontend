const InputField = ({ type = "text", label, value, onChange, required = false }) => {
    const uniqueId = `${label ? label.toLowerCase().replace(/\s+/g, "-") : "input"}-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div className="mb-2">
            <label htmlFor={uniqueId} className="block text-sm font-medium text-gray-900">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                type={type}
                id={uniqueId}
                value={value}
                onChange={onChange}
                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                required={required}
            />
        </div>
    );
};

export default InputField;
