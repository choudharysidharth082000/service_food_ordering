const mongoose = require("mongoose");

const { Schema } = mongoose;

var superCategories = new Schema(
  {
    superCategoryName: {
      type: String,
      required: true,
      min: 3,
    },
    superCategoryDescription: {
      type: String,
      required: true,
      min: 3,
    },
    superCategoryImage: {
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
        min: 3,
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

const superCategory = mongoose.model("SuperCategory", superCategories);

exports.superCategory = superCategory;
