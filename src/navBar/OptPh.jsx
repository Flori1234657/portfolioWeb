import { useState } from "react";
import { HiMenuAlt3 as MenuIc } from "react-icons/hi";
import { RiCloseFill as CloseMenuIc } from "react-icons/ri";
import Logo from "../assets/logo/logo.webp";
import { motion } from "framer-motion";
import * as vr from "../framerMotion/variants";
import { listItemsArr, buttons } from "../components/nav/listItems";

const OptPh = () => {
  const [togleMenuIc, setTogleMenuIc] = useState(true);
  const [togleNav, setTogleNav] = useState(false);

  return (
    <nav className="phoneNavigation">
      <motion.img
        initial={{ x: "50vw" }}
        animate={{ x: "0vw" }}
        transition={{ type: "spring", stiffness: 300 }}
        src={Logo}
        alt="Logo"
      />
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileTap={{ scale: 1.1 }}
        onClick={() => setTogleMenuIc(!togleMenuIc)}
        aria-label="Button to open navigation menu"
      >
        {togleMenuIc ? (
          <MenuIc onClick={() => setTogleNav(!togleNav)} />
        ) : (
          <CloseMenuIc onClick={() => setTogleNav(!togleNav)} />
        )}
      </motion.button>
      <motion.div
        className="phoneNavigation__hiddenCont"
        aria-label="Hidden navigation and CTA btn's group"
        style={togleNav ? { display: "flex" } : { display: "none" }}
        variants={vr.vrPhNavCont}
        initial="init"
        animate={togleNav ? "anim" : ""}
      >
        <ul>
          {listItemsArr.map((el) => {
            return (
              <motion.li
                key={el.liHref}
                initial={{ y: el.yVh }}
                animate={
                  togleNav
                    ? {
                        y: 0,
                      }
                    : ""
                }
                transition={{ type: "spring", stiffness: 50 }}
              >
                <a href={el.liHref}>{el.liName}</a>
              </motion.li>
            );
          })}
        </ul>
        <div aria-label="CTA buton's group">
          {buttons.map((el) => (
            <motion.button
              key={el.id}
              initial={{ y: el.yVh, rotate: "-90deg" }}
              animate={
                togleNav
                  ? {
                      y: 0,
                      rotate: "0deg",
                    }
                  : ""
              }
              transition={{ type: "spring", stiffness: 50 }}
              whileTap={{ scale: 0.9 }}
            >
              {el.txt === "Hire Me" ? (
                <a href="mailto:floriandollani15@gmail.com">Hire Me</a>
              ) : (
                <a href="https://drive.google.com/file/d/1UMTdw0AoLIISHOdDY3t1oBqr-taY1luR/view?usp=drive_link">
                  Get My Cv
                </a>
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default OptPh;
