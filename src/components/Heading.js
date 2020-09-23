import React from 'react'
import Search from './Search.js'
import {ReactComponent as FilmWatchingGuy} from '../img/cinema.svg'
import logo from '../img/FilmsEra.png'

const Header = ({search}) => {
    return(
        <div className='landing-page'>
            <nav className='header-container'>
                <img src={logo} alt="Films Era Logo"/>
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