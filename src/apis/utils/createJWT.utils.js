const jwt = require("jsonwebtoken");
const fs = require("fs");
// module.exports = (user) => {
//   if (!user) {
//     throw new Error("User is not provided for producing the JWT token");
//   }

//   const privateKey = fs.readFileSync("src/keys/keypair.pem");
//   const token = jwt.sign({ _id: user._id, email: user.emailUser }, "secret", {
//     algorithm: "HS256",
//     issuer: process.env.ISSUE,
//     expiresIn: "10h",
//   });

//   return token;
// };

module.exports = function (user) {
  if (!user) {
    throw new Error("Please Provide Some data in the field");
  }
  const secret = process.env.JWT_SECRET;
  console.log(user);
  const payload = 
  {
    _id: user.id,
    email: user.email,
    userType: user.userType,
  }
  const getJWT = jwt.sign(payload, secret, {
    algorithm: "HS256",
    issuer: process.env.ISSUE,
    expiresIn: "10h",
  });
  return getJWT;
};
