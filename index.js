console.log("Application is running on the nodejs server");

const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const app = express();
const flash = require("express-flash");
const session = require("express-session");
const YAML = require("yamljs");
const swaggerUI = require("swagger-ui-express");
const passport = require("passport");

const swaggerJsDocs = YAML.load("./public/swagger/api.yaml");
const cors = require("cors");

const Response = require("./src/apis/commons/Response");
const fs = require("fs");
const connection = require("./src/database/index.database");
//functions fo the controllers
const adminFunctions = require("./src/apis/controllers/admin.controller");
// adminFunctions.adminInitialSetup();

//routers
const {
  auth,
  user,
  brand,
  outlet,
  foodItem,
  category,
  products,
  superCategory,
  customer
} = require("./src/apis/view");

//using the body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//using the dotenv for the data
dotenv.config();

//variables
const PORT = process.env.PORT || 3001;

//connection on the mongoose api
const mongoURL = process.env.MONGO_URL;
console.log(mongoURL);
connection.connectDatabase(mongoURL);

//sample routes
app.use("/api/user", (req, res) => {
  const response = new Response(true, "Success", "User is created", 200, {
    sample: "sample is the data",
  });
  console.log("Entered the yser Phase");
  res.send(req.user);
});
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
require("./src/passport/passport-config.passport");

app.get(
  "/protectedRoute",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send("Authenticated");
  }
);

//adding a sample data to the first time when the application is ran
app.use("/v1/api/auth", auth);
app.use("/v1/api/user", user);
app.use("/v1/api/brand", brand);
app.use("/v1/api/outlet", outlet);
app.use("/v1/api/foodItem", foodItem);
app.use("/v1/api/category", category);
app.use("/v1/api/product", products);
app.use("/v1/api/superCategory", superCategory);
app.use("/v1/api/customer", customer);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));
// app.use("/api/test/Login")

//starting the server
app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});
