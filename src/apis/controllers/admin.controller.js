const User = require("../../apis/commons/User/user");
const hashPassword = require("../../apis/utils/hashPassword.utils");
const Response = require("../../apis/commons/Response");
const adminFunctions = {
  adminInitialSetup: function () {
    const password = "admin";
    //generating the hash for the user
    hashPassword(password)
      .then((data) => {
        console.log("Hash Passweord", data);
        const user = new User(
          "admin",
          "admin@gmail.com",
          "admin",
          "8448605993",
          password,
          data.generateHash,
          data.generateSalt,
          "superadmin"
        );
        user.addUser().then((data) => {
          console.log(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });

    //adding the user to the database
  },
};

module.exports = adminFunctions;
