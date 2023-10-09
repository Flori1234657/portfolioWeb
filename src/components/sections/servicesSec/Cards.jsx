import { MdNearbyError as ThirdIcn } from "react-icons/md";
import { HiSquare3Stack3D as SecondIcn } from "react-icons/hi2";
import { HiCode as FirstIcn } from "react-icons/hi";
import { motion } from "framer-motion";
import { vrPhCards } from "../../../framerMotion/variants";
import { useWindowWidth } from "../../../hooks/useWindowWidth";

const Cards = () => {
  const vrPhCardmin = vrPhCards("-90deg");
  const vrPhCardplu = vrPhCards();
  const windowWidth = useWindowWidth();

  return (
    <>
      <motion.div
        variants={vrPhCardmin}
        initial="init"
        whileInView="anim"
        className="services__cardCont__card"
        aria-label="Card container 1"
      >
        <button aria-label="Icon button no action perform">
          {" "}
          <FirstIcn />
        </button>
        <div
          className="services__cardCont__card__right"
          aria-label="Card text and btn group"
        >
          <h2>Front End Web Development</h2>
          <p>
            Transform design into a real website.Also if you don’t have a pre
            made design we can made it.
          </p>
          <motion.button whileTap={{ scale: 0.9 }}>
            <a href="mailto:floriandollani15@gmail.com">Learn More</a>
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        variants={vrPhCardplu}
        initial="init"
        whileInView="anim"
        className="services__cardCont__card"
        aria-label="Card container 2"
      >
        <button aria-label="Icon button no action perform">
          {" "}
          <SecondIcn />
        </button>
        <div
          className="services__cardCont__card__right"
          aria-label="Card text and btn group"
        >
          <h2>Full Stack Web Development</h2>
          <p>
            Do you want a powerful website?This service has both front-end and
            back-end with Firebase.
          </p>
          <motion.button whileTap={{ scale: 0.9 }}>
            <a href="mailto:floriandollani15@gmail.com">Learn More</a>
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        variants={vrPhCardmin}
        initial="init"
        whileInView="anim"
        className="services__cardCont__card"
        aria-label="Card container 3"
      >
        <button aria-label="Icon button no action perform">
          {" "}
          <ThirdIcn />
        </button>
        <div
          className="services__cardCont__card__right"
          aria-label="Card text and btn group"
        >
          <h2>Web Udate or Error Fixing Service</h2>
          <p>
            Do you want a new update on your web?
            {windowWidth < 1200
              ? `Or do you have something going
            wrong on your code?Contact us.`
              : `Or is your code working not how you want work?`}
          </p>
          <motion.button whileTap={{ scale: 0.9 }}>
            <a href="mailto:floriandollani15@gmail.com">Learn More</a>
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default Cards;
