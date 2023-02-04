const express = require("express");
const router = express.Router();
const inputhandler = require("../Controllers/loginauthorization");

router.get("/", inputhandler);
module.exports = router;
