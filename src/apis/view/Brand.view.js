const express = require("express");
const router = express.Router();
const {createBrand} = require("../controllers/brands/mutations/index");

router.post("/createBrand/:userID", createBrand)

module.exports = router;