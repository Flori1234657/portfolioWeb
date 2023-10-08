import { motion } from "framer-motion";
import { vrPhCards } from "../../../framerMotion/variants";
import { Suspense, lazy } from "react";

const ModalContent = lazy(() => import("./ModalContent"));

const ImgCarousel = ({ refHook, imgT, reqModalCont }) => {
  const phoneCards = vrPhCards();
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
      <Suspense
        fallback={
          <div
            aria-label="Loading spinner"
            className="img-carousel-cont__loading-spinner"
          ></div>
        }
      >
        {reqModalCont && <ModalContent imgT={imgT} refHook={refHook} />}
      </Suspense>
    </motion.dialog>
  );
};

export default ImgCarousel;
