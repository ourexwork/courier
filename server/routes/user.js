const express = require('express');
const router = express.Router();
const {
    registerUser,
    confirmUser,
    loginUser,
    currentUser,
    editUser,
    allUsers
} = require('../controllers/user');

const authenticateUser = require('../middleware/authenticateUser');


//  route to register user
router.post('/register', registerUser);

//route to confirm user
router.get('/confirmation/:token', confirmUser);

// login the user
router.post('/login', loginUser);

// get the current user
router.get('/me', authenticateUser, currentUser);

// route to edit user profile
router.put('/edit/:id', authenticateUser, editUser);



module.exports = router;