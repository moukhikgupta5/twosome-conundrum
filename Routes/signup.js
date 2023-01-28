const express = require("express");
const router = express.Router();
const inputhandler = require("../Controllers/signup");

router.post("/", inputhandler);
module.exports = router;
