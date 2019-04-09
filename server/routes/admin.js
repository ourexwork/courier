const express = require('express');
const router = express.Router();
const {
    getOneUser,
    allUsers
} = require('../controllers/admin');

const adminAuth = require('../middleware/authenticateUser');

//route to get all users
router.get('/getallusers', adminAuth, allUsers);

//route to get a particular user
router.get('/selected/:id', adminAuth, getOneUser);

//this route updates the shipment status to whatever


module.exports = router