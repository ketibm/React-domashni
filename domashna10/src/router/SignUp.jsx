import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", data);
    setData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="sign-up--container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form--group">
          <label className="form--group__label" htmlFor="username">
            Username:
          </label>
          <input
            className="form--group__input"
            type="text"
            id="username"
            name="username"
            value={data.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form--group">
          <label className="form--group__label" htmlFor="email">
            Email:
          </label>
          <input
            className="form--group__email"
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form--group">
          <label className="form--group__label" htmlFor="password">
            Password:
          </label>
          <input
            className="form--group__input"
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button">
          <button type="submit" className="sign-up--button">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
