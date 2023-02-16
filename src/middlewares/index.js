const finalObject = {};
finalObject.checkSuperAdmin = require("./checkSuperAdmin.middleware");
finalObject.checkAdmin = require("./checkAdmin.middleware");
finalObject.checkEmployee = require("./checkEmployee.middleware");
finalObject.checkCustomer = require("./checkCustomer.middleware");
finalObject.checkUserLogin = require("./checkUserLogin.middleware");
module.exports = finalObject;

