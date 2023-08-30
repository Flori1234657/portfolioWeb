import React from "react";

const MySkills = () => {
  return (
    <section className="my-skills" aria-label="My skills section">
      <h1>My Skills</h1>
      <div
        className="my-skills__skills-cont --core-tech"
        aria-label="Core tech skill's icon's container"
      >
        <h3>Core Tech</h3>
        <img src="" alt="Html" />
        <img src="" alt="Css" />
        <img src="" alt="Javascrip" />
        <div
          className="my-skills__skills-cont__names-gr"
          aria-label="Text name group of icon's"
        >
          <h3>HTML</h3>
          <h3>CSS</h3>
          <h3>JAVASCRIPT</h3>
        </div>
      </div>
      <div
        className="my-skills__skills-cont --library"
        aria-label="Library skill's icon's container"
      >
        <h3>Library</h3>
        <img src="" alt="Firebase" />
        <img src="" alt="React" />
        <img src="" alt="Material UI" />
        <div
          className="my-skills__skills-cont__names-gr"
          aria-label="Text name group of icon's"
        >
          <h3>FIREBASE</h3>
          <h3>REACT</h3>
          <h3>MATERIAL UI</h3>
        </div>
      </div>
      <div
        className="my-skills__skills-cont --others"
        aria-label="Other skill's icon's container"
      >
        <h3>Other's</h3>
        <img src="" alt="Sass" />
        <img src="" alt="Typescript" />
        <img src="" alt="Github" />
        <img src="" alt="Figma" />
        <div
          className="my-skills__skills-cont__names-gr"
          aria-label="Text name group of icon's"
        >
          <h3>SASS</h3>
          <h3>TYPESCRIPT</h3>
          <h3>GITHUB</h3>
          <h3>FIGMA</h3>
        </div>
      </div>
      <button>Interested?</button>
    </section>
  );
};

export default MySkills;
