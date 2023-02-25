const { foodItem, productOutlet } = require("../../../../models");
module.exports = {
  createFoodItem: function (req, res) {
    const {
      foodItemName,
      foodItemDescription,
      foodItemPrice,
      foodItemImage,
      foodCategoryID,
      foodCategoryName,
      brandID,
      brandName,
      superCategoryID,
      superCategoryName,
    } = req.body;
    const food = new foodItem({
      foodItemName,
      foodItemDescription,
      foodItemPrice,
      foodItemImage,
      category: {
        categoryID: foodCategoryID,
        categoryName: foodCategoryName,
      },
      brand: {
        brandID,
        brandName,
      },
      superCategory: {
        superCategoryID,
        superCategoryName,
      },
    });
    food
      .save()
      .then((data) => {
        res.status(200).json({
          success: true,
          message: "Food Item Created Successfully",
          data: data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: "Error in Creating Food Item",
          error: err,
        });
      });
  },
  updateFoodItem: function (req, res) {
    const { foodItemID } = req.params;
    const {
      foodItemName,
      foodItemDescription,
      foodItemPrice,
      foodItemImage,
      foodCategoryID,
      foodCategoryName,
      brandID,
      brandName,
    } = req.body;
    foodItem
      .findByIdAndUpdate(
        foodItemID,
        {
          foodItemName,
          foodItemDescription,
          foodItemPrice,
          foodItemImage,
          foodCategoryID,
          foodCategoryName,
          brandID,
          brandName,
        },
        { new: true }
      )
      .then((data) => {
        res.status(200).json({
          success: true,
          message: "Food Item Updated Successfully",
          data: data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: "Error in Updating Food Item",
          error: err,
        });
      });
  },

  //addItem to the outlet
  addItemOutlet: function (req, res) {
    const {
      outletName,
      outletID,
      brandName,
      brandID,
      superCategoryName,
      superCategoryID,
      productName,
      productID,
      categoryName,
      categoryID,
    } = req.body;

    //adidng the records to the database
    const addProduct = new productOutlet({
      outlet: {
        outletName,
        outletID,
      },
      brand: {
        brandName,
        brandID,
      },
      superCategory: {
        superCategoryName,
        superCategoryID,
      },
      product: {
        productName,
        productID,
      },
      category: {
        categoryName,
        categoryID,
      },
    });
    addProduct
      .save()
      .then(function (data) {
        if (!data) {
          res.status(500).json({
            success: false,
            message: "Error in Adding Product to the Outlet",
            error: err,
          });
        } else {
          res.status(200).json({
            success: true,
            message: "Product Added to the Outlet Successfully",
            data: data,
          });
        }
      })
      .catch(function (err) {
        res.status(500).json({
          success: false,
          message: "Error in Adding Product to the Outlet",
          error: err,
        });
      });
  },
};
