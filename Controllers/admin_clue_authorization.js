const ParticipantsModel = require("../Models/participants_Model");

const admincluehandler = async (req, res) => {
  const incomingdata = req.body;
  if(incomingdata){
  const teamdocument = await ParticipantsModel.findOne({
    Leader_email: incomingdata.Leader_email,
  });
  if(teamdocument){
   if(teamdocument.AllowedClues.includes(incomingdata.allowclueid)===true){
    res.json({
      message: `Clue already allowed`,
      allowed:false
    });
    }
    else{
      teamdocument.AllowedClues.push(incomingdata.allowclueid);
      teamdocument.save();
      res.json({
        message: `Team has been allowed to look at clue with id ${incomingdata.allowclueid}`,
        allowed:true
      });
    }
    // teamdocument.AllowedClues.push(incomingdata.allowclueid);
    // teamdocument.save();
    // res.json({
    //   message: `Team has been allowed to look at clue with id ${incomingdata.allowclueid}`,
    //   allowed:true
    // });
  }
  else{
    res.json({
      message: `Team has not been allowed to look at clue with id ${incomingdata.allowclueid} because we didnt found the team in db`,
      allowed:false
    });
  }
}
else{
  res.json({
    message: `Data corrupted input valid data`,
    allowed:false
  });
}
};
module.exports = admincluehandler;
