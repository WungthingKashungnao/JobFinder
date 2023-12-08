const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel.js");

// register user start
const registerUser = async (req, res) => {
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
      if (
        name === req.body.name ||
        email === req.body.email ||
        mobile == req.body.mobile
      ) {
        console.log(
          `There is already an existing user with similar credentials`
        );
        return res.status(400).json({
          message: `There is already an existing user with similar credentials`,
        });
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

    return res.status(200).json({
      message: `successfully registered a new user`,
      newUser,
    });
  } catch (error) {
    console.log({
      message: "Error Registering User",
      error,
    });
    return res.status(500).json({
      message: "Error Registering User",
      error,
    });
  }
};
// register user end

// login user start
const loginUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      console.log({
        message: "user not found",
        status: 400,
      });
      return res.status(400).json({ message: "user not found" });
    }

    //chcking if password is correct start
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      console.log({
        message: `wrong email or password`,
        status: 400,
      });

      res.status(400).json({
        message: `wrong email or password`,
      });
    }
    //chcking if password is correct end

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.cookie("access_token", token, { httpOnly: true }).status(200).json({
      message: `successfully logged in`,
      user,
    });
  } catch (error) {
    console.log({
      message: `Error loggin in user`,
      error,
    });
  }
};
// login user end

module.exports = { registerUser, loginUser };
