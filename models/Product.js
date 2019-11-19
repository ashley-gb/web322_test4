//Declare constants
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const productSchema = new Schema({
  title:  
  {
      type:String,
      required:true
  },
  price:  
  {
      type:String,
      required:true
  },
  quantity:  
  {
      type:String,
      required:true
  },
  description:
  {
      type:String
  },
  taxable:
  {
      type:Boolean,
      required:true
  }
});

const productModel =mongoose.model("Task",taskSchema);

module.exports=productModel;