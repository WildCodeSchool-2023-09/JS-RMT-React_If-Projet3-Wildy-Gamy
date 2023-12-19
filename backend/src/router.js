const express = require("express");

const router = express.Router();

const PlayerControllers = require("./controllers/playerControllers");

router.get("/player", PlayerControllers.browse);

module.exports = router;
