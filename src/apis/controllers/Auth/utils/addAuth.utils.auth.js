const { user } = require("../../../models/auth.schema");
const { validators } = require("../../../utils");

const addCustomer = {
  addCustomer: function (customerData) {
    return new Promise((resolve, reject) => {
      const newUser = new user({
        name: customerData.name,
        emailUser: customerData.emailUser,
        userName: customerData.userName,
        phoneNumber: customerData.phoneNumber,
        password: customerData.password,
        passwordHash: customerData.passwordHash,
        passwordSalt: customerData.passwordSalt,
        userType: "customer",
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
  },
  addEmployee: function (employeeData, outletID, brandID) {
    return new Promise((resolve, reject) => {
      const newUser = new user({
        name: employeeData.name,
        emailUser: employeeData.emailUser,
        userName: employeeData.userName,
        phoneNumber: employeeData.phoneNumber,
        password: employeeData.password,
        passwordHash: employeeData.passwordHash,
        passwordSalt: employeeData.passwordSalt,
        userType: "employee",
        outletID: outletID,
        brandID: brandID,
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
  },
  addAdmin: function (adminData, brandID) {
    return new Promise((resolve, reject) => {
      const newUser = new user({
        name: adminData.name,
        emailUser: adminData.emailUser,
        userName: adminData.userName,
        phoneNumber: adminData.phoneNumber,
        password: adminData.password,
        passwordHash: adminData.passwordHash,
        passwordSalt: adminData.passwordSalt,
        userType: "admin",
        brandID: brandID,
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
  },
  addManager: function (managerData, brandID) {
    return new Promise((resolve, reject) => {
      const newUser = new user({
        name: managerData.name,
        emailUser: managerData.emailUser,
        userName: managerData.userName,
        phoneNumber: managerData.phoneNumber,
        password: managerData.password,
        passwordHash: managerData.passwordHash,
        passwordSalt: managerData.passwordSalt,
        userType: "manager",
        brandID: brandID,
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
  },
};

module.exports = addCustomer;
