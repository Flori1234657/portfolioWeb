import React from "react";

const Home = () => {
  return (
    <section className="home" aria-label="Home section container">
      <section
        className="home__text-group"
        aria-label="Home section text and btn group"
      >
        <h1>
          Hey, I'm <span>Florian Dollani</span>,<br /> a freelance web developer
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy{" "}
        </p>
        <button>Hire Me</button>
      </section>
      <img src="" alt="Photo of the person" />
      <h3>Scroll Down {/* ArrowIcon */}</h3>
    </section>
  );
};

export default Home;
