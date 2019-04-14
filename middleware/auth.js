const jwt = require('jsonwebtoken')
// const login = require('../routes/login')
const User = require('../models/user')
async function auth(req,res,next){
    const token = req.header('x-auth-token')
    if(!token) res.send('Access Denied')
    try{
    const decoded = jwt.verify(token,'privateKey')
    const user =  await User.findOne({_id:decoded._id})
    
    next()
    }
    catch (e){
        res.send("Token fail")
    }
}
module.exports=auth