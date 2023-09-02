import React from "react";
import Cards from "../components/sections/servicesSec/Cards";

const Services = () => {
  return (
    <section className="services" aria-label="Services section" data-observer>
      <h1>Services</h1>
      <section
        className="services__card-cont"
        aria-label="The container of 3 card's"
      >
        <Cards />
      </section>
      <div
        className="services__footer-text"
        aria-label="Services footer text and CTA btn container"
      >
        <h2>If you don't see what you are looking for here, contact us.</h2>
        <button>Let's Talk</button>
      </div>
    </section>
  );
};

export default Services;
