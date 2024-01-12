const express = require("express");

const router = express.Router();

const PlayerControllers = require("./controllers/playerControllers");
const PartyControllers = require("./controllers/partyControllers");
const GameControllers = require("./controllers/gameControllers");
const ContactControllers = require("./controllers/contactControllers");

const hashPassword = require("./midleware/hash/hashPassword");

router.get("/players", PlayerControllers.browse);
router.delete("/players/:id", PlayerControllers.destroy);
router.get("/party", PartyControllers.browse);
router.get("/games", GameControllers.browse);
router.post("/contact", ContactControllers.send);
router.post("/players", hashPassword, PlayerControllers.add);

module.exports = router;
