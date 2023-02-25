const express = require("express");
//middlewares

const {
  signup,
  login,
  deleteUser,
  updateUser,
} = require("../controllers/Auth/mutations/signup.auth");
const {
  onlyAdmin,
  onlyBrand,
  onlyBrandAndManager,
  onlySuperAdmin,
  onlyadminAndSuperAdmin,
  onlyManagerAdminAndSuperAdmin,
} = require("../../middlewares/checkAdmin.middleware");
const {
  findAllDeleted,
  findAllUsers,
  findUserById,
  findUsersJoinedLastMonth,
  findUsersJoinedLastWeek,
} = require("../controllers/Auth/queries/user.queries");

const router = express.Router();

const passport = require("passport");

router.get("/testAPI/checkUserLogin", (req, res) => {
  res.send("Hello world");
});
router.get("/session/checkUserLogin", (req, res) => {
  res.send(req.session.passport.user.data);
});

//route for the singup of the user  which can be managed by admin super admin and manager
router.post(
  "/signup/:brandID/:outletID",
  // passport.authenticate("jwt", { session: false }),
  // onlyManagerAdminAndSuperAdmin,
  signup
);
router.post("/login", login);
router.delete("/deleteUser/:id", deleteUser);
router.put("/updateUser/:id", updateUser);

//get apis
router.get("/getAllDeleted", findAllDeleted);
router.get(
  "/getUsers",
  passport.authenticate("jwt", { session: false }),
  onlyadminAndSuperAdmin,
  findAllUsers
);
router.get("/getUsers/:id", findUserById);

module.exports = router;
