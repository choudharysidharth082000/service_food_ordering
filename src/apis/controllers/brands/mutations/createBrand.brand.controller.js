const { brand, user } = require("../../../models");
const verifyBrand = require("../utils/verifyBrand");
const Response = require("../../../commons/Response");
const finalFunctions = {
  createBrand: function (req, res, next) {
    const {
      brandName,
      brandLogo,
      brandDescription,
      brandAddress,
      brandEmail,
      brandPhoneNumber,
      brandWebsite,
      brandSocialMedia,
      brandOwnerAddress,
    } = req.body;
    console.log(req.body);

    //verifying the data from the server
    const data = {
      brandName,
      brandLogo,
      brandDescription,
      brandAddress,
      brandEmail,
      brandPhoneNumber,
      brandWebsite,
      brandSocialMedia,
    };
    //verufying the data from the server
    // const checks =
    //   "brandName brandLogo brandDescription brandAddress brandEmail brandPhoneNumber brandWebsite brandSocialMedia";
    // const brandOwner = req.params.userID;
    // const verified = verifyBrand(checks, data);
    // if (verified) {
    //   return res
    //     .status(400)
    //     .send(new Response(false, 400, "Invalid Data", null));
    // }
    //sending the data to the database using promise
    const brandOwner = req.params.userID;
    const brandings = new brand({
      brandName,
      brandLogo,
      brandDescription,
      brandAddress,
      brandEmail,
      brandPhoneNumber,
      brandWebsite,
      brandSocialMedia,
      brandOwner,
    });
    brandings
      .save()
      .then((data) => {
        //making the user field to the brand
        user
          .findByIdAndUpdate(
            { _id: brandOwner },
            { userType: "brand", brandID: data._id }
          )
          .then(function (data) {
            if (!data) {
              return res
                .status(400)
                .send(new Response(false, 400, "User not found", null));
            }
            return res
              .status(200)
              .send(new Response(true, 200, "Brand Created", data));
          })
          .catch(function (error) {
            return res
              .status(500)
              .send(
                new Response(false, 500, "Internal Server Error", error.message)
              );
          });
      })
      .catch((err) => {
        return res
          .status(500)
          .send(new Response(false, 500, "Internal Server Error", err.message));
      });
  },
};

module.exports = finalFunctions;
