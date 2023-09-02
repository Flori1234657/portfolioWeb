import { useState } from "react";
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
        <img src="" alt="Project image" />
        <div
          className="projects__container__txt-&-btn-info-cont"
          aria-label="Group for text info and button's"
        >
          <h3>Projekti 1</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard{" "}
          </p>
          <div
            className="projects__container__txt-&-btn-info-cont__btns-cont"
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
        <img src="" alt="Project image" />
        <div
          className="projects__container__txt-&-btn-info-cont"
          aria-label="Group for text info and button's"
        >
          <h3>Projekti 1</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard{" "}
          </p>
          <div
            className="projects__container__txt-&-btn-info-cont__btns-cont"
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
        <img src="" alt="Project image" />
        <div
          className="projects__container__txt-&-btn-info-cont"
          aria-label="Group for text info and button's"
        >
          <h3>Projekti 1</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard{" "}
          </p>
          <div
            className="projects__container__txt-&-btn-info-cont__btns-cont"
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
