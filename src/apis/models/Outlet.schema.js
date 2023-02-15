const mongoose = require("mongoose");

const { Schema } = mongoose;

var outlets = new Schema(
  {
    outletName: {
      type: String,
      required: true,
      min: 3,
    },
    brandID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
      required: true,
    },
    outletOwner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    outletLogo: {
      type: String,
      required: true,
      min: 3,
    },
    outletDescription: {
      type: String,
      required: true,
      min: 3,
    },

    outletAddress: {
      type: String,
      required: true,
      min: 3,
    },
    outletEmail: {
      type: String,
      required: true,
      min: 3,
    },
    outletPhoneNumber: {
      type: String,
      required: true,
      min: 3,
    },
    outletWebsite: {
      type: String,
      required: true,
      min: 3,
    },
    outletSocialMedia: {
      type: Array,
      required: true,
    },
    employees: {
      type: Array,
      required: true,
    },
    employeesCount: {
      type: Number,
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

const outlet = mongoose.model("Outlet", outlets);

exports.outlet = outlet;
