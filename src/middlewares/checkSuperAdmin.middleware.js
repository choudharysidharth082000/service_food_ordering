module.exports = function (req, res, next) {
    if (req.session.passport.user.data.userType === "superadmin") next();
    else {
      res.status(401).json({
        status: false,
        message: "You are not authorized to access this route",
      });
    }
  };
  