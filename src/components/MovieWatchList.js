import React from 'react'

const MovieWatchList = (props) => {
    // props will be a movie object
    const removeFromWatchList = (e) => {
        props.watchList(e.target.value)
    }
    let title = props.movie.Title.length > 30 ? `${props.movie.Title.slice(0,25)}...` : props.movie.Title
    return (
        // <a className='movie-link' href={`https://www.imdb.com/title/${props.movie.imdbID}/`} target='_blank' rel="noopener noreferrer">
            <div className='movie-card'>
                <img src={props.movie.Poster} alt={props.Title}/>
                <div className='movie-detail'>
                    <h2>{title}</h2>
                    <p><strong>Year :</strong> {props.movie.Year}</p>
                    <p><strong>Type :</strong> {props.movie.Type}</p>                   
                    <a className='movie-link' href={`https://www.imdb.com/title/${props.movie.imdbID}/`} target='_blank' rel="noopener noreferrer">
                        <button>MORE INFO</button>
                    </a>
                    <button value= {props.movie.imdbID} onClick={removeFromWatchList} className='watchList-btn'>REMOVE</button>
                </div>
            </div>
        
    )
}

export default MovieWatchList