import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill as ImgChangeIcn } from "react-icons/bs";
import { AiFillCloseCircle as CloseIcn } from "react-icons/ai";
import * as Sl from "../../../assets";

const ImgCarousel = ({ refHook, imgT }) => {
  const [imgsArr, setImgsArr] = useState([]);

  useEffect(() => {
    switch (imgT) {
      case "ks":
        setImgsArr([Sl.KsI1, Sl.KsI2, Sl.KsI3]);
        break;
      case "db":
        setImgsArr([Sl.DbI1, Sl.DbI2, Sl.DbI3]);
        break;
      case "fc":
        setImgsArr([Sl.FcI1, Sl.FcI2, Sl.FcI3]);
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
    <dialog
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
    </dialog>
  );
};

export default ImgCarousel;
