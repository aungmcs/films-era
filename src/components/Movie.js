import React from 'react'

const Movie = (props) => {
    // props will be a movie object
    const addWatchList = (e) => {
        props.watchList(e.target.value)
    }
    return (
        // <a className='movie-link' href={`https://www.imdb.com/title/${props.movie.imdbID}/`} target='_blank' rel="noopener noreferrer">
            <div className='movie-card'>
                <img src={props.movie.Poster} alt={props.Title}/>
                <div className='movie-detail'>
                    <h2>{props.movie.Title}</h2>
                    <p><strong>Year :</strong> {props.movie.Year}</p>
                    <p><strong>Type :</strong> {props.movie.Type}</p>
                    <p><strong>IMDB ID :</strong> {props.movie.imdbID}</p>
                    <button value= {props.movie.imdbID} onClick={addWatchList} className='watchList-btn'>ADD TO WATCH LIST</button>
                </div>
            </div>
        // </a>
    )
}

export default Movie