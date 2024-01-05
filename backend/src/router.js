const express = require("express");

const router = express.Router();

const PlayerControllers = require("./controllers/playerControllers");
const PartyControllers = require("./controllers/partyControllers");

router.get("/players", PlayerControllers.browse);
router.delete("/players/:id", PlayerControllers.destroy);
router.get("/party", PartyControllers.browse);

module.exports = router;
