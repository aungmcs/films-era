import React from 'react'

const MovieWatchList = (props) => {
    // props will be a movie object
    const removeFromWatchList = (e) => {
        props.watchList(e.target.value)
    }
    return (
        // <a className='movie-link' href={`https://www.imdb.com/title/${props.movie.imdbID}/`} target='_blank' rel="noopener noreferrer">
            <div className='movie-card' data-aos='fade-up'>
                <img src={props.movie.Poster} alt={props.Title}/>
                <div className='movie-detail' >
                    <h2>{props.movie.Title}</h2>
                    <p><strong>Year :</strong> {props.movie.Year}</p>
                    <p><strong>Type :</strong> {props.movie.Type}</p>
                    <p><strong>IMDB ID :</strong> {props.movie.imdbID}</p>                    
                    <a className='movie-link' href={`https://www.imdb.com/title/${props.movie.imdbID}/`} target='_blank' rel="noopener noreferrer">
                        <button>MORE INFO</button>
                    </a>
                    <button value= {props.movie.imdbID} onClick={removeFromWatchList} className='watchList-btn'>REMOVE</button>
                </div>
            </div>
        
    )
}

export default MovieWatchList