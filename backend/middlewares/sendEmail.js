const nodeMailer = require("nodemailer");

exports.sendEmail = async (options) => {
  var transporter = nodeMailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "eadc7dfab6b48e",
      pass: "e6bf7bca8e0998",
    },
  });

  const mailOptions = {
    from: "",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};
