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
    // userType: {
    //   type: String,
    //   enum: ["premium", "normal"],
    // },
    brand: {
      brandID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
        required: true,
        default: "",
      },
      brandName: {
        type: String,
        required: true, 
        default: "",
      },
    },
    outlet: {
      outletID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      outletName: {
        type: String,
        requried: true,
      },
    },
    phoneNumber: {
      type: String,
      required: true,
      min: 10,
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

const customer = mongoose.model("Customer", customers);

exports.customer = customer;
