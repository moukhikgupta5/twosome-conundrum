const express = require("express");
const router = express.Router();
const inputhandler = require("../Controllers/inputclue");

router.post("/", inputhandler);
module.exports = router;
