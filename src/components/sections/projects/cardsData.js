import {
  ImgDashboardPh,
  ImgShqipComputersPh,
  ImgKsPC,
  ImgDbPc,
  ImgShqipComputersPc,
  ImgKsPh,
} from "../../../assets";

const data = [
  {
    imgPh: ImgKsPh,
    imgPc: ImgKsPC,
    title: "Ks Hotel",
    desc: `A webApp for an imaginary Hotel on Ksamil/Albania.Here user's can
  book their room's and they will wait for the host respond.Also this
  web have an admin panel.`,
    imgVer: "ks",
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
