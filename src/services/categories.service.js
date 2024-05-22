const CategoryModel = require("../models/category.model");

const deleteCategoryService = async (req) => {
  try {
    const { categoryID } = req.params;
    const data = await CategoryModel.deleteOne({ _id: categoryID });
    return { status: true, data, message: "Delete Brand." };
  } catch (error) {
    return { status: false, message: error.message };
  }
};
const getCategoriesService = async () => {
  try {
    const data = await CategoryModel.find({}, { createdAt: 0, updatedAt: 0 });
    return { status: true, data };
  } catch (error) {
    return { status: false, message: error.message };
  }
};
const postCategoryService = async (req) => {
  try {
    const data = await CategoryModel.create(req.body);
    return { status: true, data };
  } catch (error) {
    return { status: false, message: error.message };
  }
};

module.exports = {
  postCategoryService,
  getCategoriesService,
  deleteCategoryService,
};
