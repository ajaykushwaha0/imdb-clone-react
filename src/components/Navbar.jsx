import React from "react";

import Logo from "../assets/movies_logo.png";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={Logo} alt="logo" />
      <Link to="/" className="navbar-link">
        Movies
      </Link>
      <Link to="/watchlist" className="navbar-link">
        Watch List
      </Link>
    </div>
  );
}

export default Navbar;
