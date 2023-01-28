const express = require("express");
const router = express.Router();
const clue_data_fetch_handler = require("../Controllers/fetch_clues_with_id");

router.post("/", clue_data_fetch_handler);
module.exports = router;
