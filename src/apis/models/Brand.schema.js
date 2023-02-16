const mongoose = require("mongoose");
//importing the mongoodse Object ID

const { Schema } = mongoose;

var brands = new Schema(
  {
    brandName: {
      type: String,
      required: true,
      min: 3,
    },
    brandLogo: {
      type: String,
      required: true,
      min: 3,
    },
    brandDescription: {
      type: String,
      required: true,
      min: 3,
    },
    brandAddress: {
      type: Array,
      required: true,
    },
    brandEmail: {
      type: Array,
      required: true,
    },
    brandPhoneNumber: {
      type: Array,
      required: true,
    },
    brandWebsite: {
      type: String,
      required: true,
      min: 3,
      trim: true,
    },
    brandAddress: {
      type: Array,
      required: true,
    },
    brandSocialMedia: {
      type: Array,
      required: true,
    },
    brandOwner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
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

const brand = mongoose.model("Brand", brands);

exports.brand = brand;
