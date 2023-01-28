const express = require("express");
const router = express.Router();
const testingauthmiddleware = require("../Controllers/restingauth");
const authmiddleware = require("../Middleware/clueautherization");

router.post("/:clueid", authmiddleware, testingauthmiddleware);
module.exports = router;
