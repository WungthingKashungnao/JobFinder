const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

// local import start
const connect = require("./db/connect.js");
const healthRouter = require("./routes/healthRoute.js");
const authRouter = require("./routes/authRoutes.js");
// local import end

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// routes start
app.use("/api", healthRouter);
app.use("/api/auth", authRouter);

app.use("/*", (req, res) => {
  res.send({
    message: "Route not found",
  });
});
// routes end

app.listen(3001, () => {
  console.log(`server started successfully on port 3001`);
  connect();
});
