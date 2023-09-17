const productService = require("../services/productServices");

module.exports={

    productCart: (req, res) => {
        res.render("product-cart");
      },
        
      productDetailBikes: (req, res) =>{
        const id = req.params.id;
        const bike= productService.getBikeForID(id);
        res.render("product-detail-bikes", { bike });
      },
    
      productListBikes: (req, res) =>{
        const bikes = productService.getAllBikes();
        res.render("product-list-bikes", { bikes } );
      },

      productCreate: (req, res) =>{
        res.render("product-create-form")
      },
      
      productStoreBikes: (req, res) => {
        const product = {
          marca: req.body.marca,
          nombre: req.body.nombre,
          rodado: req.body.rodado,
          tamaño: req.body.tamaño,
          categoria: req.body.categoria,
          descripcion: req.body.descripcion,
          tipo: req.body.tipo,
          precio: Number(req.body.precio),
          img: req.file ? req.file.filename : null,
        };
        productService.createBike(product);
        res.redirect("/bikes");
      },

      productEdit: (req, res) => {        // Aca obtenes la bici que vas a editar, mediante el id 
        const id = req.params.id;
        const product = productService.getBike(id);
        res.render("product-edit-form", { product }); 
      },

      update: (req, res) => {
        const product = req.body;
        const id = req.params.id;
        const image = req.file ? req.file.filename : productService.getBike(id).image;
        product.image = image;
        productService.updateBikes(id, product);
        res.redirect("/bikes");
      },
    
      destroy: (req, res) => {
        const id = req.params.id;
        productService.destroyProduct(id);        
        res.redirect("/bikes");
      },
    };
    
    

      




