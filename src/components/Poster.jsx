import React from "react";
import "./poster.css";
import logo from "../asset/image2-fotor-bg-remover-20231109213840.png";
import { Link } from "react-router-dom";

const Poster = () => {
  return (
    <div className="poster">
      <div className="intro">
        <h1>Software Developer</h1>
        <p>Hi, I am Dhiraj Shah,</p>
        <p> "Crafting digital dreams into reality."</p>
        <Link to="/">
          <button>Hire Me</button>
        </Link>
      </div>
      <div className="banner">
        <img src={logo} alt="banner" />
      </div>
    </div>
  );
};

export default Poster;
