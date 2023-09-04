import React from "react";
import ProfileImg from "../assets/profile/footerPlaceholder.png";
import {
  BsFillTelephoneFill as PhoneIcn,
  BsFacebook as FbIcn,
} from "react-icons/bs";
import { MdEmail as EmailIcn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="contact" data-observer>
      <section
        className="email-req"
        aria-label="Email request for work section"
      >
        <h1>What are you waiting for?Let's work together!</h1>
        <form aria-label="Email request form">
          <input
            type="email"
            placeholder="myname@example.exm"
            aria-label="Enter your email here"
          />
          <button type="submit">Inquiry</button>
        </form>
      </section>
      <section className="footer" aria-label="Footer info group">
        <div
          className="footer__person"
          aria-label="Footer person profile group"
        >
          <img src={ProfileImg} alt="Profile image" />
          <div
            className="footer__person__text-info"
            aria-label="Footer text info group"
          >
            <h2>Florian Dollani</h2>
            <h3>Freelance web developer</h3>
          </div>
        </div>
        <div className="footer__nav" aria-label="Footer nav group">
          <h2>Navigation</h2>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About us</li>
            <li>Skills</li>
            <li>Project's</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer__services" aria-label="Footer services group">
          <h2>Services</h2>
          <ul>
            <li>Front end web development</li>
            <li>Full stack web development</li>
            <li>Code service</li>
          </ul>
        </div>
        <div className="footer__contact" aria-label="Footer contact group">
          <h2>Contact</h2>
          <ul>
            <li>
              <span>
                <PhoneIcn />
              </span>{" "}
              +355 68 839 3968
            </li>
            <li>
              <span>
                <EmailIcn />
              </span>{" "}
              floriandollani15@gmail.com
            </li>
            <li>
              <span>
                <FbIcn />
              </span>{" "}
              Website profesionale
            </li>
          </ul>
        </div>
      </section>
      <section className="copyright" aria-label="Copyright group">
        <h2>Copyright © Florian Dollani</h2>
      </section>
    </footer>
  );
};

export default Footer;
