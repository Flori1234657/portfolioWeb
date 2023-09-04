import { useState } from "react";
import PlaceholderImg from "../assets/images/projectsPlaceholderImg.png";
import ImgCarousel from "../components/sections/projects/ImgCarousel";

const Projects = () => {
  const [imagesCarousel, setImagesCarousel] = useState(false);

  return (
    <section className="projects" aria-label="Project's group" data-observer>
      <h1>Project's</h1>
      <div
        className="projects__container"
        aria-label="Project's info container"
      >
        <img src={PlaceholderImg} alt="Project image" />
        <div
          className="projects__container__txt-and-btn-info-cont"
          aria-label="Group for text info and button's"
        >
          <h3>Ks Hotel</h3>
          <p>
            A webApp for an imaginary Hotel on Ksamil/Albania.Here user's can
            book their room's and they will wait for the host respond.Also this
            web have an admin panel.
          </p>
          <div
            className="projects__container__txt-and-btn-info-cont__btns-cont"
            aria-label="Group for button's"
          >
            <button onClick={() => setImagesCarousel(true)}>Images</button>
            <button>Go Live</button>
          </div>
        </div>
      </div>
      <div
        className="projects__container"
        aria-label="Project's info container"
      >
        <img src={PlaceholderImg} alt="Project image" />
        <div
          className="projects__container__txt-and-btn-info-cont"
          aria-label="Group for text info and button's"
        >
          <h3>Ks Hotel Admin Panel</h3>
          <p>
            This is the admin panel of Ks-Hotel,here the host can manage his
            room's and reservation's also this admin panel have diffrent
            graphic's for analytic's.
          </p>
          <div
            className="projects__container__txt-and-btn-info-cont__btns-cont"
            aria-label="Group for button's"
          >
            <button onClick={() => setImagesCarousel(true)}>Images</button>
            <button>Go Live</button>
          </div>
        </div>
      </div>
      <div
        className="projects__container"
        aria-label="Project's info container"
      >
        <img src={PlaceholderImg} alt="Project image" />
        <div
          className="projects__container__txt-and-btn-info-cont"
          aria-label="Group for text info and button's"
        >
          <h3>Gjeniu Buxhetor</h3>
          <p>
            This is a financing and budgeting webApp,it can help user's manage
            their spending's and also set financing goal's to save more money.
          </p>
          <div
            className="projects__container__txt-and-btn-info-cont__btns-cont"
            aria-label="Group for button's"
          >
            <button onClick={() => setImagesCarousel(true)}>Images</button>
            <button>Go Live</button>
          </div>
        </div>
      </div>
      {imagesCarousel ? <ImgCarousel /> : ""}
    </section>
  );
};

export default Projects;
