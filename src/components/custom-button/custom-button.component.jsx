import React from "react";
import { useNavigate } from "react-router-dom";
import "./custom-button.styles.css";

const CustomButton = ({ children, handleSubmit }) => {
  const navigate = useNavigate();
  return handleSubmit ? (
    <div
      className="custom-button"
      onClick={() => {
        navigate("menu", { replace: true });
      }}>
      {children}
    </div>
  ) : (
    <div className="custom-button">{children}</div>
  );
};

export default CustomButton;
