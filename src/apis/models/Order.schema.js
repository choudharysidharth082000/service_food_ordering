const mongoose = require("mongoose");

const { Schema } = mongoose;

var orders = new Schema(
  {
    orderStatus: {
      type: String,
      required: true,
      min: 3,
    },
    orderDate: {
      type: Date,
      required: true,
      min: 3,
    },
    orderTime: {
      type: String,
      required: true,
      min: 3,
    },
    orderTotal: {
      type: Number,
      required: true,
      min: 3,
    },
    orderItems: {
      type: Array,
      required: true,
    },
    orderCustomer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    orderOutlet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Outlet",
      required: true,
    },
    orderBrand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
      required: true,
    },
    orderPaymentMethod: {
      type: String,
      required: true,
      min: 3,
    },
    orderPaymentStatus: {
      type: String,
      required: true,
      min: 3,
    },
    orderPaymentReference: {
      type: String,
      required: true,
      min: 3,
    },
    orderPaymentDate: {
      type: Date,
      required: true,
      min: 3,
    },
    orderPaymentTime: {
      type: String,
      required: true,
      min: 3,
    },
    orderPaymentAmount: {
      type: Number,
      required: true,
      min: 3,
    },
    orderPaymentCurrency: {
      type: String,
      required: true,
      min: 3,
    },
    orderPaymentFee: {
      type: Number,
      required: true,
      min: 3,
    },
    orderPaymentCustomerName: {
      type: String,
      required: true,
      min: 3,
    },
    orderPaymentCustomerEmail: {
      type: String,
      required: true,
      min: 3,
    },
    orderPaymentCustomerPhone: {
      type: String,
      required: true,
      min: 3,
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

const order = mongoose.model("Order", orders);

exports.order = order;
