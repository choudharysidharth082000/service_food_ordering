const { user } = require("../../../models/auth.schema");

const finalObject = {
  findAllUsers: function (req, res) {
    return new Promise((resolve, reject) => {
      user
        .find()
        .then((data) => {
          //resolving and sending the response
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //finding the user by id
  findUserById: function (id) {
    return new Promise((resolve, reject) => {
      user
        .findById(id)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //finding the users joined last week
  findUsersJoinedLastWeek: function () {
    return new Promise((resolve, reject) => {
      user
        .find({
          createdAt: {
            $gte: new Date(new Date().setDate(new Date().getDate() - 7)),
          },
        })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //finding the users joined last month
  findUsersJoinedLastMonth: function () {
    return new Promise((resolve, reject) => {
      user
        .find({
          createdAt: {
            $gte: new Date(new Date().setDate(new Date().getDate() - 30)),
          },
        })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

module.exports = finalObject;
