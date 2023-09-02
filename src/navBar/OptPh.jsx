import { useState } from "react";
import { HiMenuAlt3 as MenuIc } from "react-icons/hi";
import Logo from "../assets/logo/logo.png";

const OptPh = () => {
  const [togleNav, setTogleNav] = useState(false);
  const [obserObj, setObserObj] = useState({
    ["home"]: true,
    ["services"]: false,
    "about-us": false,
    "my-skills": false,
    ["projects"]: false,
    ["contact"]: false,
  });

  // InshaaAllah ktu posht do bejm animation e linkve

  const observerRef = document.querySelectorAll("[data-observer]");
  const observer = new IntersectionObserver((els) => {
    els.forEach((el) => {
      if (el.isIntersecting)
        setObserObj({ ...obserObj, [el.target.className]: true });
      else setObserObj({ ...obserObj, [el.target.className]: false });
    });
  });
  observerRef.forEach((el) => observer.observe(el));

  //Nese te jep probleme nuk i tregon linket sic duhet mund te duhet te perdoresh useRef
  //shiko vidjon e webDevSimplified.

  return (
    <nav className="phoneNavigation">
      <img src={Logo} alt="Logo" />
      <button>
        <MenuIc onClick={() => setTogleNav(!togleNav)} />
      </button>

      <div
        className="phoneNavigation__hiddenCont"
        aria-label="Hidden navigation and CTA btn's group"
        style={togleNav ? { display: "flex" } : { opacity: "none" }}
      >
        <ul>
          <li className={obserObj.home ? "active-link" : ""}>Home</li>
          <li className={obserObj.services ? "active-link" : ""}>Services</li>
          <li className={obserObj["about-us"] ? "active-link" : ""}>
            About us
          </li>
          <li className={obserObj["my-skills"] ? "active-link" : ""}>Skills</li>
          <li className={obserObj.projects ? "active-link" : ""}>Projects</li>
          <li className={obserObj.contact ? "active-link" : ""}>Contact</li>
        </ul>
        <div aria-label="CTA buton's group">
          <button>Get My Cv</button>
          <button>Hire Me</button>
        </div>
      </div>
    </nav>
  );
};

export default OptPh;
