const express = require('express');
const Product = require('../models/product');
const auth = require('../middleware/auth')
const router = express.Router();
router.post('/',async (req,res)=>{
    
var products =[];

 await req.body["products"].forEach( async (addedProduct) => {
     const product =  await Product.findByIdAndUpdate(addedProduct.id);
                await products.push(product)
                
   });
   await res.send(products)
  
});
// console.log(req.body);


// })

module.exports = router;