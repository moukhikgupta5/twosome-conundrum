const dataModel = require("../Models/participants_Model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const loginhandler = async (req, res) => {
  try {
    const input_Data = req.body;
    const userinfo = await dataModel.findOne({
      Leader_email: input_Data.Leader_email,
    });
    if (userinfo) {
      if (userinfo.Password === input_Data.Password) {
        const uid = userinfo._id;
        const jwt_key = process.env.JWT_SECRET_KEY;
        const token = jwt.sign({ payload: uid }, jwt_key);
        res.cookie("islogedin", token);
        res.json({
          message: "user has loged in",
        });
      } else {
        res.json({
          message: "passsword incorrect",
        });
      }
    } else {
      res.json({
        message: "user not found",
      });
    }
    console.log(userinfo);
  } catch (err) {
    console.log(err);
  }
};
module.exports = loginhandler;
