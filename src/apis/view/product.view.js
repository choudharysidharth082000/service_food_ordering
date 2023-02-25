const express = require("express");
const router = express.Router();

//post and put request
const {
  addItemOutlet,
  createFoodItem,
  updateFoodItem,
} = require("../controllers/FoodData/mutations/products/foodItem.products");
const {
  getAllFoodItems,
  getEnabledFoodItems,
  getFoodItemByBrandID,
  getFoodItemByID,
  getFoodItemByOutletID,
  getFoodItemByOutletIDAndCategoryID,
  getFoodItemsByCategoryID,
  getFoodItemsBySuperCategoryID,
} = require("../controllers/FoodData/queries/foodItems/foodItem.queries");
router.post("/createFoodItem", createFoodItem);
router.post("/updateFoodItem", updateFoodItem);
router.post("/addItemOutlet", addItemOutlet);
router.get("/getAllFoodItems", getAllFoodItems);
router.get("/getEnabledFoodItems", getEnabledFoodItems);
router.get("/getFoodItemByBrandID/:brandID", getFoodItemByBrandID);
router.get("/getFoodItemByID/:id", getFoodItemByID);
router.get("/getFoodItemByOutletID/:outletID", getFoodItemByOutletID);
router.get(
  "/getFoodItemByOutletIDAndCategoryID/:outletID/:categoryID",
  getFoodItemByOutletIDAndCategoryID
);
router.get("/getFoodItemsByCategoryID/:categoryID", getFoodItemsByCategoryID);
router.get(
  "/getFoodItemsBySuperCategoryID/:superCategoryID",
  getFoodItemsBySuperCategoryID
);

module.exports = router;
