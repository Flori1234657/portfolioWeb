import React from "react";
import { motion } from "framer-motion";
import {
  vrPhHeroText,
  vrPhCards,
  vrProjectCtaBtn,
} from "../../../framerMotion/variants";
import { useWindowWidth } from "../../../hooks/useWindowWidth";

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

  const windowWidth = useWindowWidth();

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
        src={windowWidth < 900 ? imgPh : imgPc}
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
            whileTap={{ scale: 0.9 }}
          >
            Images
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            variants={vrCtaBtnR}
            initial="init"
            whileInView="anim"
          >
            <a href="mailto:floriandollani15@gmail.com">Request</a>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;
