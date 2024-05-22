const BrandModel = require("../models/brand.model");

const deleteBrandService = async (req) => {
  try {
    const { brandID } = req.params;
    console.log(brandID);
    const data = await BrandModel.deleteOne({ _id: brandID });
    return { status: true, data, message: "Delete Brand." };
  } catch (error) {
    return { status: false, message: error.message };
  }
};
const postBrandService = async (req) => {
  try {
    const data = await BrandModel.create(req.body);
    return { status: true, data };
  } catch (error) {
    return { status: false, message: error.message };
  }
};
const getBrandsService = async () => {
  try {
    const data = await BrandModel.find({}, { createdAt: 0, updatedAt: 0 });
    return { status: true, data };
  } catch (error) {
    return { status: false, message: error.message };
  }
};

module.exports = { postBrandService, getBrandsService, deleteBrandService };
