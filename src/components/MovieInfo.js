import React from "react";

const MovieInfo = ({ movieInfo }) => {
  // const movie = {
  //   Title: "Inception",
  //   Year: "2010",
  //   Rated: "PG-13",
  //   Released: "16 Jul 2010",
  //   Runtime: "148 min",
  //   Genre: "Action, Adventure, Sci-Fi, Thriller",
  //   Director: "Christopher Nolan",
  //   Writer: "Christopher Nolan",
  //   Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
  //   Plot:
  //     "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  //   Language: "English, Japanese, French",
  //   Country: "USA, UK",
  //   Awards: "Won 4 Oscars. Another 152 wins & 218 nominations.",
  //   Poster:
  //     "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  //   Ratings: [
  //     { Source: "Internet Movie Database", Value: "8.8/10" },
  //     { Source: "Rotten Tomatoes", Value: "87%" },
  //     { Source: "Metacritic", Value: "74/100" },
  //   ],
  //   Metascore: "74",
  //   imdbRating: "8.8",
  //   imdbVotes: "2,018,261",
  //   imdbID: "tt1375666",
  //   Type: "movie",
  //   DVD: "N/A",
  //   BoxOffice: "N/A",
  //   Production: "Syncopy, Warner Bros.",
  //   Website: "N/A",
  //   Response: "True",
  // };

  // --------------------------------------------------------

  return (
    <div className="sm:max-w-xl lg:max-w-3xl mx-auto mt-12 flex">
      {/* ----------- MOIVE POSTER ON THE LEFT SIDE ---------------- */}
      <section className="flex flex-col w-1/4 h-full">
        <img
          className="w-full rounded-lg"
          src={movieInfo.Poster}
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
      <section className="flex flex-col pl-5 w-3/4">
        {/* --------- Movie Title ---------------- */}
        <h1 className="py-3 px-6 w-auto bg-main text-white font-poppins text-2xl rounded-lg mb-4 border-l-4 border-light">
          {movieInfo.Title}
        </h1>
        <div className="flex">
          {/* ------ Artist and Plot -------------- */}
          <div className="flex flex-col w-3/5 mr-3 h-full justify-between">
            <div className="bg-main px-4 py-6 font-poppins rounded-lg mb-3">
              <h2 className="text-light text-md">Artists</h2>
              <p className="text-white text-md font-thin">{movieInfo.Actors}</p>
            </div>
            <div className="bg-main px-4 py-6 font-poppins rounded-lg">
              <h2 className="text-light text-md">Plot</h2>
              <p className="text-white text-md font-thin">{movieInfo.Plot}</p>
            </div>
          </div>
          {/* -------- Creator, Genere, and Rating --------------- */}
          <div className="flex flex-col w-2/5 h-full justify-start">
            <div className="bg-main p-4 font-poppins rounded-lg">
              <h2 className="text-light text-md">Director</h2>
              <p className="text-white text-md font-thin">
                {movieInfo.Director}
              </p>
            </div>
            <div className="bg-main p-4 font-poppins rounded-lg mt-3">
              <h2 className="text-light text-md">Genre</h2>
              <p className="text-white text-md font-thin">{movieInfo.Genre}</p>
            </div>
            <div className="bg-main p-4 font-poppins rounded-lg mt-3">
              <h2 className="text-light text-md">Rating</h2>
              <p className="text-white text-md font-thin">
                {movieInfo.imdbRating}/10
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieInfo;
