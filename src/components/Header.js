import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import filmsEra from "../img/films_era.svg";

const Header = ({ handlePageChange, handleSearchWordChange, movieInfo }) => {
  // ----------- STATES -----------------------
  const [searchTerm, setSearchTerm] = useState("");

  // ---------------------------------------------------
  return (
    <div>
      <div className="heading">
        <section className="container mx-auto py-8 px-6">
          {/* ---------- FILMS-ERA LOGO --------------- */}
          <Link to="/">
            <img
              className="w-32 bg-black px-4 py-2 bg-opacity-25 rounded-lg mb-8 cursor-pointer"
              src={filmsEra}
              alt="logo"
            />
          </Link>
          {/* ----------- HEADING AND SEARCH BOX ------------------- */}
          <div className="flex flex-col items-center max-w-lg mx-auto">
            <h1 className="text-2xl px-5 sm:px-0 sm:text-3xl text-white font-poppins tracking-wide mb-6 text-center">
              BROWSE INTERNATIONAL MOVIES
            </h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearchWordChange(searchTerm);
                handlePageChange(1);
              }}
              className="flex items-center justify-center w-full"
            >
              <svg
                className="text-light -mr-10"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
                value={searchTerm}
                className="bg-transparent border-2 border-yellow-500 p-2 pl-12 rounded-full outline-none text-white w-3/4"
                type="text"
                placeholder="Search movies..."
              />
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
