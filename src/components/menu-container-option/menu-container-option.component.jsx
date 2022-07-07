import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
//import type { LinkProps } from "react-router-dom";
import "./menu-container-option.css";
import {
  FaTv,
  FaCalendarTimes,
  FaHourglassStart,
  FaMoneyCheckAlt,
  FaUserAlt
} from "react-icons/fa";

const MenuContainerOption = ({ text, route }) => {
  let resolved = useResolvedPath(route);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link to={route}>
      <div
        className={
          match ? "menu-container-option active" : "menu-container-option"
        }>
        <span className="menu-option-logo">
          {text === "DASHBOARD" ? (
            <FaTv color={"#407BFF"} size={"1em"} />
          ) : text === "RECENT" ? (
            <FaCalendarTimes color={"#407BFF"} size={"1em"} />
          ) : text === "ALL TRANSACTIONS" ? (
            <FaHourglassStart color="#407BFF" size={"1em"} />
          ) : text === "BALANCES" ? (
            <FaMoneyCheckAlt color="#407BFF" size={"1em"} />
          ) : (
            <FaUserAlt color="#407BFF" size={"1em"} />
          )}
        </span>

        <span className="title">{text}</span>
      </div>
    </Link>
  );
};

export default MenuContainerOption;
