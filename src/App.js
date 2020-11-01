import React, { useEffect, useReducer } from "react";
import Footer from "./components/Footer.js";
import "aos/dist/aos.css";
import * as re from "./Reducer";

import MovieContainer from "./components/MovieContainer.js";
import Header from "./components/Header.js";
import MovieInfo from "./components/MovieInfo.js";
import HeaderMovieInfo from "./components/HeaderMovieInfo.js";
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
    loadingState,
    errorState,
  } = state;

  const API_KEY = "b1863673";

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
    dispatch({
      type: re.DATA_FETCHING_STARTED,
    });
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

  //-----------------------------------------------------------------------
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Switch>
          <Route exact path="/">
            <Header
              handleSearchWordChange={handleSearchWordChange}
              handlePageChange={handlePageChange}
              movieInfo={movieInfo}
            />
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
            <HeaderMovieInfo />
            <MovieInfo movieInfo={movieInfo} loadingState={loadingState} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
