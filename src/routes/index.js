const {
  postBrand,
  getBrands,
  deleteBrand,
} = require("../controllers/brands.controller");

const router = require("express").Router();

// ? Brands
router.delete("/brands/:brandID", deleteBrand);
router.get("/brands", getBrands);
router.post("/createBrand", postBrand);

module.exports = router;
