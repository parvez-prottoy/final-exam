const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: {
      type: String,

      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const FeatureModel = mongoose.model("features", schema);
module.exports = FeatureModel;
