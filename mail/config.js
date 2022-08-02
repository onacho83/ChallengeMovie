const nodemailer = require("nodemailer");
const nodemailerSendgrid = require("nodemailer-sendgrid");
const fs = require("fs");

const createTransporter = () => {
  const transport = nodemailer.createTransport(
    nodemailerSendgrid({
      apiKey: process.env.SENGRID,
    })
  );
  return transport;
};

const sendMail = async (user) => {
  const transporter = createTransporter();
  const info = await transporter.sendMail({
    from: "onacho83@gmail.com",
    to: user.email,
    subject: "Bienvenido " + user.nombre,
    html: fs.readFileSync("mail/bodymail.html", "utf-8"),
  });
  console.log("mensaje enviado");

  return;
};

module.exports = {
  sendMail,
};
