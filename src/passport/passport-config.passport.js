const LocalStrategy = require("passport-local").Strategy;
const { user } = require("../../src/apis/models/auth.schema");
//utility functions
const validateAuth = require("../../src/apis/utils/validators/authValidator.validator");
const comparePassword = require("../../src/apis/utils/comparePassword.utils");
const createJWT = require("../../src/apis/utils/createJWT.utils");
const initialize = async (passport) => {
  try {
    passport.use(
      new LocalStrategy(
        { usernameField: "email" },
        async (email, password, done) => {
          try {
            //varifying the the input for the email and the password
            const data = { email, password };
            const check = "email password";
            const isValid = validateAuth(check, data);
            if (!isValid) {
              return done(null, false, {
                status: false,
                message: "Invalid Input",
              });
            }
            const first = await user.findOne({ emailUser: email });
            if (!first) {
              return done(null, false, {
                status: false,
                message: "User Not Found",
              });
            }
            console.log("The password is : " + password);
            const checkPass = comparePassword(password, first.password);

            if (checkPass && first.email === email) {
              //generating the jwt token
              const token = await createJWT(first);
              first.token = token;
              return done(null, true, {
                status: true,
                message: "User Found",
                data: first,
                token: token,
              });
            } else {
              return done(null, false, {
                status: false,
                message: "UserName or password is mismatching",
              });
            }

            //
          } catch (error) {
            console.log(error);
            return done(error, false);
          }
        }
      )
    );
    passport.serializeUser((user, done) => {});
    passport.deserializeUser((id, done) => {});
  } catch (error) {
    console.log(error);
  }
};

module.exports = initialize;
