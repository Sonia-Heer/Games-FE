import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Header.css"

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="header-title">House of Games</h1>
       <nav className="header-links">
        <Link className="header-link hover-bg-light-pink" to="/">Home</Link>
        <Link className="header-link hover-bg-light-blue" to="/reviews">Reviews</Link>
       </nav>
    </header>
  ); 
};

export default Header;



// <header className=" black-80 tc pv4 avenir header">
//       <h1 className="mt2 mb0 baskerville fw1 f1">House of Games</h1>
//        <nav className="bg-white bt bb tc mw7 center mt4 nav-bar">
//         <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l" to="/">Home</Link>
//         <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" to="/reviews">Reviews</Link>
//        </nav>
//     </header>
