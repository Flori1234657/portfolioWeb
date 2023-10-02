import React from "react";
import Logo from "../assets/logo/logo.png";

const OptPc = () => {
  return (
    <nav className="pcNavigation">
      <img src={Logo} alt="Logo" />
      <ul>
        <li>
          {" "}
          <a href="#hm">Home</a>
        </li>
        <li>
          {" "}
          <a href="#se">Services</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#ab">About us</a>
        </li>
        <li>
          {" "}
          <a href="#ms">Skills</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#pr">Projects</a>{" "}
        </li>
        <li>
          <a href="#ft">Contact</a>{" "}
        </li>
      </ul>
      <div aria-label="CTA buton's group">
        <button>Get My Cv</button>
        <button>Hire Me</button>
      </div>
    </nav>
  );
};

export default OptPc;
