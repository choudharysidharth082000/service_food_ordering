const { superCategory } = require("../../../../models");

module.exports = {
  createSuperCategory: function (req, res) {
    const {
      superCategoryName,
      superCategoryDescription,
      superCategoryImage,
      brandID,
      brandName,
    } = req.body;
    console.log(req.body);
    const newSuperCategory = new superCategory({
      superCategoryName,
      superCategoryDescription,
      superCategoryImage,
      brand: {
        brandID,
        brandName,
      },
    });
    newSuperCategory
      .save()
      .then((data) => {
        res.status(200).json({
          success: true,
          message: "Super Category Created Successfully",
          data: data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: "Error in Creating Super Category",
          error: err,
        });
      });
  },

  updateSuperCategory: function (req, res) {
    const { superCategoryID } = req.params;
    const {
      superCategoryName,
      superCategoryDescription,
      superCategoryImage,
      brandID,
      brandName,
    } = req.body;
    superCategory
      .findOneAndUpdate(
        { _id: superCategoryID },
        {
          superCategoryName,
          superCategoryDescription,
          superCategoryImage,
          brandID,
          brandName,
        }
      )
      .then((data) => {
        res.status(200).json({
          success: true,
          message: "Super Category Updated Successfully",
          data: data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: "Error in Updating Super Category",
          error: err,
        });
      });
  },
  deleteSuperCategory: function (req, res) {
    const { superCategoryID } = req.params;
    superCategory
      .findOneAndUpdate(
        { _id: superCategoryID },
        {
          isDeleted: true,
        }
      )
      .then((data) => {
        res.status(200).json({
          success: true,
          message: "Super Category Deleted Successfully",
          data: data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: "Error in Deleting Super Category",
          error: err,
        });
      });
  },
};
