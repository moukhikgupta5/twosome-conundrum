const jwt = require("jsonwebtoken");
const participantsmodel = require("../Models/participants_Model");
const jwt_key = process.env.JWT_SECRET_KEY;
const authhandler = async (req, res, next) => {
  const clueid = req.params.clueid;
  console.log(req.cookies);
  const token = req.cookies.islogedin;
  const payload = jwt.verify(token, jwt_key);
  const user = await participantsmodel.findById(payload.payload);
  if (user) {
    if (user.AllowedClues.includes(clueid)) {
      console.log("user allowed to look at clue");
      next();
    } else {
      res.json({
        message: "admin permission required",
      });
    }
  } else {
    res.json({
      message: "user not found",
    });
  }
};
module.exports = authhandler;
