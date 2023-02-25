const { customer } = require("../../../models");

module.exports = {
  createCustomer: function (req, res) {
    const {
      name,
      emailUser,
      brandID,
      brandName,
      outletID,
      outletName,
      phoneNumber,
    } = req.body;

    const newCustomer = new customer({
      name,
      emailUser,
      brand: {
        brandID,
        brandName,
      },
      outlet: {
        outletID,
        outletName,
      },
      phoneNumber,
    });
    newCustomer
      .save()
      .then((data) => {
        if (!data) {
          return res
            .status(400)
            .send(new Response(false, 400, "Customer not created", null));
        }
        return res.status(200).json({
          success: true,
          message: "Customer Created Successfully",
          data: data,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          success: false,
          message: "Error in Creating Customer",
          error: err,
        });
      });
  },
};
