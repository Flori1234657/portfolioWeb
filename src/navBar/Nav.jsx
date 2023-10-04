import React from "react";
import OptPc from "./OptPc";
import OptPh from "./OptPh";
import { useWindowWidth } from "../hooks/useWindowWidth";

const Nav = () => {
  const windowWidth = useWindowWidth();

  return windowWidth < 900 ? <OptPh /> : <OptPc />;
};

export default Nav;
