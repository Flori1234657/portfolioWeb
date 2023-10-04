import React from "react";
import ProfileImg from "../../assets/profile/footerPlaceholder3.jpg";
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
            Home
          </motion.li>
          <motion.li variants={vrTextHead} initial="init" whileInView="anim">
            Services
          </motion.li>
          <motion.li variants={vrTextHead} initial="init" whileInView="anim">
            About us
          </motion.li>
          <motion.li variants={vrTextHead} initial="init" whileInView="anim">
            Skills
          </motion.li>
          <motion.li variants={vrTextHead} initial="init" whileInView="anim">
            Project's
          </motion.li>
          <motion.li variants={vrTextHead} initial="init" whileInView="anim">
            Contact
          </motion.li>
        </ul>
      </div>
      <div className="footer__services" aria-label="Footer services group">
        <motion.h2 variants={vrTextHead} initial="init" whileInView="anim">
          Services
        </motion.h2>
        <ul>
          <motion.li variants={vrTextHead} initial="init" whileInView="anim">
            Front end web development
          </motion.li>
          <motion.li variants={vrTextHead} initial="init" whileInView="anim">
            Full stack web development
          </motion.li>
          <motion.li variants={vrTextHead} initial="init" whileInView="anim">
            Code service
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
            +355 68 839 3968
          </motion.li>
          <motion.li variants={vrTextHead} initial="init" whileInView="anim">
            <span>
              <EmailIcn />
            </span>{" "}
            floriandollani15@gmail.com
          </motion.li>
          <motion.li variants={vrTextHead} initial="init" whileInView="anim">
            <span>
              <FbIcn />
            </span>{" "}
            Website profesionale
          </motion.li>
        </ul>
      </div>
    </section>
  );
};

export default FooterDownSect;
