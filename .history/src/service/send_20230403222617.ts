const nodemailer = require("nodemailer");
require("dotenv").config();

export async function sendEmail() {
  const { AUTH_USER } = process.env;
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.AUTH_USER, // generated ethereal user
      pass: process.env.AUTH_PASS, // generated ethereal password
    },
  });
  return;
}
