import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill as ImgChangeIcn } from "react-icons/bs";
import { AiFillCloseCircle as CloseIcn } from "react-icons/ai";
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

const ModalContent = ({ imgT, refHook }) => {
  const [imgsArr, setImgsArr] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgsArr.length);
  };

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

  return (
    <>
      <img src={imgsArr[currentIndex]} loading="lazy" alt="image's" />

      <ImgChangeIcn onClick={nextImage} />
      <CloseIcn
        onClick={() => {
          refHook.current.close();
          refHook.current.style = "display:none";
        }}
      />
    </>
  );
};

export default ModalContent;
