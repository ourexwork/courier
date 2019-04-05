const express = require('express');
const router = express.Router();
const _ = require('lodash');
const adminAuth = require('../middleware/authenticateUser');
const { Shipment } = require('../models/Shipment');
const { Validate, User, loginValidate, } = require('../models/user');


//route to get all users
router.get('/', adminAuth, async(req, res) => {
    const users = await User.find();
    if (users.length == 0) {
        res.send('No registered users available!');
    }
    res.send(users);
});

//route to get a particular user
router.get('/selected/:id', adminAuth, async(req, res) => {
    const User = await User.findById(req.params.id);
    res.send(User);
});