const jwt = require("jsonwebtoken");
const fs = require("fs");

module.exports = async (token) => {
  if (token == "") {
    return "";
  }

  if (!token) {
    throw new Error("Token is not Given");
  }
  const publicKey = fs.readFileSync("src/keys/publickey.crt", "utf8");

  try {
    const decrypt = await jwt.verify(token, publicKey);
    console.log(decrypt);

    if (!decrypt) {
      return false;
    } else {
      return decrypt;
    }
  } catch (err) {
    throw new Error(`Dycription ERROR : ${err}`);
  }
};
