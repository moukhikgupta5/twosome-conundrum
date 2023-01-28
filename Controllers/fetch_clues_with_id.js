const CluesModel = require("../Models/clues_Model");

const cluefetching = async (req, res) => {
  try {
    const clue_ids = req.body.clue_ids;
    console.log(clue_ids);
    const clues = [];
    if (clue_ids != []) {
      clue_ids.map(async (item) => {
        const clue_data = await CluesModel.findById(item);
        clues.push(clue_data);
        return;
      });
      res.json({
        message: "clues_data is here",
        data: clues,
      });
    } else {
      res.json({
        message: "clue_ids not found",
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      message: "clue fetching not possible",
    });
  }
};
module.exports = cluefetching;
