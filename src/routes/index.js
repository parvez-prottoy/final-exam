const {
  postBrand,
  getBrands,
  deleteBrand,
} = require("../controllers/brands.controller");
const {
  deleteCategory,
  getCategories,
  postCategory,
} = require("../controllers/categories.controller");

const router = require("express").Router();

// ? Brands
router.delete("/brands/:brandID", deleteBrand);
router.get("/brands", getBrands);
router.post("/createBrand", postBrand);

// ? Categories
router.delete("/ProductCategoryList/:categoryID", deleteCategory);
router.get("/ProductCategoryList", getCategories);
router.post("/ProductCategoryList", postCategory);

module.exports = router;
