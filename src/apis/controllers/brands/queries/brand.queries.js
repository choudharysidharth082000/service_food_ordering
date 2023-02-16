const { brand, user } = require("../../../models");
const Resposne = require("../../../commons/Response");
const finalObject = {
  getAllBrands: function (req, res) {
    brand
      .find({ $and: [{ isDeleted: false }, { isDisabled: false }] })
      .then(function (data) {
        return res
          .status(200)
          .send(new Resposne(true, 200, "All brands", data));
      })
      .catch(function (error) {
        return res
          .status(500)
          .send(new Resposne(false, 500, "Internal Server Error", error));
      });
  },
  getBrandById: function (req, res) {
    brand
      .findOne({ _id: req.params.brandID })
      .then(function (data) {
        return res
          .status(200)
          .send(new Resposne(true, 200, "Brand found", data));
      })
      .catch(function (error) {
        return res
          .status(500)
          .send(new Resposne(false, 500, "Internal Server Error", error));
      });
  },
  //get brands by user id
  getBrandsByUserId: function (req, res) {
    user
      .findOne({ _id: req.params.userID })
      .then(function (data) {
        return res
          .status(200)
          .send(new Resposne(true, 200, "Brand found", data));
      })
      .catch(function (error) {
        return res
          .status(500)
          .send(new Resposne(false, 500, "Internal Server Error", error));
      });
  },
  getDisabledBrands: function (req, res) {
    brand
      .find({ $and: [{ isDeleted: false }, { isDisabled: true }] })
      .then(function (data) {
        return res
          .status(200)
          .send(new Resposne(true, 200, "All brands", data));
      })
      .catch(function (error) {
        return res
          .status(500)
          .send(new Resposne(false, 500, "Internal Server Error", error));
      });
  },
  getDeletedBrands: function (req, res) {
    brand
      .find({ $and: [{ isDeleted: true }, { isDisabled: false }] })
      .then(function (data) {
        return res
          .status(200)
          .send(new Resposne(true, 200, "All brands", data));
      })
      .catch(function (error) {
        return res
          .status(500)
          .send(new Resposne(false, 500, "Internal Server Error", error));
      });
  },
};


module.exports = finalObject;