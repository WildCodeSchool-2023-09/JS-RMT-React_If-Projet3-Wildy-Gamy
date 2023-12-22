const express = require("express");

const router = express.Router();

const PlayerControllers = require("./controllers/playerControllers");

router.get("/player", PlayerControllers.browse);
router.delete("/player/:id", PlayerControllers.destroy);

module.exports = router;
