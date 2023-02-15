const express = require("express");
const router = express.Router();
const {createBrand} = require("../controllers/brands/mutations/index");
const {checkAdmin, checkUserLogin} = require("../controllers/Auth/middlewares");

router.post("/createBrand/:userID", checkUserLogin, checkAdmin,  createBrand)

module.exports = router;