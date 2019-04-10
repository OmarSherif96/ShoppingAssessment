const products = require('../models/products');
const express = require('express');
const router = express.Router();
router.get('/',(req,res)=>{
    res.send([products
])
})
router.get('/:id',(req,res) => {
    const product = products[req.params.id]
    if(!product){
    res.status(404).send("not found")
    }
    else{
    res.send(product)
    }
    })
module.exports = router;