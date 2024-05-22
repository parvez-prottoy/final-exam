const FeatureModel = require("../models/feature.model");

const deleteFeatureService = async (req) => {
  try {
    const { featureID } = req.params;
    const data = await FeatureModel.deleteOne({ _id: featureID });
    return { status: true, data, message: "Delete Brand." };
  } catch (error) {
    return { status: false, message: error.message };
  }
};
const getFeaturesService = async () => {
  try {
    const data = await FeatureModel.find({}, { createdAt: 0, updatedAt: 0 });
    return { status: true, data };
  } catch (error) {
    return { status: false, message: error.message };
  }
};
const postFeatureService = async (req) => {
  try {
    const data = await FeatureModel.create(req.body);
    return { status: true, data };
  } catch (error) {
    return { status: false, message: error.message };
  }
};

module.exports = {
  postFeatureService,
  getFeaturesService,
  deleteFeatureService,
};
