const express = require("express");
const router = express.Router();

const {
  checkAdmin,
  checkCustomer,
  checkEmployee,
  checkSuperAdmin,
  checkUserLogin,
} = require("../../middlewares");
const {
  createOutlet,
  getAllOutlets,
  getOutletByBrandID,
} = require("../controllers/outlet/mutations");

//creating the  outlet api
router.post("/createOutlet/:brandID/:managerID", createOutlet);
router.get("/getAllOutlets", getAllOutlets);
router.get("/getOutletByBrandID/:brandID", getOutletByBrandID);

module.exports = router;
