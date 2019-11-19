//Declare constants
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const productSchema = new Schema({
  "title": {
    "type": String,
    "required": true,
    "unique": true
  },
  "price": {
    "type": Number,
    "required": true
  },
  "quantity": {
      "type": Number,
      "required": true
    },
  "description": String,
  "taxable": {
    "type": Boolean,
    "required": true
  }
});

const productModel = mongoose.model("Product", productSchema);

module.exports=productModel;