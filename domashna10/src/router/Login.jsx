import React, { useState } from "react";
import { useAuth } from "../hooks/AuthProvider";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = data;
    if (username === "user" && password === "password") {
      setAuth(true);
    } else {
      console.log("Invalid credentials");
    }
  };

  const handleSignUpClick = () => {
    navigate("/sign-up");
  };

  return (
    <div className="login--container">
      <div>
        <h2>Login</h2>
        <p>
          To access your account, please identify yourself by providing the
          information requested in the fields below, then click "Login". If you
          are not registered yet, click "New user" and follow the instructions
          to create an account.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form--group">
          <label className="form--group__label" htmlFor="username">
            Username:
          </label>
          <input
            className="form-group__input"
            type="text"
            id="username"
            name="username"
            value={data.username}
            onChange={handleChange}
          />
        </div>
        <div className="form--group">
          <label className="form--group__label" htmlFor="password">
            Password:
          </label>
          <input
            className="form-group__input"
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <div className="button">
          <button type="submit" className="form--button">
            Login
          </button>
          <button
            type="submit"
            className="form--button"
            onClick={handleSignUpClick}
          >
            New user
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
