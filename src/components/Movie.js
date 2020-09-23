import React from 'react'
import movieImg from '../img/movie.png'

const Movie = (props) => {
    // props will be a movie object
    const addWatchList = (e) => {
        props.watchList(e.target.value)
    }

    let poster = props.movie.Poster === "N/A" ? movieImg : props.movie.Poster
    return (
        // <a className='movie-link' href={`https://www.imdb.com/title/${props.movie.imdbID}/`} target='_blank' rel="noopener noreferrer">
            <div className='movie-card'>
                <img src={poster} alt={props.Title}/>
                <div className='movie-detail'>
                    <h2>{props.movie.Title}</h2>
                    <p><strong>Year :</strong> {props.movie.Year}</p>
                    <p><strong>Type :</strong> {props.movie.Type}</p>
                    {/* <p><strong>IMDB ID :</strong> {props.movie.imdbID}</p> */}
                    <a className='movie-link' href={`https://www.imdb.com/title/${props.movie.imdbID}/`} target='_blank' rel="noopener noreferrer">
                        <button>MORE INFO</button>
                    </a>
                    <button value= {props.movie.imdbID} onClick={addWatchList} className='watchList-btn'>ADD TO WATCH LIST</button>
                </div>
            </div>
        
    )
}

export default Movie