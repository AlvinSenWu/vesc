import React, { useState } from "react";
import "../styles/navbar.css";

import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <Link to="/" className="nav__brand">
        Virtual Environments and Spatial Cognition Lab
      </Link>
      <ul className={active}>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/people" className="nav__link">
            People
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/research" className="nav__link">
            Research
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/papers" className="nav__link">
            Papers
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/opportunities" className="nav__link">
            Opportunities
          </Link>
        </li>

        <li className="nav__item">
          <Link to="/links" className="nav__link">
            Links
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
