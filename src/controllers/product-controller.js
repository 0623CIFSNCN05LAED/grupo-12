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
        console.log(bike);
        res.render("product-detail-bikes", { bike });
      });
    },
  
    productListBikes: (req, res) =>{ 
      
      productService.getAllBikes().then((bikes)=> {
        res.render("product-list-bikes", { bikes } );
      });
      
    },

    //Render Create
    productCreate: async (req, res) =>{ 
      try {
        const brands = await productService.getAllBrands();
        const sizes = await productService.getAllSizes();
        const colors = await productService.getAllColors();
        const categories = await productService.getAllCategories();
        const models = await productService.getAllModels();
    
        res.render("product-create-form", { brands, sizes, colors, categories, models });
      } catch (error) {
        // Manejar errores
        console.error(error);
        res.status(500).send("Error interno del servidor");
      }
    },

    //Create Post
    productStoreBikes: (req, res) => { 
      productService.createBike(req.body, req.file).then((bike)=>{
      res.redirect("/bikes")
     });
    },

    productEdit: (req, res) => {
      // Aca obtenes la bici que vas a editar, mediante el id
      productService.getBike(req.params.id).then((bike) => {
        const brandsPromise = productService.getAllBrands();
        const sizesPromise = productService.getAllSizes();
        const colorsPromise = productService.getAllColors();
        const categoriesPromise = productService.getAllCategories();
        const modelsPromise = productService.getAllModels();
    
        // Espera a que todas las promesas se resuelvan antes de renderizar la vista
        Promise.all([brandsPromise, sizesPromise, colorsPromise, categoriesPromise, modelsPromise])
          .then(([brands, sizes, colors, categories, models]) => {
            console.log(bike);
            res.render("product-edit-form", { bike, categories, brands, sizes, colors, models });
          })
          .catch((error) => {
            console.error(error);
            res.status(500).send("Error interno del servidor");
          });
      });
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
    
    

      




