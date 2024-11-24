import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">DigitalCompass</div>
      <ul className="nav-links">
        <li>
          <Link to="home">HOME</Link>
        </li>
        <li>
          <Link to="services">SERVICES</Link>
        </li>
        <li>
          <Link to="portfolio">PORTFOLIO</Link>
        </li>
        <li>
          <Link to="about">ABOUT</Link>
        </li>
        <li>
          <Link to="contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
