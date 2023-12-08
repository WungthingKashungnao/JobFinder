const os = require("os");
const date = new Date();
const curDate = date.toTimeString();
const hostName = os.hostname();

const getHealth = async (req, res) => {
  try {
    res.status(200).json({
      ServerName: "Job Listing Server",
      SystemName: `${hostName}`,
      Date: `${curDate}`,
      Status: res.statusCode,
    });
  } catch (error) {
    console.log({
      message: `error fetch health status of ther server`,
      error,
    });
  }
};

module.exports = getHealth;
