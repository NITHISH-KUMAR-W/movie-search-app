import React, { useState } from "react";

const FilterDropdown = ({ onFilterChange }) => {
    const [selectedFilter, setSelectedFilter] = useState("");

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedFilter(selectedValue);
        onFilterChange(selectedValue); // Pass filter value to parent component
    };

    return (
        <div className="flex justify-center my-4">
            <select
                value={selectedFilter}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="">All</option>
                <option value="movie">Movies</option>
                <option value="series">Series</option>
                <option value="episode">Episodes</option>
            </select>
        </div>
    );
};

export default FilterDropdown;
