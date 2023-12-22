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

// Set middleware of CORS
// app.use((req, res, next) => {
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "https://job-listing-client-lac.vercel.app"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
//   );
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   res.setHeader("Access-Control-Allow-Private-Network", true);
//   //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
//   res.setHeader("Access-Control-Max-Age", 7200);

//   next();
// });

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
