const mongoose = require("mongoose");
const url = require("../config/config").db.url;
const chalk = require("chalk");

const option = { autoIndex: true };
const connectDB = async () => {
  try {
    await mongoose.connect(url, option);
    console.log(chalk.bgCyan("MongoDB is connected"));
  } catch (error) {
    console.log(chalk.bgRed("MongoDB is not connected"));
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
