const productService = require("../services/productServices");

module.exports={

  productCart: (req, res) => { 
    console.log(req.session); 
    const data = req.session.userData; 
      res.render("product-cart", {
        email: data.email, 
        password: data.password,
      }); 
    },
      
    productDetailBikes: (req, res) =>{
      productService.getBike(req.params.id).then((bike)=>{
        res.render("product-detail-bikes", { bike });
      });
    },
  
    productListBikes: (req, res) =>{
      productService.getAllBikes().then((bikes)=> {
        res.render("product-list-bikes", { bikes } );
      });
      
    },

    //Render Create
    productCreate: (req, res) =>{ 
      const category = productService.getAllCategories(); 

      category.then((category)=>{
        res.render("product-create-form", { category });
      })
    },

    //Create Post
    productStoreBikes: (req, res) => {
      productService.createBike(req.body, req.file).then((bike)=>{
      res.redirect("/bikes")
     });
    },

    productEdit: (req, res) => {        // Aca obtenes la bici que vas a editar, mediante el id 
      const categories = productService.getAllCategories(); 
      const bike = productService.getBike(req.params.id); 
      Promise.all([categories, bike]).then(([categories, bike]) => {
        res.render("product-edit-form", { bike, categories }); 
      }) 
    },

    update: (req, res) => {
      productService.updateBikes(req.params.id, req.body, req.file).then((bike)=>{
        res.redirect("/bikes");
      })
    }, 

    destroy: (req, res) => {
      productService.destroyProduct(req.params.id).then(() =>{
        res.redirect("/bikes");
      })
    },

    filterCategory: (req, res) =>{
      const categoria = req.params.categoria;
      const bikes= productService.getBikesForCategory(categoria)
      res.render("product-category", { bikes, categoria });
    }
  };
    
    

      




