const productService = require("../services/productServices");

module.exports = {
  productCart: (req, res) => {
    console.log(req.session);
    const data = req.session.userData;
    res.render("product-cart", {
      email: data.email,
      password: data.password,
    });
  },

  productDetailBikes: (req, res) => {
    productService.getBike(req.params.id).then((bike) => {
      console.log(bike);
      res.render("product-detail-bikes", { bike });
    });
  },

  productListBikes: (req, res) => {
    productService.getAllBikes().then((bikes) => {
      res.render("product-list-bikes", { bikes });
    });
  },

  //Render Create
  productCreate: async (req, res) => {
    try {
      const brands = await productService.getAllBrands();
      const sizes = await productService.getAllSizes();
      const colors = await productService.getAllColors();
      const categories = await productService.getAllCategories();
      const models = await productService.getAllModels();
      const errors = req.session.errors || {};
      delete req.session.errors;

      res.render("product-create-form", {
        brands,
        sizes,
        colors,
        categories,
        models,
        errors,
      });
    } catch (error) {
      // Manejar errores
      console.error(error);
      res.status(500).send("Error interno del servidor");
    }
  },

  //Create Post
  productStoreBikes: (req, res) => {
    productService.createBike(req.body, req.file).then((bike) => {
      res.redirect("/bikes");
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
      const errors = req.session.errors || {};
      delete req.session.errors;

      // Espera a que todas las promesas se resuelvan antes de renderizar la vista
      Promise.all([
        brandsPromise,
        sizesPromise,
        colorsPromise,
        categoriesPromise,
        modelsPromise,
      ]).then(([brands, sizes, colors, categories, models]) => {
        res.render("product-edit-form", {
          bike,
          categories,
          brands,
          sizes,
          colors,
          models,
          errors,
        });
      });
    });
  },

  update: (req, res) => {
    productService
      .updateBikes(req.params.id, req.body, req.file)
      .then((bike) => {
        console.log(req.params.id);
        res.redirect("/bikes");
      });
  },

  destroy: (req, res) => {
    productService.destroyProduct(req.params.id).then(() => {
      res.redirect("/bikes");
    });
  },

  filterCategory: async (req, res) => {
    const category = req.params.category;
    const bikes = await productService.getBikesByCategory(category);
    res.render("product-category", { bikes, category });
  },

  addToCart: async (req, res) => {
    res.render("/product-cart");
  },

  search: async (req, res) => {
    try {
      const keywords = req.query.search;

      if (!keywords || keywords.trim() === "") {
        alert("Completa el campo de búsqueda");
      }

      const foundBikes = await productService.search(keywords);
      console.log(foundBikes);
      res.render("results", { bikes: foundBikes });
    } catch (error) {
      console.error("Error al procesar la búsqueda:", error);
      res.status(500).send("Error interno del servidor");
    }
  },
};
