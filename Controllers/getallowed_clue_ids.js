const ParticipantsModel = require("../Models/participants_Model");
const jwt = require("jsonwebtoken");
const userclueshandler = async (req, res) => {
  try {
    const token = req.cookies.islogedin;
    if (token) {
      const jwt_key = process.env.JWT_SECRET_KEY;
      const payload = jwt.verify(token, jwt_key);
      const userinfo = await ParticipantsModel.findById(payload.payload);
      console.log(userinfo);
      const clueids = userinfo.AllowedClues;
      res.json({
        message: "clues are here",
        data: clueids,
      });
    } else {
      res.json({
        message: "token not found",
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      message: "some error in fetching clues",
    });
  }
};
module.exports = userclueshandler;
