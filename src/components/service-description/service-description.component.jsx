import React from "react";
import "./service-description.styles.css";
import { FaGlobeAfrica, FaRoad, FaAtom, FaDonate } from "react-icons/fa";

const Service = ({ id, title, logo, notes }) => {
  return (
    <div
      className={
        id === 1
          ? "service-description service-1"
          : id === 2
          ? "service-description service-2"
          : id === 3
          ? "service-description service-3"
          : "service-description service-4"
      }
    >
      <span className="service-logo">
        {logo === "FaGlobeAfrica" ? (
          <FaGlobeAfrica color={"#407BFF"} size={"1.2em"} />
        ) : logo === "FaRoad" ? (
          <FaRoad color={"#407BFF"} size={"1.2em"} />
        ) : logo === "FaAtom" ? (
          <FaAtom color="#407BFF" size={"1.2em"} />
        ) : (
          <FaDonate color="#407BFF" size={"1.2em"} />
        )}
      </span>
      <h4 className="service-title">{title}</h4>
      <div className="service-notes">{notes}</div>
    </div>
  );
};

export default Service;
