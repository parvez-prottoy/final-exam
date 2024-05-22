const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    brandName: {
      type: String,
      unique: true,
      require: true,
    },
    brandImg: {
      type: String,
      require: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const BrandModel = mongoose.model("brands", schema);
module.exports = BrandModel;
