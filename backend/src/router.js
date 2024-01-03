const express = require("express");

const router = express.Router();

const PlayerControllers = require("./controllers/playerControllers");

router.get("/players", PlayerControllers.browse);
router.delete("/players/:id", PlayerControllers.destroy);

module.exports = router;
