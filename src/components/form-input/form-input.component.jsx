import React from "react";
import "./form-input.styles.css";

const FormInput = ({ type, name, placeholder, value, handleChange }) => {
  return (
    <div className="form-input">
      <label htmlFor={placeholder}>{placeholder}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;
