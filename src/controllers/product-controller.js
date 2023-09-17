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
        res.redirect("/");
      },

      productEdit: (req, res) => {          //ver a partir de esta linea 83, copiado todo desde Clase 29 
        // const id = req.params.id;
        // const product = productService.getProduct(id);
        res.render("product-edit-form"); //deberia ser res.render("product-edit-form", { product }); 
      },
      // Update - Method to update
      update: (req, res) => {
        const product = req.body;
        const id = req.params.id;
        const image = req.file
          ? req.file.filename
          : productService.getProduct(id).image;
        product.image = image;
        productService.updateProduct(id, product);
        res.redirect("/products");
      },
    
      // Delete - Delete one product from DB
      destroy: (req, res) => {
        const id = req.params.id;
        productService.deleteProduct(id);
        res.redirect("/products");
      },
    };
    
    

      




