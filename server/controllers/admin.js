const { User, userSchema } = require('../models/User');
const { Shipment, shipmentSchema } = require('../models/Shipment');
const { Transaction } = require('../models/transactionHistory');
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
    const User = await User.findById(req.params.id);
    res.send(User);
}

const shipmentStatus = async(req, res) => {

    const shipmentStatus = await Shipment.findByIdAndDelete(req.body._id, {
        shipmentStatus: req.body.shipmentStatus
    })

    res.send({ message: `Shipment is ${req.body.shipmentStatus}` })
}

const shipmentPickUp = async(req, res) => {

    let shipment = await Shipment.findByIdAndUpdate(req.body._id, {

        pickUpDate: Date.now

    })

    if (shipment) {
        shipment.shipmentStatus = 'in transit';
        await shipment.save();
    }
    res.send({ message: ` Shipment with id: ${shipment._id} is now in Transit ` });

};

const cancelShipment = async(req, res) => {
    const shipment = Shipment.findById(req.body.shipment_id);

    const user = User.findById(shipment.sender._id);
    const transaction = new TransactionsHistory({
        user: new userSchema({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        }),
        shipment: new shipmentSchema({
            name: shipment.name,
            description: shipment.description,
            price: shipmeny.price

        })
    });

    if (shipment) {
        new Fawn.Task()
            .remove('shipment', { _id: shipment._id })

        .save('transaction histories', transaction)
            .run();
    }

}

module.exports = { allUsers, getOneUser, shipmentStatus, shipmentPickUp }