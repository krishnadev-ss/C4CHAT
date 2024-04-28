const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    picture:{type:String,default:null} ,
}, { timestamps: true });

const User = mongoose.model("message", userSchema);
module.exports = User;