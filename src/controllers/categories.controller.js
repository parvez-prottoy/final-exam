const {
  postCategoryService,
  getCategoriesService,
  deleteCategoryService,
} = require("../services/categories.service");

const deleteCategory = async (req, res) => {
  const result = await deleteCategoryService(req);
  if (!result.status) {
    res.status(500).json(result);
  }
  res.status(200).json(result);
};
const getCategories = async (req, res) => {
  const result = await getCategoriesService();
  if (!result.status) {
    res.status(500).json(result);
  }
  res.status(200).json(result);
};
const postCategory = async (req, res) => {
  const result = await postCategoryService(req);
  if (!result.status) {
    res.status(500).json(result);
  }
  res.status(200).json(result);
};

module.exports = { postCategory, getCategories, deleteCategory };
