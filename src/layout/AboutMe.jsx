import { motion } from "framer-motion";
import { vrPhHeroText, vrAboutCard } from "../framerMotion/variants";

const AboutMe = () => {
  const vrTextHead = vrPhHeroText();

  return (
    <section
      className="about-us"
      id="ab"
      aria-label="About Us Section"
      data-observer
    >
      <motion.h1 variants={vrTextHead} initial="init" whileInView="anim">
        About Us
      </motion.h1>
      <motion.div
        variants={vrAboutCard}
        initial="init"
        whileInView="anim"
        className="about-us__card"
        aria-label="About us card container"
      >
        <motion.div
          initial={{ y: "-5vh" }}
          whileInView={{ y: "0" }}
          transition={{ type: "spring", mass: 0.5, delay: 0.5 }}
          className="about-us__card__left-cont"
          aria-label="About us card image and btn container"
        >
          {/* <img src="" alt="Profile image" /> */}
          <div className="about-us__card__left-cont__img-perkohshem"></div>
          <button>Contact</button>
        </motion.div>
        <motion.p variants={vrTextHead}>
          Hello! I’m a _front end web developer_ ,But also i can do full stack
          website/webApp using Firebase for backend.I’m a <span>certified</span>{" "}
          web developer with 1 year of hard work trying to master web
          development.
          <br />
          <br />
          Now with the knowledge that i have on this filed,I’m ready to build a
          complete webApp/website,not only that but also make a figma design
          first and trying to make this web accessible,good UI/UX and better
          performance.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
