const express = require("express");

const router = express.Router();

const PlayerControllers = require("./controllers/playerControllers");
const PartyControllers = require("./controllers/partyControllers");
const ContactControllers = require("./controllers/contactControllers");

router.get("/players", PlayerControllers.browse);
router.delete("/players/:id", PlayerControllers.destroy);
router.get("/party", PartyControllers.browse);
router.post("/contact", ContactControllers.send);

module.exports = router;
