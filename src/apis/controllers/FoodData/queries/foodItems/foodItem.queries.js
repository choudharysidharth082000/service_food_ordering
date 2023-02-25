const { foodItem } = require("../../../../models");
module.exports = {
  getAllFoodItems: function (req, res) {
    console.log("foodItems")
    foodItem
      .find()
      .then((data) => {
        res.status(200).json({
          success: true,
          message: "All Food Items",
          data: data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: "Error in Fetching Food Items",
          error: err,
        });
      });
  },
  //get food items which are not deleted by brand
  getEnabledFoodItems: function (req, res) {
    foodItem
      //and operation for not deleted nor diabled
      .find({
        isDeleted: false,
        isDisabled: false,
      })
      .then(function (data) {
        return res.status(200).json({
          success: true,
          message: "All Food Items",
          data: data,
        });
      })
      .catch(function (error) {
        return res.status(500).json({
          success: false,
          message: "Error in Fetching Food Items",
          error: err,
        });
      });
  },
  getFoodItemsByCategoryID: function (req, res) {
    const { foodCategoryID } = req.params;
    foodItem
      .find({
        $and: [
          { "category.categoryID": foodCategoryID },
          { isDeleted: false },
          { isDisabled: false },
        ],
      })
      .then(function (data) {
        return res.status(200).json({
          success: true,
          message: "All Food Items",
          data: data,
        });
      })
      .catch(function (error) {
        return res.status(500).json({
          success: false,
          message: "Error in Fetching Food Items",
          error: err,
        });
      });
  },
  getFoodItemsBySuperCategoryID: function (req, res) {
    const { foodSuperCategoryID } = req.params;
    foodItem
      .find({
        $and: [
          { "superCategory.superCategoryID": foodSuperCategoryID },
          { isDeleted: false },
          { isDisabled: false },
        ],
      })
      .then(function (data) {
        return res.status(200).json({
          success: true,
          message: "All Food Items",
          data: data,
        });
      })
      .catch(function (error) {
        return res.status(500).json({
          success: false,
          message: "Error in Fetching Food Items",
          error: err,
        });
      });
  },
  getFoodItemByID: function (req, res) {
    const { foodItemID } = req.params;
    foodItem
      .findOne({
        $and: [
          { _id: foodItemID },
          { isDeleted: false },
          { isDisabled: false },
        ],
      })
      .then(function (data) {
        return res.status(200).json({
          success: true,
          message: "All Food Items",
          data: data,
        });
      })
      .catch(function (error) {
        return res.status(500).json({
          success: false,
          message: "Error in Fetching Food Items",
          error: err,
        });
      });
  },
  getFoodItemByBrandID: function (req, res) {
    const { brandID } = req.params;
    foodItem
      .find({
        $and: [
          {
            "brand.brandID": brandID,
          },
          {
            isDeleted: false,
          },
          {
            isDisabled: false,
          },
        ],
      })
      .then(function (data) {
        return res.status(200).json({
          success: true,
          message: "All Food Items",
          data: data,
        });
      })
      .catch(function (error) {
        return res.status(500).json({
          success: false,
          message: "Error in Fetching Food Items",
          error: err,
        });
      });
  },
  getFoodItemByOutletID: function (req, res) {
    const { outletID } = req.params;
    foodItem
      .find({
        $and: [
          {
            "outlet.outletID": outletID,
          },
          {
            isDeleted: false,
          },
          {
            isDisabled: false,
          },
        ],
      })
      .then(function (data) {
        return res.status(200).json({
          success: true,
          message: "All Food Items",
          data: data,
        });
      })
      .catch(function (error) {
        return res.status(500).json({
          success: false,
          message: "Error in Fetching Food Items",
          error: err,
        });
      });
  },
  getFoodItemByOutletIDAndCategoryID: function (req, res) {
    const { outletID, categoryID } = req.params;
    foodItem
      .find({
        $and: [
          {
            "outlet.outletID": outletID,
          },
          {
            "category.categoryID": categoryID,
          },
          {
            isDeleted: false,
          },
          {
            isDisabled: false,
          },
        ],
      })
      .then(function (data) {
        return res.status(200).json({
          success: true,
          message: "All Food Items",
          data: data,
        });
      })
      .catch(function (error) {
        return res.status(500).json({
          success: false,
          message: "Error in Fetching Food Items",
          error: err,
        });
      });
  },
};
