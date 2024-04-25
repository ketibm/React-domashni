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

  const handleChange = (value, name) => {
    setData({ ...data, [name]: value.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = data;
    if (username === "user" && password === "password") {
      setAuth(true);
      alert("Welcome back");
    } else {
      console.log("Invalid credentials");
      alert(
        "The username and/or password you specified are not correct.  If you have not created an account yet then please sign up first with click on New User."
      );
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
      <form onSubmit={(e) => handleSubmit(e)}>
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
            onChange={(e) => handleChange(e, "username")}
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
            onChange={(e) => handleChange(e, "password")}
          />
        </div>
        <div className="button">
          <button type="submit" className="form--button">
            Login
          </button>
          <button
            onClick={() => handleSignUpClick()}
            type="submit"
            className="form--button"
          >
            New user
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
