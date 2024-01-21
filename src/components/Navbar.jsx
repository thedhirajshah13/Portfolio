import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <h2>dhiru.co</h2>
      </div>
      <div className="navItem">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Project</Link>
        <Link to="/">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
