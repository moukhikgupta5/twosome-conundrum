const express = require("express");
const router = express.Router();
const admincluehandler = require("../Controllers/admin_clue_authorization");

router.patch("/", admincluehandler);
module.exports = router;
