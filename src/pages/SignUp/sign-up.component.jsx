import React from "react";
import "./sign-up.styles.css";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="sign-up">
      <h2>Would you like to become a member</h2>
      <p>
        We are eager to have you. Click the button below to download the
        membership form.
      </p>
      <Link
        to={"/membership-form.pdf"}
        target="_blank"
        download="membership-form.pdf">
        <CustomButton>DOWNLOAD MEMBERSHIP FORM</CustomButton>
      </Link>
      <h2>SignUp</h2>
      <form>
        <FormInput type="text" name={"name"} id={"name"} placeholder={"Name"} />
        <FormInput
          type="text"
          name={"username"}
          id={"username"}
          placeholder={"username"}
        />
        {/* <FormInput
          type="text"
          name={"mamberId"}
          id={"member-id"}
          placeholder={"Member ID"}
        /> */}
        <FormInput
          type="email"
          name={"email"}
          id={"email"}
          placeholder={"Email"}
        />
        <FormInput
          type="text"
          name={"phone"}
          id={"phone"}
          placeholder={"Phone Number"}
        />
        <FormInput
          type="password"
          name={"password"}
          id={"password"}
          placeholder={"Password"}
        />
        <CustomButton
          onClick={() => {
            // location.redirect("/login");
          }}>
          Submit
        </CustomButton>
      </form>
      <p>
        Have an account already, <Link to="/login"> Click here to login</Link>
      </p>
    </div>
  );
};
export default SignUp;
