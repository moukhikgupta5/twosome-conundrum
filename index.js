const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const cookieparser = require("cookie-parser");
const fs = require("fs");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
app.use(cors({
  origin:"https://twosome-conundrum.netlify.app",
  credentials:true,
}));
app.use(express.json());
app.use(cookieparser());

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views engine", "ejs");
mongoose.set("strictQuery", false);

require("./ConfigDB/connection");
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,"./client/build/index.html"))
})
app.use("/signup", require("./Routes/signup"));
app.use("/clue_id", require("./Routes/clue_id_fetching"));
app.use("/inputclue", require("./Routes/clueinputroute"));
app.use("/login", require("./Routes/login"));
app.use("/testingauth", require("./Routes/testingauth"));
app.use("/admincluehandler", require("./Routes/adminclueauth"));
app.use("/login_auth", require("./Routes/login_auth"));



app.listen(3001, () => {
  console.log("server running on port 3001 ");
});
