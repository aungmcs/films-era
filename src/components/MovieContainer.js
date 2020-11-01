import React from "react";
import Movie from "./Movie";
import NotFoundSvg from "../img/not-found.svg";
import Pagination from "./Pagination";
import LoadingGif from "../img/infinity_loading.svg";

const MovieContainer = ({
  movieList,
  loadingState,
  errorState,
  handlePageChange,
  pageNumber,
  handleMovieInfo,
}) => {
  return (
    <div>
      {loadingState ? (
        <img
          className="mx-auto max-w-sm mt-10"
          src={LoadingGif}
          alt="loading animation"
        />
      ) : !errorState ? (
        // ---------- MOVIE CONTAINER WITH PAGINATION -----------------------
        <div className="mt-8">
          <h1 className="text-center text-gray-400 text-xl font-poppins tracking-widest uppercase">
            Movies You Might Enjoy
          </h1>
          <Pagination
            handlePageChange={handlePageChange}
            pageNumber={pageNumber}
          />
          <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 p-10">
            {movieList.map((movie) => (
              <Movie
                key={movie.imdbID}
                movie={movie}
                handleMovieInfo={handleMovieInfo}
              />
            ))}
          </div>
        </div>
      ) : (
        // -------------- MOVIE NOT FOUND IMAGE ----------------------
        <div className="flex flex-col w-full justify-center items-center mt-24">
          <img className="w-1/4" src={NotFoundSvg} alt="not found"></img>
          <h1 className="text-center text-gray-500 text-xl font-poppins tracking-widest mt-8">
            MOVIE NOT FOUND. A DIFFERENT KEYWORD MIGHT WORK:)
          </h1>
        </div>
      )}
    </div>
  );
};

export default MovieContainer;
