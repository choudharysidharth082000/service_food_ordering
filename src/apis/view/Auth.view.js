const express = require("express");
//middlewares
const checkUserLogin = require("../controllers/Auth/middlewares/admin.controller");
const { signup } = require("../controllers/Auth/mutations/signup.auth");
const checkAdmin = require("../controllers/Auth/middlewares/checkAdminTest.middleware");

const router = express.Router();

router.get("/testAPI/checkUserLogin", checkUserLogin, (req, res) => {
  res.send("Hello world");
});
router.get("/testAPI/checkUserLogin2", (req, res) => {
  res.send("Hello world");
});

//route for the singup of the user
router.post("/signup", signup);

module.exports = router;
