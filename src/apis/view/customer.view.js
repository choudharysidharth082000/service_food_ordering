const express = require("express");
const router = express.Router();

const {
  createCustomer,
} = require("../controllers/users/mutations/createUser.user");

router.post("/createCustomer", createCustomer);

module.exports = router;
