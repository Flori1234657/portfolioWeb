import {
  ImgDashboardPh,
  ImgShqipComputersPh,
  ImgRestorantNurPc,
  ImgDbPc,
  ImgShqipComputersPc,
  ImgRestorantNurPh,
} from "../../../assets";

const data = [
  {
    imgPh: ImgRestorantNurPh,
    imgPc: ImgRestorantNurPc,
    title: "Restorant Nur",
    desc: `A MERN-stack website for a restaurant. Here user's can see the
    dynamic menu, make a reservation, add dishes to wishlist and many other
    features. Also for state management Zustand is used.`,
    imgVer: "rstNur",
    animType: "pl",
  },
  {
    imgPh: ImgDashboardPh,
    imgPc: ImgDbPc,
    title: "Ks Hotel Admin Panel",
    desc: `This is the admin panel of Ks-Hotel,here the host can manage his
  room's and reservation's also this admin panel have diffrent
  graphic's for analytic's.`,
    imgVer: "db",
    animType: "mn",
  },
  {
    imgPh: ImgShqipComputersPh,
    imgPc: ImgShqipComputersPc,
    title: "Shqip Computers",
    desc: `This is a full-stack webApp for a computer shop. It is build
    with React Ts and Strapi for backend. Here user's can buy computer's
    searching and filtering them.`,
    imgVer: "shqPc",
    animType: "pl",
  },
];

export default data;
