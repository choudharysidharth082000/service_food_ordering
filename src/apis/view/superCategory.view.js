const express = require("express");
const router = express.Router();

const {
  onlyAdmin,
  onlyBrand,
  onlyBrandAndManager,
  onlySuperAdmin,
  onlyManagerAdminAndSuperAdmin,
  onlyadminAndSuperAdmin,
} = require("../../middlewares/checkAdmin.middleware");
//post and put requests
const {
  createSuperCategory,
  deleteSuperCategory,
  updateSuperCategory,
} = require("../controllers/FoodData/mutations/superCategory/superCategory.controller");

//read requests are here
const {
  getAllSuperCategories,
  getSuperCategoryByBrandID,
  getSuperCategoryBySuperCategoryID,
} = require("../controllers/FoodData/queries/superCategory/superCategory.query");
const passport = require("passport");

router.post(
  "/createSuperCategory",
  // passport.authenticate("jwt", { session: false }),
  // onlyAdmin,
  createSuperCategory
);
router.delete(
  "/deleteSuperCategory/:id",
  passport.authenticate("jwt", { session: false }),
  onlyAdmin,
  deleteSuperCategory
);
router.get(
  "/getAllSuperCategories",
  // passport.authenticate("jwt", { session: false }),
  // onlyAdmin,
  getAllSuperCategories
);
router.get(
  "/getSuperCategoryByBrandID/:brandID",
  passport.authenticate("jwt", { session: false }),
  onlyAdmin,
  getSuperCategoryByBrandID
);
router.get(
  "/getSuperCategoryBySuperCategoryID/:superCategoryID",
  passport.authenticate("jwt", { session: false }),
  onlyAdmin,
  getSuperCategoryBySuperCategoryID
);
router.put(
  "/updateSuperCategory/:id",
  passport.authenticate("jwt", { session: false }),
  onlyAdmin,
  updateSuperCategory
);

module.exports = router;
