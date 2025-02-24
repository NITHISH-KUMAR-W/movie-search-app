import React, { useState, useEffect } from "react";
import { fetchMovies } from "../services/api";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import FilterDropdown from "../components/FilterDropdown";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [type, setType] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Handle search input
    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
        setPage(1);
    };

    // Fetch movies whenever query, page, or type changes
    useEffect(() => {
        if (!query) return;

        setLoading(true);
        setError("");

        fetchMovies(query, page, type)
            .then((data) => {
                if (data.Response === "True") {
                    setMovies(data.Search || []);
                    setTotalPages(Math.ceil(data.totalResults / 10));
                } else {
                    setMovies([]);
                    setTotalPages(1);
                    setError("No movies found. Try a different search.");
                }
            })
            .catch(() => setError("Failed to fetch movies. Please try again later."))
            .finally(() => setLoading(false));
    }, [query, page, type]);

    return (
        <div className="container mx-auto p-4">
            {/* Search Bar */}
            <SearchBar onSearch={handleSearch} />

            {/* Filter Dropdown */}
            <FilterDropdown onFilterChange={setType} />

            {/* Show Loading Spinner */}
            {loading && <p className="text-center text-blue-500">Loading movies...</p>}

            {/* Show Error Message */}
            {error && <p className="text-center text-red-500">{error}</p>}

            {/* Movie List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {movies.length > 0 ? (
                    movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
                ) : (
                    !loading && <p className="text-center col-span-3">No movies to display.</p>
                )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
            )}
        </div>
    );
};

export default Home;
