const express = require("express");
const router = express.Router();
const loginhandler = require("../Controllers/login");

router.post("/", loginhandler);
module.exports = router;
