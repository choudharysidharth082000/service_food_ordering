const Response = require("../../../commons/Response");
const hashPassword = require("../../../utils/hashPassword.utils");
const createJWT = require("../../../utils/createJWT.utils");
const User = require("../../../commons/User/user");
const authValidator = require("../../../utils/validators/authValidator.validator");
const { user } = require("../../../models/auth.schema");
const {
  addAdmin,
  addCustomer,
  addEmployee,
  addManager,
} = require("../../../controllers/Auth/utils/addAuth.utils.auth");

module.exports = {
  signup: function signup(req, res) {
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
    const userData = {
      email,
      password,
      nameUser,
      userType,
      mobileNumber,
      userName,
    };
    const isValidated = authValidator(
      "email nameUser confirmPassword userType userName mobileNumber password",
      userData
    );

    if (!isValidated) {
      return res
        .status(400)
        .send(new Response(false, "Invalid data", "", 400, {}));
    }
    //checking if the user is already present
    user
      .findOne({ emailUser: email })
      .then((data) => {
        if (data) {
          res
            .status(400)
            .send(new Response(false, "User already exists", "", 400, {}));
        } else {
          //hashing the password
          hashPassword(password).then((data) => {
            const user = new User(
              nameUser,
              email,
              userName,
              mobileNumber,
              password,
              data.generateHash,
              data.generateSalt,
              userType
            );
            //adding the user to the database
            if (userData.userType == "admin") {
              const brandID = req.params.brandID;
              addAdmin(user, brandID)
                .then((data) => {
                  res
                    .status(200)
                    .send(new Response(true, "Admin added", "", 200, data));
                })
                .catch((error) => {
                  res
                    .status(400)
                    .send(
                      new Response(
                        false,
                        "Invalid data",
                        "",
                        400,
                        error.message
                      )
                    );
                });
            } else if (userData.userType == "manager") {
              addManager(user)
                .then((data) => {
                  res
                    .status(200)
                    .send(new Response(true, "Manager added", "", 200, data));
                })
                .catch((error) => {
                  res
                    .status(400)
                    .send(
                      new Response(
                        false,
                        "Invalid data",
                        "",
                        400,
                        error.message
                      )
                    );
                });
            } else if ((userData.userType = "employee")) {
              addEmployee(user)
                .then((data) => {
                  res
                    .status(200)
                    .send(new Response(true, "Employee added", "", 200, data));
                })
                .catch((error) => {
                  res
                    .status(400)
                    .send(
                      new Response(
                        false,
                        "Invalid data",
                        "",
                        400,
                        error.message
                      )
                    );
                });
            } else if (userData.userType == "customer") {
              addCustomer(user)
                .then((data) => {
                  res
                    .status(200)
                    .send(new Response(true, "Customer added", "", 200, data));
                })
                .catch((error) => {
                  console.log("This is the customer error");
                  res
                    .status(400)
                    .send(
                      new Response(
                        false,
                        "Invalid data",
                        "",
                        400,
                        error.message
                      )
                    );
                });
            } else {
              res
                .status(400)
                .send(
                  new Response(false, "Invalid data Customer", "", 400, {})
                );
            }
          });
        }
      })
      .catch((error) => {
        res
          .status(400)
          .send(new Response(false, "Invalid data Main", "", 400, {}));
      });
  },

  //deleting the user
  deleteUser: function (req, res) {
    const { id } = req.params;
    user
      .updateOne({ _id: id }, { $set: { isDeleted: true } })
      .then((data) => {
        if (!data) {
          res
            .status(400)
            .send(new Response(false, "User not deleted", "", 400, {}));
        }
        res.status(200).send(new Response(true, "User deleted", "", 200, data));
      })
      .catch((error) => {
        res
          .status(400)
          .send(
            new Response(false, "User not deleted", "", 400, error.message)
          );
      });
  },
  //updating the user
  updateUser: async (req, res) => {
    const { id } = req.params;
    const { nameUser, email, userName, mobileNumber, userType } = req.body;
    console.log(nameUser, email, userName, mobileNumber, userType);
    const updateUser = await user.findByIdAndUpdate(id, {
      nameUser,
      emailUser: email,
      userName,
      mobileNumber,
      userType,
    });
    if (!updateUser) {
      return res
        .status(400)
        .send(new Response(false, "User not updated", "", 400, {}));
    }
    return res
      .status(200)
      .send(new Response(true, "User updated", "", 200, updateUser));
  },
};
