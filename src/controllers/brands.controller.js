const {
  postBrandService,
  getBrandsService,
  deleteBrandService,
} = require("../services/brands.service");

const deleteBrand = async (req, res) => {
  const result = await deleteBrandService(req);
  if (!result.status) {
    res.status(500).json(result);
  }
  res.status(200).json(result);
};
const postBrand = async (req, res) => {
  const result = await postBrandService(req);
  if (!result.status) {
    res.status(500).json(result);
  }
  res.status(200).json(result);
};
const getBrands = async (req, res) => {
  const result = await getBrandsService();
  if (!result.status) {
    res.status(500).json(result);
  }
  res.status(200).json(result);
};

module.exports = { postBrand, getBrands, deleteBrand };
