const data = new Date();
import emailjs from "emailjs-com";

const SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
const API_KEY = process.env.REACT_APP_EMAIL_JS_API_KEY;

export const sendEmail = (userEmail) => {
  emailjs
    .send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: `${userEmail}`, // gjej zgjidhje nuk po e mer nga kjo
      },
      API_KEY
    )
    .then(() => {
      alert("Email sent succesfully!Wait for response.");
    })
    .catch(() => {
      alert("Error email wos not sent!Try again later.");
    });
};
