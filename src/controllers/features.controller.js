const {
  postFeatureService,
  getFeaturesService,
  deleteFeatureService,
} = require("../services/features.service");

const deleteFeature = async (req, res) => {
  const result = await deleteFeatureService(req);
  if (!result.status) {
    res.status(500).json(result);
  }
  res.status(200).json(result);
};
const getFeatures = async (req, res) => {
  const result = await getFeaturesService();
  if (!result.status) {
    res.status(500).json(result);
  }
  res.status(200).json(result);
};
const postFeature = async (req, res) => {
  const result = await postFeatureService(req);
  if (!result.status) {
    res.status(500).json(result);
  }
  res.status(200).json(result);
};

module.exports = { postFeature, getFeatures, deleteFeature };
