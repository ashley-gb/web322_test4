//---Main Routing---
const express = require('express');
const router = express.Router();

//Home page
router.get("/",(req,res)=>{
    res.render("home");
});

//Error message
router.use((err, req, res, next)=>{
    res.status(500).send("An error occurred.");
})

//Outputs render back to main
module.exports=router;