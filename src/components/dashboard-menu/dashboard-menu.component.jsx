import React from "react";
import "./dashboard-menu.styles.css";
import MenuContainerOption from "../menu-container-option/menu-container-option.component";

const MenuContainer = (props) => {
  //console.log(props);
  return (
    <div className="menu-container">
      <h5>MAIN MENU</h5>
      <div className="menu-container-options">
        {props.options.map((el, index) => {
          return (
            <MenuContainerOption key={index} text={el.name} route={el.route} />
          );
        })}
      </div>
    </div>
  );
};

export default MenuContainer;
