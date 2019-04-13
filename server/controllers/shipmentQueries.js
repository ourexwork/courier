const _ = require('lodash');
const mongoose = require('mongoose')
const Fawn = require('fawn');

const { Shipment, shipmentSchema, validateShipment } = require('../models/Shipment');
const { TransactionHistory } = require('../models/TransactionHistory');
const { User, userSchema } = require('../models/User');
const { Payment } = require('../models/Payment');




//this route updates a shipment status
const shipmentStatus = async(req, res) => {

    const shipmentStatus = await Shipment.findByIdAndUpdate(req.body._id, {
        shipmentStatus: req.body.shipmentStatus // 'processing'
    })
    if (shipmentSchema) {
        res.send({ message: `Shipment is ${req.body.shipmentStatus}` })
    } else {
        res.status(401).send({ error: "Shipment status is not updated" })
    }
}


// once shipment is picked up admin updates
const shipmentPickUp = async(req, res) => {
    //updates the shipment status as in transit from pending
    let shipment = await Shipment.findByIdAndUpdate(req.body._id, {
        shipmentStatus: 'in transit',
        pickUpDate: Date.now()
    })

    //when picked , checks if the user paid cash , if yes updates the payment status
    //note ,but if user paid online would have already been already been true
    if (shipment) {
        await shipment.save();
        if (shipment.paymentMethod == 'onPickUp') {
            let payment = await Payment.findOne({ _id: shipment.payment });
            payment.paymentStatus = true // asign true value cos sender must have paid on pickup
            await payment.save();
            res.send({ message: ` Shipment with id: ${shipment._id} is now in Transit ` });
        } else {
            res.status(401).send({ error: `Shipment done exist` })
        };


    };
};

//when item is delivered admin confirms on the app that user has gotten the item
//deletes from shipment table , moved to transaction history then transaction status delievred
const deliveredShipment = async(req, res) => {
    console.log(req.body._id)
    let shipment = await Shipment.findOne({ _id: req.body._id });
    let payment = await Payment.findById(shipment.payment);
    payment.status = true;
    await payment.save();
    shipment.shipmentStatus = 'delivered';
    shipment = await shipment.save();
    const transaction = new TransactionHistory({
        shipment,
        payment,
        status: 'delivered'
    });

    if (shipment) {
        new Fawn.Task()
            .remove('shipments', { _id: shipment._id })
            .remove('payments', { _id: payment._id })
            .save('transaction histories', transaction)
            .run();
        res.send({ "message": "shipment delivered" })
    } else {
        res.status(401).send({ error: `Shipment done exist` })
    };
};

//delete from shipment table and moved to transaction history, with status cancelled
const cancelShipment = async(req, res) => {

    let shipment = await Shipment.findOne({ _id: req.body._id });
    let payment = await Payment.findById(shipment.payment);
    shipment.shipmentStatus = 'cancelled';
    shipment = await shipment.save();
    const user = await User.findById(shipment.sender);
    const transaction = new TransactionHistory({
        shipment,
        payment,
        status: 'cancelled'
    });

    if (shipment) {
        new Fawn.Task()
            .remove('shipments', { _id: shipment._id })
            .remove('payments', { _id: payment._id })
            .save('transaction histories', transaction)
            .run();
        res.send({ "message": "shipment cancelled" });
    };
};


// fetch queries

//fetch all shipment for admin
const getAllShipment = async(req, res) => {
    // if user  is logged and is admin, although the middleware already checked
    if (req.user.isAdmin) {

        const shipments = await Shipment.find()
            .populate('sender', 'firstName , lastName email')
            .populate('payment', 'amount Date');
        res.send(shipments)
    };
};

const getLocation = require('../functions/getLocation');
const getDistance = require('../functions/getDistance');


// this controller enables the user to create a shipment
const getDistanceAndPrice = async(req, res) => {
    // if we have a user
    if (req.user) {
        // validate the request body
        const { error } = validateShipment(req.body);
        if (error) return res.status(400).send({ error: error.details[0].message });

        // pick all shipment properties from the request body
        const newShipment = _.pick(req.body, [
            'name',
            'description',
            'weight',
            'quantity',
            'shipmentMode'
        ]);
        // get address call the geo-location api and store into recent address
        try {
            const pickUpAddress = await getLocation(req.body.pickUpAddress);
            const deliveryAddress = await getLocation(req.body.deliveryAddress);

        } catch (error) {
            throw new Error
        }



        // const distance = getDistance(pickUpAddress.latitude, pickUpAddress.longitude,
        //     deliveryAddress.latitude, deliveryAddress.longitude);
        const distance = getDistance(6.644921099999999,
            3.2538432,
            6.6395206,
            3.478452);
        console.log(distance)
        if (pickUpAddress.country != deliveryAddress.country) {
            let pricing = (distance * req.body.weigth * req.body.quantity) + 1000;
        } else {
            pricing = distance * req.body.weight * req.body.quantity
        }


        // get the receiver's details
        const receiver = {
            name: req.body.receiverName,
            email: req.body.receiverEmail,
            phoneNumber: req.body.receiverPhoneNumber
        };

        // note adress is a schema of addresses
        // store the shipment in the database
        const shipment = new Shipment({
            ...newShipment,
            pickUpAddress,
            deliveryAddress,
            receiver,
            pricing,
            sender: req.user._id
        });

        // await shipment.save();

        res.send(shipment);

    };
};

const getOneShipment = async(req, res) => {
    if (req.user.isAdmin) {

        //the id of the shipment is coming form the form
        const shipment = await Shipment.findById(req.body._id)
            .populate('sender', 'firstName , lastName email')
            .populate('Payment', 'price Date')

        res.send(shipment);
    };

};

const getTrackedShipment = async(req, res) => {
    // if user  is logged , although the middleware already checked

    // const user = User.findById(req.user._id);

    const shipment = await Shipment.
    findOne({ _id: req.body._id })
        .select('-pickUpAddress -weight -deliveryAddress.latitude -deliveryAddress.longitude -deliveryAddress.state -deliveryAddress.country -receiver -sender -payment')
    if (shipment) {
        res.send(shipment);
    } else {
        res.status(401).send({ error: `Shipment does not exist` })
    }


};

// this controller enables the user to create a shipment and save to database
const saveShipment = async(req, res) => {
    // this controller enables the user to create a shipment

    // if we have a user
    if (req.user) {
        // validate the request body
        const { error } = validateShipment(req.body);
        if (error) return res.status(400).send({ error: error.details[0].message });

        const newShipment = _.pick(req.body, [
            'name',
            'description',
            'weight',
            'quantity',
            'shipmentMode',
            'pickUpAddress',
            'deliveryAddress',
            'receiver',
            'sender',
            // 'pricing'
        ]);


        const newPayment = _.pick(req.body, ['sender', 'paymentMethod']);

        //PaymentShipmentid should or maybe be done usind uuid in fron end


        const shipment = new Shipment({
            ...newShipment
        })


        const payment = new Payment({
            ...newPayment,
            shipment: shipment._id,
            amount: req.body.pricing,
            paymentStatus: (req.body.paymentMethod === 'online') ? true : false // checks if payment was already done online
        });

        if (req.body.paymentMethod === 'online')

            shipment.payment = payment._id;
        //  if uuid is unique in db do the follwing

        new Fawn.Task()
            .save('payments', payment)
            .save('shipments', shipment)
            .run();

        // await shipment.save()
    }
    res.send({ message: 'shipment saved!!' });
}


module.exports = {
    saveShipment,
    getTrackedShipment,
    getOneShipment,
    getDistanceAndPrice,
    getAllShipment,
    shipmentStatus,
    shipmentPickUp,
    cancelShipment,
    deliveredShipment
};