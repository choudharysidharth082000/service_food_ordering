const { Brand } = require("../../../models");
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
      brandOwnerAddress,
    };
    //verufying the data from the server
    const checks =
      "brandName brandLogo brandDescription brandAddress brandEmail brandPhoneNumber brandWebsite brandSocialMedia brandOwnerAddress";
    const brandOwner = req.paramas.userID;
    const verified = verifyBrand(checks, data);
    if (verified) {
      return res
        .status(400)
        .send(new Response(false, 400, "Invalid Data", null));
    }
    //sending the data to the database using promise
    const brand = new Brand({
      brandName,
      brandLogo,
      brandDescription,
      brandAddress,
      brandEmail,
      brandPhoneNumber,
      brandWebsite,
      brandSocialMedia,
      brandOwner,
      brandOwnerAddress,
    });
    brand
      .save()
      .then((data) => {
        return res
          .status(200)
          .send(new Response(true, 200, "Brand Created", data));
      })
      .catch((err) => {
        return res
          .status(500)
          .send(new Response(false, 500, "Internal Server Error", null));
      });
  },
};



module.exports = finalFunctions;