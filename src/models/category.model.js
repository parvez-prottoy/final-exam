const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    categoryName: {
      type: String,
      unique: true,
      require: true,
    },
    categoryImg: {
      type: String,
      require: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const CategoryModel = mongoose.model("categories", schema);
module.exports = CategoryModel;
