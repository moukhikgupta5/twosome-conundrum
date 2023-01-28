const jwt = require("jsonwebtoken");
const ParticipantsModel = require("../Models/participants_Model");
const loginauthhandler = async (req, res) => {
  try {
    const token = req.cookies.LogedIn;
    if (token) {
      const jwt_key = process.env.JWT_SECRET_KEY;
      const payload = jwt.verify(token, jwt_key);
      const userinfo = ParticipantsModel.findById(payload.payload);
      if (userinfo) {
        next();
      } else {
        res.json({
          message: "user not loged in",
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = loginauthhandler;
