import React from "react";
import { Link } from "react-router-dom";
import moviePlaceholder from "../img/moviePic.png";

const Movie = ({ movie, handleMovieInfo }) => {
  return (
    <div className="relative w-full">
      <img
        className="movie-img rounded-xl w-full h-full object-center mx-auto shadow-lg"
        src={movie.Poster === "N/A" ? moviePlaceholder : movie.Poster}
        alt="movie poster"
      />

      <Link
        to={`movie/${movie.imdbID}`}
        className="movie-button absolute bottom-0 rounded-xl opacity-0 flex flex-col items-center justify-end h-full w-full"
      >
        <button
          onClick={() => handleMovieInfo(movie.imdbID)}
          className="bg-main w-3/4 cursor-pointer text-white text-center py-2 px-3 text-xs sm:text-sm rounded mb-3"
        >
          More Info
        </button>
      </Link>
    </div>
  );
};

export default Movie;
