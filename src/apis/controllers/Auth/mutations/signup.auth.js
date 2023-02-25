const Response = require("../../../commons/Response");
const hashPassword = require("../../../utils/hashPassword.utils");
const createJWT = require("../../../utils/createJWT.utils");
const UserData = require("../../../commons/User/user");
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
    // console.log(req.body);
    //cehck if brandname is present
    var brandName = req.body.brandName ? req.body.brandName : undefined;
    var brandID = req.params.brandID ? req.params.brandID : "";
    console.log(req.params);
    //put default value for object id if not present
    var outletID = req.params.outletID ? req.body.outletID : null;
    var outletName = req.body.outletName ? req.body.outletName : "";

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
            console.log(data);
            const addData = new user({
              name: nameUser,
              emailUser: email,
              userName: userName,
              phoneNumber: mobileNumber,
              password: password,
              passwordHash: data.generateHash,
              passwordSalt: data.generateSalt,
              userType: userType,
              brand: {
                brandID: brandID,
                brandName: brandName,
              },
              //only if outlet is present
              outlet: {
                outletID: outletID,
                outletName: outletName,
              },
            });
            addData
              .save()
              .then((data) => {
                console.log(data);
                res
                  .status(200)
                  .send(
                    new Response(
                      true,
                      "User added successfully",
                      data,
                      200,
                      data
                    )
                  );
              })
              .catch((err) => {
                res
                  .status(400)
                  .send(new Response(false, "Invalid data Main", "", 400, err));
              });
          });
        }
      })
      .catch((error) => {
        res
          .status(400)
          .send(new Response(false, "Invalid data Main", "", 400, error));
      });
  },

  login: function (req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send(
          new Response(
            false,
            "Invalid data in arguements",
            "Please Enter something",
            400,
            {}
          )
        );
    }

    user
      .findOne({ emailUser: email })
      .then((data) => {
        console.log(data.brand);
        console.log("Database password is " + data.password);
        if (!data) {
          return res
            .status(400)
            .send(new Response(false, "Invalid data", "Invalid Data", 400, {}));
        }
        //checking if the password is correct

        if (data.password != password) {
          return res
            .status(400)
            .send(
              new Response(
                false,
                "Invalid data Password",
                "Invalid Data",
                400,
                {}
              )
            );
        }
        //creating the jwt
        const jwtPayload = {
          id: data._id,
          userType: data.userType,
          email: data.emailUser,
        };
        console.log(jwtPayload);
        const token = createJWT(jwtPayload);
        const response = {};
        response.token = `Bearer ${token}`;
        response.email = email;
        response.phone = data.phoneNumber;
        response.name = data.nameUser;
        response.userType = data.userType;
        response.userName = data.userName;
        response.brand = data.brand;
        response.outlet = data.outlet;

        res
          .status(200)
          .send(
            new Response(true, "Login successful", response, 200, { token })
          );
      })
      .catch((error) => {
        res
          .status(400)
          .send(new Response(false, "Invalid data", "Invalid Data", 400, {}));
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
    console.log(req.body, req.params.id);
    console.log(nameUser, email, userName, mobileNumber, userType);
    user
      .findOneAndUpdate(
        { _id: id },
        {
          name: nameUser,
          emailUser: email,
          userName,
          phoneNumber: mobileNumber,
          userType,
        },
        { new: false }
      )
      .then((data) => {
        console.log(data);
        if (!data) {
          return res
            .status(400)
            .send(new Response(false, "User not updated", "", 400, {}));
        }
        return res
          .status(200)
          .send(new Response(true, "User updated", "", 200, data));
      })
      .catch((error) => {
        return res
          .status(400)
          .send(
            new Response(false, "User not updated", "", 400, error.message)
          );
      });
  },
};
