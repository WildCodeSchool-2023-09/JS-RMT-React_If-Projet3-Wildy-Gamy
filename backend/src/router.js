const express = require("express");

const router = express.Router();

const commentControllers = require("./controllers/commentControllers");
const validateComment = require("./validators/validateComment");

router.get("/comments", commentControllers.browse);
router.post("/comments", validateComment, commentControllers.add);
// router.get("/comments/:id", commentControllers.read);
// router.put("/comments/:id", validateComment, commentControllers.edit);
// router.delete("/comments/:id", commentControllers.destroy);

const PlayerControllers = require("./controllers/playerControllers");
const PartyControllers = require("./controllers/partyControllers");
const GameControllers = require("./controllers/gameControllers");
const ContactControllers = require("./controllers/contactControllers");
const ProfilControllers = require("./controllers/profilControllers");
// const AuthControllers = require("./controllers/authControllers");

const hashPassword = require("./midleware/hash/hashPassword");
const validateUsers = require("./midleware/joi/validateUsers");

router.get("/players", PlayerControllers.browse);
router.post("/logout", PlayerControllers.logout);
router.delete("/players/:id", PlayerControllers.destroy);
router.get("/party", PartyControllers.browse);
router.get("/party/:id", PartyControllers.read);
router.get("/games", GameControllers.browse);
router.get("/games/:id", GameControllers.read);

router.post("/contact", ContactControllers.send);
router.post("/players", validateUsers, hashPassword, PlayerControllers.add);
router.post("/login", PlayerControllers.log);
router.get("/profil", ProfilControllers.browse);
router.get("/login/:id", ProfilControllers.read);

module.exports = router;
