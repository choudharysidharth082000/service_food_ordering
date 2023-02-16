const express = require("express");
const router = express.Router();
const {createBrand} = require("../controllers/brands/mutations/index");
const {checkAdmin, checkUserLogin} = require("../controllers/Auth/middlewares");

router.post("/createBrand/:userID",  createBrand)
router.get("/testBrandRoute", (req, res)=>
{
    res.send("Hello world");
})

module.exports = router;