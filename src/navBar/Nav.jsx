import { useWindowWidth } from "../hooks/useWindowWidth";
import OptPh from "./OptPh";
import OptPc from "./OptPc";

const Nav = () => {
  const windowWidth = useWindowWidth();

  return windowWidth < 900 ? <OptPh /> : <OptPc />;
};

export default Nav;
