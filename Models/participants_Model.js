const mongoose = require("mongoose");
const ParticipantsSchema = new mongoose.Schema({
  Team_Leader_Name: {
    type: String,
    required: true,
  },
  Leader_roll_no: {
    type: String,
    required: true,
  },
  Leader_email: {
    type: String,
    required: true,
  },
  Leader_Contact: {
    type: String,
    required: true,
  },
  Leader_year: {
    type: String,
    required: true,
  },
  Leader_branch: {
    type: String,
    required: true,
  },
  Team_Member_Name: {
    type: String,
    required: true,
  },
  Memeber_roll_no: {
    type: String,
    required: true,
  },
  Memeber_email: {
    type: String,
    required: true,
  },
  Member_Contact: {
    type: String,
    required: true,
  },
  Member_year: {
    type: String,
    required: true,
  },
  Member_branch: {
    type: String,
    required: true,
  },
  Team_Name: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    requird: true,
  },
  AllowedClues: {
    type: Array,
    default: [],
  },
});

const ParticipantsModel = mongoose.model(
  "ParticipantsModel",
  ParticipantsSchema
);
module.exports = ParticipantsModel;
