import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Header.css"

const Header = () => {
  return (
    <header className="header-container">
      <Link className="header-title" to="/">House of Games</Link>
       <nav className="header-links">
        <Link className="header-link hover-bg-light-pink" to="/">Home</Link>
        <Link className="header-link hover-bg-light-blue" to="/reviews">Reviews</Link>
       </nav>
    </header>
  ); 
};

export default Header;



