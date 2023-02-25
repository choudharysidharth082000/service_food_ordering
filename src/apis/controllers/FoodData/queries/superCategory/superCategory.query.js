const { superCategory } = require("../../../../models");
module.exports = {
  getAllSuperCategories: function (req, res) {
    console.log("Super Categories");
    superCategory
      .find()
      .then((data) => {
        console.log(data);
        res.status(200).json({
          success: true,
          message: "All Super Categories",
          data: data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: "Error in Fetching Super Categories",
          error: err,
        });
      });
  },
  getSuperCategoryByBrandID: function (req, res) {
    const { brandID } = req.params;
    superCategory
      .findOne({ brandID: brandID })
      .then((data) => {
        res.status(200).json({
          success: true,
          message: "Super Category By Brand ID",
          data: data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: "Error in Fetching Super Category By Brand ID",
          error: err,
        });
      });
  },
  getSuperCategoryBySuperCategoryID: function (req, res) {
    const { superCategoryID } = req.params;
    superCategory
      .findOne({ _id: superCategoryID })
      .then((data) => {
        res.status(200).json({
          success: true,
          message: "Super Category By Super Category ID",
          data: data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: "Error in Fetching Super Category By Super Category ID",
          error: err,
        });
      });
  },
};
