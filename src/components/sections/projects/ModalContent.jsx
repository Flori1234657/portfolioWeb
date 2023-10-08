import { useEffect, useState } from "react";
import { MdSwipeLeft as ImgChangeIcn } from "react-icons/md";
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
import { useWindowWidth } from "../../../hooks/useWindowWidth";

const ModalContent = ({ imgT, refHook }) => {
  const [imgsArr, setImgsArr] = useState([]);
  const windowWidth = useWindowWidth();

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

    return () => {
      setImgsArr([]);
    };
  }, [imgT]);

  return (
    <>
      <div
        className="img-carousel-cont__scroll-cont"
        aria-label="Image's scroll container"
      >
        {" "}
        <img src={imgsArr[0]} alt="image's" loading="lazy" />
        <img src={imgsArr[1]} alt="image's" loading="lazy" />
        <img src={imgsArr[2]} alt="image's" loading="lazy" />
      </div>

      {windowWidth < 1200 ? <ImgChangeIcn /> : ""}
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
