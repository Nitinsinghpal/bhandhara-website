import React from "react";
import "./SideNav.css";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
function SideNav({ sideNav,close }) {
  if (sideNav === false) {
    return null;
  }
  return (
    <div className="side-Nav">
      <div className="side-nav-close-m">
        <div className="side-nav-close">
          <IoClose onClick={close}/>
        </div>
      </div>
          <div className="side-nav-links" onClick={close}>
          <Link to="/" className="side-nav-link">
            Home
          </Link>
         <Link to="/about" className="side-nav-link">
            About
          </Link>
          <Link to="/contact" className="side-nav-link">
            Contact Us
          </Link>
          </div>
    </div>
  );
}

export default SideNav;
