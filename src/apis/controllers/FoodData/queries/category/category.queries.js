const { categoriesFood } = require("../../../../models");
module.exports = {
  getCategoryByBrandID: function (req, res) {
    const { brandID } = req.params;
    categoriesFood
      .findOne({ brandID: brandID })
      .then((data) => {
        res.status(200).json({
          success: true,
          message: "All Categories",
          data: data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: "Error in Fetching Categories",
          error: err,
        });
      });
  },
  getCategoryBySuperCategoryID: function (req, res) {
    const { superCategoryID } = req.params;
    categoriesFood
      .findOne({ superCategoryID: superCategoryID })
      .then((data) => {
        res.status(200).json({
          success: true,
          message: "All Categories",
          data: data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: "Error in Fetching Categories",
          error: err,
        });
      });
  },
  getCategoryByID: function (req, res) {
    const { foodCategoryID } = req.params;
    categoriesFood
      .findOne({ _id: foodCategoryID })
      .then((data) => {
        res.status(200).json({
          success: true,
          message: "All Categories",
          data: data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: "Error in Fetching Categories",
          error: err,
        });
      });
  },
};
