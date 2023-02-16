const express = require("express");
const router = express.Router();

const {checkAdmin,checkCustomer, checkEmployee, checkSuperAdmin, checkUserLogin} = require("../../middlewares")
const {createOutlet} = require("../controllers/outlet/mutations")


//creating the  outlet api
router.post("/createOutlet/:brandID/:managerID",checkUserLogin, checkAdmin, createOutlet);

module.exports = router;