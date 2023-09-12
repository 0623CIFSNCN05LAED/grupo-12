const products = require("./catalogo/products")
const users = require("./users/users");

const db = {
  products,
  users,
};

module.exports = db;
