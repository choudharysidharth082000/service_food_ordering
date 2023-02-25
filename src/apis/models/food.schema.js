const mongoose = require("mongoose");

const { Schema } = mongoose;

var products = new Schema(
  {
    productName: {
      type: String,
      required: true,
      min: 3,
    },
    brandID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
      min: 3,
    },
    productImage: {
      type: String,
      required: false,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productDiscount: {
      type: Number,
      required: false,
    },
    productDiscountPrice: {
      type: Number,
      required: false,
    },
    productCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FoodCategory",
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

const product = mongoose.model("Product", products);
exports.product = product;
