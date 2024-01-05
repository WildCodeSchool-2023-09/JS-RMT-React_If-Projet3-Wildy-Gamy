const express = require("express");

const router = express.Router();

const nodemailer = require("nodemailer");

// Remplacez ces valeurs par les identifiants de votre compte email réel
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "wcs20232024@gmail.com",
    pass: "Wcs2023wcs!",
  },
});

// Route pour gérer l'envoi d'e-mails
router.post("/envoyer-email", async (req, res) => {
  try {
    const { name, surname, email, number, message } = req.body;

    const mailOptions = {
      from: "wcs20232024@gmail.com",
      to: "email-destinataire@example.com", // Remplacez par l'adresse email du destinataire
      subject: "Soumission de formulaire de contact",
      text: `
          Nom : ${name} ${surname}
          Email : ${email}
          Numéro : ${number}
          Message : ${message}
        `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send("Email envoyé avec succès");
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    res.status(500).send(error.toString());
  }
});

const PlayerControllers = require("./controllers/playerControllers");
const PartyControllers = require("./controllers/partyControllers");

router.get("/players", PlayerControllers.browse);
router.delete("/players/:id", PlayerControllers.destroy);
router.get("/party", PartyControllers.browse);

module.exports = router;
