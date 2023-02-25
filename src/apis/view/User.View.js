const express = require("express");
const router = express.Router();
const checkUserLogin = require("../controllers/Auth/middlewares/admin.controller");
const checkAdmin = require("../controllers/Auth/middlewares/checkAdminTest.middleware");
const {
  findAllUsers,
  findUsersJoinedLastMonth,
  findUsersJoinedLastWeek,
  findUserById,
  findUserByBrandIDAndCheckEmployeeOutlet,
} = require("../controllers/Auth/queries/user.queries");

router.get("/allUsers", findAllUsers);
router.get(
  "/usersJoinedLastWeek",
  checkUserLogin,
  checkAdmin,
  findUsersJoinedLastWeek
);
router.get(
  "/userByBrandIDAndCheckEmployeeOutlet/:brandID",
  findUserByBrandIDAndCheckEmployeeOutlet
);

router.get(
  "/usersJoinedLastMonth",
  checkUserLogin,
  checkAdmin,
  findUsersJoinedLastMonth
);
router.get("/userById/:id", checkUserLogin, checkAdmin, findUserById);

module.exports = router;
