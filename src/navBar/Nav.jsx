import React from "react";
import OptPc from "./OptPc";
import OptPh from "./OptPh";

const Nav = () => {
  return window.innerWidth < 900 ? <OptPh /> : <OptPc />;
};

export default Nav;
