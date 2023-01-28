const cluesModel = require("../Models/clues_Model");

const dumyinputhandler = async (req, res) => {
  try {
    const input_Data = req.body;
    await cluesModel.create(input_Data);
    res.json({
      message: "document inserted",
      data: input_Data,
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = dumyinputhandler;
