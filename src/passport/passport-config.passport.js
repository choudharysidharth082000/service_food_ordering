const { log } = require("console");
const fs = require("fs");
const passport = require("passport");
var JwtStrategy = require("passport-jwt").Strategy;
const { user } = require("../apis/models");
ExtractJwt = require("passport-jwt").ExtractJwt;
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";
opts.issuer = process.env.ISSUE;
//specifying the algorithm rs256
passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    console.log(jwt_payload);
    console.log(jwt_payload._id);
    user.findOne({ _id: jwt_payload._id }).then(function (data1) {
      console.log("This is the data1 ",data1);
      if (!data1) {
        return done(null, false);
      } else {
        return done(null, data1);
      }
    });
  })
);
