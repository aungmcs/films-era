import React from 'react'
import Search from './Search.js'
import {ReactComponent as FilmWatchingGuy} from '../img/cinema.svg'

const Header = ({search}) => {
    return(
        <div className='landing-page'>
            <nav className='header-container'>
                <svg xmlns="http://www.w3.org/2000/svg" width="248" height="65" viewBox="0 0 248 65">
                    <text id="FilmsEra" transform="translate(0 52)" fill="#3e3e3e" fontSize="54" fontFamily="Arvo"><tspan x="0" y="0">Films</tspan><tspan y="0" fill="#f8c163" fontFamily="Arvo-Bold, Arvo" fontWeight="700">Era</tspan></text>
                </svg>
                <ul>
                    <a href="#watchlist"><li>Watch List</li></a>
                    <a href="#result"><li>Movies</li></a>
                </ul>
            </nav>
            {/* left side title and search box | right side svg  */}
            <div className='welcome-section'>
                <div className="title-search">
                    <h2>Browse world's <br /> most popular movies </h2>
                    <Search onSearch={search} />
                </div>
                <FilmWatchingGuy />
            </div>
        </div>
    )
}

export default Header