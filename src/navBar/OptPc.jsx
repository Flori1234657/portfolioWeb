import React from "react";
import Logo from "../assets/logo/logo.png";
import { motion } from "framer-motion";

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
        <motion.button whileTap={{ scale: 0.9 }}>Get My Cv</motion.button>
        <motion.button whileTap={{ scale: 0.9 }}>Hire Me</motion.button>
      </div>
    </nav>
  );
};

export default OptPc;
