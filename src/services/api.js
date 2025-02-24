const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export const fetchMovies = async (query, page = 1, type = "") => {
    try {
        const response = await fetch(
            `${BASE_URL}&s=${query}&page=${page}&type=${type}`
        );
        const data = await response.json();
        if (data.Response === "True") {
            return data;
        }
        throw new Error(data.Error);
    } catch (error) {
        throw error;
    }
};

export const fetchMovieDetails = async (movieId) => {
    try {
        const response = await fetch(`${BASE_URL}&i=${movieId}`);
        const data = await response.json();
        if (data.Response === "True") {
            return data;
        }
        throw new Error(data.Error);
    } catch (error) {
        throw error;
    }
};