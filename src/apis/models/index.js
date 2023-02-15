const { user } = require("../../apis/models/auth.schema");
const { brand } = require("../../apis/models/Brand.schema");
const { foodItem } = require("../../apis/models/FoodItems.schema");
const { categoriesFood } = require("../../apis/models/Food_Categories.schema");
const { outlet } = require("../../apis/models/Outlet.schema");
const { order } = require("../../apis/models/Order.schema");

module.exports = {
  user,
  brand,
  foodItem,
  categoriesFood,
  outlet,
  order,
};
