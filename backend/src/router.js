const express = require("express");

const router = express.Router();

const partyControllers = require("./controllers/partyControllers");

router.get("/admin", partyControllers.browse);

module.exports = router;
