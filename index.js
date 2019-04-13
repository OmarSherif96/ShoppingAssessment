
const express = require('express');
const app=express();
const allProducts=require('./routes/allProducts')
const helmet = require('helmet')
const mongoose = require('mongoose')
const login = require('./routes/login')
const addToCart = require('./routes/addToCart')

// const config = require('config')

//http secure header
app.use(helmet());

app.use(express.json())

app.use(express.static('public'));


//Port definition
const port = process.env.PORT || 3000
app.listen(port,()=>console.log(`listening on ${port}`));

//Connect to mongo
mongoose.connect('mongodb://localhost/ShoppingDB',{useNewUrlParser: true})
.then(()=>console.log('Connected to mongodb'));

app.use('/allProducts',allProducts);
app.use('/login',login)
app.use('/addToCart/',addToCart)

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    token:String
})
// const User = mongoose.model('User',userSchema);

// async function saveUser(){
// const loggedUser = new User({
// })
// const result = await loggedUser.save();
// console.log(result);
// }




// async function saveProduct(){
//     const newProduct = new Product({
//     })
//     const result = await newProduct.save();
//     console.log(result);
//     }
    // saveProduct();

// if(!config.get('jwtPrivateKey')){
//     console.error('JWT Not Defined');
//     process.exit(1)
// }


