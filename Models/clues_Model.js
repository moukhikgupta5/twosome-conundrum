const mongoose = require("mongoose");
const CluesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link_url:{
    type:String,
    required:true
  }
});

const CluesModel = mongoose.model(
  "CluesModel",
  CluesSchema
);
module.exports = CluesModel;
