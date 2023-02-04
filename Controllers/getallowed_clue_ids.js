const CluesModel = require("../Models/clues_Model");
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
      console.log(clueids);
      const users = [];
for(const userId of clueids) {
   let clues_data=await CluesModel.findById(userId);
   users.push(clues_data);
    }

     res.json({
        message: "clues are here",
        data: users,
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
