import React from "react";
import "./header.styles.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = ({ click, handleClick }) => {
  return (
    <div className="header">
      <div className="logo">
        <img src="/cooperative-icon.png" alt="cooperative-logo" />
      </div>
      <nav>
        <ul className="options">
          <li className="active">
            <HashLink smooth to="/#Home">
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#Services">
              Service
            </HashLink>
          </li>
          <li>
            <Link to="/member">Member</Link>
          </li>
          <li>
            <HashLink smooth to="/#about">
              About
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contact">
              Contact
            </HashLink>
          </li>
        </ul>
        <div
          className={click ? `animate` : `hamburger-menu`}
          onClick={handleClick}>
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
