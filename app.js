const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);

const cookieParser = require("cookie-parser");
const path = require("path");
const expressSection = require("express-session");
const flash = require("connect-flash");
const index = require("./routes/index");
const ownersRouter = require("./routes/ownersRouter");
const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");
const db = require("./config/mongoose-connection");

require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine","ejs");

app.use(
    expressSection({
        resave: false,
        saveUninitialized: false,
        secret: 'process.env.EXPRESS_SESSION_SECRET',
    })
);
app.use(flash());
app.use(express.static(path.join(__dirname, "public")));

app.use("/owners", ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);
app.use("/",index);


app.listen(4000);