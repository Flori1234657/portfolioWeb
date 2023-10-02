import HtmlIcn from "../assets/icons/html.png";
import CssIcn from "../assets/icons/css.png";
import JavascriptIcn from "../assets/icons/javascript.png";
import TsIcn from "../assets/icons/type-script.png";
import SassIcn from "../assets/icons/sass.png";
import ReactIcn from "../assets/icons/react-js.png";
import FirebaseIcn from "../assets/icons/firebase.png";
import GitHubIcn from "../assets/icons/github.png";
import FigmaIcn from "../assets/icons/figma.png";
import MuiIcn from "../assets/icons/material-ui.png";

const MySkills = () => {
  return (
    <section
      className="my-skills"
      id="ms"
      aria-label="My skills section"
      data-observer
    >
      <h1>My Skills</h1>
      <div
        className="my-skills__skills-cont --core-tech"
        aria-label="Core tech skill's icon's container"
      >
        <h3>Core Tech</h3>
        <img src={HtmlIcn} alt="Html" />
        <img src={CssIcn} alt="Css" />
        <img src={JavascriptIcn} alt="Javascrip" />
        {window.innerWidth > 900 ? (
          <div
            className="my-skills__skills-cont__names-gr"
            aria-label="Text name group of icon's"
          >
            <h3>HTML</h3>
            <h3>CSS</h3>
            <h3>JAVASCRIPT</h3>
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        className="my-skills__skills-cont --library"
        aria-label="Library skill's icon's container"
      >
        <h3>Library</h3>
        <img src={FirebaseIcn} alt="Firebase" />
        <img src={ReactIcn} alt="React" />
        <img src={MuiIcn} alt="Material UI" />
        {window.innerWidth > 900 ? (
          <div
            className="my-skills__skills-cont__names-gr"
            aria-label="Text name group of icon's"
          >
            <h3>FIREBASE</h3>
            <h3>REACT</h3>
            <h3>MATERIAL UI</h3>
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        className="my-skills__skills-cont --others"
        aria-label="Other skill's icon's container"
      >
        <h3>Other's</h3>
        <img src={SassIcn} alt="Sass" />
        <img src={TsIcn} alt="Typescript" />
        <img src={GitHubIcn} alt="Github" />
        <img src={FigmaIcn} alt="Figma" />
        {window.innerWidth > 900 ? (
          <div
            className="my-skills__skills-cont__names-gr"
            aria-label="Text name group of icon's"
          >
            <h3>SASS</h3>
            <h3>TYPESCRIPT</h3>
            <h3>GITHUB</h3>
            <h3>FIGMA</h3>
          </div>
        ) : (
          ""
        )}
      </div>
      <button>Interested?</button>
    </section>
  );
};

export default MySkills;
