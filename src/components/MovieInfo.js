import React from "react";
import posterPlaceholder from "../img/moviePic.png";
import loadingGif from "../img/infinity_loading.svg";

const MovieInfo = ({ movieInfo, loadingState }) => {
  return (
    <div>
      {loadingState ? (
        <img
          className="max-w-md mx-auto mt-5"
          src={loadingGif}
          alt="loading animation"
        />
      ) : (
        <div className="sm:max-w-xl lg:max-w-3xl mx-auto mt-12 flex">
          {/* ----------- MOIVE POSTER ON THE LEFT SIDE ---------------- */}
          <section className="sm:flex flex-col w-1/4 h-full hidden">
            <img
              className="w-full rounded-lg"
              src={
                movieInfo.Poster === "N/A"
                  ? posterPlaceholder
                  : movieInfo.Poster
              }
              alt="moive poster"
            />
            <a
              href={`https://www.imdb.com/title/${movieInfo.imdbID}`}
              target="__blank"
              className="p-3 text-lg text-center font-poppins mt-4 rounded-lg bg-light text-white cursor-pointer"
            >
              Trailer Here
            </a>
          </section>
          {/* -------- DETAILED MOVIE INFO ON THE RIGHT SIDE ------------------- */}
          <section className="flex flex-col px-5 mx-auto sm:w-3/4">
            {/* --------- Movie Title ---------------- */}
            <h1 className="py-3 px-6 w-full bg-main text-white font-poppins mb-3 text-xl sm:text-2xl rounded-lg border-l-4 border-light">
              {movieInfo.Title}
            </h1>

            <div className="flex">
              {/* ------ Artist and Plot -------------- */}
              <div className="flex flex-col w-3/5 mr-3 h-full justify-start">
                <div className="bg-main px-4 py-6 font-poppins rounded-lg mb-3">
                  <h2 className="text-light text-md">Artists</h2>
                  <p className="text-white text-md font-thin">
                    {movieInfo.Actors}
                  </p>
                </div>
                <div className="bg-main px-4 py-6 font-poppins rounded-lg">
                  <h2 className="text-light text-md">Plot</h2>
                  <p className="text-white text-md font-thin">
                    {movieInfo.Plot}
                  </p>
                </div>
                <div className="bg-main p-4 font-poppins rounded-lg mt-3 block sm:hidden">
                  <h2 className="text-light text-md">Genre</h2>
                  <p className="text-white text-md font-thin">
                    {movieInfo.Genre}
                  </p>
                </div>
              </div>
              {/* -------- Creator, Genere, and Rating --------------- */}
              <div className="flex flex-col w-2/5 h-full justify-start">
                <img
                  className="w-full rounded-lg mb-3 block sm:hidden"
                  src={
                    movieInfo.Poster === "N/A"
                      ? posterPlaceholder
                      : movieInfo.Poster
                  }
                  alt="moive poster"
                />
                <a
                  href={`https://www.imdb.com/title/${movieInfo.imdbID}`}
                  target="__blank"
                  className="p-3 text-sm text-center mb-3 font-poppins sm:hidden rounded-lg bg-light text-white cursor-pointer"
                >
                  Trailer Here
                </a>
                <div className="bg-main p-4 font-poppins rounded-lg">
                  <h2 className="text-light text-md">Director</h2>
                  <p className="text-white text-md font-thin">
                    {movieInfo.Director}
                  </p>
                </div>
                <div className="bg-main p-4 font-poppins rounded-lg mt-3 hidden sm:block">
                  <h2 className="text-light text-md">Genre</h2>
                  <p className="text-white text-md font-thin">
                    {movieInfo.Genre}
                  </p>
                </div>
                <div className="bg-main p-4 font-poppins rounded-lg mt-3">
                  <h2 className="text-light text-md">Rating</h2>
                  <p className="text-white text-md font-thin">
                    <span className="text-3xl text-white">
                      <svg
                        className="inline text-light"
                        width="25"
                        height="25"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {movieInfo.imdbRating}
                    </span>
                    /10
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default MovieInfo;
