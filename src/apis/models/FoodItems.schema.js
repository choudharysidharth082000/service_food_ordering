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
    foodItemCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FoodCategory",
      required: true,
    },
    brandID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
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

const foodItem = mongoose.model("FoodItem", foodItems);

exports.foodItem = foodItem;
