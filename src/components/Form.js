import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form">
      <div className="form-border">
        <input
          className="input"
          type="text"
          name="full_name"
          placeholder="Full Name"
        ></input>
        <input
          className="input"
          type="text"
          name="user_name"
          placeholder="Username"
        ></input>
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email Adress"
        ></input>
      </div>
    </div>
  );
};

export default Form;
