import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
    <div className="site-title">
      <Link to={"/" } >
        ArtCalleryWebApp
      </Link>
      </div>
      <ul>
        <Link to='/' >AllArts</Link>
        <Link to='newarts' >NewArts</Link>
        <Link to="favoriteart">FavouriteArts</Link>
      </ul>
    </nav>
  );
}
export default Navbar;
