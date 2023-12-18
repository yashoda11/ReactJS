import React from "react";
import { Link, } from "react-router-dom";
import "./App.css";
const Header = () => {
  return (
    <>
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>

      {/* <div className="nav-items">
        <ul>
          <a href="/">
            <li>Home</li>
          </a>
          <a href="/about">
            <li>About</li>
          </a>
          <a href="/contact">
            <li>Contact</li>
          </a>
        </ul>
      </div> */}
    </>
  );
};

export default Header;