import React from "react";
//import { useNavigate } from "react-router-dom";
import "./sign-in.styles.css";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

const SignIn = ({ header, type, placeholder, name, to }) => {
  // const navigate = useNavigate();
  return (
    <div className="sign-in">
      <h2>{header}</h2>
      <form>
        <FormInput type={type} name={name} placeholder={placeholder} />
        <FormInput
          type={"password"}
          name={"password"}
          placeholder={"Password"}
        />
        {!to ? (
          <CustomButton>Login</CustomButton>
        ) : (
          <CustomButton handleSubmit>Login</CustomButton>
        )}
      </form>
    </div>
  );
};

export default SignIn;
