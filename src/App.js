import React, { useEffect, useState } from 'react';
import Movie from './components/Movie.js'
import MovieWatchList from './components/MovieWatchList.js'
import Heading from './components/Heading.js'
import Footer from './components/Footer.js'
import AOS from 'aos'
import 'aos/dist/aos.css'

import {ReactComponent as NotFoundSvg} from './img/not-found.svg'
import {ReactComponent as VoidSvg} from './img/void.svg'


import './styles/App.css';

function App() {
  const API_KEY = 'b1863673'
  const ERROR_STATEMENT = (<div className='error'>
                              <VoidSvg />
                              <p>MOVIE NOT FOUND. TRY DIFFERENT KEYWORD</p>
                          </div>)

// ----------   STATES   -----------------------------

  const [movieList, setMovieList] = useState([])
  const [searchComplete, setSearchComplete] = useState(false)
  const [errorState, setErrorState] = useState(false)
  const [loadingState, setLoadingState] = useState(false)
  const [watchList, setWatchList] = useState([])


//------------------- INITIAL DATA FETCH ---------------------------------

  useEffect(() => {
    AOS.init({duration: 1300})
    setLoadingState(true)
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=jungle`) // Object.Search[0].Title/Year/imdbID/Type/Poster
    .then(response => response.json())
    .then(response => {
      let temp = []
      response.Search.forEach(movieObj => {
        temp.push(movieObj)
      })
      setMovieList(temp)
      setLoadingState(false)
      setSearchComplete(false)
    })
  }, [])


// -------------- SEARCH CALLBACK ----------------------------

  const searchWord = (keyWord) => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${keyWord}`) // Object.Search[0].Title/Year/imdbID/Type/Poster
    .then(response => response.json())
    .then(response => {
      if (response.Response === 'False'){
        setErrorState(true)
        setLoadingState(false)
        setSearchComplete(true)
      
      }else{
        let temp = []
        response.Search.forEach(movieObj => {
          temp.push(movieObj)
        })
        setErrorState(false)
        setLoadingState(false)
        setMovieList(temp)
        setSearchComplete(true)
      }
    })
  }


// ----------------------- STATE UPDATE TO ADD TO WATCHLIST ---------------------------

  const addWatchList = (id) => {    
    // the id would be a string : imdbID
    setWatchList(prvList => prvList.concat(movieList.filter(movie => movie.imdbID === id)))
    setMovieList(movieList.filter(movie => movie.imdbID !== id)
    ) 
  }


// ----------------------- STATE UPDATE FOR REMOVING FROM WATCHLIST ---------------------------

  const removeWatchList = (id) => {
    setMovieList(prvList => prvList.concat(watchList.filter(movie => movie.imdbID === id)))
    setWatchList(watchList.filter(movie => movie.imdbID !== id))
  }


//------------------- HANDLING THE SEARCH RESULTS  --------------------------------

  const resultHeading = searchComplete ? 'Searched movie list' : 'Movies you might enjoy'

// mapping the retrived movie data to movie component
  const movieCards = movieList.map(movieObj => <Movie movie={movieObj} 
                                                    key={movieObj.imdbID} 
                                                    watchList={addWatchList} />)

// adding the movie component list inside container 
  const movieCardsContainer = (<div className='result-container' data-aos='fade-up'>{movieCards}</div>)


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

// ----------- TESTING DATA --------------------------
  // const sampleData = {
  //   Poster: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
  //   Title: "dead poet's society",
  //   Type: "movie",
  //   Year: "2008",
  //   imdbID: "tt0371746"
  // }









