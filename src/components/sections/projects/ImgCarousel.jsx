import React from "react";
import { BsFillArrowRightCircleFill as ImgChangeIcn } from "react-icons/bs";
import { AiFillCloseCircle as CloseIcn } from "react-icons/ai";
import ProvImg from "../../../assets/images/slider/fcImg1.png";

const ImgCarousel = ({ refHook }) => {
  return (
    <dialog
      className="img-carousel-cont"
      aria-label="Image carousel modal"
      ref={refHook}
      onCancel={(e) => e.preventDefault()} // Per mos ta mbyllur me esc InshaaAllah
    >
      <img src={ProvImg} alt="image's" />
      <ImgChangeIcn />
      <CloseIcn
        onClick={() => {
          refHook.current.close();
          refHook.current.style = "display:none";
        }}
      />
    </dialog>
  );
};

export default ImgCarousel;
