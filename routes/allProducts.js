const Product = require('../models/product');
const express = require('express');
const auth = require('../middleware/auth')
const router = express.Router();
router.get('/',auth, async (req,res)=>{
        const products = await Product.find();
        console.log(products);
        res.send(products)
})

module.exports = router;