const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')
const cors = require('cors');

// CORS middleware 
router.use(cors({
    credentials:true
}));

// Show user list
router.get('/', UserController.showUserList);

// Register a new user
router.post('/create', UserController.registerUser);

// login user
router.post('/login',UserController.loginUser)

router.get('/authuser',UserController.authonticatorUser)

router.post('/logout',UserController.logout)

// Show user details
router.get('/:id', UserController.showUserDetails);

// Delete user by ID
router.delete('/delete/:id', UserController.deleteUserById);


module.exports = router;
