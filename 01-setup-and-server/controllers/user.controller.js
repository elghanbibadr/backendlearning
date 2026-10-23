const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");
const _=require("lodash")
const User = require("../models/user.models");

exports.registerUser = async (req, res) => {
   const { email,password } = req.body;

   if(!email || !password)return res.status(404).send({message:'email or password required'})
     

    // check if user already registered
    let user=await User.findOne({email})
    if(user)return res.status(400).send({message:'user already registred'});

    // hashing password 
    const passwordHash = await bcrypt.hash(password, 10);
    user=new User({email, password: passwordHash})
        
     await user.save()
    
     return res.send( _.pick(user,["_id","email"]))
    
};
