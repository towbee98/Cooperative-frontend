import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./modal.styles.css";
import { slideInDown } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  slideInDown: {
    animation: "x 2s",
    animationName: Radium.keyframes(slideInDown, "slideInDown")
  }
};

const Modal = ({ click, handleClick }) => {
  return click ? (
    <StyleRoot>
      <div className="modal" style={styles.slideInDown}>
        <ul className="modal-options">
          <li className="active">
            <HashLink to="/#Home" onClick={handleClick}>
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#Services" onClick={handleClick}>
              Service
            </HashLink>
          </li>
          <li>
            <Link to="/member" onClick={handleClick}>
              Member
            </Link>
          </li>
          <li>
            <HashLink smooth to="/#about" onClick={handleClick}>
              About
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contact" onClick={handleClick}>
              Contact
            </HashLink>
          </li>
        </ul>
      </div>
    </StyleRoot>
  ) : (
    ""
  );
};

export default Modal;
