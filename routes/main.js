//---Main Routing---
const express = require('express');
const router = express.Router();

//Home page
router.get("/",(req,res)=>{
    res.render("home");
});

//Outputs render back to main
module.exports=router;