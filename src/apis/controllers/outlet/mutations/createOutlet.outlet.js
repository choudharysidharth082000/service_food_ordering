const { outlet, user } = require("../../../models");
const Response = require("../../../commons/Response");
module.exports = {
  createOutlet: function (req, res) {
    const {
      outletName,
      outletAddress,
      outletLogo,
      outletDescription,
      outletEmail,
      outletPhoneNumber,
      outletWebsite,
      outletSocialMedia,
      outletOwnerName,
      brandName,
    } = req.body;

    const brandID = req.params.brandID;
    const outletOwner = req.params.managerID;

    const newOutlet = new outlet({
      outletName,
      outletAddress,
      outletLogo,
      outletDescription,
      outletEmail,
      outletPhoneNumber,
      outletWebsite,
      outletSocialMedia,
      brand: {
        brandID,
        brandName,
      },
      owner: {
        outletOwnerID: outletOwner,
        outletOwnerName: outletOwnerName,
      },
    });
    newOutlet
      .save()
      .then(function (data) {
        if (!data) {
          return res
            .status(400)
            .send(new Response(false, 400, "Outlet not created", null));
        }
        //setting the user to be the manager of the outlet
        user
          .findByIdAndUpdate(
            { _id: outletOwner },
            {
              userType: "manager",
              outletID: data._id,
              brand: {
                brandID: brandID,
                brandName: brandName,
              },
              outlet: {
                outletID: data._id,
                outletName: data.outletName,
              },
            }
          )
          .then(function (data) {
            if (!data) {
              return res
                .status(400)
                .send(new Response(false, 400, "User not found", null));
            }
            return res
              .status(200)
              .send(
                new Response(true, 200, "Outlet created successfully", data)
              );
          });
      })
      .catch(function (error) {
        return res
          .status(500)
          .send(new Response(false, 500, "Internal Server Error", error));
      });
  },

  getAllOutlets: function (req, res) {
    outlet
      .find()
      .then(function (data) {
        if (!data) {
          return res
            .status(400)
            .send(new Response(false, 400, "No outlets found", null));
        }
        return res
          .status(200)
          .send(new Response(true, 200, "Outlets found", data));
      })
      .catch(function (error) {
        return res
          .status(500)
          .send(new Response(false, 500, "Internal Server Error", error));
      });
  },

  getOutletByBrandID: function (req, res) {
    const brandID = req.params.brandID;
    console.log("This is the brandID", brandID);
    outlet
      .find({ "brand.brandID": brandID })
      .then(function (data) {
        if (!data) {
          return res
            .status(400)
            .send(new Response(false, 400, "No outlets found", null));
        }
        return res
          .status(200)
          .send(new Response(true, 200, "Outlets found", data));
      })
      .catch(function (error) {
        return res
          .status(500)
          .send(new Response(false, 500, "Internal Server Error", error));
      });
  },
};
