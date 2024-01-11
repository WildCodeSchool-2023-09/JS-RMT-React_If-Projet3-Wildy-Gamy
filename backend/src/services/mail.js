const nodemailer = require("nodemailer");

const { MAIL_USER, MAIL_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASSWORD,
  },
});

module.exports = transporter;
