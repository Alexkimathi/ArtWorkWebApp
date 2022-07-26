import React from 'react'

function Navbar() {
  return (
    <nav className='nav'>
    <a href='/' className='site-title'>ArtCalleryWebApp</a>
    <ul>
    <li className='active'>
    <a href='/AllArts' >AllArts</a>
    </li>
    <li>
    <a href='/NewArts'>NewArts</a>
    </li>
    <li>
    <a href='/FavoriteArts'>FavouriteArts</a>
    </li>
    </ul>
    
    </nav>
  )
}

export default Navbar