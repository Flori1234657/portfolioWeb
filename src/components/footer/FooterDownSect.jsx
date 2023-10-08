import React from "react";
import ProfileImg from "../../assets/profile/footerPlaceholder3.webp";
import {
  BsFillTelephoneFill as PhoneIcn,
  BsFacebook as FbIcn,
} from "react-icons/bs";
import { MdEmail as EmailIcn } from "react-icons/md";
import { vrPhHeroImg, vrPhHeroText } from "../../framerMotion/variants";
import { motion } from "framer-motion";

const FooterDownSect = () => {
  const vrTextHead = vrPhHeroText();
  return (
    <section className="footer" aria-label="Footer info group">
      <div className="footer__person" aria-label="Footer person profile group">
        <motion.img
          variants={vrPhHeroImg}
          initial="init"
          whileInView="anim"
          src={ProfileImg}
          alt="Profile image"
        />
        <div
          className="footer__person__text-info"
          aria-label="Footer text info group"
        >
          <motion.h2 variants={vrTextHead} initial="init" whileInView="anim">
            Florian Dollani
          </motion.h2>
          <motion.h3 variants={vrTextHead} initial="init" whileInView="anim">
            Freelance web developer
          </motion.h3>
        </div>
      </div>
      <div className="footer__nav" aria-label="Footer nav group">
        <motion.h2 variants={vrTextHead} initial="init" whileInView="anim">
          Navigation
        </motion.h2>
        <ul>
          <motion.li variants={vrTextHead} initial="init" whileInView="anim">
            <a href="#hm">Home</a>
          </motion.li>
          <motion.li variants={vrTextHead} initial="init" whileInView="anim">
            <a href="#se">Services</a>
          </motion.li>
          <motion.li variants={vrTextHead} initial="init" whileInView="anim">
            <a href="#ab">About us</a>
          </motion.li>
          <motion.li variants={vrTextHead} initial="init" whileInView="anim">
            <a href="#ms">Skills</a>
          </motion.li>
          <motion.li variants={vrTextHead} initial="init" whileInView="anim">
            <a href="#pr">Project's</a>
          </motion.li>
          <motion.li variants={vrTextHead} initial="init" whileInView="anim">
            <a href="#ft">Contact</a>
          </motion.li>
        </ul>
      </div>
      <div className="footer__services" aria-label="Footer services group">
        <motion.h2 variants={vrTextHead} initial="init" whileInView="anim">
          Services
        </motion.h2>
        <ul>
          <motion.li variants={vrTextHead} initial="init" whileInView="anim">
            <a href="mailto:floriandollani15@gmail.com">
              Front end web development
            </a>
          </motion.li>
          <motion.li variants={vrTextHead} initial="init" whileInView="anim">
            <a href="mailto:floriandollani15@gmail.com">
              {" "}
              Full stack web development
            </a>
          </motion.li>
          <motion.li variants={vrTextHead} initial="init" whileInView="anim">
            <a href="mailto:floriandollani15@gmail.com">Code service</a>
          </motion.li>
        </ul>
      </div>
      <div className="footer__contact" aria-label="Footer contact group">
        <motion.h2 variants={vrTextHead} initial="init" whileInView="anim">
          Contact
        </motion.h2>
        <ul>
          <motion.li variants={vrTextHead} initial="init" whileInView="anim">
            <span>
              <PhoneIcn />
            </span>{" "}
            <a href="tel:+355 68 839 3968">+355 68 839 3968</a>
          </motion.li>
          <motion.li variants={vrTextHead} initial="init" whileInView="anim">
            <span>
              <EmailIcn />
            </span>{" "}
            <a href="mailto:floriandollani15@gmail.com">
              floriandollani15@gmail.com
            </a>
          </motion.li>
          <motion.li variants={vrTextHead} initial="init" whileInView="anim">
            <span>
              <FbIcn />
            </span>{" "}
            <a
              href="http://www.facebook.com/profile.php?id=100095043607448"
              target="_blank"
            >
              Website profesionale
            </a>
          </motion.li>
        </ul>
      </div>
    </section>
  );
};

export default FooterDownSect;
