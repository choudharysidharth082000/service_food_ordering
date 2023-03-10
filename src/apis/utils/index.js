const utils = {};
utils.createJWT = require("./createJWT.utils");
utils.verifyJWT = require("./decryptJWT.utils");
utils.hashPassword = require("./hashPassword.utils");
utils.comparePassword = require("./comparePassword.utils");
utils.createRandomString = require("./createRandomString.utils");
utils.comparePassword = require("./comparePassword.utils");
utils.validators = require("./validators/authValidator.validator");
utils.upload = require("./middlewares/multer.middleware");

module.exports = utils;
