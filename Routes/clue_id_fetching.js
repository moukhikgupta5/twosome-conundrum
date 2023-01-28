const express = require("express");
const router = express.Router();
const clue_id_fetch_handler = require("../Controllers/getallowed_clue_ids");

router.get("/", clue_id_fetch_handler);
module.exports = router;
