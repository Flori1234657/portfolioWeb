import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill as ImgChangeIcn } from "react-icons/bs";
import { AiFillCloseCircle as CloseIcn } from "react-icons/ai";
import { motion } from "framer-motion";
import { vrPhCards } from "../../../framerMotion/variants";
import {
  KsI1,
  KsI2,
  KsI3,
  DbI1,
  DbI2,
  DbI3,
  FcI1,
  FcI2,
  FcI3,
} from "../../../assets";

const ImgCarousel = ({ refHook, imgT }) => {
  const [imgsArr, setImgsArr] = useState([]);
  const phoneCards = vrPhCards();

  useEffect(() => {
    switch (imgT) {
      case "ks":
        setImgsArr([KsI1, KsI2, KsI3]);
        break;
      case "db":
        setImgsArr([DbI1, DbI2, DbI3]);
        break;
      case "fc":
        setImgsArr([FcI1, FcI2, FcI3]);
        break;
      default:
        setImgsArr([]);
        break;
    }
  }, [imgT]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgsArr.length);
  };

  return (
    <motion.dialog
      variants={phoneCards}
      initial="init"
      whileInView="anim"
      className="img-carousel-cont"
      aria-label="Image carousel modal"
      ref={refHook}
      onCancel={(e) => e.preventDefault()} // Per mos ta mbyllur me esc InshaaAllah
    >
      <img src={imgsArr[currentIndex]} alt="image's" />

      <ImgChangeIcn onClick={nextImage} />
      <CloseIcn
        onClick={() => {
          refHook.current.close();
          refHook.current.style = "display:none";
        }}
      />
    </motion.dialog>
  );
};

export default ImgCarousel;
