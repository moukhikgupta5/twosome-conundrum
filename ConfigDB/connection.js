require("dotenv").config();
const mongoose = require("mongoose");
const dbkey = process.env.DB_Password;
const dburl = `mongodb+srv://Kulwinder_Singh:${dbkey}@cluster0.gmc2mlf.mongodb.net/?retryWrites=true&w=majority`;
const dbConnection = mongoose.connect(
  dburl,
  {
    useNewUrlParser: true,
    dbName: "twosome-conundrum_DATA",
  },
  () => {
    console.log("Connected to DB");
  }
);
module.exports = dbConnection;
