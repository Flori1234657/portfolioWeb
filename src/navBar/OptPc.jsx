import Logo from "../assets/logo/logo.webp";
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
        <motion.button whileTap={{ scale: 0.9 }}>
          <a
            href="https://drive.google.com/file/d/1v8kxxtGBVSyGamQTH7zryuqGL5O9F4GN/view?usp=drive_link"
            target="_blank"
          >
            Get My Cv
          </a>
        </motion.button>
        <motion.button whileTap={{ scale: 0.9 }}>
          {" "}
          <a href="mailto:floriandollani15@gmail.com">Hire Me</a>
        </motion.button>
      </div>
    </nav>
  );
};

export default OptPc;
