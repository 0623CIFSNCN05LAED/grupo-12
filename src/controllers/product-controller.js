const productService = require("../services/productServices");

module.exports={

    productCart: (req, res) => {
        res.render("product-cart");
      },
        
      productDetailBikes: (req, res) =>{
        const id = req.params.id;
        const bike= bikes.find((bike) => bike.id == id);
        res.render("product-detail-bikes", {'bike' : bike});
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
          modelo: req.body.modelo,
          descripcion: req.body.descripcion,
          tipo: req.body.tipo,
          precio: Number(req.body.precio),
          img: req.file ? req.file.filename : null,
        };
        console.log(product);
        
        switch (req.body.tipo) {
          case 'bicicletas':
            const bikes = productService.getBikes();
            bikes.push(product);
            productService.saveBikes(bikes);
            break;
          case 'ropa':
            const clothes = productService.getClothes()
            clothes.push(product);
            productService.saveClothes(clothes);
            break;
          case 'accesorios':
            const accessories = productService.getAccessories();
            accessories.push(product);
            productService.saveAccessories(accessories);
            break;
          default:
            break;
        }
    
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
    
    

      




