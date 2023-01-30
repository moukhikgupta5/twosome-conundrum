const dataModel = require("../Models/participants_Model");

const signuphandler = async (req, res) => {
  try {
    const input_Data = req.body;
    console.log(input_Data);
  
      await dataModel.create(input_Data);
      res.json({
        message: "Team Signed Up",
        data: input_Data,
        correct: true,
      });
    
  } catch (err) {
    console.log(err);
    res.json({
      correct: false,
    });
  }
};
module.exports = signuphandler;
