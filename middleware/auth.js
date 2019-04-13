const jwt = require('jsonwebtoken')
// const login = require('../routes/login')
const generateAuthToken = require('../models/user')
function auth(req,res,next){
    const token = generateAuthToken();
    
    console.log(token+" DA el user");

    
    // login.get('token')
    // const decoded = jwt.verify(token,login.token)
    // req.user = decoded;
    next()
    
    

}
module.exports=auth