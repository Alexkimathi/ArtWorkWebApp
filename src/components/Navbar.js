import React from 'react'
import { Link, useMatch, useResolvedPath} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='nav'>
    <Link to='/' className='site-title'>ArtCalleryWebApp</Link>
    <ul>
  
    <CustomLink to='/AllArts' >AllArts</CustomLink>
 
 
    <CustomLink to='/NewArts'>NewArts</CustomLink>
 
  
    <CustomLink to='/FavoriteArts'>FavouriteArts</CustomLink>
  
    </ul>
    
    </nav>
  )
}

function CustomLink({to,children, ...props}){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})

  return(
  <li className ={isActive ? "active" : ""}>
  <Link to={to} {...props}>
  {children}
  </Link>
  </li>
  )

}

export default Navbar