const nodemailer = require("nodemailer");

const sendEmail = (option) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.sendgride.net",
    port: 587,
    server: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: option.to,
    subject: option.subject,
    html: option.text,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;
