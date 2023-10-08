import Cards from "../components/sections/servicesSec/Cards";
import { motion } from "framer-motion";
import { vrPhHeroText } from "../framerMotion/variants";

const Services = () => {
  const vrTextHead = vrPhHeroText();

  return (
    <section className="services" id="se" aria-label="Services section">
      <motion.h1 variants={vrTextHead} initial="init" whileInView="anim">
        Services
      </motion.h1>
      <section
        className="services__card-cont"
        aria-label="The container of 3 card's"
      >
        <Cards />
      </section>
      <div
        className="services__footer-text"
        aria-label="Services footer text and CTA btn container"
      >
        <motion.h2 variants={vrTextHead} initial="init" whileInView="anim">
          If you don't see what you are looking for here, contact us.
        </motion.h2>
        <motion.button
          whileTap={{ scale: 0.9 }}
          variants={vrTextHead}
          initial="init"
          whileInView="anim"
        >
          <a href="mailto:floriandollani15@gmail.com">Let's Talk</a>
        </motion.button>
      </div>
    </section>
  );
};

export default Services;
