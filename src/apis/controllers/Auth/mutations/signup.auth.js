const Response = require("../../../commons/Response");
const hashPassword = require("../../../utils/hashPassword.utils");
const createJWT = require("../../../utils/createJWT.utils");
const User = require("../../../commons/User/user");
const authValidator = require("../../../utils/validators/authValidator.validator");
const { user } = require("../../../models/auth.schema");

module.exports = {
  // signup
  signup: async (req, res) => {
    const {
      nameUser,
      email,
      password,
      userName,
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
    const userData = { email, password, nameUser, userType, mobileNumber };
    if (
      authValidator(
        "email nameUser confirmPassword userType userName mobileNumber password",
        userData
      )
    ) {
      //finding if the user exists
      const userExists = await user.findOne({ emailUser: email });
      if (userExists) {
        return res
          .status(400)
          .send(new Response(false, "User already exists", "", 400, {}));
      }
      //hashing the password
      const { generateSalt, generateHash } = await hashPassword(password);
      user.password = generateHash;
      user.salt = generateSalt;
      //creating the user
      const newUser = new User(
        nameUser,
        userName,
        email,
        mobileNumber,
        password,
        generateHash,
        generateSalt,
        "admin"
      );
      //saving the user in the dataabase
      const token = createJWT(newUser);
      const addData = await newUser.addUser();
      if (!addData) {
        return res
          .status(400)
          .send(new Response(false, "User not created", "", 400, {}));
      }
      newUser.token = token;
      return res
        .status(200)
        .send(
          new Response(true, "User Creation Success", newUser, 200, newUser)
        );
    } else {
      res.status(400).json({
        status: false,
        message: "Invalid Data",
      });
    }
  },
};
