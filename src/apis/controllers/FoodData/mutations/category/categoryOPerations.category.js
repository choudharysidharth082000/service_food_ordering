const { categoriesFood } = require("../../../../models");
module.exports = {
  createCategory: function (req, res) {
    const {
      foodCategoryName,
      brandID,
      brandName,
      superCategoryID,
      superCategoryName,
      foodCategoryDescription,
      foodCategoryImage,
    } = req.body;

    const category = new categoriesFood({
      foodCategoryName,
      brand: {
        brandID,
        brandName,
      },
      superCategory: {
        superCategoryID,
        superCategoryName,
      },
      foodCategoryDescription,
      foodCategoryImage,
    });
    category
      .save()
      .then((data) => {
        res.status(200).json({
          success: true,
          message: "Category Created Successfully",
          data: data,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          success: false,
          message: "Error in Creating Category",
          error: err,
        });
      });
  },
  getAllCategories: function (req, res) {
    categoriesFood
      .find()
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

  updateCategory: function (req, res) {
    const { foodCategoryID } = req.params;
    const {
      foodCategoryName,
      brandID,
      brandName,
      superCategoryID,
      superCategoryName,
      foodCategoryDescription,
      foodCategoryImage,
    } = req.body;
    categoriesFood
      .findOneAndUpdate(
        { _id: foodCategoryID },
        {
          foodCategoryName,
          brandID,
          brandName,
          superCategoryID,
          superCategoryName,
          foodCategoryDescription,
          foodCategoryImage,
        },
        { new: true }
      )
      .then((data) => {
        res.status(200).json({
          success: true,
          message: "Category Updated Successfully",
          data: data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: "Error in Updating Category",
          error: err,
        });
      });
  },
};
