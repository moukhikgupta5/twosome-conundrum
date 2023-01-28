const ParticipantsModel = require("../Models/participants_Model");

const admincluehandler = async (req, res) => {
  const incomingdata = req.body;
  const teamdocument = await ParticipantsModel.findOne({
    Leader_email: incomingdata.Leader_email,
  });
  teamdocument.AllowedClues.push(incomingdata.allowclueid);
  teamdocument.save();
  res.json({
    message: `Team has been allowed to look at clue with id ${incomingdata.allowclueid}`,
  });
};
module.exports = admincluehandler;
