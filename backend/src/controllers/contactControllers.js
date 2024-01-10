const transporter = require("../services/mail");

const send = async (req, res, next) => {
  try {
    await transporter.sendMail({
      from: req.body.email,
      to: "romeo.sebastien.dev@gmail.com",
      subject: req.body.subject,
      text: req.body.message,
      html: "<b>Hello world?</b>",
    });

    res.json({ msg: "votre email a bien été envoyé" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  send,
};
