const mongoose = require("mongoose");

const { Schema } = mongoose;

var productOutlets = new Schema({
  outlet: {
    outletID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Outlet",
      required: true,
    },
    outletName: {
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

  product: {
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    productName: {
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
  category: {
    categoryID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FoodCategory",
      required: true,
    },
    categoryName:
    {
        type: String,
        required: true
    }
  },
});

const productOutlet = mongoose.model("productOutlet", productOutlets);
exports.productOutlet = productOutlet;
