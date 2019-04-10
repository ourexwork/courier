const { User, userSchema } = require('../models/User');

const mongoose = require('mongoose')
const Fawn = require('fawn');
Fawn.init(mongoose);

const allUsers = async(req, res) => {
    const users = await User.find();
    if (users.length == 0) {
        res.send('No registered users available!');
    }
    res.send(users);
};

const getOneUser = async(req, res) => {
    const User = await User.findById(req.body._id);
    if (User) {
        res.send(User);
    }
    res.status(404).send({ error: "User does not Exist " });
};



module.exports = { allUsers, getOneUser };