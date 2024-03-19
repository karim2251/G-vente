const mongoose = require('mongoose');

// Mongoose schema
const productSchema = new mongoose.Schema({

  nom: {
     type: String, 
     required: true
 },
  marque: { 
    type: String, 
    required: true
 },
  prix: { 
    type: Number, 
    min:1,
    required: true
 },
  qtestock: { 
    type: Number,
    min:0,
    default:1, 
    required: true
 },
 photo:{
    type:String,
   //  required:true
 }
},{timestamps:true});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
