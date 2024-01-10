const express = require("express");

const router = express.Router();

const PlayerControllers = require("./controllers/playerControllers");
const PartyControllers = require("./controllers/partyControllers");
const GameControllers = require("./controllers/gameControllers");

router.get("/players", PlayerControllers.browse);
router.delete("/players/:id", PlayerControllers.destroy);
router.get("/party", PartyControllers.browse);
router.get("/games", GameControllers.browse);

module.exports = router;
