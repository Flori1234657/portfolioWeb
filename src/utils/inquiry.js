const data = new Date();
import emailjs from "emailjs-com";

const SERVICE_ID = import.meta.env.VITE_REACT_APP_EMAIL_JS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_REACT_APP_EMAIL_JS_TEMPLATE_ID;
const API_KEY = import.meta.env.VITE_REACT_APP_EMAIL_JS_API_KEY;

export const sendEmail = (userEmail) => {
  emailjs
    .send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: `${userEmail}`,
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
