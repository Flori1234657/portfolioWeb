import React from "react";
import { motion } from "framer-motion";
import {
  vrPhHeroText,
  vrPhCards,
  vrProjectCtaBtn,
} from "../../../framerMotion/variants";

const Cards = ({
  imgPh,
  imgPc,
  title,
  desc,
  imgVer,
  animType,
  handleImgBtnClick,
}) => {
  const vrTextHead = vrPhHeroText();
  const vrPhCardmin = vrPhCards("-90deg");
  const vrPhCardplu = vrPhCards();
  const vrCtaBtnR = vrProjectCtaBtn("-10vw");
  const vrCtaBtnL = vrProjectCtaBtn();
  return (
    <motion.div
      variants={animType === "pl" ? vrPhCardplu : vrPhCardmin}
      initial="init"
      whileInView="anim"
      className="projects__container"
      aria-label="Projects card container"
    >
      <img
        loading="lazy"
        src={window.innerWidth < 900 ? imgPh : imgPc}
        alt="Project image"
      />
      <div
        className="projects__container__txt-and-btn-info-cont"
        aria-label="Group for text info and button's"
      >
        <motion.h3 variants={vrTextHead} initial="init" whileInView="anim">
          {title}
        </motion.h3>
        <motion.p variants={vrTextHead} initial="init" whileInView="anim">
          {desc}
        </motion.p>
        <div
          className="projects__container__txt-and-btn-info-cont__btns-cont"
          aria-label="Group for button's"
        >
          <motion.button
            variants={vrCtaBtnL}
            initial="init"
            whileInView="anim"
            onClick={() => handleImgBtnClick(imgVer)}
          >
            Images
          </motion.button>
          <motion.button variants={vrCtaBtnR} initial="init" whileInView="anim">
            Request
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;
