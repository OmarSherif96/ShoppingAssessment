const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
// const config = require('config')
const userSchema = new mongoose.Schema({
    name:String,
    password:String,
    
})
userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this.id},'privateKey')
    console.log(jwt.verify(token,'privateKey'));
    
    return token;
}
const User = mongoose.model('User',userSchema,'Users');

module.exports = User
