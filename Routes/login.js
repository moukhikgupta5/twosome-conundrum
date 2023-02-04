const express = require("express");
const router = express.Router();
const loginhandler = require("../Controllers/login");
const loginauthhandler = require("../Controllers/loginauthorization");

router.post("/", loginhandler);
module.exports = router;
