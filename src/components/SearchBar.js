import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query);
        }
    };

    return (
        <div className="flex justify-center items-center my-6">
            <input
                type="text"
                placeholder="Search for movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-80 p-3 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleSearch}
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-r-full transition duration-300"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
