import React from "react";
import { Link } from "react-router-dom";
import moviePlaceholder from "../img/moviePic.png";

const Movie = ({ movie, handleMovieInfo }) => {
  return (
    <Link
      className="movie-box relative w-full cursor-pointer"
      to={`movie/${movie.imdbID}`}
      onClick={() => handleMovieInfo(movie.imdbID)}
    >
      <img
        className="movie-img rounded-xl w-full h-full object-center mx-auto shadow-lg"
        src={movie.Poster === "N/A" ? moviePlaceholder : movie.Poster}
        alt="movie poster"
      />

      <div className="movie-button absolute bottom-0 rounded-xl opacity-0 flex flex-col items-center justify-center h-full w-full">
        <svg
          className="bg-gray-500 text-gray-200 rounded-full opacity-75"
          width="40"
          height="40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </Link>
  );
};

export default Movie;
