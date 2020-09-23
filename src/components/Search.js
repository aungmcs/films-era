import React, { useState } from 'react'

const Search = (props) => {

    const [searchWord, setSearchWord] = useState('')


    const handleWordChange = (e) => {
        // search box changeing event
        setSearchWord(e.target.value)
    }

    const resetSearchWord = () => {
        setSearchWord('')
    }

    const handleClick = (e) => {
        e.preventDefault()
        props.onSearch(searchWord)
        resetSearchWord()
        window.location.href = '#result'
    }


    return(
        <div className='search-box'>
            <input 
                className='search-area'
                onChange={handleWordChange} 
                value={searchWord} 
                type="text" 
                placeholder="Enter a single keyword..."
            />
            {/* <input className='search-btn' onClick={handleClick} type="submit" value={<i class="fas fa-search"></i>}/> */}
            <button className='search-btn' onClick={handleClick}><i className="fas fa-search ic"></i></button>
        </div>
    )
}

export default Search