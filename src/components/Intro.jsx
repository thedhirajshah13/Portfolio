import React from "react";
import "./intro.css";
import PImg from "../asset/pimg-fotor-bg-remover-20231109211321.png";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Intro = () => {
  return (
    <>
      <div className="introDetails">
        <div>
          <h1 className="introHeading">
            Lets <span>Know</span> Each Other!
          </h1>
          <p>
            Hey there! I'm <span>Dhiraj Shah</span>, a Professional{" "}
            <span>Web Developer</span>. Check out my work—it's like a visual
            story of my creative journey. Easy to navigate, no rocket science
            required. Let's connect and chat about cool stuff! Cheers.
          </p>
          <p>
            I am fluent in classics like <span>C++, Javascript.</span>
          </p>
          <p>
            My field of Interest's are building new{" "}
            <span>Web Technologies</span> and Products and also in areas related
            to <span>Blockchain.</span>
          </p>
          <p>
            Whenever possible, I also apply my passion for developing products
            with <span>Node.js</span> and Modern Javascript Library and
            Frameworks like <span>React.js.</span>
          </p>
        </div>
        <div className="img">
          <img src={PImg} alt="PImg" />
        </div>
      </div>
      <div className="connect">
        <h1>FIND ME ON.</h1>
        <p>
          Feel free to <span>connect</span> with me.
        </p>
      </div>
      <div className="connectLinks">
      <div>
      <Link to="/">
          <GitHubIcon />
        </Link>
      </div>
      <div>
      <Link to="/">
          <TwitterIcon />
        </Link>
      </div>
       <div>
       <Link to="/">
          <LinkedInIcon />
        </Link>
       </div>
       <div>
       <Link to="/">
          <InstagramIcon />
        </Link>
       </div>
       
       
       
      </div>
    </>
  );
};
export default Intro;
