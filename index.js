const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const cookieparser = require("cookie-parser");
const fs = require("fs");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(express.json());
app.use(cookieparser());

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'./client/build')))
mongoose.set("strictQuery", false);

require("./ConfigDB/connection");
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,"./client/build/index.html"))
})
app.use("/signup", require("./Routes/signup"));
app.use("/clue_id", require("./Routes/clue_id_fetching"));
app.use("/clue_data", require("./Routes/fetching_clue_data"));
app.use("/inputclue", require("./Routes/clueinputroute"));
app.use("/login", require("./Routes/login"));
app.use("/testingauth", require("./Routes/testingauth"));
app.use("/admincluehandler", require("./Routes/adminclueauth"));

app.listen(PORT, () => {
  console.log(`server running on port ${PORT} `);
});
