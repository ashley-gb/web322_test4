//---Routing: Products---
//constants/ required modules
const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

//Add Product page
router.get("/add",(req,res)=>{
    res.render("addProduct")
});

//Manages Add Product Form submission
router.post("/addProduct",(req,res)=>{
    //Creates a new instance of the Product object
    const newProduct = new productModel({
        title: "Chocolate Chip Cookie",
        price: 2.50,
        quantity: 5,
        description: "A Classic Treat",
        taxable: true
    });

    //Check if product title is unique, if not request user to redo application
    Product.findOne({title: this.title})
    .then(()=>{
        if(Product.title == this.title){
            res.render("/error"); 
        }
    })

    //Save the instance
    const product = new Product(newProduct);
    product.save()
    //Confirm record stored, redirect to view product page 
    .then(()=>{
        console.log("Your entry has been saved");
        res.render("/viewProduct");
    })
    //Informs user if error occurs
    .catch((err) =>{
        console.log("Sorry, an error occurred: " + err);
    })
})

process.exit();

//Checks for records in the inventory database
router.get("/viewProducts",(req,res)=>{

    Product.find()
    .then((product)=>{
        res.render("/viewProducts", {
            record:products
        });
    })
    //If error, inform user
    .catch((err)=>{
        console.log("Sorry, an error occurred: " + err);
    })
});

//Update a record

//Output router feedback back to app.js
module.exports=router;
