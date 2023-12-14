const jwt = require("jsonwebtoken");
const createError = require("./error.js");

const verifyToken = (req, res, next) => {
  // checking token exists or not start
  const token = req.body.token; //token sent from the client
  // const token = req.cookies.access_token;
  if (!token) {
    console.log({
      message: "you are not authenticated",
      status: 401,
    });
    return next(createError(401, "You are not authenticated!"));
  }
  // checking token exists or not start

  //verify token start
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log({
        messge: "Token is invalid",
        status: 403,
      });
      return next(createError(403, "Token is invalid!"));
    }
    req.user = user; //accessing the user info we had stored in the cookie using jwt token
    next();
  });
  //   verify token end
};

const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.userId) {
      next();
    } else {
      next(createError(403, "You are not authorized!"));
    }
  });
};

module.exports = verifyUser;
