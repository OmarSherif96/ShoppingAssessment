
const express = require('express');
const app=express();
const allProducts=require('./routes/allProducts')
const helmet = require('helmet')
const mongoose = require('mongoose')
const fs = require('fs')

fs.
//http secure header
app.use(helmet());


app.use(express.json())
app.use(express.static('public'));

app.use('/allProducts',allProducts)






//Port definition
const port = process.env.PORT || 3000
app.listen(port,()=>console.log(`listening on ${port}`));

//Connect to mongo
mongoose.connect('mongodb://localhost/ShoppingAssessmentDB',{useNewUrlParser: true})
.then(()=>console.log('Connected to mongodb'));

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    token:String
})
const User = mongoose.model('User',userSchema);

async function saveUser(){
const loggedUser = new User({
})
const result = await loggedUser.save();
console.log(result);
}

const productSchema = new mongoose.Schema({
    name:String,
    price:String,
    currency:String,
    category:String,
    vendor:String,
    publisher:String,
    quantity:String,
    description:String
})
const Product = mongoose.model('Product',productSchema);

// async function saveProduct(){
//     const newProduct = new Product({
//     })
//     const result = await newProduct.save();
//     console.log(result);
//     }
    // saveProduct();
    


