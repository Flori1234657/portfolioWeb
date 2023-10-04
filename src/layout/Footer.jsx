import React from "react";
import { vrPhHeroText } from "../framerMotion/variants";
import { motion } from "framer-motion";
import FooterDownSect from "../components/footer/FooterDownSect";
import { useWindowWidth } from "../hooks/useWindowWidth";

const Footer = () => {
  const vrTextHead = vrPhHeroText();
  const windowWidth = useWindowWidth();

  return (
    <footer className="contact" id="ft" data-observer>
      <section
        className="email-req"
        aria-label="Email request for work section"
      >
        <motion.h1 variants={vrTextHead} initial="init" whileInView="anim">
          What are you waiting for?Let's work together!
        </motion.h1>
        <motion.form
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.2 }}
          aria-label="Email request form"
        >
          <input
            type="email"
            placeholder="myname@example.exm"
            aria-label="Enter your email here"
          />
          <motion.button whileTap={{ scale: 0.9 }} type="submit">
            Inquiry
          </motion.button>
        </motion.form>
      </section>
      {windowWidth < 900 ? (
        <FooterDownSect />
      ) : (
        <div
          className="footer-wraper"
          aria-label="Footer wraper only used for styling"
        >
          <FooterDownSect />
        </div>
      )}
      <section className="copyright" aria-label="Copyright group">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Copyright © Florian Dollani
        </motion.h2>
      </section>
    </footer>
  );
};

export default Footer;
