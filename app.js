/*WEB 322 Test 4: At Home Assignment
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
const HTTP_Port = 8080;

//Include any environment variables in code
require("dotenv").config({path:'./config/key.env'});

//Include our routing scripts
const mainRoutes = require("./routes/main");
const productRoutes = require("./routes/products");

//Creates the app object, tells system to use bodyParser
const app = express();
app.use(bodyParser.urlencoded({extended:false}));

//Outsources routing to separate route scripts
app.use("/",mainRoutes);
app.use("/products",productRoutes);

//Informs program to use handlebars in handling HTML
app.engine("handlebars",exphbs());
app.set("view engine","handlebars");

//Handles MongoDB database
//Debug error: Failure to connect to server
const MONGO_DB_URL ='mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0-agoxt.mongodb.net/${process.env.MONGO_DB_DATABASE_NAME}?retryWrites=true&w=majority';

mongoose.connect(MONGO_DB_URL, {useNewUrlParser: true})
.then(()=>{
    console.log("Connection to DB server successful!");
})
.catch((err)=>{
    console.log("Connection failed: Error -" + err);
})

//404 Error Page
app.use((req, res)=>{
    res.status(404).send("Sorry, this page isn't currently available: Please try again later");
});

//Listen for server connection
app.listen(HTTP_Port,()=>{
    console.log('Connection successful!');
})




