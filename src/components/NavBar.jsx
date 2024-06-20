import React, { useState } from "react";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeTab = () => {
    setClick(false);
  };

  return (
    <div className="header">
      <Link smooth to="#home" onClick={closeTab}>
        <h1 title="Home">N.C.E</h1>
      </Link>
      <ul className={click ? "nav-items active" : "nav-items "}>
        <li>
          <Link smooth to="#about" onClick={closeTab}>
            About
          </Link>
        </li>
        <li>
          <Link smooth to="#projects" onClick={closeTab}>
            Projects
          </Link>
        </li>
        <li>
          <Link smooth to="#services" onClick={closeTab}>
            Services
          </Link>
        </li>
        <li>
          <Link smooth to="#technews" onClick={closeTab}>
            Tech News
          </Link>
        </li>
        <li>
          <Link smooth to="#contact" onClick={closeTab}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
