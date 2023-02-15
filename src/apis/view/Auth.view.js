const express = require("express");
//middlewares

const {
  signup,
  deleteUser,
  updateUser,
} = require("../controllers/Auth/mutations/signup.auth");
const { checkAdmin, checkUserLogin } = require("../controllers/Auth/middlewares");
const {
  findAllDeleted,
  findAllUsers,
  findUserById,
  findUsersJoinedLastMonth,
  findUsersJoinedLastWeek,
} = require("../controllers/Auth/queries/user.queries");

const router = express.Router();

router.get("/testAPI/checkUserLogin", checkUserLogin, (req, res) => {
  res.send("Hello world");
});
router.get(
  "/session/checkUserLogin",
  checkUserLogin,
  checkAdmin,
  (req, res) => {
    res.send(req.session.passport.user.data);
  }
);

//route for the singup of the user
router.post("/signup/:brandID/:outletID", checkUserLogin, checkAdmin, signup);
router.delete("/deleteUser/:id", checkUserLogin, checkAdmin, deleteUser);
router.put("/updateUser/:id", checkUserLogin, updateUser);

//get apis
router.get("/getAllDeleted", checkUserLogin, checkAdmin, findAllDeleted);
router.get("/getUsers", checkUserLogin, checkAdmin, findAllUsers);
router.get("/getUsers/:id", checkUserLogin, findUserById);

module.exports = router;
