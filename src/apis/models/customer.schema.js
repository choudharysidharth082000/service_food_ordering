const mongoose = require("mongoose");

const { Schema } = mongoose;

const customers = new Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
    },
    emailUser: {
      type: String,
      required: true,
      unique: true,
      min: 8,
    },
    userType:
    {
        type: String,
        enum: ["premium", "normal"]
    },
    brandID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
      required: false,
      default: ""
    },
    outletID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Outlet",
      //adding the required field if it is employee
      required: false,
      default: ""
    },
    phoneNumber: {
      type: String,
      required: true,
      min: 10,
    },
    // password: {
    //   type: String,
    //   required: false,
    //   min: 8,
    // },
    // passwordHash: {
    //   type: String,
    //   required: true,
    // },
    // passwordSalt: {
    //   type: String,
    //   required: true,
    // },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const user = mongoose.model("User", users);

exports.user = user;
