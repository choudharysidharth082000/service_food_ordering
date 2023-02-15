const { user } = require("../../../models/auth.schema");
const Response = require("../../../commons/Response");

const finalObject = {
  findAllUsers: function (req, res) {
    user
      .find({ isDeleted: false })
      .then(function (data) {
        if (!data) {
          res
            .status(404)
            .send(new Response(false, "No user found", "", 404, {}));
        }
        res.status(200).send(new Response(true, "Users found", "", 200, data));
      })
      .catch(function (error) {
        res
          .status(400)
          .send(new Response(false, "Invalid data", "", 400, error.message));
      });
  },
  findAllDeleted: function (req, res) {
    user
      .find({ isDeleted: true })
      .then(function (data) {
        res
          .status(200)
          .send(new Response(true, "Deleted users found", "", 200, data));
      })
      .catch(function (error) {
        console.log(error);
        res
          .status(500)
          .send(
            new Response(false, "Internal server error", "", 500, error.message)
          );
      });
  },
  //finding the user by id
  findUserById: function (req, res) {
    const {id} = req.params;
    user
      .findOne({ _id: id })
      .then(function (data) {
        res.status(200).send(new Response(true, "User found", "", 200, data));
      })
      .catch(function (error) {
        res
          .status(400)
          .send(new Response(false, "Invalid data", "", 400, error.message));
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
