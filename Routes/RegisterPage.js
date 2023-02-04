const express = require("express");
const router = express.Router();
// const loginhandler = require("../Controllers/login");

router.get("/", (req, res) => {
  res.sendFile("../views/Signup_form.html", { root: __dirname });
});
module.exports = router;
