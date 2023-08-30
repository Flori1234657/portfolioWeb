import React from "react";

const OptPh = () => {
  return (
    <nav className="phoneNavigation">
      <img src="" alt="Logo" />
      <button>{/*Icon InshaaAllah*/}</button>
      <div
        className="phoneNavigation__hiddenCont"
        aria-label="Hidden navigation and CTA btn's group"
      >
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>About us</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
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
