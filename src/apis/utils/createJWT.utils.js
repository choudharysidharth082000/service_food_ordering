const jwt = require("jsonwebtoken");
const fs = require("fs");
module.exports = (user) => {
  if (!user) {
    throw new Error("User is not provided for producing the JWT token");
  }

  const privateKey = fs.readFileSync("src/keys/keypair.pem");
  const token = jwt.sign({ _id: user._id, email: user.emailUser }, privateKey, {
    algorithm: "RS256",
    issuer: process.env.ISSUE,
    expiresIn: "10h",
  });

  return token;
};
