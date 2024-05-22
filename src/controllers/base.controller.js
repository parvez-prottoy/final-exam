const getHome = (req, res) => {
  res
    .status(200)
    .send(
      `<h1 style="text-align:center;color:green">App Server is Running...</h1>`
    );
};
const getHealth = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Good",
  });
};
module.exports = { getHome, getHealth };
