const productServices = require("../services/productServices");

module.exports = {
  home: (req, res) => {
    res.render("home")

  },

  search: async (req, res) => { //no funciona, VER
    const keywords = req.query.keywords;
    const foundBikes = await productServices.search(keywords);
    console.log(foundBikes);
    res.render("results", { bike: foundBikes });
  }

};  