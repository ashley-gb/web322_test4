const express = require('express')
const router = express.Router();

//Routing for home page
router.get("/",(req,res)=>
{
    res.render("home");
});


module.exports=router;