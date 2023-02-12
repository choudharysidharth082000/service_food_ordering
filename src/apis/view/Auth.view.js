const express = require("express");
//middlewares
const checkUserLogin = require("../controllers/Auth/middlewares/admin.controller");
const { signup } = require("../controllers/Auth/mutations/signup.auth");
const checkAdmin = require("../controllers/Auth/middlewares/checkAdminTest.middleware");

const router = express.Router();

router.get("/testAPI/checkUserLogin", checkUserLogin, (req, res) => {
  res.send("Hello world");
});
router.get("/session/checkUserLogin",checkUserLogin,checkAdmin, (req, res) => {
  res.send(req.session.passport.user.data);
});

//route for the singup of the user
router.post("/signup",checkUserLogin,checkAdmin, signup);

module.exports = router;
