const productService = require("../services/productServices");

module.exports = {

  home: async (req, res) => {
      
    const bikes = await productService.getAllBikesRandom(); 
    console.log(bikes);
    res.render('home', { bikes : bikes });
  
},
  

};  