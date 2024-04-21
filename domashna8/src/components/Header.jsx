import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/f1_logo.svg";

const Header = () => {
  return (
    <header className="header--container">
      <img className="header--logo" src={logo} alt="f1 logo" />
      <div className="header--container__links">
        <nav className="header--nav__links">
          <Link to={"/video"} className="header--nav__link">
            Video
          </Link>
          <Link className="header--nav__link">F1 Unlocked</Link>
          <Link to={"/drivers"} className="header--nav__link">
            Drivers
          </Link>
          <Link to={"/pit"} className="header--nav__link">
            Pit
          </Link>

          <Link to={"/race"} className="header--nav__link">
            Race control
          </Link>
        </nav>
        <div className="header--nav__buttons">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
