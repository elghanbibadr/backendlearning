const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");
const jwt=require('jsonwebtoken')
const config=require('config')

const _ = require("lodash");
const User = require("../models/user.models");

exports.registerUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(404).send({ message: "email or password required" });

  // check if user already registered
  let user = await User.findOne({ email });
  if (user) return res.status(400).send({ message: "user already registred" });

  // hashing password
  const hashedPassword = await bcrypt.hash(password, 10);
  user = new User({ email, hashedPassword });

  await user.save();

  return res.send(_.pick(user, ["_id", "email"]));
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).send({ message: "email or password required" });
  //find user by email
  let user = await User.findOne({ email });
  if (!user) return res.status(401).send({ message: "Unauthorized" });
  const validPassword = await bcrypt.compare(password, user.hashedPassword);
  if(!validPassword)return res.status(401).send({message:"invalid email or password"});
  // login user
  const token=jwt.sign({_id:user._id},config.get("jwtPrivateKey"))
  return res.send(token);
};
