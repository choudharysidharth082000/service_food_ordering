const { user } = require("../../models/auth.schema");
module.exports = class UserData {
  constructor(
    name,
    emailUser,
    userName,
    phoneNumber,
    password,
    passwordHash,
    passwordSalt,
    userType,
    brandName,
    brandID,
    outletID,
    outletName
  ) {
    this.name = name;
    this.emailUser = emailUser;
    this.userName = userName;
    this.phoneNumber = phoneNumber;
    this.password = password;
    this.passwordHash = passwordHash;
    this.passwordSalt = passwordSalt;
    this.userType = userType;
    //default value must be ""
    this.brandName = brandName;
    this.brandID = brandID;
    this.outletID = outletID;
    this.outletName = outletName;
  }
  //adding the user to the database
  addUser() {
    //adding the new user
    return new Promise((resolve, reject) => {
      const newUser = new user({
        name: this.name,
        emailUser: this.emailUser,
        userName: this.userName,
        phoneNumber: this.phoneNumber,
        password: this.password,
        passwordHash: this.passwordHash,
        passwordSalt: this.passwordSalt,
        userType: this.userType,
        band: {
          brandName: this.brandName,
          brandID: this.brandID,
        },
        outlet: {
          outletName: this.outletName,
          outletID: this.outletID,
        },
      });
      newUser
        .save()
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};
