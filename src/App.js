import React, { useEffect, useReducer } from "react";
import Movie from "./components/Movie.js";
import MovieWatchList from "./components/MovieWatchList.js";
import Heading from "./components/Heading.js";
import Footer from "./components/Footer.js";
import "aos/dist/aos.css";
import * as re from "./Reducer";

import { ReactComponent as VoidSvg } from "./img/void.svg";
import MovieContainer from "./components/MovieContainer.js";
import Header from "./components/Header.js";
import MovieInfo from "./components/MovieInfo.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const initialState = {
    movieList: [],
    pageNumber: 1,
    movieInfo: {},
    searchWord: "home",
    searchComplete: false,
    errorState: false,
    loadingState: false,
    watchList: [],
  };

  const [state, dispatch] = useReducer(re.reducer, initialState);

  const {
    movieList,
    searchWord,
    pageNumber,
    movieInfo,
    searchComplete,
    loadingState,
    errorState,
    watchList,
  } = state;

  const API_KEY = "b1863673";
  // const ERROR_STATEMENT = (
  //   <div className="error">
  //     <VoidSvg />
  //     <p>MOVIE NOT FOUND. TRY DIFFERENT KEYWORD</p>
  //   </div>
  // );

  //------------------- INITIAL DATA FETCH ---------------------------------

  // useEffect(() => {
  //   dispatch({
  //     type: re.DATA_FETCHING_STARTED,
  //   });
  //   fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=home`) // Object.Search[0].Title/Year/imdbID/Type/Poster
  //     .then((response) => response.json())
  //     .then((response) => {
  //       let temp = [];
  //       response.Search.forEach((movieObj) => {
  //         temp.push(movieObj);
  //       });
  //       dispatch({
  //         type: re.INITIAL_DATA_FETCHING_COMPLETED,
  //         payload: temp,
  //       });
  //     });
  // }, []);

  useEffect(() => {
    dispatch({
      type: re.DATA_FETCHING_STARTED,
    });
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchWord}&page=${pageNumber}`
    ) // Object.Search[0].Title/Year/imdbID/Type/Poster
      .then((response) => response.json())
      .then((response) => {
        if (response.Response === "False") {
          dispatch({
            type: re.ERROR_OCCURED,
          });
        } else {
          let temp = [];
          response.Search.forEach((movieObj) => {
            temp.push(movieObj);
          });

          dispatch({
            type: re.SEARCH_SUCCESSFUL,
            payload: temp,
          });
        }
      });
  }, [searchWord, pageNumber]);

  // -------------- SEARCH CALLBACK ----------------------------

  // const handleSearch = (keyWord, pageNumber) => {
  //   fetch(
  //     `https://www.omdbapi.com/?apikey=${API_KEY}&s=${keyWord}&page=${pageNumber}`
  //   ) // Object.Search[0].Title/Year/imdbID/Type/Poster
  //     .then((response) => response.json())
  //     .then((response) => {
  //       if (response.Response === "False") {
  //         dispatch({
  //           type: re.ERROR_OCCURED,
  //         });
  //       } else {
  //         let temp = [];
  //         response.Search.forEach((movieObj) => {
  //           temp.push(movieObj);
  //         });

  //         dispatch({
  //           type: re.SEARCH_SUCCESSFUL,
  //           payload: temp,
  //         });
  //       }
  //     });
  // };

  // ----------------- HANDLE SEARCH WORD CHANGE -------------------------
  const handleSearchWordChange = (word) => {
    dispatch({
      type: re.CHANGE_SEARCH_WORD,
      payload: word,
    });
  };

  const handlePageChange = (page) => {
    dispatch({
      type: re.CHANGE_PAGE,
      payload: page,
    });
  };

  // ------------------ HANDLE MOVIE INFORMATION SEARCH ---------------------
  const handleMovieInfo = (imdbId) => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbId}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.Response === "False") {
          dispatch({
            type: re.ERROR_OCCURED,
          });
        } else {
          dispatch({
            type: re.SET_IMDBID,
            payload: response,
          });
        }
      });
  };
  // ----------------------- STATE UPDATE TO ADD TO WATCHLIST ---------------------------

  const addWatchList = (id) => {
    // the id would be a string : imdbID
    dispatch({
      type: re.ADD_TO_WATCHLIST,
      payload: id,
    });

    dispatch({
      type: re.REMOVE_FROM_MOVIE_LIST,
      payload: id,
    });
  };

  // ----------------------- STATE UPDATE FOR REMOVING FROM WATCHLIST ---------------------------

  const removeWatchList = (id) => {
    dispatch({
      type: re.ADD_TO_MOVIE_LIST,
      payload: id,
    });

    dispatch({
      type: re.REMOVE_FROM_WATCHLIST,
      payload: id,
    });
  };

  //------------------- HANDLING THE SEARCH RESULTS  --------------------------------

  // const resultHeading = searchComplete
  //   ? "Searched movie list"
  //   : "Movies you might enjoy";

  // // mapping the retrived movie data to movie component
  // const movieCards = movieList.map((movieObj) => (
  //   <Movie movie={movieObj} key={movieObj.imdbID} watchList={addWatchList} />
  // ));

  // // adding the movie component list inside container
  // const movieCardsContainer = (
  //   <div className="result-container">{movieCards}</div>
  // );

  // // rendering the search result
  // const searchResultRender = loadingState
  //   ? "LOADING..."
  //   : errorState
  //   ? ERROR_STATEMENT
  //   : movieCardsContainer;

  // ------------------------ HANDLING WATCHLIST ITEMS ----------------------------------

  // const noWatchListMessage = (
  //   <div className="no-watchlist">
  //     <NotFoundSvg />
  //     <p>No Movies In Your Watch List Yet</p>
  //   </div>
  // );

  // const moviesInWatchList = watchList.map((movieObj) => (
  //   <MovieWatchList
  //     movie={movieObj}
  //     key={movieObj.imdbID}
  //     watchList={removeWatchList}
  //   />
  // ));

  // const watchListContainer = (
  //   <div className="result-container">{moviesInWatchList}</div>
  // );

  // const watchListRender =
  //   watchList.length > 0 ? watchListContainer : noWatchListMessage;

  //-----------------------------------------------------------------------
  return (
    <BrowserRouter>
      <Header
        handleSearchWordChange={handleSearchWordChange}
        handlePageChange={handlePageChange}
        movieInfo={movieInfo}
      />
      <Switch>
        <Route exact path="/">
          <MovieContainer
            handlePageChange={handlePageChange}
            loadingState={loadingState}
            movieList={movieList}
            errorState={errorState}
            pageNumber={pageNumber}
            handleMovieInfo={handleMovieInfo}
          />
        </Route>
        <Route path="/movie/">
          <MovieInfo movieInfo={movieInfo} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
