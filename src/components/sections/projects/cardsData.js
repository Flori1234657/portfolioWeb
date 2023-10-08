import {
  ImgDashboardPh,
  ImgFinancdPh,
  ImgKsPC,
  ImgDbPc,
  ImgFcPc,
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
    imgPh: ImgFinancdPh,
    imgPc: ImgFcPc,
    title: "Gjeniu Buxhetor",
    desc: `This is a financing and budgeting webApp,it can help user's manage
  their spending's and also set financing goal's to save more money.`,
    imgVer: "fc",
    animType: "pl",
  },
];

export default data;
