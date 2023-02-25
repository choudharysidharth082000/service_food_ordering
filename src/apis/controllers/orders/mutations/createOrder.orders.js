const { order } = require("../../../models");

module.exports = {
  createOrder: function (req, res) {
    const {
      orderTotal,
      orderItems,
      orderCustomerID,
      orderCustomerPhone,
      orderCustomerName,
      orderOutletID,
      orderOutletName,
      brandName,
      brandID,
      orderPaymentMethod,
      orderPaymentCurrency,
      orderPaymentReference,
      orderPaymentAmount,
      orderPaymentFee,
    } = req.body;
    const createOrder = new order({
      orderTotal,
      orderDate: new Date(),
      orderTime: new Date().toLocaleTimeString(),
      orderItems,
      customer: {
        orderCustomerID,
        orderCustomerPhone,
        orderCustomerName,
      },
      outlet: {
        orderOutletID,
        orderOutletName,
      },
      brand: {
        brandName,
        brandID,
      },
      orderPaymentStatus: "Pending",
      orderPaymentMethod,
      orderPaymentCurrency,
      orderPaymentReference,
      orderPaymentAmount,
      orderPaymentFee,
    });
    createOrder
      .save()
      .then((data) => {
        if (!data) {
          return res.status(500).json({
            success: false,
            message: "Error in Creating Order",
            error: err,
          });
        }

        return res.status(200).json({
          success: true,
          message: "Order Created",
          data: data,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          success: false,
          message: "Error in Creating Order",
          error: err,
        });
      });
  },
};
