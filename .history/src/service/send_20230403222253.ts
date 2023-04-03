const nodemailer = require("nodemailer");
require('dotenv').config();

export async function sendEmail() {
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: , // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });
  return;
}
