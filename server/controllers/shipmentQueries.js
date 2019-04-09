const { Shipment, shipmentSchema } = require('../models/Shipment');
const { TransactionHistory } = require('../models/TransactionHistory');
const { User, userSchema } = require('../models/User');
const { Payment } = require('../models/Payment');


const mongoose = require('mongoose')
const Fawn = require('fawn');

const shipmentStatus = async(req, res) => {

    const shipmentStatus = await Shipment.findByIdAndUpdate(req.body._id, {
        shipmentStatus: 'processing'
    })

    res.send({ message: `Shipment is processing` })
}

// const shipmentPickUp = async(req, res) => {

//     let shipment = await Shipment.findByIdAndUpdate(req.body._id, {

//         pickUpDate: Date.now()

//     })
//     if (shipment) {
//         shipment.shipmentStatus = 'in transit';
//         await shipment.save();
//         let payment = await Payment.findOne({ _id: shipment.payment });
//         console.log(payment)
//         console.log(payment.paymentStatus = true);
//         await payment.save()


//         res.send({ message: ` Shipment with id: ${shipment._id} is now in Transit ` });
//     }
// };

const shipmentPickUp = async(req, res) => {

    let shipment = await Shipment.findByIdAndUpdate(req.body._id, {

        pickUpDate: Date.now()

    })
    if (shipment) {
        shipment.shipmentStatus = 'in transit';
        await shipment.save();
        let payment = await Payment.findOne({ _id: shipment.payment });
        console.log(payment)
        console.log(payment.paymentStatus = true);
        await payment.save()


        res.send({ message: ` Shipment with id: ${shipment._id} is now in Transit ` });
    }
};

const deliveredShipment = async(req, res) => {
    console.log(req.body._id)
    const shipment = await Shipment.findOne({ _id: req.body._id });

    const user = await User.findById(shipment.sender);
    const transaction = new TransactionHistory({
        user: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber
        },
        shipment,
        status: 'delivered'

    });

    console.log(shipment)

    if (shipment) {
        new Fawn.Task()
            // .remove('shipments', { _id: shipment._id })

        .save('transaction histories', transaction)
            .run();
        res.send({ "message": "shipment delivered" })
    }




}

const cancelShipment = async(req, res) => {
    console.log(req.body._id)
    const shipment = await Shipment.findOne({ _id: req.body._id });

    const user = await User.findById(shipment.sender);
    const transaction = new TransactionHistory({
        user: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber
        },
        shipment,
        status: 'cancelled'

    });




    console.log(shipment)

    if (shipment) {
        new Fawn.Task()
            // .remove('shipments', { _id: shipment._id })

        .save('transaction histories', transaction)
            .run();
        res.send({ "message": "shipment cancelled" })
    }




}

module.exports = { shipmentStatus, shipmentPickUp, cancelShipment, deliveredShipment }