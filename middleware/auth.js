const jwt = require('jsonwebtoken')
// const login = require('../routes/login')
const User = require('../models/user')
async function auth(req,res,next){
    const token = req.header('x-auth-token')
    const decoded = jwt.verify(token,'privateKey')
    const user =  await User.findOne({_id:decoded._id})
    if(user){
    next()
    }
    else{
        res.send("Token fail")
    }
}
module.exports=auth