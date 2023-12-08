const express = require("express");
require("dotenv").config();

// local import start
const connect = require("./db/connect.js");
const healthRouter = require("./routes/healthRoute.js");
// local import end

const app = express();

// routes start
app.use("/api", healthRouter);
// routes end

app.listen(3001, () => {
  console.log(`server started successfully on port 3001`);
  connect();
});
