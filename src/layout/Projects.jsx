import { useRef, useState } from "react";
import ImgKsPh from "../assets/images/ksPh.png";
import ImgCarousel from "../components/sections/projects/ImgCarousel";
import ImgDashboardPh from "../assets/images/dbPh.png";
import ImgFinancdPh from "../assets/images/fcPh.png";
import ImgKsPC from "../assets/images/3proj/kHpc.png";
import ImgDbPc from "../assets/images/3proj/dbPc.png";
import ImgFcPc from "../assets/images/3proj/fncPc.png";

const Projects = () => {
  const imageModal = useRef(null);
  const [imgType, setImgType] = useState("");

  const handleImgBtnClick = (imgL) => {
    setImgType(imgL);
    imageModal.current.showModal();
    imageModal.current.style = "display:flex";
  };

  return (
    <section
      className="projects"
      aria-label="Project's group"
      id="pr"
      data-observer
    >
      <h1>Project's</h1>
      <div
        className="projects__container"
        aria-label="Project's info container"
      >
        <img
          src={window.innerWidth < 900 ? ImgKsPh : ImgKsPC}
          alt="Project image"
        />
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
            <button onClick={() => handleImgBtnClick("ks")}>Images</button>
            <button>Go Live</button>
          </div>
        </div>
      </div>
      <div
        className="projects__container"
        aria-label="Project's info container"
      >
        <img
          src={window.innerWidth < 900 ? ImgDashboardPh : ImgDbPc}
          alt="Project image"
        />
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
            <button onClick={() => handleImgBtnClick("db")}>Images</button>
            <button>Go Live</button>
          </div>
        </div>
      </div>
      <div
        className="projects__container"
        aria-label="Project's info container"
      >
        <img
          src={window.innerWidth < 900 ? ImgFinancdPh : ImgFcPc}
          alt="Project image"
        />
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
            <button onClick={() => handleImgBtnClick("fc")}>Images</button>
            <button>Go Live</button>
          </div>
        </div>
      </div>
      <ImgCarousel refHook={imageModal} imgT={imgType} />
    </section>
  );
};

export default Projects;
