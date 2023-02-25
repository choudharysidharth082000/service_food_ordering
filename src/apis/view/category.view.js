const express = require("express");
const router = express.Router();
//all the post and out requests are here
const {
  createCategory,
  getAllCategories,

  updateCategory,
} = require("../controllers/FoodData/mutations/category/categoryOPerations.category");

//get requests are here
const {
  getCategoryByBrandID,
  getCategoryByID,
  getCategoryBySuperCategoryID,
} = require("../controllers/FoodData/queries/category/category.queries");

router.post("/createCategory", createCategory);
router.get("/getAllCategories", getAllCategories);
router.get("/getCategoryByBrandID/:brandID", getCategoryByBrandID);
router.get(
  "/getCategoryBySuperCategoryID/:superCategoryID",
  getCategoryBySuperCategoryID
);
router.get("/getCategoryByID/:id", getCategoryByID);
router.put("/updateCategory/:id", updateCategory);

module.exports = router;
