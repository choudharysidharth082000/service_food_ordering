const Joi = require("joi");

module.exports = (checks, data) => {
  let check = {};
  let checkList = {
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
    mobileNumber: Joi.string().required().min(10).max(10),
    nameUser: Joi.string().min(3),
    userType: Joi.string().required(),
    confirmPassword: Joi.string().min(8).required(),
    userName: Joi.string().required(),
  };

  checks.split(" ").forEach((key) => {
    let trimmedKey = key.trim();

    if (trimmedKey && checkList[trimmedKey]) {
      check[`${trimmedKey}`] = checkList[`${trimmedKey}`];
    }
  });

  const schema = Joi.object(check);
  console.log(schema);

  const { error } = schema.validate(data);

  if (error) {
    return true;
  }
  return true;
};
