const mongoose = require("mongoose");

const { Schema } = mongoose;

const users = new Schema(
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
    userType: {
      type: String,
      required: true,
      enum: ["superadmin", "admin", "employee", "manager"],
    },
    brand: {
      brandID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
        required: false,
      },
      brandName: {
        type: String,
        requried: false,
      },
    },
    outlet: {
      outletID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Outlet",
        required: false,
      },
      outletName: {
        type: String,
        required: false,
      },
    },
    userName: {
      type: String,
      required: true,
      unique: true,
      min: 3,
    },
    phoneNumber: {
      type: String,
      required: true,
      min: 10,
    },
    password: {
      type: String,
      required: false,
      min: 8,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    passwordSalt: {
      type: String,
      required: true,
    },
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
