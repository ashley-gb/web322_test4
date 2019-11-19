/*
WEB 322 Test 4: At Home Assignment
Professor: Mr. Kadeem Best
Name: Ashley Gernitz-Bennett
Student #: 133046185
Date: Nov. 18th/19
*/
//Declare consts/ modules needed
const express= require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//Include any environment variables in code
require("dotenv").config({path:'./config/key.env'});

const app = express();
app.use(bodyParser.urlencoded({extended:false}));

//Informs program to use handlebars
app.engine("handlebars",exphbs());
app.set("view engine","handlebars");

//Transfers routing requests to our routing files
app.use("/main",mainRoutes);
app.use("/products",productRoutes);

//Handle MongoDB database

//Listen to verify server connection
const PORT = process.env.PORT || 3000;


app.listen(PORT,()=>{
    console.log(`Your Web Server has been connected`);
    
});



