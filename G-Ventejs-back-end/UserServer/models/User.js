const mongoose = require('mongoose');

const validRoles = ['client', 'admin'];


const UserSchema = new mongoose.Schema({
    nom: { 
        type: String,
         required: true
    },
    email: { 
        type: String,
        required: true,
        unique: true
     },
    password: { 
        type: String,
        required: true
     },
    photo: { 
        type: String
     },

    role: { 
        type: String,
        enum: validRoles,
        default: 'client' 
    },
    token:{
        type: String,
        default: '0' 
    }
  });
  
  const User = mongoose.model('User', UserSchema);
  
  module.exports = User;