const express = require("express");

const path = require("path");

const app = express(); 

const mainRoute = require("./routes/main-router");

app.use(express.static(path.join(__dirname,"../public")));

app.listen (3000, ()=>{
    console.log ("Server On 3000");
});

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(mainRoute);


app. get("/product-cart", (req, res) => {
    res.sendFile (path.resolve (__dirname, "views/product-cart.html"))
})

app. get("/product-detail", (req, res) => {
    res.sendFile (path.resolve (__dirname, "views/product-detail.html"))
})

app. get("/register", (req, res) => {
    res.sendFile (path.resolve (__dirname, "views/register.html"))
})






