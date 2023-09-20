const express = require("express");
const path = require("path");
const methodOverride = require('method-override')
const session = require(express.session);
const app = express(); 

app.use(express.static(path.join(__dirname,"../public")));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

const mainRoute = require("./routes/main-router");
const productRouter = require ("./routes/products-router");
const userRouter = require ("./routes/user-router");

app.listen (3000, ()=>{
    console.log ("Server On 3000");
});

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(mainRoute);
app.use(productRouter);
app.use(userRouter);



