import React from "react";
import "./Footer.css";
import logo from "../../Images/masala-dosa.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer-main">
      <div className="logoDiv">
        <a href="/" className="logo">
          <img src={logo} alt="logoImage" className="logo-icon" />
          <span className="logo-text">Bhandara</span>
        </a>
      </div>
      <div className="OtherLinks">  
        <div>
          <p>
            <Link to="privacyPolicy">Privacy Policy</Link>
          </p>
        </div>
        <div>
          <p>
            <Link to="terms">TermOfService</Link>
          </p>
        </div>
        <div className="footer-contact">
          <p>
            <Link to="contact">Contact</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
