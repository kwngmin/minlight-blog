const nodemailer = require("nodemailer");
require("dotenv").config();

export async function sendEmail() {
  const { AUTH_USER, AUTH_PASS } = process.env;
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: AUTH_USER, // generated ethereal user
      pass: AUTH_PASS, // generated ethereal password
    },
  });
  return;
}
