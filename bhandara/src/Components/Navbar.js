import React from "react";
import "./Navbar.css";
import logo from "../Images/masala-dosa.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="header">
      <header className="header-content">
        <Link to="/" className="nav-link">
          <a href="#logo" className="logo">
            <img src={logo} alt="logoImage" className="logo-icon" />
            <span className="logo-text">Bhandara</span>
          </a>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">
            Home
          </Link>

          {/* <a href="#modal" className="nav-link">
            AddPost
          </a> */}
          {/* <a href="#pricing" className="nav-link">
            Pricing
          </a>
          <a href="#blog" className="nav-link">
            Blog
          </a> */}
          <a href="#about" className="nav-link">
            About
          </a>
        </nav>

        {/* <a href="#contact" className="contact-button">
            Contact us
          </a> */}
        {/* <button type="button" className="menu-button">
            <img src={hamburger} alt="menuButton" className="menu-icon" />
          </button> */}
      </header>
    </div>
  );
}

export default Navbar;
