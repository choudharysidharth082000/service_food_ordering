module.exports = {
  onlyAdmin: function (req, res, next) {
    console.log("This is the user name " + req.user.userType);
    if (req.user.userType == "admin") {
      next();
    } else {
      res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
  },
  onlyBrand: function (req, res, next) {
    if (req.user.userType == "brand") {
      next();
    } else {
      res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
  },
  onlySuperAdmin: function (req, res, next) {
    if (req.user.userType == "superAdmin") {
      next();
    } else {
      res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
  },
  onlyadminAndSuperAdmin: function (req, res, next) {
    if (req.user.userType == "admin" || req.user.userType == "superadmin") {
      next();
    } else {
      res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
  },
  onlyBrandAndManager: function (req, res, next) {
    if (req.user.userType == "brand" || req.user.userType == "manager") {
      next();
    } else {
      res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
  },
  onlyManagerAdminAndSuperAdmin: function (req, res, next) {
    console.log(req.user);
    if (
      req.user.userType == "admin" ||
      req.user.userType == "superadmin" ||
      req.user.userType == "manager"
    ) {
      next();
    } else {
      res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
  },
};
