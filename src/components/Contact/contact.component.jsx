import React from "react";
import "./contact.styles.css";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value,
      email: e.target.value,
      message: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="contact" id="contact">
        <h2>Contact Us</h2>
        <form>
          <FormInput
            type={"text"}
            name={"Name"}
            id={"name"}
            placeholder={"Name"}
            onChange={this.handleChange}
          />
          <FormInput
            type={"email"}
            name={"email"}
            id={"email"}
            placeholder={"Email"}
          />
          <FormInput
            type={"text"}
            name={"message"}
            id={"Message"}
            placeholder={"Message"}
          />
          <CustomButton onClick={this.handleSubmit}>Contact Us</CustomButton>
        </form>
      </div>
    );
  }
}

export default Contact;
