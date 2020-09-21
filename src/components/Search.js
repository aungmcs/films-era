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
    }


    return(
        <div className='search-box'>
            <input 
                onChange={handleWordChange} 
                value={searchWord} 
                type="text" 
                placeholder="Enter a single keyword..."
            />
            <input className='search-btn' onClick={handleClick} type="submit" value="Search"/>
        </div>
    )
}

export default Search