import React from "react";

const AboutMe = () => {
  return (
    <section className="about-us" aria-label="About Us Section">
      <h1>About Us</h1>
      <div className="about-us__card" aria-label="About us card container">
        <div
          className="about-us__card__left-cont"
          aria-label="About us card image and btn container"
        >
          <img src="" alt="Profile image" />
          <button>Contact</button>
        </div>
        <p>
          Hello! I’m a _front end web developer_ ,But also i can do full stack
          website/webApp using Firebase for backend.I’m a <span>certified</span>{" "}
          web developer with 1 year of hard work trying to master web
          development.Now with the knowledge that i have on this filed,I’m ready
          to build a complete webApp/website,not only that but also make a figma
          design first and trying to make this web accessible,good UI/UX and
          better performance.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
