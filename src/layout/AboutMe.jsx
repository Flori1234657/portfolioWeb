import { motion } from "framer-motion";
import { vrPhHeroText, vrAboutCard } from "../framerMotion/variants";
import FooterImg from "../assets/profile/aboutImg.webp";

const AboutMe = () => {
  const vrTextHead = vrPhHeroText();

  return (
    <section className="about-us" id="ab" aria-label="About Us Section">
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
          <div
            aria-label="About us Img Container"
            className="about-us__card__left-cont__img-container"
          >
            <img src={FooterImg} alt="Profile image" />
          </div>
          <button>
            <a href="mailto:floriandollani15@gmail.com">Contact</a>
          </button>
        </motion.div>
        <motion.p variants={vrTextHead}>
          Hello! I’m a _front end web developer_ ,But also i can do full stack
          website/webApp using Firebase for backend.I’m a{" "}
          <a href="https://drive.google.com/file/d/1-51H19ETtsdrmmoQhI5l-DeUIjBGB1ww/view?usp=drive_link">
            certified
          </a>{" "}
          web developer with about 3 years of hard work trying to master web
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
