const finalObject = {};
finalObject.checkAdmin = require("./checkAdminTest.middleware");
finalObject.checkUserLogin = require("./admin.controller");
module.exports = finalObject;
