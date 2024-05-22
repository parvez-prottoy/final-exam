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
const {
  deleteFeature,
  getFeatures,
  postFeature,
} = require("../controllers/features.controller");

const router = require("express").Router();

// ? Brands
router.delete("/brands/:brandID", deleteBrand);
router.get("/brands", getBrands);
router.post("/createBrand", postBrand);

// ? Categories
router.delete("/ProductCategoryList/:categoryID", deleteCategory);
router.get("/ProductCategoryList", getCategories);
router.post("/ProductCategoryList", postCategory);

// ? Features
router.delete("/Features/:featureID", deleteFeature);
router.get("/Features", getFeatures);
router.post("/Features", postFeature);

module.exports = router;
