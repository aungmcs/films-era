import React, { useEffect, useReducer} from 'react';
import Movie from './components/Movie.js'
import MovieWatchList from './components/MovieWatchList.js'
import Heading from './components/Heading.js'
import Footer from './components/Footer.js'
import AOS from 'aos'
import 'aos/dist/aos.css'
import * as  re from './Reducer'

import {ReactComponent as NotFoundSvg} from './img/not-found.svg'
import {ReactComponent as VoidSvg} from './img/void.svg'
import './styles/App.css';

function App() {

  const initialState = {
    movieList: [],
    searchComplete: false,
    errorState: false,
    loadingState: false,
    watchList: []
  }
  


  const [state, dispatch] = useReducer(re.reducer, initialState)

  const API_KEY = 'b1863673'
  const ERROR_STATEMENT = (<div className='error'>
                              <VoidSvg />
                              <p>MOVIE NOT FOUND. TRY DIFFERENT KEYWORD</p>
                          </div>)


//------------------- INITIAL DATA FETCH ---------------------------------

  useEffect(() => {
    dispatch({
      type: re.DATA_FETCHING_STARTED
    })
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=jungle`) // Object.Search[0].Title/Year/imdbID/Type/Poster
    .then(response => response.json())
    .then(response => {
      let temp = []
      response.Search.forEach(movieObj => {
        temp.push(movieObj)
      })
      dispatch({
        type: re.INITIAL_DATA_FETCHING_COMPLETED,
        payload: temp
      })
    })
  }, [])


// -------------- SEARCH CALLBACK ----------------------------

  const searchWord = (keyWord) => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${keyWord}`) // Object.Search[0].Title/Year/imdbID/Type/Poster
    .then(response => response.json())
    .then(response => {
      if (response.Response === 'False'){
        dispatch({
          type: re.ERROR_OCCURED
        })
      }else{
        let temp = []
        response.Search.forEach(movieObj => {
          temp.push(movieObj)
        })

        dispatch({
          type: re.SEARCH_SUCCESSFUL,
          payload: temp
        })
      }
    })
  }


// ----------------------- STATE UPDATE TO ADD TO WATCHLIST ---------------------------

  const addWatchList = (id) => {    
    // the id would be a string : imdbID
    dispatch({
      type: re.ADD_TO_WATCHLIST,
      payload: id
    })

    dispatch({
      type: re.REMOVE_FROM_MOVIE_LIST,
      payload: id
    })
  }


// ----------------------- STATE UPDATE FOR REMOVING FROM WATCHLIST ---------------------------

  const removeWatchList = (id) => {
    dispatch({
      type: re.ADD_TO_MOVIE_LIST,
      payload: id
    })

    dispatch({
      type: re.REMOVE_FROM_WATCHLIST,
      payload: id
    })
  }


  const {movieList, searchComplete, loadingState, errorState, watchList} = state


//------------------- HANDLING THE SEARCH RESULTS  --------------------------------

  const resultHeading = searchComplete ? 'Searched movie list' : 'Movies you might enjoy'

// mapping the retrived movie data to movie component
  const movieCards = movieList.map(movieObj => <Movie movie={movieObj} 
                                                    key={movieObj.imdbID} 
                                                    watchList={addWatchList} />)

// adding the movie component list inside container 
  const movieCardsContainer = (<div className='result-container'>{movieCards}</div>)


// rendering the search result
  const searchResultRender = loadingState ? 
                          "LOADING..." : errorState ?  
                                          ERROR_STATEMENT : movieCardsContainer
                          


 // ------------------------ HANDLING WATCHLIST ITEMS ---------------------------------- 
  
  const noWatchListMessage = (<div className='no-watchlist'>
                                  <NotFoundSvg />
                                  <p>No Movies In Your Watch List Yet</p>
                                </div>)                                         
  
  const moviesInWatchList = watchList.map(movieObj => <MovieWatchList 
                                                          movie={movieObj} 
                                                          key={movieObj.imdbID} 
                                                          watchList={removeWatchList}/>)

  const watchListContainer = (<div className="result-container">{moviesInWatchList}</div>)


  const watchListRender = watchList.length > 0 ? watchListContainer : noWatchListMessage

 
//-----------------------------------------------------------------------
  
  return (
    <div className="App">
      <Heading search={searchWord} />
      <h1 id='result' className='result-heading'>{resultHeading}</h1>
      {searchResultRender}
      <h1 id='watchlist' className='result-heading'>Watch List</h1>
      {watchListRender}
      <Footer />
    </div>
  );
}

export default App;









