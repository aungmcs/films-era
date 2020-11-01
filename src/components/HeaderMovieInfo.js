import React from "react";
import { Link } from "react-router-dom";
import filmsEra from "../img/films_era.svg";

const HeaderMovieInfo = ({
  handlePageChange,
  handleSearchWordChange,
  movieInfo,
}) => {
  // ---------------------------------------------------
  return (
    <div>
      <div className="heading">
        <section className="container mx-auto py-8 px-6">
          {/* ---------- FILMS-ERA LOGO --------------- */}
          <Link to="/">
            <img
              className="sm:w-32 w-24 bg-black px-4 py-2 bg-opacity-25 rounded-lg mb-8 cursor-pointer"
              src={filmsEra}
              alt="logo"
            />
          </Link>
          {/* ----------- HEADING AND SEARCH BOX ------------------- */}
          <div className="flex flex-col items-center max-w-lg mx-auto">
            <h1 className="text-xl px-5 sm:px-0 sm:text-3xl text-white font-poppins tracking-wide mb-6 text-center">
              BROWSE INTERNATIONAL MOVIES
            </h1>
            <Link
              to="/"
              className="backhome flex border border-light w-1/2 sm:w-1/3 items-center py-2 rounded-md text-light"
            >
              <span>BROWSE MORE</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeaderMovieInfo;
