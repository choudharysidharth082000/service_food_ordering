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
    userType:
    {
        type: String,
        required: true,
        enum: ['superadmin', 'admin', 'user'],
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
      required: true,
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
  },
  { timestamps: true }
);

const user = mongoose.model("User", users);

exports.user = user;
