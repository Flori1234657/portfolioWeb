import React from "react";
import { motion } from "framer-motion";
import { vrPhCards } from "../../../framerMotion/variants";

const IconImg = ({ src, alt }) => {
  const vrIcons = vrPhCards();
  //  /src/assets/icons/html.png
  return (
    <motion.img
      variants={vrIcons}
      initial="init"
      whileInView="anim"
      transition={{ type: "spring", mass: 0.5, delay: 0.5 }}
      loading="lazy"
      src={`../../../..${src}`}
      alt={alt}
    />
  );
};

export default IconImg;
