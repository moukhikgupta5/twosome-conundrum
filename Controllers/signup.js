const dataModel = require("../Models/participants_Model");

const signuphandler = async (req, res) => {
  try {
    const input_Data = req.body;
    console.log(input_Data);
    const Leadercheck = await dataModel.findOne({
      Leader_email: input_Data.Leader_email,
    });
    const Memebercheck = await dataModel.findOne({
      Memeber_email: input_Data.Memeber_email,
    });
    if (Leadercheck || Memebercheck) {
      res.json({
        message: "Team leader or Team Memeber already signed up",
        correct: false,
      });
    } else {
      await dataModel.create(input_Data);
      res.json({
        message: "Team Signed Up",
        data: input_Data,
        correct: true,
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      correct: false,
    });
  }
};
module.exports = signuphandler;
