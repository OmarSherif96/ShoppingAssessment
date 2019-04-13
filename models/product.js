const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    currency:String,
    vendor:String,
    publisher:String,
    quantity:Number,
    description:String,
    cateogiry:String,
});
const Product = mongoose.model('Product',productSchema,'Products');
module.exports = Product