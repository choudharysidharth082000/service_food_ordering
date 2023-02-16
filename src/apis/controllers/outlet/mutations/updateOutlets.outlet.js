const { outlet } = require("../../../models");
const Response = require("../../../commons/Response");
module.exports = {
  updateOutlate: function (req, res) {
    const {
      outletName,
      outletAddress,
      outletLogo,
      outletDescription,
      outletEmail,
      outletPhoneNumber,
      outletWebsite,
      outletSocialMedia,
    } = req.body;

    //updating the outlet
    const { brandID } = req.params;

    outlet
      .findByIdAndUpdate(
        { _id: brandID },
        {
          outletName,
          outletAddress,
          outletLogo,
          outletDescription,
          outletEmail,
          outletPhoneNumber,
          outletWebsite,
          outletSocialMedia,
        }
      )
      .then(function (data) {
        if (!data) {
          return res
            .status(400)
            .send(new Response(false, 400, "Outlet not found", null));
        }
        return res
          .status(200)
          .send(new Response(true, 200, "Outlet updated successfully", data));
      })
      .catch(function (error) {
        return res
          .status(500)
          .send(
            new Response(false, 500, "Internal Server Error", error.message)
          );
      });
  },
  disableOutlet: function (req, res) {
    const brandID = req.params.brandID;
    outlet
      .findByIdAndUpdate(
        { _id: brandID },
        {
          isDisabled: true,
        }
      )
      .then(function (data) {
        if (!data) {
          return res
            .status(400)
            .send(new Response(false, 400, "Outlet not found", null));
        }
        return res
          .status(200)
          .send(new Response(true, 200, "Outlet disabled successfully", data));
      })
      .catch(function (error) {
        return res
          .status(500)
          .send(
            new Response(false, 500, "Internal Server Error", error.message)
          );
      });
  },
  enableUser: function (req, res) {
    const { brandID } = req.params;
    outlet
      .findByIdAndUpdate(
        { _id: brandID },
        {
          isDisabled: false,
        }
      )
      .then(function (data) {
        if (!data) {
          return res
            .status(400)
            .send(new Response(false, 400, "Outlet not found", null));
        }
        return res
          .status(200)
          .send(new Response(true, 200, "Outlet enabled successfully", data));
      })
      .catch(function (error) {
        return res
          .status(500)
          .send(
            new Response(false, 500, "Internal Server Error", error.message)
          );
      });
  },
};
