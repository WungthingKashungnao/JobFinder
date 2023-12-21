const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

// local import start
const connect = require("./db/connect.js");
const healthRouter = require("./routes/healthRoute.js");
const authRouter = require("./routes/authRoutes.js");
const jobRouter = require("./routes/jobRoutes.js");
// local import end

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["https://job-listing-client-lac.vercel.app"],
    methods: ["POST", "GET", "PUT"],
    credentials: true,
  })
);

app.use(cookieParser());

// routes start
app.get("/", (req, res) => {
  res.status(200).json("Home");
});
app.use("/api", healthRouter);
app.use("/api/auth", authRouter);
app.use("/api/job", jobRouter);

// app.use("/*", (req, res) => {
//   res.send({
//     message: "Route not found",
//   });
// });
// routes end

// middleware for error handling start
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage =
    err.message || "Something went wrong! Please try after some time.";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack, //this will give more information about the error
  });
});
// middleware for error handling end

app.listen(3001, () => {
  console.log(`server started successfully on port 3001`);
  connect();
});
