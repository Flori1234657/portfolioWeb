import { HiArrowNarrowDown as ArrIcn } from "react-icons/hi";
import { motion } from "framer-motion";
import { vrPhHeroText, vrPhHeroImg } from "../framerMotion/variants";
import ProfilePlaceholdr from "../assets/profile/placeholder.webp";

const Home = () => {
  const h1variant = vrPhHeroText();
  const pvariant = vrPhHeroText("15vh");
  const btnvariant = vrPhHeroText("20vh");

  return (
    <section className="home" id="hm" aria-label="Home section container">
      <section
        className="home__text-group"
        aria-label="Home section text and btn group"
      >
        <motion.h1 variants={h1variant} initial="init" whileInView="anim">
          Hey, I'm <span>Florian Dollani</span>,<br /> a freelance web developer
        </motion.h1>
        <motion.p variants={pvariant} initial="init" whileInView="anim">
          Do you want a web for your business?Or do you want a web for youself?
          I think you are on the right place!
        </motion.p>
        <motion.button
          variants={btnvariant}
          initial="init"
          whileInView="anim"
          whileTap={{ scale: 0.9 }}
        >
          <a href="mailto:floriandollani15@gmail.com">Hire Me</a>
        </motion.button>
      </section>
      <motion.img
        variants={vrPhHeroImg}
        initial="init"
        whileInView="anim"
        src={ProfilePlaceholdr}
        alt="Photo of the person"
      />
      <h3>
        Scroll Down <ArrIcn />
      </h3>
    </section>
  );
};

export default Home;
