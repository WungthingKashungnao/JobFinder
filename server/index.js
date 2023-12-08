const express = require("express");
require("dotenv").config();

// local import start
const connect = require("./db/connect.js");
// local import end

const app = express();

app.listen(3001, () => {
  console.log(`server started successfully on port 3001`);
  connect();
});
