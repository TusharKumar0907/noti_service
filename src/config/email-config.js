const nodemailer = require("nodemailer");

const { GMAIL_EMAIL, GMAIL_PASS } = require('./server-config');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_EMAIL,
      pass: GMAIL_PASS
    }
  });


  module.exports = transporter;