const User = require('../models/User');
const joi = require('joi');
const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');


const validRoles = ['client', 'admin'];

// Joi schema for user validation
const userValidate = joi.object({
    nom: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    role: joi.string().valid(...validRoles)
  });



//   get all users
const showUserList = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users)
    } catch (error) {
      res.status(500).json(error.message);
    }
  };


//   get user details
  const showUserDetails = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).json({error:'User not found'});
      res.status(200).json(user)
    } catch (error) {
      res.status(500).json(error.message);
    }
  };

//   regester user
  const registerUser = async (req, res) => {
    try {
      const { error } = userValidate.validate(req.body);
      if (error) return res.status(400).json(error.details[0].message);
  
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) return res.status(400).json({existUser:'User already exists'});
  
      const salt = await bcrypt.genSalt(10);
      const hashpassword = await bcrypt.hash(req.body.password,salt)
      const newUser = new User({
        nom:req.body.nom,
        email:req.body.email,
        password:hashpassword,
      });
      await newUser.save();
      res.status(200).json({message:"added user successfuly"})

    } catch (error) {
      res.status(500).json(error.message);
    }
  };


//   delete user 
const deleteUserById = async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      if (!deletedUser) return res.status(404).json({error:'User not found'});
      
      res.status(200).json({message:"deleted user successfuly"})
    } catch (error) {
      res.status(500).json(error.message);
    }
  };


const loginUser = async (req,res)=>{
  const { email, password } = req.body;

  const finduser =  await User.findOne({email:email})
  const iduser= finduser._id;
  if(!finduser){
    return res.status(404).json({message:"user not found"})
  }

  if(!await bcrypt.compare(password ,finduser.password)){
    return res.status(400).json({message:"invalid password"})
  }
  const token = jwt.sign({_id:finduser._id},"secret")
  //  res.cookie('jwt',token)
  //  console.log(token);
  User.findByIdAndUpdate(iduser,{token:token})
    .then(result=>{
      return res.status(200).json(result)
      
    })
    .catch(err=>{
      console.log(err);
    })

}

const authonticatorUser = async (req,res)=>{

try{
      // const cooki = req.cookies.jwt;
      // const claims = jwt.verify(cooki,"secret")
      //  console.log(claims);
    //  if(!claims){
    //      return res.status(401).json({message:"unauthenticated"})

    //   }

    //   const findUser = await User.findOne({_id:claims._id})
    //   const {password , ...data} = findUser.toJSON()

    //   return res.status(200).json(data)
    return res.status(200).json({message:'nice one bro'})
    }catch(e){
      return res.status(401).json({message:"unauthenticated"})

    }
}

const logout = async (req,res)=>{
    res.cookie('jwt','',{maxAge:0})
    res.status(200).json({message:"removed token jwt"})

}


module.exports={
    showUserList,
    showUserDetails,
    registerUser,
    deleteUserById,
    loginUser,
    authonticatorUser,
    logout
    
}
