const _ = require('lodash');
const mongoose = require('mongoose');
const Fawn = require('fawn');

const { validateShipment, Shipment } = require('../models/Shipment');
const { Payment } = require('../models/Payment');



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


        const newPayment = _.pick(req.body, ['sender']);

        //PaymentShipmentid should or maybe be done usind uuid in fron end


        const shipment = new Shipment({
            ...newShipment
        })

        const payment = new Payment({
            ...newPayment,
            shipment: shipment._id,
            amount: req.body.pricing
        });

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

module.exports = { saveShipment };