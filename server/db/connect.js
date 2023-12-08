const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("successfully connected to mongodb database");
  } catch (error) {
    console.log({ message: `error connecting to the database`, error });
  }
};

module.exports = connect;
