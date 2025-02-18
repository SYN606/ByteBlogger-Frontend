import { useState } from 'react';

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className="sm:mr-6 flex justify-center">
            <input
                type="text"
                placeholder="Search articles..."
                value={query}
                onChange={handleSearch}
                className="w-full max-w-md p-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400 shadow-md"
            />
        </div>
    );
}
