const express = require("express");
const router = express.Router();
const {
  createBrand,
  updateBrand,
  disableBrand,
  enableBrand
} = require("../controllers/brands/mutations/index");
const { checkUserLogin } = require("../controllers/Auth/middlewares");
const {
  checkAdmin,
  checkCustomer,
  checkEmployee,
  checkSuperAdmin,
} = require("../../middlewares");
const {
  getAllBrands,
  getBrandById,
  getBrandsByUserId,
  getDeletedBrands,
  getDisabledBrands,
} = require("../controllers/brands/queries/brand.queries");

router.post(
  "/createBrand/:userID",
  checkUserLogin,
  checkSuperAdmin,
  createBrand
);
router.get("/testBrandRoute", (req, res) => {
  res.send("Hello world");
});
router.put(
  "/updateBrand/:brandID",
  checkUserLogin,
  checkSuperAdmin,
  updateBrand
);
router.put(
  "/disableBrand/:brandID",
  checkUserLogin,
  checkSuperAdmin,
  disableBrand
);

//get requests
router.get("/getBrands", checkUserLogin, checkSuperAdmin, getAllBrands);
router.get("/getBrand/:brandID", checkUserLogin, checkSuperAdmin, getBrandById);
router.get(
  "/getBrandsByUserId/:userID",
  checkUserLogin,
checkSuperAdmin,
  getBrandsByUserId
);
router.get(
  "/getDisabledBrands",
  checkUserLogin,
  checkSuperAdmin,
  getDisabledBrands
);
router.get(
  "/getDeletedBrands",
  checkUserLogin,
  checkSuperAdmin,
  getDeletedBrands
);
router.put("/enableBrand/:brandID", checkUserLogin, checkSuperAdmin, enableBrand)

module.exports = router;
