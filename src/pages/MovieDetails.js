import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../services/api";

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetchMovieDetails(id).then(setMovie).catch(console.error);
    }, [id]);

    if (!movie) return <p>Loading...</p>;

    return (
        <div>
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Title}</h2>
            <p>{movie.Plot}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Year:</strong> {movie.Year}</p>
            <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
        </div>
    );
};

export default MovieDetails;
