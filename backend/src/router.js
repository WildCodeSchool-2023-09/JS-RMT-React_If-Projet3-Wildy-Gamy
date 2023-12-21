const express = require("express");

const router = express.Router();

const partyControllers = require("./controllers/partyControllers");

router.get("/party", partyControllers.browse);

module.exports = router;
