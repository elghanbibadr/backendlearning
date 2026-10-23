const { default: mongoose } = require("mongoose");
const User = require("../models/user.models");

exports.registerUser = async (req, res) => {
   const { email,password } = req.query;
    
};
