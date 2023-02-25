const mongoose = require("mongoose");

const { Schema } = mongoose;

var foodCategories = new Schema(
  {
    foodCategoryName: {
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
    superCategory: {
      superCategoryID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SuperCategory",
        required: true,
      },
      superCategoryName: {
        type: String,
        required: true,
      },
    },
    foodCategoryDescription: {
      type: String,
      required: true,
      min: 3,
    },
    foodCategoryImage: {
      type: String,
      required: false,
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

const foodCategory = mongoose.model("FoodCategory", foodCategories);

exports.foodCategory = foodCategory;
