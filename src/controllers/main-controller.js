const bikes = require("../data/catalogo");
module.exports = {
  home: (req, res) => {
    res.render("home");
  },
  login: (req, res) => {
    res.render("login");
  },
  productDetail: (req, res) =>{
    const id = req.params.id;
    const bike= bikes.find((bike) => bike.id == id);
    res.render("product-detail", {'bikes' : bikes});
  }
};