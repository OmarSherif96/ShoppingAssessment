const User = require('../models/user')
const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router();
router.post('/',async (req,res)=>{
    const ab = [];
    const user = await User.findOne({name:req.body.name,password:req.body.password})
    if(user){   
    const token = user.generateAuthToken();
    res.header('x-auth-token',token).send(user)
    }
    else {
        res.send("False Login")
    }
})
module.exports=router
// module.exports=user
