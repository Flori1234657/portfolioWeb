import React from "react";
import Logo from "../assets/logo/logo.png";

const OptPc = () => {
  return (
    <nav className="pcNavigation">
      <img src={Logo} alt="Logo" />
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>About us</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div aria-label="CTA buton's group">
        <button>Get My Cv</button>
        <button>Hire Me</button>
      </div>
    </nav>
  );
};

export default OptPc;
