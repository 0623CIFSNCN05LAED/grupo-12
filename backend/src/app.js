const express = require("express");
const path = require("path");
const methodOverride = require('method-override')
const session = require("express-session");
const app = express();  
const cookieParser = require("cookie-parser"); 
const userData = require("./middlewares/user-data")
const userLogged = require('./middlewares/user-logged'); 
const recordameMiddleware = require('./middlewares/recordame')
const apiProductsRouter = require("./routes/api/products")
const apiUsersRouter = require("./routes/api/users") 
const cors = require("cors");

app.use(
  cors(
    // (corsOptions = {
    //   origin: "*",
    // })
  )
);


app.use(express.static(path.join(__dirname,"../public")));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method")); 
app.use(cookieParser());

app.use(session({ // Configura express-session
    secret: 'tuClaveSecreta', 
    resave: false,
    saveUninitialized: false,
  })); 

app.use(userData); 
app.use(userLogged); 
app.use(recordameMiddleware);


const mainRoute = require("./routes/main-router");
const productRouter = require ("./routes/products-router");
const userRouter = require ("./routes/user-router"); 


const PORT = 3030;
app.listen (PORT, ()=>{
  console.log(`Server on ${PORT}`);
});

app.set("view engine", "ejs");
app.set("views", "./src/views");


app.use(apiUsersRouter)
app.use(productRouter);
app.use(mainRoute);
app.use(userRouter);
app.use(apiProductsRouter)


