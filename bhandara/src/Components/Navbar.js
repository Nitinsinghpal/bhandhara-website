import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Images/masala-dosa.png";
import { Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import SideNav from "./SideNav/SideNav";
function Navbar() {
  const [sideNav, SetSideNav] =useState(false)
  function openSideNav() {
    SetSideNav(!sideNav)
  }
  function closeSideNav() {
    // alert("close")
    SetSideNav(!sideNav)
    
  }
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
         <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact Us
          </Link>
        </nav>

        {/* <a href="#contact" className="contact-button">
            Contact us
          </a> */}
        {/* <button type="button" className="menu-button">
            <img src={hamburger} alt="menuButton" className="menu-icon" />
          </button> */}
           <div className="nav__toggle" id="nav-toggle">
         <IoMenu onClick={openSideNav}/>
         </div>
         {sideNav ? (<SideNav sideNav={sideNav} close={closeSideNav}/>):(<></>)}
         {/* <div className="nav-close" id="nav-close">
           <IoClose />
         </div> */} 
      </header>
    </div>
  );
}

export default Navbar;
