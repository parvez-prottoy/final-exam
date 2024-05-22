require("dotenv").config("../.env");

const dev = {
  app: {
    port: process.env.PORT || 8080,
  },
  db: {
    url: process.env.MONGO_URL || "mongodb://localhost:27017/Final-Exam",
  },
};

module.exports = dev;
