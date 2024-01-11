const transporter = require("../services/mail");

const send = async (req, res, next) => {
  try {
    await transporter.sendMail({
      from: req.body.email,
      to: "romeo.sebastien.dev@gmail.com",
      subject: req.body.subject,
      text: req.body.message,
      html: `<main>
        <h1>Bonjour Administrateur</h1>
        <h3>Vous avez un nouveau message de ${req.body.name} ${req.body.surname}</h3>
        <h4>Téléphone facultatif : ${req.body.number}</h4>
        <br /><span>____________________________________________________________</span>
        <p>${req.body.message}</p>
        <br /><span>____________________________________________________________</span>
        <h5>Bonne journée</ h5>
      </main >`,
    });

    res.status(200).json({ msg: "votre email a bien été envoyé" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  send,
};
