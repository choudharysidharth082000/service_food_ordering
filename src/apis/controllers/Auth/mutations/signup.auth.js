const User = require("../../../commons/User/user");

module.exports = {
  // signup
  signup: async (req, res) => {
    const {
      nameUser,
      email,
      password,
      confirmPassword,
      userType,
      mobileNumber,
    } = req.body;
    console.log(req.body);
    if (password != confirmPassword) {
      res.status(400).json({
        status: false,
        message: "Passwords do not match",
      });
    }
    const user = { email, password, nameUser, userType, mobileNumber };
    if (
      authValidator(
        "email nameUser confirmPassword userType userName mobileNumber password",
        user
      )
    ) {
      //finding if the user exists
      const userExists = await Auth.findOne({ where: { email } });
      if (userExists) {
        res.status(400).json({
          status: false,
          message: "User already exists",
        });
      } else {
        //hashing the password
        const { generateSalt, generateHash } = await hashPassword(password);
        user.password = generateHash;
        user.salt = generateSalt;
        const newUser = await Auth.create(user);
        res.status(200).json({
          status: true,
          message: "User created successfully",
          data: newUser,
        });
      }
    } else {
      res.status(400).json({
        status: false,
        message: "Invalid Data",
      });
    }
  },
};
