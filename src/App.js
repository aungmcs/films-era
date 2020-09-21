import React, { useEffect, useState } from 'react';
import Movie from './components/Movie.js'
import Heading from './components/Heading.js'
import './styles/App.css';

function App() {
  const API_KEY = 'b1863673'
  const ERROR_STATEMENT = 'SORRY MOVIE NOT FOUND. TRY DIFFERENT KEYWORD'

// ----------   STATES   -----------------------------

  const [movieList, setMovieList] = useState([])
  const [searchComplete, setSearchComplete] = useState(false)
  const [errorState, setErrorState] = useState(false)
  const [loadingState, setLoadingState] = useState(false)
  const [watchList, setWatchList] = useState([])

//------------------- INITIAL DATA FETCH ---------------------------------
  useEffect(() => {
    setLoadingState(true)
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=red`) // Object.Search[0].Title/Year/imdbID/Type/Poster
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


// ---------- SEARCH CALLBACK ----------------------------
  const searchWord = (keyWord) => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${keyWord}`) // Object.Search[0].Title/Year/imdbID/Type/Poster
    .then(response => response.json())
    .then(response => {
      if (response.Response === 'False'){
        setErrorState(true)
        setLoadingState(false)
      
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


// ----------------------- ADDING WATCHLIST FEATURE ---------------------------
  const addWatchList = (id) => {    // the id would be a string : imdbID
    setWatchList(prvList => prvList.concat(movieList.filter(movie => movie.imdbID === id)))
    setMovieList(movieList.filter(movie => movie.imdbID !== id)
    ) 
  }



  const searchResult = loadingState ? 
                          "LOADING..." : errorState ?  
                          ERROR_STATEMENT : movieList.map(movieObj => 
                                                              <Movie 
                                                                movie={movieObj} 
                                                                key={movieObj.imdbID} 
                                                                watchList={addWatchList} 
                                                              />)

  const watchListRender = watchList.length > 0 ? 
                            watchList.map(movieObj => 
                                      <Movie 
                                        movie={movieObj} 
                                        key={movieObj.imdbID} 
                                        watchList={addWatchList} 
                                      />) : 'No movies in the watch list yet'

  const resultHeading = searchComplete ? 'Searched movie list' : 'Movies you might enjoy'
 
//-----------------------------------------------------------------------
  
  return (
    <div className="App">
      <Heading search={searchWord} />
      <h1 id='result' className='result-heading'>{resultHeading}</h1>
      <div className='result-container'>
        {searchResult}
      </div>
      <h1 id='watchlist' className='result-heading'>Watch List</h1>
      <div className="result-container">
        {watchListRender}
      </div>
    </div>
  );


  //-------------------------------- Testing ----------------------------------

  //   const sampleData = {
  //   Poster: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
  //   Title: "dead poet's society",
  //   Type: "movie",
  //   Year: "2008",
  //   imdbID: "tt0371746"
  // }

  // const handleWatchList = (element) => {
  //   get the element which is clicked
  //     how to link between the element which is clicked to the one from moviList
  //   pop an object from movieList relative to that element
  //   push an object to the watch list object 
  // }
  // return (
  //   <div className="App">
  //     <Movie movie={sampleData} />
  //   </div>
  // );
  
}

export default App;












  // const sampleData = {
  //   Poster: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
  //   Title: "dead poet's society",
  //   Type: "movie",
  //   Year: "2008",
  //   imdbID: "tt0371746"
  // }