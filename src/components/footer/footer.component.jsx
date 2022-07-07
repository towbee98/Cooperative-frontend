import React from "react";
import "./footer.styles.css";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="socials">
        <span>GET IN TOUCH</span>
        <FaPhone />
        <FaEnvelope />
      </div>
      <div className="copyright">&#169; ALL RIGHTS RESERVED</div>
    </div>
  );
};

export default Footer;
