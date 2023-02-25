const views = {};

views.auth = require("./Auth.view");
views.user = require("./User.View");
views.brand = require("./Brand.view");
views.outlet = require("./outlet.view");
views.foodItem = require("./superCategory.view");
views.category = require("./category.view");
views.products = require("./product.view");
views.superCategory = require("./superCategory.view");
views.customer = require("./customer.view");

module.exports = views;
