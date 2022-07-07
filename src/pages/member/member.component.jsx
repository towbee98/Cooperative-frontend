import React from "react";
import "./member.styles.css";
import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";
import { Link } from "react-router-dom";

const Member = ({ user }) => {
  return (
    <div className="member">
      <div className="user-profile">
        <h2>User Profile</h2>
        <div className="user-details">
          <div className="member-image"></div>
          <form>
            {/* <FormInput
              type="text"
              name={"name"}
              id={"name"}
              placeholder={"Name"}
              value={user.name}
              handleChange={handleChange}
            />
            <FormInput
              type="text"
              name={"mamberId"}
              id={"member-id"}
              placeholder={"Member ID"}
              value={"PVOL-17"}
              handleChange={handleChange}
            />
            <FormInput
              type="email"
              name={"email"}
              id={"email"}
              placeholder={"Email"}
              value={"tobi@example.com"}
              handleChange={handleChange}
            />
            <FormInput
              type="text"
              name={"phone"}
              id={"phone"}
              placeholder={"Phone Number"}
              value={"08124013264"}
              handleChange={handleChange}
            /> */}
          </form>
          <div className="user-info">
            <div className="name">
              <label htmlFor="name">Name :</label>
              <span>{user.name}</span>
            </div>
            <div className="memberId">
              <label htmlFor="memberID">Member ID :</label>
              <span>{user.memberId}</span>
            </div>
            <div className="email">
              <label htmlFor="email">Email :</label>
              <span>{user.email}</span>
            </div>
            <div className="phone">
              <label htmlFor="phone">Phone :</label>
              <span>{user.phone}</span>
            </div>
          </div>
          <CustomButton>Edit</CustomButton>
        </div>
        <div className="financial-detail">
          <Link to="/menu">
            <CustomButton>
              Click here to check your financial details
            </CustomButton>
          </Link>
        </div>
      </div>
      <div className="password-update">
        <h2>Update Password</h2>
        <FormInput
          type={"password"}
          name={"password"}
          placeholder={"Current Password"}
          id={"password"}
        />
        <FormInput
          type={"password"}
          name={"newPassword"}
          placeholder={"New Password"}
          id={"new-password"}
        />
        <FormInput
          type={"password"}
          name={"newPasswordConfirm"}
          placeholder={"Confirm New Password"}
          id={"new-password-confirm"}
        />
        <CustomButton> UPDATE PASSWORD</CustomButton>
      </div>
    </div>
  );
};

export default Member;
