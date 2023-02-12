const checkAdmin = (req, res, next) => {
  //checking the session if the user is admin or not
  console.log(req.session);
  if (req.session.userType == "admin") next();
  else {
    res.status(401).json({
      status: false,
      message: "You are not authorized to access this route",
    });
  }
};


module.exports = checkAdmin;
