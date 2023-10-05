import { useRef, useState } from "react";
import ImgCarousel from "../components/sections/projects/ImgCarousel";
import { motion } from "framer-motion";
import { vrPhHeroText } from "../framerMotion/variants";
import Cards from "../components/sections/projects/Cards";
import data from "../components/sections/projects/cardsData";

const Projects = () => {
  const vrTextHead = vrPhHeroText();
  const [reqModalCont, setReqModalCont] = useState(false);

  const imageModal = useRef(null);
  const [imgType, setImgType] = useState("");

  const handleImgBtnClick = (imgL) => {
    {
      !reqModalCont ? setReqModalCont(true) : "";
    }
    setImgType(imgL);
    imageModal.current.showModal();
    imageModal.current.style = "display:flex";
  };

  return (
    <section
      className="projects"
      aria-label="Project's group"
      id="pr"
      data-observer
    >
      <motion.h1 variants={vrTextHead} initial="init" whileInView="anim">
        Project's
      </motion.h1>
      {data.map((el) => (
        <Cards
          key={el.imgVer}
          imgPh={el.imgPh}
          imgPc={el.imgPc}
          title={el.title}
          desc={el.desc}
          imgVer={el.imgVer}
          animType={el.animType}
          handleImgBtnClick={handleImgBtnClick}
        />
      ))}

      <ImgCarousel
        refHook={imageModal}
        imgT={imgType}
        reqModalCont={reqModalCont}
      />
    </section>
  );
};

export default Projects;
