const jwt = require("jsonwebtoken");
const ParticipantsModel = require("../Models/participants_Model");
const loginauthhandler = async (req, res) => {
  try {
    const token = req.body.islogedin;
    console.log(token)
    if (token) {
      const jwt_key = process.env.JWT_SECRET_KEY;
      const payload = jwt.verify(token, jwt_key);
      const userinfo = ParticipantsModel.findById(payload.payload);
      console.log(userinfo);
      if (userinfo) {
        res.json({
          message: "user loged in",
          allow:true
        });
      } else {
        res.json({
          message: "user loged in",
          allow:false
        });      
      }
    }
    else{
      res.json({
        message: "token not found",
        allow:false
      });  
    }

  } catch (err) {
    console.log(err);
    res.json({
      message: "user loged in",
      allow:false
    });   
  }
};
module.exports = loginauthhandler;
