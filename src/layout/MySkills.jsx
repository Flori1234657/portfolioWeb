import {
  HtmlIcn,
  CssIcn,
  JavascriptIcn,
  TsIcn,
  SassIcn,
  ReactIcn,
  FirebaseIcn,
  GitHubIcn,
  FigmaIcn,
  MuiIcn,
} from "../assets";
import { motion } from "framer-motion";
import { vrPhHeroText, vrMySkillsLabel } from "../framerMotion/variants";
import IconImg from "../components/sections/mySkills/IconImg";
import { useWindowWidth } from "../hooks/useWindowWidth";

const MySkills = () => {
  const vrTextHead = vrPhHeroText();
  const windowWidth = useWindowWidth();

  return (
    <section
      className="my-skills"
      id="ms"
      aria-label="My skills section"
      data-observer
    >
      <motion.h1 variants={vrTextHead} initial="init" whileInView="anim">
        My Skills
      </motion.h1>
      <div
        className="my-skills__skills-cont --core-tech"
        aria-label="Core tech skill's icon's container"
      >
        <motion.h3 variants={vrMySkillsLabel} initial="init" whileInView="anim">
          Core Tech
        </motion.h3>
        {[
          { src: HtmlIcn, alt: "Html" },
          { src: CssIcn, alt: "Css" },
          { src: JavascriptIcn, alt: "Javascript" },
        ].map((el) => (
          <IconImg key={el.alt} src={el.src} alt={el.alt} />
        ))}

        {windowWidth > 900 ? (
          <div
            className="my-skills__skills-cont__names-gr"
            aria-label="Text name group of icon's"
          >
            <motion.h3 variants={vrTextHead} initial="init" whileInView="anim">
              HTML
            </motion.h3>
            <motion.h3 variants={vrTextHead} initial="init" whileInView="anim">
              CSS
            </motion.h3>
            <motion.h3 variants={vrTextHead} initial="init" whileInView="anim">
              JAVASCRIPT
            </motion.h3>
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        className="my-skills__skills-cont --library"
        aria-label="Library skill's icon's container"
      >
        <motion.h3 variants={vrMySkillsLabel} initial="init" whileInView="anim">
          Library
        </motion.h3>
        {[
          { src: FirebaseIcn, alt: "Firebase" },
          { src: ReactIcn, alt: "React" },
          { src: MuiIcn, alt: "Material UI" },
        ].map((el) => (
          <IconImg key={el.alt} src={el.src} alt={el.alt} />
        ))}
        {windowWidth > 900 ? (
          <div
            className="my-skills__skills-cont__names-gr"
            aria-label="Text name group of icon's"
          >
            <motion.h3 variants={vrTextHead} initial="init" whileInView="anim">
              FIREBASE
            </motion.h3>
            <motion.h3 variants={vrTextHead} initial="init" whileInView="anim">
              REACT
            </motion.h3>
            <motion.h3 variants={vrTextHead} initial="init" whileInView="anim">
              MATERIAL UI
            </motion.h3>
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        className="my-skills__skills-cont --others"
        aria-label="Other skill's icon's container"
      >
        <motion.h3 variants={vrMySkillsLabel} initial="init" whileInView="anim">
          Other's
        </motion.h3>
        {[
          { src: SassIcn, alt: "Sass" },
          { src: TsIcn, alt: "Typescript" },
          { src: GitHubIcn, alt: "Github" },
          { src: FigmaIcn, alt: "Figma" },
        ].map((el) => (
          <IconImg key={el.alt} src={el.src} alt={el.alt} />
        ))}
        {windowWidth > 900 ? (
          <div
            className="my-skills__skills-cont__names-gr"
            aria-label="Text name group of icon's"
          >
            <motion.h3 variants={vrTextHead} initial="init" whileInView="anim">
              SASS
            </motion.h3>
            <motion.h3 variants={vrTextHead} initial="init" whileInView="anim">
              TYPESCRIPT
            </motion.h3>
            <motion.h3 variants={vrTextHead} initial="init" whileInView="anim">
              GITHUB
            </motion.h3>
            <motion.h3 variants={vrTextHead} initial="init" whileInView="anim">
              FIGMA
            </motion.h3>
          </div>
        ) : (
          ""
        )}
      </div>
      <motion.button
        whileTap={{ scale: 0.9 }}
        variants={vrTextHead}
        initial="init"
        whileInView="anim"
      >
        <a href="mailto:floriandollani15@gmail.com">Interested?</a>
      </motion.button>
    </section>
  );
};

export default MySkills;
