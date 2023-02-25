const mongoose = require("mongoose");

const { Schema } = mongoose;

var outlets = new Schema(
  {
    outletName: {
      type: String,
      required: true,
      min: 3,
    },
    brand: {
      brandID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
        required: true,
      },
      brandName: {
        type: String,
        required: true,
      },
    },
    owner: {
      outletOwnerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      outletOwnerName: {
        type: String,
        required: true,
      },
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
      type: Array,
      required: true,
      min: 3,
    },
    outletEmail: {
      type: Array,
      required: true,
      min: 3,
    },
    outletPhoneNumber: {
      type: Array,
      required: true,
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
