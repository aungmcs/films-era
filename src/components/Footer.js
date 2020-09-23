import React from 'react'

const Footer = () => {
    const date = new Date()
    return (
        <footer>
            <p>&#169; {date.getFullYear()}</p>
            <div>
                <i class="fab fa-twitter"></i>
                <a href="https://twitter.com/aungmcs" target="_blank" rel="noopener noreferrer">aungmcs</a>
            </div>
            
        </footer>
    )
}

export default Footer