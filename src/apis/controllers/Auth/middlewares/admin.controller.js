const checkUserLogin = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.status(401).json({
      status: false,
      message: "Unauthorized Access",
    });
  }
};

module.exports = checkUserLogin;
