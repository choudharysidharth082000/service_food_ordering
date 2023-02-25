const mongoose = require("mongoose");

const { Schema } = mongoose;

var foodItems = new Schema(
  {
    foodItemName: {
      type: String,
      required: true,
      min: 3,
    },
    foodItemDescription: {
      type: String,
      required: true,
      min: 3,
    },
    foodItemImage: {
      type: Array,
      required: true,
    },
    foodItemPrice: {
      type: Number,
      required: true,
      min: 3,
    },
    foodItemImage: {
      type: String,
      required: true,
      min: 3,
    },
    category: {
      categoryID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FoodCategory",
        required: true,
      },
      categoryName: {
        type: String,
        requried: true,
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

const foodItem = mongoose.model("FoodItem", foodItems);

exports.foodItem = foodItem;
