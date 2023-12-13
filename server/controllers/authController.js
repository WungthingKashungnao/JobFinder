const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel.js");
const createError = require("../utils/error.js");

// register user start
const registerUser = async (req, res, next) => {
  try {
    // ecrypting the password start
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    // ecrypting the password end

    // checking if there is already an existing user with same data for the properties ===> start
    const existingData = await UserModel.find({
      $or: [
        { name: req.body.name },
        { email: req.body.email },
        { mobile: req.body.mobile },
      ],
    });

    if (existingData[0] !== undefined) {
      const { name, email, mobile } = existingData[0];

      if (name === req.body.name) {
        return next(
          createError(
            400,
            `There is already an existing user with the same name`
          )
        );
      }

      if (email === req.body.email) {
        return next(
          createError(
            400,
            `There is already an existing user with the same email`
          )
        );
      }

      if (mobile == req.body.mobile) {
        return next(
          createError(
            400,
            `There is already an existing user with the same phone number`
          )
        );
      }
    }
    // checking if there is already an existing user with same data for the properties ====> end

    const newUser = await UserModel({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      password: hash,
    });
    newUser.save();
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);

    return res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({
        message: `successfully registered a new user`,
        recruiter: req.body.name,
        newUser,
        token,
      });
  } catch (error) {
    return next(createError(500, "Error Registering User"));
  }
};
// register user end

// login user start
const loginUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }

    //chcking if password is correct start
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: `wrong email or password`,
      });
    }
    //chcking if password is correct end
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    // res.set("Authorization", "Bearer " + token);

    res.cookie("access_token", token, { httpOnly: true }).status(200).json({
      message: `successfully logged in`,
      recruiter: user.name,
      user,
      token,
    });
  } catch (error) {
    next(createError(500, "Error loggin in user"));
  }
};
// login user end

module.exports = { registerUser, loginUser };
