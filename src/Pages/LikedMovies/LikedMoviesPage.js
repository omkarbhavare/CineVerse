import React from "react";
import { Link } from "react-router-dom";
import "./LikedMoviesPage.css";
import { img_300, unavailable } from "../../config/config";

const LikedMoviesPage = () => {
  // Retrieve liked movies from localStorage or set an empty array
  const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];

  return (
    <div>
      <h2>Liked Movies</h2>
      <div className="liked-movies">
        {likedMovies.length > 0 ? (
          likedMovies.map((movie) => (
            <div key={movie.id} className="liked-movie">
              
                <img
                  src={movie.poster ? `${img_300}${movie.poster}` : unavailable}
                  alt={movie.title || movie.name}
                  className="liked-movie-poster"
                />
                <div className="liked-movie-details">
                  <h3>{movie.title || movie.name}</h3>
                  <p>{movie.release_date || movie.first_air_date}</p>
                  <p>Rating: {movie.vote_average}/10</p>
                </div>
              
            </div>
          ))
        ) : (
          <p>No liked movies found.</p>
        )}
      </div>
    </div>
  );
};

export default LikedMoviesPage;
